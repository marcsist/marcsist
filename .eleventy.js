const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");

const OUTPUT_DIR = "build"; // single source of truth — also used in dir.output

const IMAGE_OPTIONS = {
  widths: [400, 1200],
  formats: ["webp", "jpeg"],
  outputDir: `./${OUTPUT_DIR}/img/`,
  urlPath: "/img/",
  sharpOptions: {
    jpeg: { quality: 85 },
  },
  cacheOptions: { duration: "1d", directory: ".cache" },
};

// Image shortcode for the gallery page
// eager=true skips loading="lazy" for above-the-fold images (first 6 cells)
async function imageShortcode(src, alt, eager = false) {
  const metadata = await Image(src, IMAGE_OPTIONS);
  const thumb    = metadata.jpeg[0];
  const thumbWebp = metadata.webp[0];
  const fullWebp  = metadata.webp[1] || metadata.webp[0];
  const loading   = eager ? "eager" : "lazy";
  return `<picture>
    <source srcset="${thumbWebp.url}" type="image/webp">
    <img src="${thumb.url}"
         alt="${alt}"
         width="${thumb.width}"
         height="${thumb.height}"
         loading="${loading}"
         decoding="async"
         data-full="${fullWebp.url}">
  </picture>`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  
  /*
  From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
  const seo = require("./src/seo.json");
  if (seo.url === "glitch-default") {
    seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  }
  eleventyConfig.addPlugin(pluginSEO, seo);

  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  /**
   https://github.com/11ty/eleventy-base-blog/pull/34
   https://www.browsersync.io/docs/options#option-ghostMode
   
   Noticed by @clottman - we do NOT want to be transmitting the full browsersync
   to all users. I 
  */
  
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  eleventyConfig.addTransform("image-groups", function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;

    return content.replace(
      /((?:<p><img[^>]*>\s*<\/p>\s*){2,})/g,
      (run) => {
        const paras = run.match(/<p><img[^>]*>\s*<\/p>/g) || [];
        let result = '';
        for (let i = 0; i < paras.length; i += 3) {
          const group = paras.slice(i, i + 3);
          result += `<div class="image-row image-row--${group.length}">${group.join('')}</div>`;
        }
        return result;
      }
    );
  });

  /*
   * Async transform: replace <img src="/public/things/..."> with optimized <picture> elements.
   * Runs after image-groups so the grouping divs are already in place.
   * Source images remain in public/things/ (passthrough-copied as dead files until cleaned up —
   * see TODOS.md). Browsers use the optimized /img/ paths from srcset.
   *
   * Data flow:
   *   <img src="/public/things/foo/bar.png">
   *      → Image() → build/img/hash-400w.webp + hash-1200w.webp
   *      → <picture><source ...><img src="hash-400w.webp" data-full="hash-1200w.webp"></picture>
   */
  eleventyConfig.addTransform("optimize-images", async function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;

    const imgRegex = /<img([^>]*?)src="(\/public\/things\/[^"]+)"([^>]*?)>/g;
    const matches = [];
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
      matches.push({ full: match[0], src: "." + match[2], attrs: match[1] + match[3] });
    }

    for (const item of matches) {
      try {
        const metadata = await Image(item.src, IMAGE_OPTIONS);
        const thumb    = metadata.jpeg[0];
        const thumbWebp = metadata.webp[0];
        const fullWebp  = metadata.webp[1] || metadata.webp[0];
        const altMatch  = /alt="([^"]*)"/.exec(item.attrs);
        const alt       = altMatch ? altMatch[1] : "";
        const picture   = `<picture>
    <source srcset="${thumbWebp.url}" type="image/webp">
    <img src="${thumb.url}"
         alt="${alt}"
         width="${thumb.width}"
         height="${thumb.height}"
         loading="lazy"
         decoding="async"
         data-full="${fullWebp.url}">
  </picture>`;
        content = content.replace(item.full, picture);
      } catch (_) {
        // Source file missing: leave original <img> in place rather than breaking the build.
        // Gallery images use the shortcode which hard-fails; transforms are more lenient.
      }
    }
    return content;
  });
  
  /*
  From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426 
  
  Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
  */
  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("posts");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: OUTPUT_DIR
    }
  };
};

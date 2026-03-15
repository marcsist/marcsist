---
title: Reports Section
description: Rebuilding a data analytics platform around a BI tool to speed up iteration and accommodate future development with modular page templates.
link: /things/reports-section/
date: 2019-08-01
category: software
tags: [things]
layout: layouts/thing.njk
chiptype: primary
---

![](/public/things/reports-section/reports_section_-transparent.png)

## Challenges

- Gap between Professional Services reports and Engineering output in the platform
- Professional Services had reached the limitations of their existing toolset
- Tab and table syndrome - every new metric was being delivered to customers as either a new table on existing tabs, or as a new tab complete with more tables and graphs.
- Misaligned UX for graphs created natively in the BI tool vs. what had already been built.

## Outcome

- Integrated a BI tool into the web platform to close the gap between what PS was showing customers and what was in the platform. Leverage the available functionality.
- A delivery mechanism for custom and one off reports previously delivered as PDFs
- Allowing for new views across multiple projects in an insight focused unified interface
- Went from 5 tabs with countless tables to a 2 page template design that can house countless reports.
- Free up engineering capacity from playing front end keep-up to focusing on adding value through new backend processes and metrics
    - PS requests became invasive to the product roadmap. Their ability to iterate quickly and put metrics in front of customers (hand-weeded using Excel) made us beholden to deliver that feature in product.
    - By the time it was released, customers were interested in the next big thing.

### Phase 1

![Reports - a white label embed](/public/things/reports-section/Screenshot_2019-10-08_18.16.48.png)

Reports - a white label embed

![Reports with additional CSS and generic filters](/public/things/reports-section/Sema_Reports.png)

Reports with additional CSS and generic filters

Adding the first report. In order to test the functionality of a BI tool integration we added a single tab which took users to the *Reports* page. This page was a single page white-label embedded of a Mode Analytics report. Each user saw the same report, showing data from within their organization. This feature launched with a single report drawn from a new data lake which was populated by data synced from Sema's database, as well as a script generated csv that Professional Services generated.

Over the next few months, the report continued to grow — numerous graphs and queries, a sidebar for report navigation, and tooltips — all with minimal engineering resources. The page was extended in collaboration between professional services (who were now preparing custom reports in the same BI tool) and the product & design team (just me). I added queries and styled the report using the theming and html/css editor native to the BI tool. The embedded reports and data lake proved a big win as engineering resources were limited and precious. It became the most visited page, had the highest engagement, and user feedback was clear — more of *this*.

### Phase 2

Engineering, Product and Professional Services all agreed on the success of this integration, but we began to notice a few issues;

- Slow loading - with so many queries in on report, load times were suffering
- Long scrolling page was hard to for users to navigate. On our end the CSS navigation required some finesse each time new reports were added
- The filter panel that came out of the box with the BI tool was becoming convoluted, and it was a challenge to maintain interactivity across the many graphs
    - ie. not all data could be filtered to a date range, but we lacked the ability to indicate where fitlers were and were not applied
- Inconsistent filtering experiences in the reports vs existing functionality
- Discrepancies in data — usually caused by one of 2 issues
    - Replicating calculations in SQL which didn't always match the scripts or backend processes customers
    - A time delay between the live database powering the core platform and the delayed sync to the data lake feeding reports.
- Can't save filters, share report views, or deliver custom reports to individual users or organizations — future functionality we know users expected.

Because of the positive traction of technical due diligence and health checks, our engineering team was working to generate all metrics required for reports in the database - making these a pushbutton effort for analysts, and eliminating the use of scripts and CSVs. We couldn't add all these reports to a single page while being performant and improving user experience.

## An opportunity to simplify

From a product and design outlook, we could see a never ending game of catch up (adding report metrics to core platform each time a new report or metric was generated) and more fragmentation between what users saw from analysts and in reports. The current UI just wasn't suited to adapt to the numerous new reports, nor the other major functionality to follow.

This is where lightning struck — a chance to clear house, simplifying the product experience, reducing maintenance and maximizing the use of the integrated BI tool.

### Less, but more agile

We had a chance to replace all the current navigation pages (3 top level, 5 sub-pages + project selector) with 3 functional areas;

- Reports section — a page where all available reports are listed
- Report template — the page where an individual report is embedded
- Filters — modular dropdown selector inputs contextual to the current report

This was a sort of elegant solution providing an **improved interaction with existing functionality** and a clean slate for broader product updates beyond reporting. By tightening the integration with the BI tool, we would see some tremendous benefits with less engineering effort.

But getting there with some grand redesign wasn't feasible, and we had to figure out an approach to a smooth transition.

1. Break out the current report into individual reports
2. Replace the current report with Reports section & white label embeds in the template
3. Replicate all the other current pages in the BI tool. This can be done by analysts and PS and doesn't take away from engineering capacity
4. Migrate all current pages into the updated Reports section
5. Add all sorts of new functionality we've unblocked in a new unified experience

![Reports section - lower effort](/public/things/reports-section/reports_section.png)

Reports section - lower effort

![Report template - lower effort](/public/things/reports-section/Report_Template.png)

Report template - lower effort

![Filters - lower effort](/public/things/reports-section/filter_parameters.png)

Filters - lower effort

Shown above is a iterative and lean implementation's first step. It was designed to replace to current Reports v1 as quickly as possible, while keeping original nav pages in place as we replicated the reports in the BI tool and migrated them to the Reports section.

The next screens show an example of what that reports page could become. This included functionality that was further down the roadmap, contextual suggestions and the ability to order a new custom report from within the web app itself. The reports template and filter in the future version would make the most of what's already built.

![Reports section](/public/things/reports-section/dribb-reports_section.png)

Reports section

![Report template & Filters](/public/things/reports-section/dribb-reports_template.png)

Report template & Filters

Sema has a lot of unique terminology, some of it coined by our team, some borrowed from academia. We spend a fair amount of time explaining these terms, pointing users to the glossary, and these really brilliant people always needed refreshing. Even our own analysts and customer success team could get things twisters, so we decided renaming the report with the question it answers would help everybody to understand what they were supposed to be seeing. This is also helpful for sales demos and onboarding new people internally.

### Additional Benefits

- Cross-repository analytics — adding new functionality in fewer screens and a unified experience
- The ability to deliver custom & one-off reporting to customers
    - Custom dashboards (codesigned with client and professional services)
    - Interval reporting ("Sema Code Quality Health Check" & "Sema Technical Due Diligence")

Sema Software is bringing transparency to software development with new and established metrics for people, process and code.  Serving organizations and fortune 500 companies, they offer professional services — individualized regular reporting, technical due diligence reports and recommendations catered to the client, paired with a web platform.

### Future proof design

- By implementing our own filter UI (as opposed to the one built into Mode Analytics) we unblock all sorts of new functionality from our roadmap that serves users;
    - collect usage analytics that weren't possible in the v1 long-report design
    - save and share filtered views and reports within a user account or across client organization
    - use the PDF output functionality of the BI tool for one-time or scheduled output
    - give us a control layer over grouping functionality (repositories → projects, people → teams)
- Deliver interactive ad-hoc reports, Health Checks and Due Diligence to customers through the web app. An improvement over reports compiled in Word and delivered as a PDF.  This delivery could happen without involving engineering and outside of the release cycle.
- Cross-project views and comparison that wasn't available in the core product
- All graphing and tables would come from the BI tool, which allows us to delete a significant amount of legacy code, reduce package size by removing redundant dependencies

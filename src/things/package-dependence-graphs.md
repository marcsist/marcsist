---
title: Package Dependence Graphs
description: Interactive package visualized for object-oriented code
link: /things/package-dependence-graphs/
date: 2019-07-01
tags: [things]
layout: layouts/thing.njk
---

The Dependency Graph is an interactive code visualization for browsing package references in object-oriented languages.

![](/public/things/package-dependence-graphs/Screenshot_2019-10-15_15.18.04.png)

![](/public/things/package-dependence-graphs/Dependence_(2).png)

This feature was useful to architects and engineering leaders getting familiar with new-to-them codebases (usually an incoming leader or acquisition) as a means to view package dependencies and work through code.

The original implementation was created by the same engineer who built the backend engine that generated the json file. It lauched with the initial web app to intrigue architects and show the level of detail our engine parsed the code. It was a static GraphViz DOT chart with some color indicating number of dependencies. This was efficient but scaled poorly, sized nodes in a way that was easy to misunderstand, and with especially complex code, had a tendency to be an overwhelming beast of a graph.

I collaborated directly with Kanikar, a full stack engineer with solid D3.js experience, and made use of our internal engineers and developers, as well as user interviews from customers and prospects.

The primary use cases:

- Customers with messy, complex codebases. Our data let them visualize the complexity of the code base they were working to reduce
- Incoming or acquiring tech leadership. Architects, Eng. managers and  CTOs would use the visual method to come up to speed on a new (or legacy) codebase and figure out how it was all connected
- Migrating out a dependency. Once a decision is made to remove some part of code, a quick intuitive way to check on progress without digging into code.

### Version 1

The initial launch was the implementation of D3.js graphs to replace the DOT graph. We chose a force-directed network graph to lay out the complex codebases without overlaps, which was visually familiar to the original graph, and a treemap which allowed for a more at-a-glance view of the information suitable for dashboards.

We implemented it using a default color scheme from D3.js and it was visually not a great fit with the page, and since the colors always changed it was confusing to customers. It was something we expected to change, but due to other engineering constraints put off for a bit longer than we would have liked. I don't even have any screenshots of this component, but it looked similar to this IKEA fabric.

<!-- TODO: missing image: Untitled.png -->

SOMMAR by Ida Pettersson - IKEA 2018

### Version 2

![Building a mini-roadmap for the dependence graph experience](/public/things/package-dependence-graphs/sema-sketches_(2_of_10).jpg)

Building a mini-roadmap for the dependence graph experience

![Treemap](/public/things/package-dependence-graphs/dependence-screen_(3).png)

Treemap

![Force-directed layout Network Graph](/public/things/package-dependence-graphs/Dependence_(1).png)

Force-directed layout Network Graph

Despite the insano colors, the feature it was pretty well liked. We had customers who printed it out to track progress. Cool to hear, but as a designer and product manager that felt like a failure because they weren't getting more of the team into the platform regularly. We carved out a month to work iteratively on an updated and more interactive dependence graph experience.

- Updated the text layout and node color to be more legible. We replaced all the crazy colors with blue and customers appreciated the 10x visual harmony it brought to the screen

![layout for package name & number of references](/public/things/package-dependence-graphs/Treemap_tile.png)

layout for package name & number of references

![All tiles turned blue](/public/things/package-dependence-graphs/all_blue_tiles.png)

All tiles turned blue

- Added a clear title that changed when you hovered over a package "from: package.name → ..." which was more semantic and helped users understand what they were looking at
- Users could switch between Treemap and Network Graph views without losing the node they selected. This required bypassing the standard redraw of the D3.js graph.
- A context menu gave users the ability to color code packages (across both graphs)
- Added the ability to toggle between incoming and outgoing dependencies. Previously graph only showed outgoing .
- Added a toggle to display the package name that normally only appears on hover
- The ability to save off a .PNG file
- Added search functionality to locate a single package - especially useful in really complex code bases

![Components for handoff](/public/things/package-dependence-graphs/components_for_handoff.png)

Components for handoff

![Treemap menu](/public/things/package-dependence-graphs/dependence-screen_(1).png)

Treemap menu

![Some features were only available in the Network Graph](/public/things/package-dependence-graphs/dependence-screen_(2).png)

Some features were only available in the Network Graph

![Color picker was a right-click context menu](/public/things/package-dependence-graphs/dependence-screen_(4).png)

Color picker was a right-click context menu

### Table View

![table view mockup](/public/things/package-dependence-graphs/treemap_with_400px_table.png)

table view mockup

Interactive data visualizations are a great way to explore data, but clicking through each individual node to piece the data together was tedious. I organized the data in a tabular form and spec'd out the design using *ag-grid,* an angular table framework we already had implemented in the product.

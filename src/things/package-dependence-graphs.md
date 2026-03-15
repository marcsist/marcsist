---
title: Package Dependence Graphs
description: Interactive package visualizer for object-oriented code
link: /things/package-dependence-graphs/
date: 2019-07-01
category: software
tags: [things]
layout: layouts/thing.njk
---

The Dependency Graph is an interactive code visualization for browsing package references in object-oriented languages.

![](/public/things/package-dependence-graphs/Screenshot_2019-10-15_15.18.04.png)

![](/public/things/package-dependence-graphs/Dependence_(2).png)

This feature was useful to architects and engineering leaders getting familiar with new-to-them codebases (usually an incoming leader or acquisition) as a means to view package dependencies and work through code.

The original was a static GraphViz DOT chart built by the same engineer who wrote the backend engine. It launched with the web app to show architects the depth of our code parsing. Efficient, but it scaled poorly — node sizing was easy to misunderstand and complex codebases turned into an overwhelming beast of a graph.

I partnered with Kanikar, a full stack engineer with solid D3.js experience, drawing on internal engineering input and customer interviews.

The primary use cases:

- Customers with messy, complex codebases. Our data let them visualize the complexity of the code base they were working to reduce
- Incoming or acquiring tech leadership. Architects, Eng. managers and  CTOs would use the visual method to come up to speed on a new (or legacy) codebase and figure out how it was all connected
- Migrating out a dependency. Once a decision is made to remove some part of code, a quick intuitive way to check on progress without digging into code.

### Version 1

The initial launch was the implementation of D3.js graphs to replace the DOT graph. We chose a force-directed network graph to lay out the complex codebases without overlaps, which was visually familiar to the original graph, and a treemap which allowed for a more at-a-glance view of the information suitable for dashboards.

We shipped it with the default D3.js color scheme, which clashed with the page and confused customers since the colors shifted each time. We knew it needed to change but engineering constraints pushed it down the list. I don't even have screenshots — but it looked something like this IKEA fabric.

<!-- TODO: missing image: Untitled.png -->

SOMMAR by Ida Pettersson - IKEA 2018

### Version 2

![Building a mini-roadmap for the dependence graph experience](/public/things/package-dependence-graphs/sema-sketches_(2_of_10).jpg)

Building a mini-roadmap for the dependence graph experience

![Treemap](/public/things/package-dependence-graphs/dependence-screen_(3).png)

Treemap

![Force-directed layout Network Graph](/public/things/package-dependence-graphs/Dependence_(1).png)

Force-directed layout Network Graph

Despite the wild colors, customers liked it. Some even printed graphs to track progress — which was flattering until I realized it meant they weren't using the platform regularly. That insight drove us to carve out a month for a more interactive dependence graph experience.

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

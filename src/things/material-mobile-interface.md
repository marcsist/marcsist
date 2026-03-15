---
title: Material mobile interface
description: A list-centric material makeover for the Sema platform
link: /things/material-mobile-interface/
date: 2019-06-01
category: software
tags: [things]
layout: layouts/thing.njk
---

A prototype build to show a new functional approach to the product accomplished in stock UI component glory.

It was pretty clear from early days that Sema had a pretty complex product. The product UI was quite limiting and it seemed that each new feature would be bolted on as another graph or chart, require a redesign of a standalone page, or have our engineers add yet another tab to the navigation. It was a mess of design debt accumulated as we focused on features and functionality to satisfy competing user personas.

With the completion of requirements in the Reports Section finished, the entire product experience up to this point would be tucked in to a single tab. The original product, as it turns out, is mostly reports, and the level of drilldown functionality we were building was still an open question.

![The new UI V1 could ship with Reports only](/public/things/material-mobile-interface/Home_screen_-_reports_only.png)

The new UI V1 could ship with Reports only

![Layed it all out in Miro and got input from all teams](/public/things/material-mobile-interface/Screenshot_2019-10-14_11.28.02.png)

Layed it all out in Miro and got input from all teams

We had an exhaustive mapping of all of the data our backend could pull from supported and partially supported code bases, then brainstormed what questions we could answer;

- about a developer?
- about a team?
- about a commit?
- about a file?
- about a repository?
- about a language or filetype?

I knew a simple UI made of lists and textual data would be easier in the long run to scale and iterate on so I took a small handful of material specs and got to work. Because of resource constraints in engineering, the goal was to accomplish a very contextual and clickable experience without any visual fluff or interactive graphs. This would be a much more intuitive way to explore the onion-layers of information previously abstracted away behind reports in the product.

### Home Page

**People commiting code**. At a high level, that's what Sema is looking at. It's difficult to seperate them, since when you talk about code, it's a reflection of who wrote it (and who can fix it) and vice versa— people's data is tied to the code they write.

Our navigation reflects how you step into the information;

- Reports — this is where you go to see high level graphs and custom reports that have been delivered by the professional services team. The entire current platform would fit into here
- Code — this is the technical journey for users looking at code quality, architecture, and the work to clean up their code base
- People — this is for managers looking at their teams productivity, progress against coaching goals, and work across codebases

![Home screen](/public/things/material-mobile-interface/Home_screen.png)

Home screen

The beneath these are two sections for other pages (whether it's a repository or a single line change, an offshore team or an individual)

- Starred — where users have starred important items they frequently visit - current initiatives or direct reports
- Recent — pages that have been recently visited

### **Reports**

A list of available reports, with the ability to star favorites or interesting reports. Each report would be rendered either as a white-label embed iframe from our BI tool or one of our home baked interactive visualizations. Filters would be passed through with a filter panel. This allows white-label filtering and home-baked filtering to function similarly, and gives us a layer to do further grouping on top of the data (ie. grouping people into teams, repositories into projects)

![](/public/things/material-mobile-interface/material_-_reports.png)

### **Code**

Stepping into the data through the lens of code, users would see a list of active projects and repositories tied to their account. They can quickly land on a homepage for that repo or project, and within that use tab navigation to see a list of contributors, files, or tech debt items.

![](/public/things/material-mobile-interface/material_-_code.png)

### People

From the managers journey, this would often make the most sense. Quick access to a list of contributors in the organization, and the ability to group them into teams.

A team or individual page would surface key information about activity, expertise, and their impact on code. Tabs could have a spot for coaching goals which the system monitors against, or tasks that have been chosen by Sema or the manager to help reach the goals.

![](/public/things/material-mobile-interface/material_-_people.png)

### Commit

This granular unit ties together people and code (people **commiting** code) and is where a user would drill down to figure out what went wrong, or why this code impacted the overall code quality or technical debt to a noticeable extent.

![](/public/things/material-mobile-interface/material_-_commit.png)

[an explainer prototype (not fully interactive)](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUFFsouN5OzRO0M1A81eHyd%2Fmobile-list-Copy%3Fnode-id%3D158%253A4334%26viewport%3D387%252C177%252C0.14655736088752747%26scaling%3Dscale-down)

an explainer prototype (not fully interactive)

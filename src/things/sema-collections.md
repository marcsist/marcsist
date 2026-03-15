---
title: Building an iteration engine with Collections
description: An exploratory prototype imagining a new core product experience for the Sema Code Quality Platform — an actionable layer to increase user engagement and drive insights from technical debt data.
link: /things/sema-collections/
date: 2019-11-01
category: software
tags: [things]
layout: layouts/thing.njk
chiptype: primary
---

![Building an iteration engine with Collections — Sema platform hotspots view](/public/things/sema-collections/platform-hotspots-view.png)

### Challenges

- The web app had poor daily usage. Users found our metrics useful, and engaged with the regular reporting but struggled to find actionable insights in the tables and graphs
- Generate actionable insights from the data
- Give users a reason to engage regularly
- More user input to feed product development

### Outcomes

- Prototype showcasing a significant reorganization of the current web app and added functionality
- Consolidate current pages into a Reports section
- A mechanism for collecting and tracking team efforts against technical debt issues
- Reduce complex suite of metrics to a single score, Technical Debt ($), that can be shared between technical and business teams

---

## Finding objectively problematic code

With all the metrics we presented, users couldn't clearly see where to begin or what was important. The file-level metrics were displayed across numerous columns of a table. Subjective ranges of different metrics was hard to ground users understanding in.

We were developing two subsequent bodies of work — Technical Debt ($) which we had developed and launched in product, and Hotspots which research had developed. Brendan, a founding scientist at Sema, created a defensible aggregate metric called hotspots to identify the most problematic file. It answers a question overwhelmed customers would commonly ask: *so... what should I fix first?*

I mocked a prototype database in Notion using data from the hotspots research output. Instead of the quantitative abstract number, I tied the 'hotspot' ranking to a dollar value — Technical Debt ($) — something we had already quantified and built in the product that resonated with users.

![Progressive disclosure of a simplified view displaying a single weighted aggregate metric score for each file, hiding other layers of detail away. (Notion prototype)](/public/things/sema-collections/notion-prototype-hotspots.png)

Progressive disclosure of a simplified view displaying a single weighted aggregate metric score for each file, hiding other layers of detail away. (Notion prototype)

![A semantic stepper dialogue to set repository-specific priorities (weighting) so users don't have to understand the weighting themselves, increasing confident adoption of the product (typeform prototype)](/public/things/sema-collections/typeform-prototype-stepper.png)

A semantic stepper dialogue to set repository-specific priorities (weighting) so users don't have to understand the weighting themselves, increasing confident adoption of the product (typeform prototype)

Users could look through a list of files scored based on repo-specific priorities. Setting priorities was done on a call with Professional Services, but here I showed the process as a stepper for repeatability.

Below the list of Hotspots, I created a database called Collections. An engineering manager using our platform might say "we want to clean up all the duplicate code, it's a big source of technical debt and slows us down" and create a collection of the top files with duplicates that they're willing to work on at that time. They could assign out that collection to a team or user, or just strategically work it into sprints.

**Takeaways**
- Leveraged an existing metric Technical Debt ($) by merging two bodies of work
- Decided to prioritize Technical Debt ($) as the key indicator of code base health
- First prototype showing Collections

## The case for Collections

Sema's web app measures dozens of metrics from client code and displays that data with graphs and tables. Without key tasks for users to complete, in-site analytics didn't have many decisive events to pick up.

We had failed to build a feedback mechanism that supports user-driven product roadmapping. Prospects and paying users were intrigued, but unclear on how the analytics were actionable.

![Sema platform showing Technical Debt ($) file list](/public/things/sema-collections/platform-tech-debt-list.png)

## Look but don't touch

The product had a list of files and the Technical Debt ($) value which toggled to show an itemized breakdown of where that debt came from. Feedback was positive, but still just something to look at, not interact with. We were headed in the right direction, but needed to go further.

## One small interaction leads to another

I thought we could add some interactivity in a pretty agile way by adding checkboxes. Somehow, I mocked it up in Angular.

![Technical Debt ($) toggle view showing itemized breakdown per file](/public/things/sema-collections/platform-tech-debt-toggle.png)

It's pretty amazing how much this little checkbox says. We detect an anomaly, you check the box. Simple. It could mean a few things:

- 'I agree, that is a problem we care about'
- 'This is something I want to look into'
- 'We need to fix this'
- 'This has been addressed'

## How might we organize items to make better software & teams?

The above initial version would have been a quick way to get talking with users about action. It's a scrappy MVP for an agile team, but I worked through a few ideas to establish a better direction and potential roadmap. These are rough sketches from my notebook so excuse the mess!

![Users should be able to create collections, we might suggest some action for them. How might we grow towards smarter suggestions?](/public/things/sema-collections/sketch-collections-suggestions.jpg)

![Thinking about how users might use the platform to build plans, export to stakeholders or share in a tool like Jira](/public/things/sema-collections/sketch-collections-jira.jpg)

![Exploring how users could create lists of data points and assign them for action or review](/public/things/sema-collections/sketch-collections-lists.jpg)

## Minimal mobile prototype

Add powerful functionality and simplify the product experience.

![Minimal mobile prototype — Collections interaction](/public/things/sema-collections/checkbox-prototype.png)

Build a feedback that helps customers track our benefit and accomplish something through app interaction.

### A simple feedback loop for users

Closing a simple feedback loop was important from both an interaction and product management success. This lets users see clearer more direct utility from the product and gives us something to optimize.

![Mobile prototype showing collections and progress tracking](/public/things/sema-collections/mobile-prototype-1.png)

## Building trust

Sema worked with a software automation lab on ML-powered refactoring suggestions; a code problem and code solution. Customers were very excited to try, but it was a ways from market-ready. Collections and a suggestion engine could be a trust building step between the current product and automated refactoring. Inputs from users would create rich training data and confidence in our suggestions relevance.

![Mobile prototype — building trust through suggestions and collections](/public/things/sema-collections/mobile-prototype-2.png)

The prototype introduced three big ideas; Leading with Technical Debt ($), organizing work with Collections, Reports

![The prototype introduced three big ideas: Leading with Technical Debt ($), organizing work with Collections, Reports](/public/things/sema-collections/prototype-three-big-ideas.png)

Conversations about metrics, collections and progress towards goals could happen anywhere. A modern mobile-first approach challenges the assumption that developers would only use the desktop experience — prioritize a mobile-friendly approach.

### Suggestions drive users to key actions

- Suggesting tasks to improve software quality, process, or teams
- Replicate the experience of Professional Services analyst, more scaleable
- Smarter suggestions based on customer goals and priorities
- Group bodies of work into suggested collections eg. "eliminate duplicate code" or "Reduce file complexity below 60"

### Self-identified tech debt

Users would have the ability to add their own items to the collections, link files and even assign a value to it. There are lots of things teams considered technical debt that we may not think to quantify, would not be picked up by our analyses, or certain edge cases we haven't accommodated.

The ability to add other items to a collection would open up the functionality of the platform to thinking forward, not just reacting to present states. Users could potentially use Collections to plan a major refactoring, or organize work to onboard a new hire familiarizing themselves with code.

### Feedback Loop for Us

This system would allow us to understand the needs of our users in a whole new way. In use, Collections allow us to better understand the priorities and behavior of a customer, and further improve the value-added service from the Professional Services engagements. It also sets up a wealth of training data to help future automation & product development.

- What do users agree to act on (add to collection)? Do they fix it, and if so how?
- What did users identify or add themselves? Can we detect, automate and offer that to others?

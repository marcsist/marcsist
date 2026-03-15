---
title: Sema Collections
description: A simplified, actionable mobile product experience
link: /things/sema-collections/
date: 2019-11-01
tags: [things]
layout: layouts/thing.njk
chiptype: primary
---

This exploratory prototype reimagined the core product experience at Sema.

It planted the seed for a few key ideas that gained a lot of popular support across our internal teams and unlocked new ways of thinking beyond the current product. While it wasn't something we built, the ideas turned out to be pretty decisive.

### Challenge

The web app had poor daily usage. Users found our metrics useful, and engaged with the regular reporting but struggled to find actionable insights in the tables and graphs that made up the application.

- Generate actionable insights from the data
- Give users a reason to engage regularly
- More user input to feed product development

### Outcome

Prototype showcasing a significant reorganization of the current web app and added functionality.

- Consolidating current analytics pages into a Reports section
- A mechanism for collecting and tracking team efforts against technical debt issues
- Reduce complex suite of metrics to a single score, technical debt, that can be shared between technical and business teams

![](/public/things/sema-collections/outline-mobile-4.png)

## Three big ideas

The pillars of this prototype;

1. Technical Debt ($) - summarizing all our metrics and analytics into a single number
2. Collections - action items and units of work grouped into trackable initiatives
3. Reports - moving the current product experience into a clean reports section

### 1. Technical Debt ($)

We heard from customers that the number of different metrics we presented were really hard to make sense of. Interesting, but not clear and users would constantly avoid 'putting in some time to learn it'

What did resonate was a technical debt calculation. This dollar value made sense to engineers, executives and investors. It's a high enough overview that users could check in easily and notice anything out of the ordinary.

The gateway to any project in this design is a dollar value for technical debt shown over time.

> For more on this see Tech Debt calculator

### 2. Collections

One of the top pieces of user feedback and lost deals was that the metrics, while interesting, didn't feel actionable. This got me to thinking, what could be more actionable than a to-do list?

I had some prior work that showed how our users "worst" code could be itemized, prioritized, and grouped into workable units. It was a build-as-you think prototype using a mock replica of our database schema in Notion and a Typeform survey.

<!-- TODO: missing image: Untitled.png -->

Using Notion to demonstrate how real data maps to proposed collections

![Using Typeform to demonstrate a user flow for customized suggestions/priorities](/public/things/sema-collections/Untitled%201.png)

Using Typeform to demonstrate a user flow for customized suggestions/priorities

In the current product, progress against a metric is something users could dig out of their data, but it's a high-effort, nearly impossible task for busy end users.

Collection's **give users the ability to pick an item of work, commit to it, and track their progress.

![](/public/things/sema-collections/outline-mobile-1.png)

This feature automates the current service model. This is a good feedback loop for the company, since it would give us insights on what the user wants (product), what the customer is hoping to accomplish (professional services) and where we can be a real value-add (research & sales)

From our end, we could track what users have indicated they want to do, and give them feedback on whether or not their team is making way.

With a delivery system in place, we could improve our ability to suggest action items for the user based on outlier metrics, one of the things customers appreciate about personalized reporting. More importantly, this pattern would be useful for **building trust** as our research team worked to improve suggestions with higher-level tactical refactoring and automated code fixes.

> This became core functionality throughout the major product redesign Sema Code Quality Platform

### 3. Reports

What radical reimagining is complete without the current functionality tucked in somewhere? Since we had paying customers using the service, any new experience had to be mindful of that.

The graphs and tables that made up the current product would be itemized into the Reports section. This section solves a lot of the scaling challenges the current UX had, and opens the door to delivering customer-specific reports and dashboards in a single place.

> This thinking led us towards designing and building a Reports Section

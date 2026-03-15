---
title: Tech Debt calculator
description: Help customers and prospects put a dollar value on improving code quality
link: /things/tech-debt-calculator/
date: 2019-12-01
category: software
tags: [things]
layout: layouts/thing.njk
chiptype: primary
---

![](/public/things/tech-debt-calculator/TDC_marketing.png)

A configurable tool that puts a dollar value on technical debt in a codebase. It launched as a standalone free experience for sales outreach, and an in-product feature for existing customers.

### New Users

We built a simple sign-up flow for new users;

- Create a new account
- connect to GitHub
- select a repository

![First clickthrough prototype](/public/things/tech-debt-calculator/paper_2.png)

First clickthrough prototype

![login for using Angular stepper component](/public/things/tech-debt-calculator/stepper_form_paper.png)

login for using Angular stepper component

![second prototype - mobile components](/public/things/tech-debt-calculator/mobile_form_paper.png)

second prototype - mobile components

![second prototype - web app](/public/things/tech-debt-calculator/screen_tdc.png)

second prototype - web app

### Phase 1

We launched the original calculator without many additional features. The ability to sign up and connect a repo self-serve was entirely new functionality, so shipping and monitoring it in production was the priority.

![Walkthrough of calculator logic for handoff](/public/things/tech-debt-calculator/calculator_logic.png)

Walkthrough of calculator logic for handoff

![Free microsite with a standalone calculator](/public/things/tech-debt-calculator/freemium_launch.png)

Free microsite with a standalone calculator

![Existing users could access the calculator in the web app](/public/things/tech-debt-calculator/no_files.png)

Existing users could access the calculator in the web app

### Phase 2

The next iteration of the calculator centred on a list of the most expensive files according to user priorities. Each file would accordion open and reveal a breakdown of the technical debt in that file.

Moving the sliders to a secondary modal made sense from a technical perspective, reducing the amount of requests and recalculation the component was sending to our servers.

![](/public/things/tech-debt-calculator/TDC_calculator_cover.png)

We set up a database to store the historic calculation data so that we would be able to show technical debt over time.

Tabs on the component lets users drill into categories that make up their technical debt score.

![Adding more control to the file list & a goal slider using the chart.js design](/public/things/tech-debt-calculator/goal__hides.png)

Adding more control to the file list & a goal slider using the chart.js design

Based on user feedback, we designed an easy way to hide certain types of files and file types, search a specific file, and set a persistent goal marker. The graph and goal marker were designed within the constraints of *chart.js.*

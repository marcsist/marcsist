---
title: Activity Feed for SMP
description: Extensible system for development activity updates
link: /things/activity-feed-for-smp/
date: 2019-09-01
category: software
tags: [things]
layout: layouts/thing.njk
---

The **Activity Feed** was designed to drive up day-to-day usage of the product.

Engineering leaders and PE partners valued *Sema Maintenance Platform* for its high-level view of development activity, but because the web app was always paired with printed reports from Professional Services, **customers avoided the product and waited for their next report instead.**

Because Sema calculated commit-by-commit analytics on repositories, we could show both the activity and its impact. We built a flexible, extensible activity feed to display increasingly detailed activity types.

## Version 1

We wanted to launch light with a couple of low-hanging activities, reusing an existing Material Design list component. I mapped out potential activity types from our customer research, interviews and domain knowledge.

![mocking up potential activity cards](/public/things/activity-feed-for-smp/possible_activities.png)

mocking up potential activity cards

<!-- TODO: missing image: Untitled.png -->

proposed schema

Seeing all the activities laid out with a proposed schema helped to steer conversations between product and the developers about intent of the feature past what we were currently building.

### The indicator

![Redesigned top nav with indicator, components layed out for handoff](/public/things/activity-feed-for-smp/new_activity_icon.png)

Redesigned top nav with indicator, components layed out for handoff

Placed in the top nav so that it's visible in most screens. Added placement for an avatar which was a future consideration when the activities become more personalized. It was a simple *chip* that we emphasized with a background color and CTA color icon.

### The feed

![Activity Feed modal](/public/things/activity-feed-for-smp/AF_Modal_-_from_a_repo.png)

Activity Feed modal

The activity feed was a modal that could be accessed from most screens in the product. We emphazised text and simplicity to keep it as performant as possible. The backend was designed in such a way that we could accomodate future plans;

- easily add and adapt new more complex activity types
- the ability to add more visual detail to the activity cards
- emphasize activity types as more or less urgent
- tune it to individual users preferences

### Menu

Initial functionality included the ability to search, and show/hide a repository from your main feed.

When the feed was opened from within a project, results would filter to that project only, to remove that filter, users click *View All*

![Menu for the activity feed](/public/things/activity-feed-for-smp/menu_for_activity_feed.png)

Menu for the activity feed

## More Features

Future tuneability was important — our users ranged from developers to executives, each prioritizing different information. I explored how future features might work into the design as they came up.

![Potential components for future functionality](/public/things/activity-feed-for-smp/roadmap_stuff.png)

Potential components for future functionality

![Tech Debt $ value tied to activity](/public/things/activity-feed-for-smp/TB_based_feed.png)

Tech Debt $ value tied to activity

![Onboarding configuration for first load](/public/things/activity-feed-for-smp/onboard!.png)

Onboarding configuration for first load

### Feature Roadmap

Based on early feedback we had a few stories in the backlog

- Onboarding - customize Activity Feed on first load
- 'show me less of this' to customize feed & collect user insights
- Give users the ability to save activities
- sharing & creating a Jira or GitHub issue from an activity
- Richer cards with graphs
- Enable a Slack connection for the repository feed
- Snooze an activity for a period of time
- Tie a $ value (tech debt) to all activities, include some visual indicators for these items (shown)

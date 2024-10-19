---
title: "Modern Analysis"
layout: single
permalink: /notes/analysis/
---

<!-- {% assign analysis_notes = site.notes | where: "grouped_by", "analysis" %}
{% for note in analysis_notes %}
[{{ note.title }}]({{ note.url | relative_url }})  
{% endfor %} -->

{% assign analysis_notes = site.notes | where: "grouped_by", "analysis" %}
{% for note in analysis_notes %}
 - [{{ note.title }}]({{ note.url | relative_url }})  
{% endfor %}
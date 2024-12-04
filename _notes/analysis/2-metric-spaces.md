---
title: "Metric spaces"
layout: single
collection: notes
subcollection: analysis
permalink: /notes/analysis/metric-spaces/
grouped_by: analysis
---

The metric space bridges real analysis with topology by introducing the notion of a **distance** onto a set of elements. They are a general setting for studying geometry, according to Wikipedia.

## Metric spaces have distances
So, the metric space is a set of elements (usually called "points") which have a **distance** between any two elements in the set. Precisely, it's a tuple $(X, d)$ consisting a set $X$ and a distance metric $d$.

<img src="../images/metric-spaces/img1.jpeg" alt="" width="300"/>

The **distance function** in particular is any function which satisfies these three properties:
1. Positive definiteness - All distances are either positive or zero
2. Symmetry - Order of points doesn't affect distance
3. Triangle inequality - See below

<img src="../images/metric-spaces/dist_props.jpeg" alt="" width="350"/>

### Triangle inequality?
The triangle inequality is one of the most common inequalities used in creating proofs in metric spaces. 

Intuitively, it's that any one side of a 'triangle' is always shorter than (or equal to) the sum of the other two sides.

So when thinking about just $\mathbb{R}$, it's just a 'flattened' triangle.

<img src="../images/metric-spaces/triangle_ineq 1.jpeg" alt="" width="200"/>

## Vector spaces
The triangle inequality makes a little more sense in vector spaces, where we have these directed vectors pointing which can visually form a triangle.

**Vector spaces** are defined over a particular field (such as the reals!) and are precisely defined as a tuple containing 
- a set (with elements like )
- a field, and the addition / multiplication operations.

<img src="../images/metric-spaces/vector_space.jpeg" alt="" width="350"/>

Where the maps (addition / multiplication) have their own set of properties - which are similar to the field axioms, but slightly different in that they act upon the vectors themselves, not the elements in the field.


<img src="../images/metric-spaces/vector_operation_props.jpeg" alt="" width="500"/>

## Some other spaces...
### Normed vector spaces, inner product spaces
Here are a couple more specific types of vector spaces we learned about in class, but haven't worked much with (and are always given definitions when doing so).

<img src="../images/metric-spaces/norm_inner_spaces.jpeg" alt="" width="700"/>

Note again the ubiquity of the triangle inequality!

### Notable examples

Notably, it is good to know that **euclidean space** forms a **normed vector space** over the real numbers $\mathbb{R}^n$. 
- Meaning that their distance metric is especially nice, so the distance function can distribute scalars across itself (homogeneity).

### Taxonomy of spaces

To recap, here is a quick taxonomy of the different types of spaces we learned about and how they relate to each other.

<img src="../images/metric-spaces/taxonomy_of_spaces.jpeg" alt="" width="200"/>

## Reference: Examples of distance metrics
Some common examples of distance metrics include:
- Standard metric
- Discrete metric
- Euclidean distance (think pythagorean theorem)
- Manhattan distance (distance along a grid)

<img src="../images/metric-spaces/img3.jpeg" alt="" width="325"/>
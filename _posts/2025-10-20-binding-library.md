---
title: Explaining the Binding Library project
layout: single
date: 2025-10-20
tags:
    - ganglab
    - research
    - retrospective
    - cs
---
this semester, i was tasked with finishing up the binding library project for dan redeker, and packaging it into a user-friendly interface. this blog post aims to explain what exactly this project is, in the hopes of conveying why i find it cool.

### the setting: DNA origami
some necessary prerequisite information about the gang lab: we are a material science research group, focused on a technique called "DNA origami."

the name comes from how we fold DNA into different shapes to form the basis of our nanomaterials. 

our lab works a lot with octahedral and tetrahedral dna origami wireframes, which we can "load" with arbitrary nanoparticles like gold.

![[IMG_1846.jpg]]

![[IMG_1849.jpg|100]]

dr. gang's work was influential in setting the foundations for the technique of using nanoparticle-loaded dna origami as building blocks to create larger, tiling lattice structures.
![[IMG_1848.jpg]]


notably, this self assembly is enabled through the use of single stranded dna sticking out at the vertices of the octahedra. these are used to connect different building blocks together, and only at certain sides, such that the desired nanoparticle structure is achieved through self assembly.
![[IMG_1847.jpg]]
these single stranded sequences, also called "sticky ends" or "bonds", are often abstracted away with using a single color to represent strands of differing base pair content—strands which in theory should not bind together.

### the problem
however, if too many of the base pairs overlap, there's a chance that a voxel can bind in the wrong orientation, leading to the propagation of structural binding errors.
![[IMG_1850.jpg]]

dan's binding library project aims to address this problem of cross-contamination: given a DNA sequence length of N base pairs, what is the maximum 'library' of different sequences we can draw colors from, such that no two sequences will bind to any other sequence in the library other than to its rightful complement?

### dan's solution
the solution was surprisingly elegant. 

first, a definition: two sequences are **"orthogonal"** to each other if they contain no matching subsequence of over 4 base pairs.

1. compute all possible DNA sequences of length 8
2. we sort it two sets: A (color) and A' (complementary) sequence spaces
3. compute all pairwise orthogonality between $A \times A$ and $A \times A'$ and store the two in a matrix. 
	1. this becomes a 'graph', where the values are booleans (1, 0) representing whether two sequences are orthogonal (1) or not (0).
4. compute a third matrix containing the OR of the AA and AA' matrices.
	1. this accounts for the fact that a sequence C which is orthogonal to A will correspond to a sequence C' which is orthogonal to A'.
5. now apply a minimally connected graph algorithm.

the following images are from dan redeker's beautiful presentation on the project.
- in this case, each "node" in the graph is a DNA sequence. 
- moreover, two nodes have an "edge" between them if they are orthogonal.

![[Screenshot 2025-12-03 at 2.18.25 PM.png]]

the graph algorithm goes as follows:

while there exist nodes (vertices) in the graph...
- find the node with the lowest degree
- remove that node from the graph and place it into our library.
- remove the neighbors which used to be connected to that node from the graph as well.
- repeat until there are no nodes left.
![[Screenshot 2025-12-03 at 2.19.14 PM.png]]

cool stuff!
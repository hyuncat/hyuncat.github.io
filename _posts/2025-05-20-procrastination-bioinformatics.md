---
title: On procrastination and bioinformatics
layout: single
date: 2025-05-20
tags:
    - stupid
    - bioinformatics
    - procrastination
---
## A groundbreaking revelation
I was today years old when I realized the convoluted and "novel" data structure I'd been bashing my head against for the past few weeks was really just an adjacency list the entire time.

For context, I've been writing an agglomerative hierarchical clustering algorithm from scratch using C++ for my bioinformatics research (RichCluster). Integral to my algorithm was a vestigial data structure from original source code, which I realized today was an adjacency list in disguise.

Even though the connection seems (and probably is) trivial, it connected the clustering problem to graph theory and my running view of the world as being a giant layered network graph, in a way which blew my naive undergraduate mind.

### Groundbreaking revelations deserve breaks?...
After this revelation, I immediately told myself "I deserve a break."
To which I caught myself—I've only been working for 10 minutes. The hell you mean I deserve a break already?

Perhaps it was my brain wanting a cognitive 'reward' of the same order of magnitude as the neural connection which was just made. Or maybe I'm just burnt out.

## Reflections on C++, Python, and ASM
### C++: A language of auxiliary theorems
Although I do appreciate how well organized and thorough of a language C++ is, I think I've been spoiled by Python for too long. 

Now, coding in C++ feels like I'm trying to write a proof, while having to reprove every auxiliary theorem and lemma along the way.

### ASM: proof-by-boolean-logic
Though I suppose it could be worse. Coding in Assembly would be like writing a proof using only boolean logic. 💀

## The computer scientist vs. bioinformaticist
My brief deluge into bioinformatics has left me with an amusing takeaway which I'd like to share.

Holding skill equal, \
if you give a computer scientist and a bioinformaticist the same problem\
the bioinformaticist will give you an answer in 2 days;\
the computer scientist will find a 365x more performant solution\
but in 2 years.

---
title: "Continuity"
layout: single
date: 2024-12-17
tags:
    - math
    - modern-analysis
---

Continuity is one of the core concepts in Analysis. Now that I have a good handle on compactness, series, and sequences, I feel equipped to talk about continuity. Or rather I hope that in talking about it I will feel more prepared for my final in 6 hours.

## What is continuity?
Continuity is a concept I was introduced to fairly early on in my high school calculus course. Intuitively, we observe that continuous functions are those which we can trace the line without lifting our pencil - there are no 'holes' or jumps in the curve.

In Analysis, I unpacked the definition a little deeper.

### Continuous functions are point continuous for all x
Essentially, a **continuous function** is one which has **point continuity** for all x in its domain.

What is point continuity? It is when the limit of $f(x)$ as x approaches some $x_0$ looks like the function itself at $x_0$.

$$\lim_{x \rightarrow x_0} f(x) = f(x_0) \quad \forall x_0 \in \mathbb{R}$$

This means there is no funny business with all points being super close to $f(x_0)$ looking like something completely different than $f(x_0)$, eg if there is a hole or a jump on either side of the point.

### Limits of functions
This is where my high school calculus class ended, and my Modern Analysis class began - the epsilon-delta definition of a limit.

Essentially, if there exists some delta $\delta$ neighborhood where all $x$ within $\delta$ range of $x_0$, when put through the function $f(x_0)$ also within $\varepsilon$ range of some limit $L$, then we say that the limit of $f(x)$ as $x \rightarrow x_0$ is equal to the limit $L$.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_6120DA5C87CC-1.jpeg" alt="Real numbers" width="500"/>

### Also, uniform continuity!
There exists a stronger version of continuity called **uniform continuity**.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_6BE083019FA0-1.jpeg" alt="Real numbers" width="300"/>

The difference between uniform and normal continuity is that in uniformly continuous functions, we need there to exist ONE $\delta$ which creates $x$-neighborhoods that imply $|f(x) - f(x_0)| < \varepsilon$ . 

So for example, the function $f(x) = \frac{1}{x}$ is continuous but NOT uniform continuous because as $x \rightarrow 0$, we need to keep modifying our definition of $\delta$ to become arbitrarily small in order to satisfy how freakishly large the difference gets.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_C65B7A05E17F-1.jpeg" alt="Real numbers" width="300"/>

So why do we care about continuity?

## Continuity preserves...
Continuity is a super nice property of functions, in that continuous functions preserve a lot of other properties about the sets that get squeezed through them.

It preserves the following properties
- Openness
- Compactness
- Connectedness
- Path-connectedness

### Openness
Open sets, when mapped through a continuous function, have images which remain open.

Why? Some proof by contradicting, which uses the fact that the preimage of open sets is also open. I think?

### Compactness
Compactness is also preserved.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_082CCB8921CC-1.jpeg" alt="Real numbers" width="300"/>

The proof follows from constructing an open cover of the image of $f$, and then the previous result. Then we squeeze the open cover back into the inverse $f^{-1}$, taking a finite subcover in the compact $K$, then sending that back through $f$.

### Connectedness
A set $A$ is **connected** if you can take the union of any two non-empty open sets $U \cup V$ to form $A$ and $U \cap V \neq \emptyset$. Eg, you can't form $A$ from the union of any two disjoint non-empty open sets.

It can be proved by contradiction that connectedness is preserved through continuous functions. 

### Path-connectedness
A **path** is some map $\gamma:[0,1] \rightarrow X$ defined between two points $x$ and $y$ in a metric space $X$ such that $\gamma(x)=0$ and $\gamma(y)=1$.

A topological space $X$ is **path connected** if for every pair of points $x, y \in X$ there exists a path $\exists \gamma:[0,1] \rightarrow X$ connecting them, such that $\gamma(x)=0$ and $\gamma(y)=1$.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_FDC11BB1275B-1.jpeg" alt="Real numbers" width="300"/>

Note that path connectedness implies connectedness, but not necessarily the other way around. 

For example, the topologist's sine curve oscillates infinitely many times so there is no continuous path connecting the beginning and end, even though every nearby set of points is continuous.

<img src="/assets/images/blog/2024-12-17-continuity/IMG_7080BDCA148E-1.jpeg" alt="Real numbers" width="700"/>

However if a set is open and connected, then it is path connected.

## Continuity ensures max/min
A property which will be useful in proving Rolle's theorem for differentiable functions is that if $f$ is continuous on some interval $[a,b]$, it attains a max and a min within $[a,b]$.
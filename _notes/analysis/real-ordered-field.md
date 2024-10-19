---
title: "The Real Numbers are an Ordered Field"
layout: single
collection: notes
subcollection: analysis
permalink: /notes/analysis/real-ordered-field/
grouped_by: analysis
use_math: true
---
## Real numbers
The set of **real numbers** <span>$\mathbb{R}$</span> is an **ordered field**, meaning it's defined as being a "tuple" of four elements, which includes
- An ordered set
- Addition operation
- Multiplication operation
- Order relation

<img src="../images/real-ordered-field/img1.jpeg" alt="Real numbers" width="300"/>

Let's go through each one by one.

---
## Fields?
Before we define what an "ordered" field is, let's unpack what is just an ordinary field.

The **field** is a tuple of three elements, consisting of
- set 
- addition operation
- multiplication operation

The two operations must satisfy the **field axioms**:

Basically, whatever we define as "addition" and "multiplication" better behave like addition and multiplication. 

<img src="../images/real-ordered-field/img2.jpeg" alt="Fields" width="700"/>

So any arbitrary operation on two elements, which satisfies these axioms (many of which we learn as children), can be called addition or multiplication.

If all these axioms are defined for all elements in the set F, we call this a valid **field**.

## Ordered sets, relations
A set is any collection of items, ordered or not. An **ordered set** is a more specific type of set, whose elements can all be "ordered" in a specific way.

**Example:** An intuitive example can be formed from the natural numbers.

<img src="../images/real-ordered-field/img3.jpeg" alt="Fields" width="300"/>

 We can see that the elements in S, namely 1, 2, 3, 4, 5 can be "ordered" from least to greatest. This is consistent with our existing understanding of numbers.

With the numbers we know, it makes sense that things can be ordered. But what about for arbitrary sets? What if we had a set of triangles - could we order such a set as well?

Modern analysis is about unpacking definitions to levels of minute scrutiny, so let's unpack what it means to be "ordered."

### Relations
A **relation** is anything that "relates" two elements together. 

Precisely defined, it's a subset of all possible combinations of two elements together (the cartesian product) of two sets.

<img src="../images/real-ordered-field/img4.jpeg" alt="Fields" width="500"/>

### The order relation
So the "**order relation**" is how we precisely define what it means to be ordered. Which means that if we take the relation of an ordered set with itself, that certain subsets of the set should satisfy this ordering. 

These properties are defined as such:
<img src="../images/real-ordered-field/img5.jpeg" alt="Fields" width="500"/>

So circling back to ordering a set of triangles - if certain subsets of the triangles could satisfy these order relation properties, then we would say that set could be ordered.

## Ordered field?
So back to the reals: an **"ordered"** field is a field with an **ordered set** instead of a normal one.
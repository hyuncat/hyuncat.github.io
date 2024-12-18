---
title: The art of naming variables
layout: single
date: 2024-11-15
tags:
    - ganglab
    - research
    - problem-solving
---

## The helix problem
Just as I thought I had finally debugged all of the edge cases of the algorithm, last week I went into the lab and was asked to try out the algorithm on this helix design.

<img src="/assets/images/blog/2024-11-15-art-of-variables/Screenshot 2024-12-04 at 1.12.08 AM.png" alt="Real numbers" width="300"/>

Where we can see the a voxel with the neon particle inside of it is spiraling around each layer like a helix, surrounded by empty voxels.

The algorithm failed 😂 which means I have to go back to the drawing board. But I found myself wanting to give up almost instantly. Why? For one, this is a problem I just have absolutely zero intuition on - I don't even know what the final result is supposed to look like. For two, it's a design which is too hard to write out even by hand. For three, there's so many different steps and points at which the code could have gone wrong, that I don't even know where to look.

In cases like these, I decide it might be nice to go through the algorithm sequentially, refactoring the code so it makes sense until I know every corner and edge case that could possibly happen.

## Refactoring...
One of the most useful pieces of coding advice I received was that software engineers spend most of their time reading, rather than writing code.

This was a notion I had not really internalized until I had started researching. The act of working on a single codebase and iterating upon it for many months, or years, it feels like it requires an additional set of skills from those of writing disposable, small files of code like for my class programming assignments.

The problem of organization was often what led to the most hassle. Even for this codebase, which I had tried so hard to keep readable, writing docstrings and using object-oriented programming principles, it would still take me like 30 minutes to an hour to reload the code back into my brain every time I started working.

When the algorithm is tens of thousands of lines long spread out across 20+ files, it's hard to remember everything across multiple scattered work sessions. Combined with the amount of new material I'm learning in school as well, it's just difficult to juggle mentally.

So writing readable code has become a very large concern. But sometimes I wonder if I spend too much time on it. For example, I think I spent like 4+ hours just thinking about how to best organize the code which would enable voxel rotation. Should I have a separate "VoxelRotater" class or just a "Rotater" class? And what methods should that class encompass?

The issue is that the rotation needs to apply a scipy transformation onto a set of coordinates - a point group - corresponding to a single octahedral voxel. But if I call rotate_voxel(voxel) then how do I return the value? Do I return a completely new voxel object or only the point group? Do I make entirely new bond objects and voxel objects? That is the most intuitive solution, but also when recalling the post processing script I remember running a time analysis and using that very intuitive method of voxel rotation and it led to almost 1000x slower code. So it seemed like there should be a better way?

I ended up using a dictionary of bonds, called "BondDict" which holds the bonds and can be loaded in and out of voxel objects. When we rotate the voxel, we are really only calling it on this BondDict.

But this process took so. Long.

### Good organization speeds up coding
This kind of larger scale thinking - of how a class or feature should be added when multiple parts of the rest of the code depend on it - it hurts my brain. And I wonder if the process could be sped up in any way. Like I was exaggerating a little when I said it's only naming variables, it's really the question of - how can I organize these methods and classes in a way that makes the most intuitive sense, so as to minimize the amount of time future me has to spend reloading the code back into my brain?

To be honest though, creating quality groupings is so important. When I have a good name - for example, earlier in the summer, I created this organizational structure for the symmetry operations in the algorithm. 

<img src="/assets/images/blog/2024-11-15-art-of-variables/IMG_13081516F53D-1.jpeg" alt="Real numbers" width="500"/>

So we compute all 37 rotational symmetries for each 2-combination of voxels in the lattice, and store it in a pandas dataframe called symmetry_df. But then if we compute it this way, then each standalone row can be a 'symlist' where we input a voxel pair and we get the list of all valid symmetries satisfied between the two voxels. And then we don't have to recompute the numpy transformations again each time, but rather we can just index a dataframe for quick access.

And honestly, even though creating this class organizational system took a good hour or two, it has sped up the rest of my coding experience tremendously, as I don't have to think about all the auxiliary steps in between to compute a symmetry operation between two voxels, but I can just call some easy functions and get exactly what I want. And the naming scheme makes sense.

Particularly in the painting algorithm portion of the code, being able to call these functions have tremendously sped up the process of coding and implementing the logic of painting itself.

It reminds me of how in fundies, we would create these very large circuits using just ANDs/ORs (...), but once we create a functional block we group it together and call it a new name (say, an adder or an ALU) and then we just use the group to make even more complex circuitry. I feel coding these large codebases is a very similar project, except the quality of what groups we choose to make vastly affect the usability of the group in the end.

For (bad) example, my voxel rotater class before had a bunch of random functions that weren't even necessary. It was overcomplicated and didn't just adhere to a single use case, and contained a bunch of functions not even related to rotating or voxels - it contained a method to flip all the voxel colors for instance, and comparing voxel bond colors. Like what?

As a result I was confused on how to use it and I would often struggle and dread doing anything which required voxel rotations or voxel bond comparisons, until I finally refactored it to use the BondDict instead.

Still, refactoring it took FOREVER. And I would spend so much time on stupid questions, like should I rotate the voxel, or just the bonds? And then deliberate endlessly on the pros and cons of each choice. But at what point should I just choose an option and move on?

### Intentional black boxing
I think the answer lies in intentional black boxing - where we note down exactly where we cut corners in naming or organization, and then allow ourselves to come back later to fix it once we have more information.

For instance, the art of naming and organization often relies on what methods the class will ultimately have. For instance, what methods should a voxel rotating class have? I already have a class for storing just a dictionary of all possible rotations and double rotations as lambda functions. So should the voxel rotating class contain the dictionary as well? Or should they be both used in a parent class?

I spent SO MUCH time deliberating. But I really do think, in hindsight, the code would have been finished much faster if I had just chosen a single organizational option and had worked it through. Because the question relies on - in what context are we rotating voxels? Which informs how it should be used. So I think it was the higher level picture that I was missing when I got stuck in the weeds.

In these cases, stepping back, viewing the greater picture, I think this is what is the most helpful.

For instance, in the newest iteration of the algorithm, I had written out this high level pseudocode:

---

## Algorithm flow
### Structural bond painting phase
```
1. find structural voxels
	1. (make all the structural voxels touch each other)
2. paint a path of structural bonds between all structural voxels
3. for each voxel in structural_voxels
	1. paint_self_sym(voxel)
```

### Complementary bond painting phase
```
while there are unpainted vertices in structural_voxels
1. find an unpainted vertex --> str_voxel + partner_voxel
2. find mesoparent(partner_voxel)
	1. if mesoparent is str_voxel and c_voxel
		1. map(c_voxel --> partner_voxel)
		2. paint_cbond(str_voxel <--> partner_voxel)
		3. paint_self_sym(partner_voxel)
		4. map(partner_voxel -> c_voxel)
	2. elif mesoparent is str_voxel
		1. map(str_voxel -> partner_voxel)
		2. paint_cbond(str_voxel <--> partner_voxel)
		3. paint_self_sym(partner_voxel)
		4. complementary_voxels.add (partner_voxel)
	3. else
		1. map(mesoparent -> partner_voxel)
		2. paint_cbond(mesoparent <--> partner_voxel)
		3. paint_self_sym(partner_voxel)
		4. map(partner_voxel -> str_voxel)
```

**Output:** a `mesovoxel` which should be able to map onto the rest of the lattice

---

And AFTERWARD started to unpack each one and worry about the naming.
I found that doing it this way, I was able to complete this algorithm shift much faster than had I just dove right into rewriting the code.

Some people are smart enough to just instantly get the bigger picture - maybe their brains are able to store more in memory at once, or just run faster than mine - I dunno. But for me what has helped is, I use Obsidian to just write out ALL my thoughts. I could blog about this too, how I use Obsidian in my workflow - maybe for another day. Regardless, I am not smart enough to do all this in my head, nor have I done it enough to have an intuition for how to group things. So for now this is how I do it :,)

## So did I ever fix the helix problem?
No... I'm still in the process of rewriting everything from scratch to be more intuitive, so I can explain the high level to anyone and they can follow along. Simplifying the code as much as possible, that's my goal - and then maybe the error in the algorithm will become apparent then.


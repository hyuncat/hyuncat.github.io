---
title: Research, ego, and PSETs
layout: single
date: 2024-11-08
tags:
    - ganglab
    - research
    - problem-solving
---
## The perovskite problem
Last I had a meeting with Jason debugging the coloring algorithm - where I realized that the colortree post-processing script may not be necessary at all.

We were trying to extend the algorithm to work with this "perovskite" design (it resembles the crystal structure of the perovskite mineral):

<img src="/assets/images/blog/Screenshot 2024-12-07 at 12.12.06 AM.png" alt="Real numbers" width="300"/>

You can see it consists of a voxel with a particle inside (the green ball+stick) which spirals around in a helical shape - surrounded by empty voxels.

However, the algorithm just failed.
It didn't even get the colors in the right locations - it just didn't work.

<img src="/assets/images/blog/perovskite_fail.png" alt="Real numbers" width="300"/>

(The colors are randomly generated so they don't match - still, you get the picture.)

All of the red particle-voxels should all have the same color bonds, and all the empty (grey) voxels should as well. This coloring, while it's not incorrect, is not the minimal solution. But because the color placements are not even correct, I can't apply the post-processing color tree script. Which means I need to go back to debugging the algorithm.

## Debugging
After some debugging, we realized it was because the mapping order was done wrong. The painting algorithm is done in two phases, 1) structural bond painting, and 2) complementary bond painting. This design should have been painted fully just from phase 1 alone. 

So I went to my iPad and sketched out the detailed algorithm by hand, of how it *should* have worked.

<img src="/assets/images/blog/perovskite_ipad.jpeg" alt="Real numbers" width="600"/>

It was an issue that I didn't understand the edge cases of the algorithm as well as I should've. Going through by hand and walking through the steps to enable the coloring really helped refine the idea in my mind and guided me through how to translate the logic into code.

In general, as a CS major, I spend most of my productive coding time on my iPad, writing out pseudocode and drawing pictures like this. As a kid, I always wanted to be an artist when I grew up. So I'm happy with how coding feels like the next best thing.

### Pervoskite works!
Anyways, the code works now!

<img src="/assets/images/blog/Screenshot 2024-09-13 at 1.31.10 AM.png" alt="Real numbers" width="300"/>

This is what the output should look like.

### And so does the double oreo?...
So I applied this same logic back to the original reason why I made the post-processing script - the "double-oreo" design. 

<img src="/assets/images/blog/Screenshot 2024-09-13 at 1.39.23 AM.png" alt="Real numbers" width="300"/>

So it seems like the code now works without even needing the post-processing script...

## An existential crisis
So I spent all that time working on that for nothing?
It was disheartening though. I spent like 20 hours creating that post-processing script. I could've used those 20 hours to finish like 2 psets. 

It made me reflect on research in general. What differentiates the coding I do for Gang lab from the coding I do for my discrete class? The problem solving of writing a proof for my analysis pset?

### The art of problem-choosing
I think it's that psets have a very well-defined problem and solution, whose method of reaching is made explicit or walked through in class. We have all the tools at our disposal to solve it. Dan McKeen, a friend and labmate, put it as - "You can throw 20 hours at a pset and know you'll eventually solve it. But you can throw 50 hours at a research problem and still make no progress."

On the other hand, an equally important part of research comes in choosing wisely what problems to solve. The goal is usually clear - in that I want to make sure the algorithm spits out the minimal solution. But instead of choosing to unpack the algorithm, I chose to write an auxiliary script on top of it to fix the problem. But it was a bandaid solution to a more fundamental underlying problem, which I had ignored.

Have I learned anything on how to avoid wasting time on the wrong problems?

Research is more chill than my courses in some ways, in that there's not psets due every week. I can take it at my pace, which facilitates the kind of creativity and freedom to explore topics which comes from a sense of ease. But with that creativity also comes a sense of pride and ego attached to the ideas we create - I think that's what it was with the color tree / algorithm. Is that I felt attached to this idea which I had brought into the world, I didn't want to think that the algorithm itself could be wrong - so I looked for ways to avoid the possibility that I could be wrong.

In the end I think the most actionable prevention mechanism is to keep myself accountable through frequent and open communication with my mentors. Ultimately the issue of the algorithm could have been addressed if I had tried the perovskite design sooner, if I had thought to try apply the algorithm to other designs to see if it still held up - instead of being afraid that it might not work. Because in the end if I end up finding out that it doesn't work, then that is a problem that I would have had to address eventually anyways.
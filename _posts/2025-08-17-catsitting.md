---
title: On catsitting, motivation, and responsibility
layout: single
date: 2025-08-17
tags:
    - research
    - retrospective
    - personal
---

Last week, Juyoun (["soul sister,"](https://cs.nyu.edu/~shasha/) lawyer, and director of the Barrio Tango Orchestra) asked me if I was interested in catsitting for her while she catsits for her friend in the Hamptons.

I said yes without hesitation. I love cats! And this would be a great experiment on whether I would be able to handle getting my own cat after leaving the dorms as well.

I popped a Zyrtec and rode the train down to her apartment.

### A breakdown of responsibilities
When I got there Juyoun hugged me and gave me the rundown of what Pimple (her cat) needs to survive.

- Feed 2-3x per day
	- She eats two kinds of soups - mixtures of kibble/boiled chicken breast and water.  (Because she refuses to drink enough water if we don't trick her into doing so)
- Change the water in her bowls regardless (just in case!)
- And change the litter whenever she uses it by scooping it into toilet

It seemed simple enough! I said goodbye to Juyoun and geared up for the week ahead.

### A hesitant relationship
Pimple started off being extremely standoffish of me. Whenever I'd try to walk over to her, she'd sniff my hand and then strut away from me without even letting me pet her.

She refused to leave her little enclave by the door. I could tell she was waiting for Juyoun :,)

I told her, "Pimpleeee. Today I'm getting lunch with a friend. I'm so excited! Sorry to leave but I'll be back soon!" And she'd give me this unamused glare which screamed "bitch shut up."

### Increasing affection (and discomfort)
By the third day, Pimple was starting to finally warm up to me. 

I think it was because I had fed and changed her litter enough times, that she started to trust my company more, nuzzling her head against my calves and marking her scent on me.

Unfortunately, the accumulating discomforts of living in someone else's apartment started grating away at me.

- The entire apartment had a terrible fruit fly infestation, and I couldn't step into the kitchen without getting swarmed by the beady-eyed buggers. 
- The air in the apartment was thickened by a mixture of sticky NYC summer humidity and cat hair—and my allergies would cycle on/off in sync with the medication's life cycle. 
	- I had a plastic trash bag hanging from the bathroom doorknob, and the used tissue mound in there steadily increased alongside my pervasive feeling of nastiness.

I felt like a pet betta fish, shell shocked after their owner changes the water in their tank. I missed my clean, air-conditioned dorm room.

Still, I was on the net, happy to have the company of this small diva—Pimple.

At some point, she was sitting on the entryway chair, so I seized the opportunity to plop down next to her, computer in one arm, a cat-curious hand in the other. Sniffing my hand, Pimple let me pet her! She stayed serenely plumb on the couch as I started preparing for my meeting the following morning.

## A fractured mind
I couldn't focus though; my mind was filled with the thoughts from the week preceding me. 

### Sociologistical nightmares
After spending the entire week hanging out with people 12/7, I felt super fractured. I had hung out with people across 4 different facets of my life

- Music friends
- Robotics friends
- Gang lab friends
- Hinge "friends"

While having in my head swirling thoughts on the oppressive and stupid systems we live in.

### Research feels pointless
What was I doing with my time? 

- If I seriously wanted to take actions toward change, I should be spending my time working on political/social problems. Not in DNA origami, music, or bioinformatics.
- If I'm going to be running away, why not do something more fun like hanging out with my friends, instead of whacking away at my codebase?

But then again, I wasn't always this fractured. Last summer, I was able to work for ten hours at a time. What changed?

### Research, in context
I mean, I started doing research so I could ultimately
- secure a meaningful and well paying job
- and fund my consumption

And I stayed in my labs because
- I liked learning about
	- music, self assembly, biology - from a computational lens
	- honing the meta skill of long-term problem solving and project management
- it felt satisfying to create something
- and I liked my friends in the lab

### Escapism vs. the void of intrinsic motivation
But also, I was deeply depressed last summer. And research was honestly a way to escape my suffocating thoughts of self loathing.

- After starting prozac and making more friends last October, the running-away impetus went away

and instead, I came face-to-face with my void of intrinsic motivation.

## A refactored life!
### Axioms for life
Over the summer, I tried to create my intrinsic motivation by refactoring my life via first principles. It was after [I had just watched Interstellar](https://letterboxd.com/hyuncat/film/interstellar/), and I had decided on my preliminary set of principles.

- *"Live truthfully"* <- My fundamental axiom
	- **Thm 1:** "I don't wanna die" (live)
	- **Thm 2:** "Rage against the dying of the light" (try)

And tried reconciling the above with the agentic framework of me as a eating, socializing, and reproducing biological machine with the following desires:

- eat good food
- make good friends
- find a good partner

### Is truth solipsist or universal?
But based on these biological needs, why not just cut to the chase?

So instead of doing research out of escapism, inertia, or this possibility of a better future, why not

- spend all my time hanging out with friends and Hinge matches
- find a rich [huzz](https://www.urbandictionary.com/define.php?term=Huzz) and become a stay-at-home mom
- or hook myself up to an ecstasy machine?

I could just live a solipsist life, thinking only about satisfying my basic needs and not worrying about trying to align myself with some "higher truth."

### Maslow's hierarchy of needs: The balance?
At some point, I recalled learning about Maslow's hierarchy of needs, all the way back from my high school AP psychology class.

<img src="/assets/images/blog/2025-08-17-catsitting/maslow.png" alt="Real numbers" width="700"/>

I was talking to Ryan and Will (CCBR) about this on Saturday, and how I think Maslow's hierarchy could be part of my solution! That the balance between base and higher order desires comes from satisfying a weighted combination of all of them at any given slice of time.

Hearing this, Ryan asked me, "Do you just have a void of self actualization?"

I thought again to whether I should live according to my desires or "virtuously" with respect to some self-actualization goals, and realized I still couldn't place any driving virtue in my motivations.

## Reinforcement learning for humans
### Model-free vs. model-based learning
On Sunday, Ryan and I went to the Bryant Park library to get caught up on the RL literature for the CCBR project.

There, I learned that for state-of-the-art robotics policy training, that there exist two broad learning paradigms

1. Model-based learning
2. Model-free (policy) learning

The former either starts out with or tries to learn a model of the world. It works well for simpler environments which can be fully described (eg, a chess game), or can also be learned on-the-go (which is hard, and requires lots of data + compute).

Model-free learning just tries to find the best actions an agent can take to maximize their reward function. 

#### We don't know enough about the world
For our quadruped, we were going to use a model-free approach (PPO/SAC) to train its walking policy. And putting it this way, made it click that we don't really know enough about the world to try this model-based approach (of searching for universal truth). So, maybe spending time fine-tuning my reward function would be a better use of my time?

### An inverse kinematics approach
I shared my thoughts with Ryan, and he remarked that the solution could also make use of an inverse kinematics approach:

- where you start with a high-level goal, 
- in the context of certain low-level assumptions of the world, 
- and you retrace the agent's mid-level actions needed to get to the goal

updating both assumptions and actions each step of the way.

## On responsibility
### Oh, Pimple...
Pimple nuzzled her head against my hand, and I snapped out of my head for a second.
She was guiding me to the spots she wanted to be scratched, showing me her belly. She trusted me?

I felt like an awful cat mom up to this point.
I was away for a lot of yesterday hanging out with a friend, meanwhile poor Pimple was relying on me for food, for water, to clean her litter, for affection.

### Responsibility follows trust
And I thought to how Dennis, Dr. Hur, Dr. Gang, CURC, CCBR, how they were relying on me to get my work done in a similar fashion as well. They took me on with the expectation of me getting certain work done—and just like I had a responsibility to take care of Pimple, I had a responsibility to them to fulfill for placing their trust in me.

So given this goal, I tried to reverse engineer why I should do work for them beyond this trust.

## Art: My self actualization
Well, I remembered how much my love for art ties together everything I do, whether it be in drawing, making/listening to music, eating good (artistic) food, and in spending meaningful time with friends.

And I realized art itself is a system which interfaces with our biology!

### Base (5 senses) art
That the basic components of art tie back to our five senses:
- auditory (music)
- visual
	- drawings
	- architecture/design
- taste
	- food
	- drink
- touch
	- sex, affection
- smell
	- perfumes, candles

### "Higher order" art
And that these baser forms of art come together to create "higher order" art:
- writing, speaking - combining other aspects of the senses to depict an experience
- relationships - to create something more beautiful in the union of the time spent together

### Why do I create art?
I create art because it

- feels good to be understood
- feels good to leave a part of me into the world

and that's probably my form of self actualization.

## Research, and the problem solving tool
So in the context of art as my self actualization goal, research and problem solving becomes the tool
- for which I can understand and break down systems
- by finding patterns (through both similarity and dissimilarity)

### Problem-mentality
I asked myself, why do people solve problems? Well, that it feels good:
- To no longer face the problem
- To feel needed by people who the solution helps
- To get closer to the truth of the world

### The tangible motivation problem
So, I framed my research motivation problem as a set of tangible problems
- I don't know what I'm going to do next year
- People are waiting on me to finish these projects
- I feel stupid and guilty for letting other people down
- I want to eventually make enough money to afford the kind of art I want to experience

With the following solution: finishing my current projects.
- With the mid-level appreciation of problem solving as a tool for richer art (in consumption and creation)
- and the artistic appreciation of the people I would help with my research as a grassroots step in the right direction

So that I can start and choose my next one to be more aligned with my better understanding of the world, with the knowledge that I better not entangle myself in more than 3 major projects at once.
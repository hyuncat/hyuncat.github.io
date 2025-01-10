---
title: My monitor problem; an algorithm
layout: single
date: 2024-10-15
tags:
    - algorithms
    - cs
    - personal
---
## The monitor problem
I ordered a new monitor for my dorm last week, and it arrived yesterday! But it's 16 inches large, and I'm quite lazy to retrieve it from the mail center - so this morning, I hatched a plan to get some help bringing it back to my dorm.

### Sally and David
I have two best friends, let's call them Sally and David. I love both of them, but they hate each other. Sally bullies David whenever she sees him, but they tolerate each other for my sake and we sometimes hang out as a trio.

David and I have our Discrete Math class together today, and we usually get dinner together afterwards. Ideally, I would slip the question of coming to the mail center at dinner / on the way back to my dorm, and then David would be annoyed but agree to help carry it back. But I love Sally and miss hanging out with her, so I want to get dinner with her as well - more so than I want to hang out with David. But if I ask them both to dinner, I'm afraid to get into a situation where neither want to eat with me, and I have to carry the monitor back to the dorm myself.

### An algorithmic solution
After deliberating for a while, I ended up writing up an algorithm.
```python
# independently ask
ask SALLY if she wants dinner with me and MUTUAL_FRIEND
	if yes, then ask if DAVID can join us
		if yes, then ask DAVID to help with mail_center after dinner
		if no, then I get my monitor myself after lunch

ask DAVID if he is going to DISCRETE_MATH
	if yes, then ask DAVID to help with mail_center after discrete
	if no, ask if DAVID can help regardless
if DAVID says_yes to helping
	then +1 weight to paths with dinner with DAVID
```

I wrote it very quickly, so it's kind of scrappy and imprecise. But it genuinely helped and I ended up following it line for line IRL.

The algorithm is as follows:

I ask Sally and David independent of each other. First, I see if Sally is okay with getting dinner with me in general. If this doesn't pass and she's busy, then I would ask David to dinner and skip the rest of the algorithm.

If Sally is okay with getting dinner with me, then I would ask her if she's okay with David joining us. Here, we reach a split junction where my answer depends on David's route.

I ask David if he's going to discrete class first of all. But regardless of his answer, I converge to asking whether he's okay with helping me carry my monitor back from the mail center. If he says yes, then I weight more heavily the paths where I get dinner with him - despite me wanting to hang out with Sally just a little bit more.

## Conclusion?
Well, it ended up working in my favor.

Sally said yes to dinner, and so did David. David said he was going to Discrete, and also agreed to helping bring my monitor back after class. So I asked if Sally was okay with David joining us, and she said sure.

Kind of anticlimactic, but I'm happy. I got to eat dinner with my friends, and got help setting up my monitor. 😎

<img src="/assets/images/blog/2024-10-15-irl-monitor-algorithm/FullSizeRender-preview.png" alt="Real numbers" width="400"/>

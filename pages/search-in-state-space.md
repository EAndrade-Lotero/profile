---
layout: default
title: Search in a state space
permalink: /teaching/courses/search-in-state-space/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## Search in a state space

Breadth-First Search (BFS) is a blind (uninformed) search method because it explores the state space without using additional knowledge or heuristics to guide the search toward a goal. It relies only on the problem definition—the initial state, available actions, transition model, and goal test—to systematically explore possible states. Rather than evaluating which states are more promising, BFS expands the shallowest unexplored node first.

<section class="scrolly" aria-label="Search in a state space">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/teaching/state-space-18.png" alt="Initial state: the frontier contains only s0">
      <img data-step="1" src="{{ site.baseurl }}/assets/images/teaching/state-space-19.png" alt="Applicable actions: an arrow from s0 to s2, and the frontier is s0, s2">
      <img data-step="2" src="{{ site.baseurl }}/assets/images/teaching/state-space-20.png" alt="Transition: arrows from s0 to s2 and from s2 to s5, and the frontier is s0, s2, s5">
      <img data-step="3" src="{{ site.baseurl }}/assets/images/teaching/state-space-21.png" alt="Goal test: the path reaches s8, and the frontier is s0, s2, s5, s8">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>The frontier contains only s₀.</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>From s₀ the search reaches s₂.</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>From s₂ the search reaches s₅.</p>
    </div>
    <div class="scrolly-step" data-step="3">
      <p>From s₅ the search reaches s₈.</p>
    </div>
  </div>
</section>

Advantages:

- Complete: It is guaranteed to find a solution if one exists, provided the branching factor is finite.
- Optimal: It finds a solution with the minimum number of actions, assuming all actions have equal cost.

Disadvantages:

- High computational cost: The number of nodes grows exponentially with search depth, requiring substantial memory and processing time.
- Memory-intensive: It must store the frontier, which can become very large as the search progresses.

[Back to the course]({{ site.baseurl }}/teaching/courses/artificial-intelligence/)

<script src="{{ site.baseurl }}/assets/js/scrolly.js"></script>

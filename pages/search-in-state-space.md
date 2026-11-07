---
layout: default
title: Search in a state space
permalink: /teaching/courses/search-in-state-space/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## Search in a state space

The frontier is the set of nodes (states) that have been discovered but not yet expanded. It represents the boundary between the explored and unexplored parts of the state space. At each step, the search algorithm selects a node from the frontier according to its search strategy, expands it by applying the available actions, and adds the resulting new nodes to the frontier. In Breadth-First Search, the frontier is managed as a FIFO queue (First In, First Out), ensuring that the shallowest nodes are expanded first.

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
      <p>The frontier contains only s₀. (goal test = False)</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>From s₀ the search reaches s₂. (goal test = False)</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>From s₂ the search reaches s₅. (goal test = False)</p>
    </div>
    <div class="scrolly-step" data-step="3">
      <p>From s₅ the search reaches s₈. (goal test = True)</p>
    </div>
  </div>
</section>

The search terminates when a goal state is found or when the frontier becomes empty. When a node is selected from the frontier, the algorithm applies the goal test to determine whether it represents a solution. If it does, the search stops and returns the sequence of actions leading to that state. If the frontier is empty and no goal has been found, the algorithm concludes that no solution exists.

[Back to the course]({{ site.baseurl }}/teaching/courses/artificial-intelligence/)

<script src="{{ site.baseurl }}/assets/js/scrolly.js"></script>

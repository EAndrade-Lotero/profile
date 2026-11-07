---
layout: default
title: Breadth-First Search
permalink: /teaching/courses/breadth-first-search/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## Breadth-First Search

Breadth-First Search (BFS) is a blind (uninformed) search method because it explores the state space without using additional knowledge or heuristics to guide the search toward a goal. It relies only on the problem definition—the initial state, available actions, transition model, and goal test—to systematically explore possible states. Rather than evaluating which states are more promising, BFS expands the shallowest unexplored node first.

<section class="scrolly" aria-label="Breadth-first search">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-01.png" alt="The frontier is empty.">
      <img data-step="1" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-02.png" alt="FIFO = A.">
      <img data-step="2" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-03.png" alt="state ← POP(Frontier)">
      <img data-step="3" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-04.png" alt="state ← A">
      <img data-step="4" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-05.png" alt="state ← A child ← B (test = False)">
      <img data-step="5" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-06.png" alt="state ← A ADD(frontier, B)">
      <img data-step="6" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-07.png" alt="state ← A child ← C (test = False)">
      <img data-step="7" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-08.png" alt="state ← A ADD(frontier, C)">
      <img data-step="8" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-09.png" alt="state ← POP(Frontier)">
      <img data-step="9" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-10.png" alt="state ← B">
      <img data-step="10" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-11.png" alt="state ← B child ← D (test = False)">
      <img data-step="11" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-12.png" alt="state ← B ADD(frontier, D)">
      <img data-step="12" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-13.png" alt="state ← B child ← E (test = False)">
      <img data-step="13" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-14.png" alt="state ← B ADD(frontier, E)">
      <img data-step="14" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-15.png" alt="state ← POP(Frontier)">
      <img data-step="15" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-16.png" alt="state ← C">
      <img data-step="16" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-17.png" alt="state ← C child ← F (test = False)">
      <img data-step="17" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-18.png" alt="state ← C ADD(frontier, F)">
      <img data-step="18" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-19.png" alt="state ← C child ← G (test = False)">
      <img data-step="19" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-20.png" alt="state ← C ADD(frontier, G)">
      <img data-step="20" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-21.png" alt="state ← POP(Frontier)">
      <img data-step="21" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-22.png" alt="state ← D">
      <img data-step="22" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-23.png" alt="state ← D child ← H (test = False)">
      <img data-step="23" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-24.png" alt="state ← D ADD(frontier, H)">
      <img data-step="24" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-25.png" alt="state ← D child ← I (test = False)">
      <img data-step="25" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-26.png" alt="state ← D ADD(frontier, I)">
      <img data-step="26" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-27.png" alt="state ← POP(Frontier)">
      <img data-step="27" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-28.png" alt="state ← E">
      <img data-step="28" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-29.png" alt="state ← E child ← J (test = False)">
      <img data-step="29" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-30.png" alt="state ← E ADD(frontier, J)">
      <img data-step="30" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-31.png" alt="state ← E child ← K (test = False)">
      <img data-step="31" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-32.png" alt="state ← E ADD(frontier, K)">
      <img data-step="32" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-33.png" alt="state ← POP(Frontier)">
      <img data-step="33" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-34.png" alt="state ← F">
      <img data-step="34" src="{{ site.baseurl }}/assets/images/teaching/breadth-first-35.png" alt="state ← F child ← L (test = True)">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>The frontier is empty.</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>FIFO = A.</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="3">
      <p>state ← A</p>
    </div>
    <div class="scrolly-step" data-step="4">
      <p>state ← A</p>
      <p>child ← B (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="5">
      <p>state ← A</p>
      <p>ADD(frontier, B)</p>
    </div>
    <div class="scrolly-step" data-step="6">
      <p>state ← A</p>
      <p>child ← C (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="7">
      <p>state ← A</p>
      <p>ADD(frontier, C)</p>
    </div>
    <div class="scrolly-step" data-step="8">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="9">
      <p>state ← B</p>
    </div>
    <div class="scrolly-step" data-step="10">
      <p>state ← B</p>
      <p>child ← D (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="11">
      <p>state ← B</p>
      <p>ADD(frontier, D)</p>
    </div>
    <div class="scrolly-step" data-step="12">
      <p>state ← B</p>
      <p>child ← E (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="13">
      <p>state ← B</p>
      <p>ADD(frontier, E)</p>
    </div>
    <div class="scrolly-step" data-step="14">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="15">
      <p>state ← C</p>
    </div>
    <div class="scrolly-step" data-step="16">
      <p>state ← C</p>
      <p>child ← F (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="17">
      <p>state ← C</p>
      <p>ADD(frontier, F)</p>
    </div>
    <div class="scrolly-step" data-step="18">
      <p>state ← C</p>
      <p>child ← G (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="19">
      <p>state ← C</p>
      <p>ADD(frontier, G)</p>
    </div>
    <div class="scrolly-step" data-step="20">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="21">
      <p>state ← D</p>
    </div>
    <div class="scrolly-step" data-step="22">
      <p>state ← D</p>
      <p>child ← H (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="23">
      <p>state ← D</p>
      <p>ADD(frontier, H)</p>
    </div>
    <div class="scrolly-step" data-step="24">
      <p>state ← D</p>
      <p>child ← I (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="25">
      <p>state ← D</p>
      <p>ADD(frontier, I)</p>
    </div>
    <div class="scrolly-step" data-step="26">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="27">
      <p>state ← E</p>
    </div>
    <div class="scrolly-step" data-step="28">
      <p>state ← E</p>
      <p>child ← J (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="29">
      <p>state ← E</p>
      <p>ADD(frontier, J)</p>
    </div>
    <div class="scrolly-step" data-step="30">
      <p>state ← E</p>
      <p>child ← K (test = False)</p>
    </div>
    <div class="scrolly-step" data-step="31">
      <p>state ← E</p>
      <p>ADD(frontier, K)</p>
    </div>
    <div class="scrolly-step" data-step="32">
      <p>state ← POP(Frontier)</p>
    </div>
    <div class="scrolly-step" data-step="33">
      <p>state ← F</p>
    </div>
    <div class="scrolly-step" data-step="34">
      <p>state ← F</p>
      <p>child ← L (test = True)</p>
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

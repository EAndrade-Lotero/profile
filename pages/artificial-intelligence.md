---
layout: page
title: Artificial intelligence
permalink: /teaching/courses/artificial-intelligence/
---

*Representación y solución automática de problemas.* Master's in Computer Science (MACC), Universidad del Rosario, 2025-2. Required course, 3 credits. Prerequisites: Probability and Statistics I, and Theory of Computation.

### Summary

This course presents an overview of artificial intelligence. It is a starting point for discussing what intelligence is and how to build agents that act intelligently, and it introduces central topics in the field. Students examine the characteristics of an intelligent agent, how problems are represented, how optimal solutions are searched for, and how reasoning and inference systems work. By the end of the course, students understand the algorithmic foundations of artificial intelligence and how they relate to other areas of knowledge. The course also presents examples of AI applied in different fields.

<div class="outcomes-label">
  <span class="info-tip">
    <button type="button" class="info-tip-button" aria-label="Show expected learning outcomes" aria-describedby="ai-outcomes">
      <i class="material-icons" aria-hidden="true">info_outline</i>
    </button>
    <span class="info-tip-panel" id="ai-outcomes" role="tooltip">
      <p>By the end of the course, students are able to:</p>
      <ol>
        <li>Describe contested questions about the ideal of artificial intelligence, and distinguish symbolic from subsymbolic AI and narrow AI from general AI.</li>
        <li>Describe the main properties of the environments in which intelligent agents act.</li>
        <li>Explain the main characteristics of an intelligent agent in the context of cognitive technologies.</li>
        <li>Represent problems as state spaces and implement search algorithms for situations of different complexity.</li>
        <li>Apply logic-based knowledge representation to carry out automatic inference in problems of low complexity.</li>
        <li>Apply probabilistic knowledge representation to carry out probabilistic inference in problems of low complexity.</li>
        <li>Design and implement an artificial neural-network architecture (autoregressive Transformers) and evaluate how well it simulates computation at the level of finite automata.</li>
      </ol>
    </span>
  </span>
  Expected learning outcomes
</div>

<div class="outcomes-label">
  <span class="info-tip">
    <button type="button" class="info-tip-button" aria-label="Show contents" aria-describedby="ai-contents">
      <i class="material-icons" aria-hidden="true">info_outline</i>
    </button>
    <span class="info-tip-panel" id="ai-contents" role="tooltip">
      <ol>
        <li>Introduction to artificial intelligence.</li>
        <li>Search in state spaces.</li>
        <li>Formal ontology and reasoning in predicate logic.</li>
        <li>Automatic inference in classical logic.</li>
        <li>Probabilistic inference: Bayesian networks and decision networks.</li>
        <li>Two-player zero-sum games.</li>
        <li>Connectionism, and subsymbolic versus symbolic processing.</li>
      </ol>
    </span>
  </span>
  Contents
</div>

### Example material about search in a state space

A state space is a way of representing a problem as the situations it can be in and the moves that connect them. A state is a description of everything about the world that matters for the problem at one moment. An action turns one state into another. With an initial state and a test for which states count as goals, these pieces form a graph: the nodes are states, and the edges are the actions that lead from one state to the next.

The eight queens puzzle is a concrete case. Eight queens must be placed on a chessboard so that no two share a row, a column, or a diagonal. One state space builds the placement one row at a time. A state records the columns already chosen. An action places the next queen in a column of the following row where it attacks no queen already on the board. A goal state has a queen in every row. The board below is one of the 92 goal states.

<figure class="course-figure">
  <img src="{{ site.baseurl }}/assets/images/teaching/eight-queens.png" alt="One solution of the eight queens puzzle, with queens on a1, e2, h3, f4, c5, g6, b7, and d8.">
  <figcaption>One solution of the eight queens puzzle.</figcaption>
</figure>

Search in a state space is the idea of solving the problem by exploring that graph. From the initial state, a search procedure applies the available actions, generates the resulting states, and keeps the path by which each state was reached. It stops when it finds a state that passes the goal test. The solution is the sequence of actions along that path, not the goal state by itself. Search algorithms differ in which generated state they choose to expand next, but they share this picture: generate candidate states, test them, and remember how they were reached.

**[Learn more about search in a state space]({{ site.baseurl }}/teaching/courses/search-in-state-space/)**

One of the simplest search algorithms is Breadth-first search. It explores the state space one level at a time, starting from the initial state. At each step, it expands the shallowest node in the frontier (the set of nodes that have been generated but not yet expanded). Thus, it explores all states at a given depth before moving on to states at the next depth.

**[Learn more about breadth-first search]({{ site.baseurl }}/teaching/courses/breadth-first-search/)**



[Back to courses]({{ site.baseurl }}/teaching/courses/)

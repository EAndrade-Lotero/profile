---
layout: page
title: Reinforcement learning
permalink: /teaching/courses/reinforcement-learning/
---

*Aprendizaje por refuerzo.* Master's in Computer Science (MACC), Universidad del Rosario, 2025-2. Elective, 2 credits. Prerequisite: Deep learning.

### Summary

This course introduces reinforcement learning: its algorithms and its applications. By the end of the course, students are able to design and implement reinforcement-learning models to solve problems.

<div class="outcomes-label">
  <span class="info-tip">
    <button type="button" class="info-tip-button" aria-label="Show expected learning outcomes" aria-describedby="rl-outcomes">
      <i class="material-icons" aria-hidden="true">info_outline</i>
    </button>
    <span class="info-tip-panel" id="rl-outcomes" role="tooltip">
      <p>By the end of the course, students are able to:</p>
      <ol>
        <li>Understand the conceptual approach of reinforcement learning.</li>
        <li>Explain how different reinforcement-learning algorithms differ.</li>
        <li>Implement reinforcement-learning models to solve problems.</li>
      </ol>
    </span>
  </span>
  Expected learning outcomes
</div>

<div class="outcomes-label">
  <span class="info-tip">
    <button type="button" class="info-tip-button" aria-label="Show contents" aria-describedby="rl-contents">
      <i class="material-icons" aria-hidden="true">info_outline</i>
    </button>
    <span class="info-tip-panel" id="rl-contents" role="tooltip">
      <ol>
        <li>The place of reinforcement learning in machine learning.</li>
        <li>Markov decision processes and dynamic programming.</li>
        <li>Monte Carlo methods and temporal-difference methods (Q-learning and SARSA).</li>
        <li>Function approximation and deep reinforcement learning.</li>
        <li>Policy-gradient methods.</li>
      </ol>
    </span>
  </span>
  Contents
</div>

### Example material about Q-values

Imagine training a robot to reach an exit without falling into a pit. 

<figure class="course-figure">
  <img src="{{ site.baseurl }}/assets/images/teaching/OneDGridWorld.gif" alt="A one-dimensional grid world in which an agent moves toward the goal while its Q-values change">
  <figcaption>An agent learning Q-values in a one-dimensional grid world.</figcaption>
</figure>

From an AI perspective, the key question is not merely, “How should we train the agent?” but rather, “What must the agent know for learning to be possible?” This question is especially compelling because it points to a broader scientific problem: what prior structure has nature given intelligent organisms so that they can learn from experience?

We can approach this question from first principles. The first is that the agent and its environment form a continuous feedback loop. At each time step, the agent observes the current state and chooses an action. The environment then changes state and returns a reward that indicates how favorable the outcome was.

<figure class="course-figure">
  <img src="{{ site.baseurl }}/assets/images/teaching/agent-loop.png" alt="Reinforcement-learning loop: the agent sends actions to the environment, which returns state observations and rewards">
  <figcaption>The reinforcement-learning loop between an agent and its environment.</figcaption>
</figure>

The second principle is that the agent generally chooses the action it currently expects to produce the greatest long-term return. Its estimate may be inaccurate because it is based on limited experience. The agent does not need to reason through this choice explicitly: it uses a quantity called a Q-value, written *Q(s, a)*, which estimates the total future reward from taking action *a* in state *s*. This is the central idea behind Q-values.

The third principle is that the agent updates these estimates as it gains experience. Positive outcomes increase the estimated value of the actions that led to them, whereas negative outcomes decrease it. We will return to the precise update rule later. For now, the tutorial below illustrates how Q-values guide behavior and change through experience.


[Back to courses]({{ site.baseurl }}/teaching/courses/)

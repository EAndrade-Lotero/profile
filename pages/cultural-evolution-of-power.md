---
layout: default
title: System-level power
permalink: /research/cultural-evolution-of-power/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## System-level power

In <a href="{{ site.baseurl }}/assets/pdfs/Cultural_evolution_of_power_dynamics_between_workers_and_managers.pdf" target="_blank" rel="noopener noreferrer">this project</a>, we explore the preferences of power roles. Imagine a situation in which your interests are not aligned with those of other people. If you had control over the conditions of the interaction, would you act on self-interest or would you favor a more prosocial configuration?

<section class="scrolly" aria-label="System-level power">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/research/exp1.jpeg" alt="Foragers collecting resources">
      <img data-step="1" src="{{ site.baseurl }}/assets/images/research/interaction.png" alt="Manager and foragers interaction">
      <img data-step="2" src="{{ site.baseurl }}/assets/images/research/evolution_power.png" alt="Cultural transmission of tax rates">
      <img data-step="3" src="{{ site.baseurl }}/assets/images/research/proposed_vs_starting_by_power_role-1.png" alt="Proposed versus starting tax by power role">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>To make these questions concrete, we are developing a large-scale online experiment in which foragers collect resources from the environment.</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>The size of the harvest is highly dependent on the initial locations of foragers, so we introduce a manager, who invests in information to better coordinate effort and who collects their reward by taxing the foragers' harvest.</p>
      <p>Now, do foragers prefer a small tax rate? What rate would managers prefer?</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>We treat these preferences as inductive biases, which we study using the technique of cultural transmission. One generation of manager and foragers use a given tax rate and, at the end of the interaction, either the manager or the foragers (we take their average) propose a new tax rate, which will be the given tax for a new generation. In turn, this generation will propose a new tax and so on.</p>
    </div>
    <div class="scrolly-step" data-step="3">
      <p>We found that participants maintained high effort regardless of the tax rate. Although tax proposals reflected role-specific self-interest, managers and workers converged on moderate rather than extreme tax rates.</p>
    </div>
  </div>
</section>

Simulations further showed that Reinforcement Learning or Gibbs Sampling with people can improve collective performance while reducing inequality, motivating future experiments with human–AI institutional design.

[Back to research]({{ site.baseurl }}/research/)

<script src="{{ site.baseurl }}/assets/js/scrolly.js"></script>

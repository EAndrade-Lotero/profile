---
layout: default
title: Iterative Cognitive Schema Matching
permalink: /research/iterative-cognitive-schema-matching/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## Iterative Cognitive Schema Matching

We observed a similar use of focal regions in a different coordination task: the El Farol Bar Problem. In this paradigm, a town of 100 people has a bar that everyone would like to visit every Thursday. If no more than 60 people attend, everyone enjoys the evening. If attendance exceeds 60, the bar becomes overcrowded, and those who went would have preferred to stay home.

The El Farol Bar Problem captures the tension between individual and collective interests. Each person prefers to attend the bar, but when too many do so, everyone's payoff declines. Moreover, avoiding overcrowding does not guarantee fairness.

<section class="scrolly" aria-label="El Farol coordination">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/research/types_of_coordination.png" alt="Types of coordination">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>Attendance patterns such as the segmented and mixed solutions shown in the left column of the figure achieve efficient use of the bar while producing unequal payoffs across individuals. By contrast, the two alternation patterns in the right column achieve the same level of efficiency while distributing attendance opportunities equally over time.</p>
    </div>
  </div>
</section>

We found that people maintain a small repertoire of intuitive behavioral patterns, then track which focal pattern best reflects the group's recent history and coordinate their actions based on the predictions of this best-fitting schema.

<section class="scrolly" aria-label="El Farol schema selection">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/research/el_farol_004.png" alt="Initial attendance history">
      <img data-step="1" src="{{ site.baseurl }}/assets/images/research/el_farol_005.png" alt="Candidate cognitive schemas">
      <img data-step="2" src="{{ site.baseurl }}/assets/images/research/el_farol_006.png" alt="Individuals evaluating candidate schemas">
      <img data-step="3" src="{{ site.baseurl }}/assets/images/research/el_farol_007.png" alt="Selected schema generating a new attendance history">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>Starting from a history of attendance decisions,</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>and a small repertoire of cognitive schemas, individuals evaluate the similarity between the observed history and each candidate schema.</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>Each schema encodes a complete set of policies, specifying who performs which action and when. In some situations, a single schema is clearly favored; in others, multiple schemas remain plausible.</p>
    </div>
    <div class="scrolly-step" data-step="3">
      <p>Individuals then act according to the selected schema, generating a new history and repeating the process.</p>
    </div>
  </div>
</section>

Our proposed computational cognitive model builds directly upon this pattern-prediction intuition. It also includes two lower-level mechanisms, which reward payoff and attendance. This model fits the experimental data better than other models based on reinforcement learning, bounded rationality, and fictitious play.

[Back to research]({{ site.baseurl }}/research/)

<script src="{{ site.baseurl }}/assets/js/scrolly.js"></script>

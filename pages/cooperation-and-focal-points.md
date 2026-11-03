---
layout: default
title: Cooperation and focal points
permalink: /research/cooperation-and-focal-points/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/scrolly.css">

## Cooperation and focal points

One of our core findings demonstrates that 'focal points'—psychologically salient solution scenarios—are instrumental in achieving coordination during repeated tasks.

The central idea is this: When faced with a coordination problem, humans mentally simulate a few potential scenarios. They then assess how well their current reality matches these imagined scenarios and adjust their behavior to align with the most accurate prediction (see <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/tops.12644" target="_blank" rel="noopener noreferrer">this paper</a> for a more overarching approach).

To illustrate the point, consider the following task:

<section class="scrolly" aria-label="Seek the unicorn">
  <div class="scrolly-sticky">
    <div class="scrolly-figure">
      <img data-step="0" class="is-active" src="{{ site.baseurl }}/assets/images/research/unicorn.png" alt="Seek the unicorn task">
      <img data-step="1" src="{{ site.baseurl }}/assets/images/research/focal_regions.png" alt="Focal regions">
      <img data-step="2" src="{{ site.baseurl }}/assets/images/research/FRA.gif" alt="Focal region attractors">
    </div>
  </div>
  <div class="scrolly-steps">
    <div class="scrolly-step is-active" data-step="0">
      <p>A pair of players must find whether there is or not a unicorn hidden beneath one of the tiles in a grid.</p>
      <p>Each player privately knows what they find under the tiles. The public knowledge is which tiles both players have searched in common and what the other player has guessed. Overlapping searches penalize the players' score.</p>
    </div>
    <div class="scrolly-step" data-step="1">
      <p>Examining the frequency each tile was uncovered, we found that players split the grid using some natural divisions.</p>
    </div>
    <div class="scrolly-step" data-step="2">
      <p>These regions drove players' decisions in an interesting way: they worked as behavioral attractors and the complementary regions acted as repellers. A player was more likely to uncover a region the more it resembled a focal region. And the more their inefficient overlap resembled a focal region, the more the player was attracted to the complementary region.</p>
    </div>
  </div>
</section>

We fit a computational cognitive model incorporating these mechanisms to the data. The model outperformed several alternative accounts and qualitatively reproduced the behavioral patterns observed in the experiment. See details in <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0254532" target="_blank" rel="noopener noreferrer">this paper</a>.

[Back to research]({{ site.baseurl }}/research/)

<script src="{{ site.baseurl }}/assets/js/scrolly.js"></script>

---
layout: post
title: 'Conditional Density Notes - OCW 6.041'
date: 2020-04-25 01:46:00 +0300
author: 'Mahmoud Aslan'
style: 'cond-density-notes'
script: ['cond-density-notes.min.js']
tags: [math, probability]
mathjax: 'true'
animejs: 'true'
bg_attrib: 'Photograph courtesy of <a href="http://www.flickr.com/photos/angelaypablo/954363228">aranarth</a> on Flickr. (adapted)'
---

### Introduction

Working with probability theory requires understanding its two discrete and continuous worlds. While the discrete case can be straightforward to understand, the continuous one can be a little bit more tricky, yet crucial to fully utilize the tools of probability theory. Here I share my notes while going through the [Introduction to Probability book](http://athenasc.com/probbook.html){:target="_blank"} by D. Bertsekas and J. Tsitsiklis, and its [accompanying lectures](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/){:target="_blank"}.

The main purpose of this post is to visually illustrate how conditional densities are formed. Having a visual model of these concepts can aid our intuition around other composite concepts such as Bayes' rule and conditional expectation as a random variable or an estimator.

### Sample Space, Random Variables, and Events

Consider an experiment where we choose at random a number from the real line. The set of all possible outcomes of such an experiment is called the sample space {::nomarkdown}\({ \Omega }\){:/}, and for this particular one the sample space is all the real numbers.

We define a random variable as a function of the sample space, i.e., it maps each outcome of the experiment to a real number. In the previous example, a function {::nomarkdown} \({X}\) {:/} that doubles each outcome is a random variable. So if the outcome of the experiment was 2.1, then the random variable X would take the value 2.1*2 = 4.2.

{::nomarkdown}
<div id="fig1" class="svg-container">
{% include imgs/cond-density-notes/fig1.svg %}
<div class="animejs-controls">
<button id="fig1-ctrls-play" class="controls-play play">Play</button>
<button id="fig1-ctrls-pause" class="controls-pause pause">Pause</button>
<button id="fig1-ctrls-restart" class="controls-restart restart">Restart</button>
<input type="range" min="0" max="100" value="0" step="0.001" class="progress controls-progress"></input>
</div>
</div>
{:/}

The density of the random variable is derived from the density of the sample space where the density at value {::nomarkdown} \({X=x}\) {:/} is computed by accumlating the probabilities of the outcomes in the sample space that make {::nomarkdown} \({X}\) {:/} take the value{::nomarkdown} \({x}\) {:/}. In our example, each value of {::nomarkdown} \({X}\) {:/} is caused by only one outcome in the sample space, for example, the only outcome which makes {::nomarkdown} \({X}\) {:/} take the value 4.2 is 2.1, therefore, the density at {::nomarkdown} \({X=4.2}\) {:/} equals the density at 2.1 in the sample space.

An event is defined as a group of one or more outcomes from the sample space. For example, in the previous experiment let {::nomarkdown} \({A}\) {:/} be the event that all the outcomes fall between {::nomarkdown} \({a}\) {:/} and {::nomarkdown} \({b}\) {:/}, where {::nomarkdown} \({a}\) {:/} and {::nomarkdown} \({b}\) {:/} are real numbers.

### Conditioning a Random Variable on an Event

If we know that {::nomarkdown} \({A}\) {:/} has occurred, where {::nomarkdown} \({A}\) {:/} is the event of the output falling within {::nomarkdown} \({[a, b]}\) {:/}, then it is only reasonable to rethink our probabilities since now all outcomes outside the range {::nomarkdown} \({[a, b]}\){:/} are impossible with zero probability and hence zero density.

We defined the sample space earlier as the set of all possible outcomes, when conditioning on {::nomarkdown} \({A}\) {:/}, a subset of these outcomes are no longer possible, therefore, conditioning on {::nomarkdown} \({A}\) {:/} defines a new set of possible outcomes, i.e. a new sample space.

Since random variables are just functions of the sample space, then restricting/changing that space would potentially restrict/change the output of these functions, i.e. restricting the sample space would restrict the values that the random variable can take. As a consequence, when {::nomarkdown} \({A}\) {:/} happens, the random variable {::nomarkdown} \({X}\) {:/} as defined above can only take values between {::nomarkdown} \({[2a, 2b]}\) {:/} and all other values are now impossible with zero probability and hence have zero density.

{::nomarkdown}
<div id="fig2" class="svg-container">
{% include imgs/cond-density-notes/fig2.svg %}
<div class="animejs-controls fig2-ctrls">
<button id="fig2-ctrls-play" class="controls-play play">Play</button>
<button id="fig2-ctrls-pause" class="controls-pause pause">Pause</button>
<button id="fig2-ctrls-restart" class="controls-restart restart">Restart</button>
<input type="range" min="0" max="100" value="0" step="0.001" class="progress controls-progress"></input>
</div>
</div>
{:/}

According to the second [Kolmogorov probability axiom](https://en.wikipedia.org/wiki/Probability_axioms), the probability of the sample space should integrate to 1. When conditioning on A the new sample space integrates to 0.65, what about the remaining 0.35 of our beliefs?. Here is where the need for a systematic way to redistribute our 100% beliefs over the new sample space arises, and that is what conditional probability provides us with. So conditional density law can be seen as an application of the second probability axiom (normalization).

To further illustrate the idea of normalization, consider the following discrete example. If we had three numbers, say: 6, 4, and 10, and we wanted to make them add up to one while preserving their ratios, we simply divide each by the total sum, so the new values become: 6/20=0.3, 4/20=0.2, and 10/20=0.5. The numbers now add up to 1 while the ratio between them is preserved (6/4 = 0.3/0.2 = 1.5, the same holds for the other numbers).

In the continuous world, instead of dividing by the sum we divide by the integral (area under the curve) as shown in the conditional density formula:

<div class="equation-container">
$$
f_{X|A}(x) = \frac{f_X(x)}{\int_A f_X(x) dx}
$$
</div>

{::nomarkdown}
<div id="fig3" class="svg-container">
{% include imgs/cond-density-notes/fig3.svg %}
<div class="animejs-controls">
<button id="fig3-ctrls-play" class="controls-play play">Play</button>
<button id="fig3-ctrls-pause" class="controls-pause pause">Pause</button>
<button id="fig3-ctrls-restart" class="controls-restart restart">Restart</button>
<input type="range" min="0" max="100" value="0" step="0.001" class="progress controls-progress"></input>
</div>
</div>
{:/}

### Conditioning 2 Random Variables on an Event

Let {::nomarkdown} \({X, Y}\) {:/} be two random variables with joint density described by {::nomarkdown} \({f_{X, Y}}\) {:/}. Let {::nomarkdown} \({C}\) {:/} be an event which makes these two random variables take values only within {::nomarkdown} \({[a, b]}\) {:/} and {::nomarkdown} \({[c, d]}\) {:/} respectively. If we were told that {::nomarkdown} \({C}\) {:/} happend, then the conditional joint density of {::nomarkdown} \({X, Y}\) {:/} is equal to zero for values outside {::nomarkdown} \({C}\) {:/} and given by the following formula for values within {::nomarkdown} \({C}\) {:/}:

<div class="equation-container">
$$
{f_{X, Y| C}(x, y) = \frac{f_{X, Y}(x, y)}{P(C)} = \frac{f_{X, Y}(x, y)}{\int_C f_{X, Y}(x, y) dx dy}}
$$
</div>

This computation can be illustrated as follows:

{::nomarkdown}
<div id="fig4" class="svg-container with-controls">
{% include imgs/cond-density-notes/fig4.svg %}
<div class="animejs-controls">
<button class="controls-play play">Play</button>
<button class="controls-pause pause">Pause</button>
<button class="controls-restart restart">Restart</button>
<input type="range" min="0" max="100" value="0" step="0.001" class="progress controls-progress"></input>
</div>
</div>
{:/}

### Conditioning a Random Variable on Another

Another important case is when two random variables are related, in which case restrictions to one random variable's range of values might affect the range of the other. Let {::nomarkdown} \({X, Y}\) {:/} be two random variables whose joint density is given by {::nomarkdown} \({f_{X, Y}}\) {:/}. If we were told that {::nomarkdown} \({X}\) {:/} took the value {::nomarkdown} \({x}\) {:/}, then that should affect our beliefs about both {::nomarkdown} \({X}\) {:/} and {::nomarkdown} \({Y}\) {:/}. For {::nomarkdown} \({X}\) {:/}, all values other than {::nomarkdown} \({x}\) {:/} will have zero probability/density, since we now know that {::nomarkdown} \({X = x}\) {:/}. For {::nomarkdown} \({Y}\) {:/}, the conditional density formula is used to update our beliefs about its different values, which is given by:

<div class="equation-container">
$$
{f_{Y|X=x} (y | x) = \frac{f_{X, Y}(x, y)}{\int_{y = -\infty}^{\infty} f_{X, Y} (x, y) dy}}
$$
</div>

This computation can be illustrated as follows:

{::nomarkdown}
<div id="fig5" class="svg-container">
{%include imgs/cond-density-notes/fig5.svg%}
<div class="animejs-controls">
<button class="controls-play play">Play</button>
<button class="controls-pause pause">Pause</button>
<button class="controls-restart restart">Restart</button>
<input type="range" min="0" max="100" value="0" step="0.001" class="progress controls-progress"></input>
</div>
</div>
{:/}

This figure is a reproduction of figure 1 from chapter 6 of [Probability by Jim Pitman.](https://www.springer.com/gp/book/9780387979748)

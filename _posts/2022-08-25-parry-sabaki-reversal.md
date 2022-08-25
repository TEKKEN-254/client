---
layout: post
title: "Parry, reversal, and sabaki: What's the difference?"
description: A detailed explanation of parries, reversals, and sabakis in Tekken.
author:
  - dvk
date: 2022-08-25T13:37:53.805Z
category: guides
tags:
  - Tekken 7
caption: "Asuka Kazama performing her reversal against Lili De Rochefort"
slug: parry-reversal-sabaki
advanced:
  metaImageExt: png
  metaImageSize: contain
---
{% capture asset_path %}/assets/img/news/{{ page.date | date: "%Y-%m-%d" }}-{{ page.slug }}{% endcapture %}
{% include gif-toggler.html %}
<p>As part of their move list, several characters in <em>Tekken</em> have <strong>parries</strong>, <strong>reversals</strong>, and <strong>sabakis</strong>, which can be powerful defensive options when used correctly, and fatal when misused. However, a vast majority of the <em>Tekken</em> community often lumps all three together under one name, often calling them all parries. All three counter attacks from the opponent, so what's the difference between them?</p>

<p class="d-none d-lg-block">Each section is accompanied by GIF illustrations, which you can view by clicking on "toggle GIFs".</p>

<section>
    <h2 class="site-red">Parries</h2>
    <p>A parry is a move that counters the opponent's attack and <strong>does nothing more on its own</strong>. The reward for a successful parry varies between characters, for example:</p>

    <ul>
        <li><a href="/guides/character.html?view=lei" target="_blank" rel="noreferrer">Lei Wulong</a> has parries that give him frame advantage</li>
        <li><a href="/guides/character.html?view=master-raven" target="_blank" rel="noreferrer">Master Raven</a> has parries that allow her to create distance with the opponent</li>
        <li><a href="/guides/character.html?view=jin" target="_blank" rel="noreferrer">Jin Kazama</a> has a parry that affords him a wide range of manual follow-ups, depending on the parried move's recovery</li>
    </ul>

    <div class="row gif-row">
        <figure class="col-6 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/1.gif" alt="Jin Kazama performing a parry">
            <figcaption>Jin performing a parry</figcaption>
        </figure>
        <figure class="col-6 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/2.gif" alt="Jin Kazama successfully parrying an attack from Kazuya Mishima">
            <figcaption>Jin successfully parrying an attack</figcaption>
        </figure>
    </div>
</section>

<section>
    <h2 class="site-red">Reversals</h2>
    <p>A reversal is a move that counters the opponent's attack and <strong>returns another attack</strong>. The attack returned may depend on the nature of the reversed attack (i.e. punch or kick) and, like with parries, the reward for a successful reversal varies between characters, for example:</p>

    <ul>
        <li><a href="/guides/character.html?view=nina" target="_blank" rel="noreferrer">Nina Williams</a> has a reversal that leads to a chain throw</li>
        <li><a href="/guides/character.html?view=heihachi" target="_blank" rel="noreferrer">Heihachi Mishima</a> has a reversal that leads to a floor break, though he still takes damage</li>
        <li><a href="/guides/character.html?view=asuka" target="_blank" rel="noreferrer">Asuka Kazama</a> has a reversal that leads to a combo at the wall (punches only)</li>
    </ul>

    <div class="row gif-row">
        <figure class="col-4 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/3.gif" alt="Asuka Kazama performing a reversal">
            <figcaption>Asuka performing a reversal</figcaption>
        </figure>
        <figure class="col-4 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/4.gif" alt="Asuka Kazama successfully reversing a punch from Lili De Rochefort">
            <figcaption>Asuka successfully reversing a punch</figcaption>
        </figure>
        <figure class="col-4 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/5.gif" alt="Asuka Kazama successfully reversing a kick from Lili De Rochefort">
            <figcaption>Asuka successfully reversing a kick</figcaption>
        </figure>
    </div>
</section>

<section>
    <h2 class="site-red">Sabakis</h2>
    <p>A sabaki is an attack that <strong>counters the opponent's attack at certain points of its animation</strong>. Unlike a reversal, a sabaki does not require a successful counter to connect with the opponent, though <strong>its properties change on a successful counter</strong>. Once again, the reward for a successful sabaki counter varies between characters, for example:</p>

    <ul>
        <li><a href="/guides/character.html?view=leo" target="_blank" rel="noreferrer">Leo Kliesen</a> has a sabaki that knocks down the opponent for a guaranteed follow-up</li>
        <li><a href="/guides/character.html?view=feng" target="_blank" rel="noreferrer">Feng Wei</a> has a sabaki that launches the opponent</li>
    </ul>

    <div class="row gif-row">
        <figure class="col-6 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/6.gif" alt="Feng Wei performing his sabaki">
            <figcaption>Feng performing a sabaki</figcaption>
        </figure>
        <figure class="col-6 inline-fig smaller" role="complementary">
            <img src="{{ asset_path }}/7.gif" alt="Feng Wei successfully countering an attack from Marshall Law with a sabaki">
            <figcaption>Feng successfully countering an attack with a sabaki</figcaption>
        </figure>
    </div>
</section>

<aside>
    <hr />
    <p>The differences between the three options above can be summarised with the table below.</p>
    <table class="table table-sm table-responsive-lg post-table parries-reversals-sabakis">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"><span data-toggle="tooltip" title="Counters the opponent's attack">Counter</span></th>
                <th scope="col"><span data-toggle="tooltip" title="Automatic attack follow-up">Follow-up</span></th>
                <th scope="col"><span data-toggle="tooltip" title="Is an attack that does damage">Attack</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Parry</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Reversal</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Sabaki</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
        </tbody>
    </table>
</aside>
---
layout: layouts/project.njk
title: Test Project without Animation!
thumbnailSrc: "https://picsum.photos/400/200"
tags: ['projects', '3d-models']
---

## {{ title }}

This is a test project that doesn't have animation. It should **NOT** be visible when the user filters for animation.

We're also going to include an image with html in here to see what happens.

### Here goes nothing!

<div class="frame"><img src="https://picsum.photos/200/300" alt=""></img></div>

If it worked, that image should be rendering properly and should also be a square.

For reference, this is what would happen if we didn't include the frame wrapper

<img src="https://picsum.photos/200/300" alt="">

Notice how the dimensions aren't forced to the aspect ratio dictated by the frame (set by default to 1:1). Use the frame when you need to.

### Let's try the same with an embedded video from youtube!

<div class="frame">
<iframe src="https://www.youtube.com/embed/GdzrrWA8e7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/GdzrrWA8e7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Notice how the above iframe is wrapped in a frame. The frame div will make sure that the video fits inside the page. The thumbnail will be cropped/distorted but once the user plays the video it should appear in proper dimensions inside the player, along with the regular youtube controls for play/pause/fullscreen etc.
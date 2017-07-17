---
layout: post
title: What's going on?
date: 2017-07-18
author: Dizzy
banner: http://gencept.com/wp-content/uploads/2016/04/Wallpaper-of-the-Week-25-Material-Design-Inspired-Wallpapers_10-@-GenCept.jpg
---

What's up folks? Long time no see. It's been 7 months ago since our last post,
so I'll give you a small recap of what progress has been made already.

## Moved to React
We moved to React!!! But why you may ask.

As stated before (I think) we decided to go for Angular as our view controller, we liked the integration in TypeScript and how simple
Angular looked like back then. During the progress we and mostly I noticed how hard it actually was to make Angular work nicely in Electron.

It took me atleast 2 weeks to get it to build and dont even let me get started about developing it with live refresh...
During the last 7 months we got our initial release v0.0.1 but opted to keep it closed source, since it was slow, missing features like
cleaning your temp folder and more.
_PS: I had to find that out in a very hard way...Dizzy your HDD is full and 80% of the space is getting used by your temp folder_

So yea after that failure the project transformed into a dead project, until I found React.

I started messing around with it and even found a fully working Electron + React startup project, and today I can finally say that
the project in full production again.

## WCJS Player
WCJS Player also called WebChimera.js Player is a player that combines vlc player with javascript.
So in short...it performs way better then libraries like video.js and other non-native libraries.
In version 0.0.1 we used wcjs-prebuilt and we wrote a Angular Module for full integrations in the Angular ecosystem.
When we switched to React I was actually hoping to find a `wcjs-player` component for React,
but nope all we found was either unmaintained, not open source or just not what we needed. 

So yesterday I started on a little MovieCast side project [wcjs-player-react][wcjs-player-react-link]: A React Component for wcjs.
It's not much yet, but it will be the build-in player for MovieCast pretty soon.

## The ETA
To be honest...I, and I think the whole team agrees on this, dont really like to give an ETA. I and the other members of the team don't
get paid to work on MovieCast, we do this in our free time as something fun.

However, soon we will push all the current work to github and setup a Jenkins instance to allow nightly builds. These nightly builds
will not come with an installer, instead they will be packed into zip files you can extract wherever you like.
Official releases on the other side will have an installer.


I know I am very bad at writing texts like these, but I tried to recap our current state as good as possible.
_Next time you write something Grey :P_

If you wish to discuss this post with anyone of the team, join our [Discord server][discord-invite]

[wcjs-player-react-link]: https://github.com/MovieCast/wcjs-player-react
[discord-invite]: https://discord.me/MovieCast

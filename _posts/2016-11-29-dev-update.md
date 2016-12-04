---
layout: post
title: Dev Update 1
author: Grey
banner: http://www.topofandroid.com/wp-content/uploads/2015/05/Android-L-Material-Design-Wallpapers-5.png
---

This is our first dev update and we are happy to write this very first update.
In these updates, we shall talk about our progress and what we are planning for future updates.

## Introductie

Because this is the very first update, we shall explain what MovieCast is, and what our primairy goal is.
MovieCast is an application where you can easily stream movies and TV series,
our main goal is to make it the user as easy as possible to watch the content that he or she likes most.

Our developing team will have to work hard during the following months to realise this application,
and, of course, will have to make it easy to use, while maintaining a beautiful desing, that supports as many possible languages.

ItsDizzy is currently working on the backend which gives MovieCast the possibility to automatically update itself,
and , of course, send the data back to the user, resulting in a list of content to watch.

## Dev Talk

For the people who are still reading and don't coding interesting, follow [@MovieCastNews][twitter-link] to read the latest news about us,
this will also be the first place where we will announce our release.

For the people who do like coding, this is how MovieCast will work:
The desctop application will be writting in Electron, which supports Squirrel. Squirrel is an auto-updater.
It needs a so-called "updateFeed", this tells Squirrel what the latest verison is and where it can download this version.
The best way to do this, is to build it into the back-end, [nuts][nuts-link] is a good example for this.

Just like nuts, our back-end will be written in Node.JS and will use Github releases, but our back-end will be used for many more things.
It has to sort a list on date, popularity, etc.


[twitter-link]: https://twitter.com/MovieCastNews
[nuts-link]: https://github.com/GitbookIO/nuts
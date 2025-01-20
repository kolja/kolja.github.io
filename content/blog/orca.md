+++
title = "ORCA"
date = 2024-12-28
+++

{{ img(name="orca.logo", extension="png", preview_alt="an orca whale reading a red book", classes=["clickable", "floatleft"]) }}

As I am constantly fighting for a more minimal lifestyle and less clutter, I decided to move my entire bookshelf to the "cloud" (the Synology NAS in my livingroom).\
Now I am using [Calibre](https://calibre-ebook.com/) to keep track of all the books I own.

Whenever I want to read a book, I'll open [Yomu](https://www.yomu-reader.com/) on my iPad, which can add books from an OPDS feed, so all the books I ever read are just a tap and a swipe away.

But how do you serve your Calibre library as OPDS feed, such that you can access it anywhere?
I felt that there was no simple, straight-forward solution out there, so I decided to write my own.

ORCA (OPDS Rust CAlibre, I guess) is a single binary that can serve your Calibre library as an OPDS feed. It comes with basic authentication and TLS support.

This means, it's easy to run it in a docker container or to install locally (e.g with brew). Apart from a simple config file, it has no dependencies, so you don't need to mess with reverse proxies, LDAP or databases.

Go check it out on Github: [ORCA](https://github.com/kolja/orca)\
(and while you're at it, consider to give it a star!)

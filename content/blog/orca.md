+++
title = "ORCA"
date = 2024-12-28
+++

{{ image(src="blog/orca.logo.png", alt="an orca whale reading a red book", width="20%") }}

Recently, I decided to move my entire Library to the "cloud" (the Synology NAS in my Livingroom).
I am using [Calibre](https://calibre-ebook.com/) to keep track of all the books I own.

When I decide to read a book, I'll open [Yomu](https://www.yomu-reader.com/) on my iPad, which can add books from an OPDS feed.

But how do you serve your Calibre Library as OPDS feed, that one can access it anywhere?
I felt that there was no simple, straight-forward solution out there, so I decided to write my own.

ORCA (OPDS Rust CAlibre, I guess) is a single binary that can serve your Calibre
Library as an OPDS feed. It comes with basic authentication and TLS support.

Go check it out on Github: [ORCA](https://github.com/kolja/orca)

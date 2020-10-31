---
title: # Title of the post
description: # Short description of the post; this will appear in cards on the website and meta description tags
author: 
- # Shorthand of the author of the post (e.g. "tekken254" for TEKKEN 254); if multiple authors, use hyphen to list each author in a new line

category: # Competitive / Reports / Interviews / Guides / Statements
tags: [ ] # Between the piped brackets, tags separated by commas (Circuit / Fight Night / [player name] / [character name] / etc.)

# metaImage: File path for meta image ("https://tekken254.co.ke/" automatically prepended; "assets/img/news/yyyy-mm-dd-[page.slug]/meta.jpg" by default)
# caption: Caption for the image
# metaImageExt: File extension for meta image ("jpg" by default)
# metaImagePosition: Positioning for meta image (corresponds to css background-position property; "center" by default)
# metaImageSize: Size of meta image (corresponds to css background-size property; "cover" by default)

# top: Show this post as the top story in the home page jumbotron (Boolean value; "false" by default)
# featured: Show this post as a featured story below the home page jumbotron (Boolean value; "false" by default)

## NOTE: Posts are written in Markdown, though HTML is also supported. Visit https://www.markdownguide.org/basic-syntax/ for a basic guide on Markdown syntax.
---
Your content begins from this line.

<!--
// ADDING IMAGES 

{% include post-img.html src=" " caption=" " position=" " external=" " %}

# src: File path for the image ("/assets/img/news/yyyy-mm-dd-[page.slug]/" automatically prepended; enable "external" to input full path)
# caption: Caption for the image (optional)
# position: Positioning for the image (corresponds to css background-position property; "center" by default)
# external: Allows for a full path input in "src" (Optional, string value; "false" by default)

// NOTE:
- The include "post-img.html" is a div that spans the full width of the post area and cannot have its dimensions altered.
- Alternatively, you may include images using Markdown syntax: ![alt](url "title")

-->
no-nonsense
===========

Fully featured, content-focused Ghost theme

# Features

> This is a work in progress. Check tickboxes for status.

- [x] disqus support
- [x] responsive
- [ ] google analytics support
- [ ] google authorship
- [ ] minified assets
- [x] fitvid for responsive video embeds
- [ ] [instantclick](http://instantclick.io/) for fast loading
- [ ] code syntax highlight (via [prism](http://prismjs.com/))
- [x] social share buttons
- [ ] search (via [ghosthunter](https://github.com/i11ume/ghostHunter))
- [ ] linked social data support (twitter [cards](https://dev.twitter.com/docs/cards) and [opengraph](http://ogp.me/))
- [ ] semantic markup - [WAI-ARIA](http://www.w3.org/WAI/intro/aria) and [schema.org](http://www.schema.org/)
- [x] sass css for easy ways to customize the theme (i.e. change color scheme)
- [x] fontawesome support 


Inspired by [ghostwriter](https://github.com/roryg/ghostwriter) and [typesome](http://typesome.golem.io/features-list/).

# Install instructions

Add your Disqus shortname to `post.hbs` in the disqus section, on the line `var disqus_shortname = '';`.
Add your Google Analytics ID to `default.hbs` in the `<head>` section, on the line `ga('create', 'YOUR_ID_HERE', 'auto');`.


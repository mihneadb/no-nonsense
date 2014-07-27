no-nonsense
===========

Fully featured, content-focused Ghost theme. Inspired by [ghostwriter](https://github.com/roryg/ghostwriter) and [typesome](http://typesome.golem.io/features-list/).

See it live on my [blog](http://www.mihneadb.net).

# Features

> This is a work in progress. Check tickboxes for status.

- [x] disqus support
- [x] responsive
- [x] google analytics support
- [x] google authorship
- [ ] minified assets
- [x] fitvid for responsive video embeds
- [x] [instantclick](http://instantclick.io/) for fast loading
- [x] code syntax highlight (via [prism](http://prismjs.com/))
- [x] social share buttons
- [ ] search (via [ghosthunter](https://github.com/i11ume/ghostHunter))
- [ ] linked social data support (twitter [cards](https://dev.twitter.com/docs/cards) and [opengraph](http://ogp.me/))
- [ ] semantic markup - [WAI-ARIA](http://www.w3.org/WAI/intro/aria) and [schema.org](http://www.schema.org/)
- [x] sass css for easy ways to customize the theme (i.e. change color scheme)
- [x] fontawesome support
- [ ] logo support
- [x] easy to build - just `npm install` and `gulp watch`



# Install instructions

## Disqus
Add your Disqus shortname to `post.hbs` in the disqus section, on the line `var disqus_shortname = '';`.

## Google Analytics
Add your Google Analytics ID to `default.hbs` in the `<head>` section, on the line `ga('create', 'YOUR_ID_HERE', 'auto');`.

## Google Authorship
Add your Google+ ID to `default.hbs` on the line `<a class="hide" href="[profile_url]?rel=author">Google</a>` and
follow the rest of instructions [here](https://support.google.com/webmasters/answer/1408986?expand=option2).

## Code highlight
Use blocks like this:

<blockquote>
<p>
```language-python
</p><p>
print "hello, world"
</p><p>
```
</p>
</blockquote>

For more help, refer to the [prismjs website](http://prismjs.com).

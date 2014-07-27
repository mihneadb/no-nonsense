no-nonsense
===========

Fully featured, content-focused Ghost theme. Inspired by [ghostwriter](https://github.com/roryg/ghostwriter) and [typesome](http://typesome.golem.io/features-list/).

See it live on my [blog](http://www.mihneadb.net).

# Features

> This is a work in progress. Check tickboxes for status.

- [x] responsive
- [x] proper typography (using google web fonts + fallbacks)
- [x] fitvid for responsive video embeds
- [x] [instantclick](http://instantclick.io/) for fast loading
- [x] code syntax highlight (via [prism](http://prismjs.com/))
- [x] social share buttons
- [x] disqus support
- [x] google analytics support
- [x] google authorship
- [x] linked social data support (twitter [cards](https://dev.twitter.com/docs/cards) and [opengraph](http://ogp.me/))
- [x] semantic markup - [WAI-ARIA](http://www.w3.org/WAI/intro/aria) and [schema.org](http://www.schema.org/)
- [x] fontawesome support
- [x] minified assets
- [x] sass css for easy ways to customize the theme (i.e. change color scheme)
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

## Adding static pages to the navigation menu
Add the corresponding links in `partials/nav.hbs`, near the `About` entry.

## Twitter card
Add your twitter handle in `default.hbs` on the `<meta property="twitter:site" content="@YOUR_TWITTER_HANDLE" />`.
After that, apply to enable cards on your blog [here](https://dev.twitter.com/docs/cards/validation/validator).


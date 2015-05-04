![Ghost Compatability](https://img.shields.io/badge/Compatible%20with%20Ghost-v0.5.10-brightgreen.svg)

no-nonsense
===========


Fully featured, content-focused Ghost theme. Inspired by [ghostwriter](https://github.com/roryg/ghostwriter) and [typesome](http://typesome.golem.io/features-list/).

Scroll to the bottom for screenshots.

# Features

- multi author support
- responsive
- post cover image
- tag page description
- custom error page
- proper typography (using google web fonts + fallbacks)
- fitvid for responsive video embeds
- code syntax highlight (via [prism](http://prismjs.com/))
- related posts list via [jquery.ghostrelated](https://github.com/danecando/jquery.ghostrelated)
- social share buttons
- disqus support
- google analytics support
- semantic markup - [WAI-ARIA](http://www.w3.org/WAI/intro/aria) and [schema.org](http://www.schema.org/)
- twitter cards / fb open graph annotations (via Ghost default behavior)
- fontawesome support
- minified assets
- sass css for easy ways to customize the theme (i.e. change color scheme)
- easy to build - just `npm install` and `gulp watch`



# Install instructions

## Disqus
Add your Disqus shortname to `post.hbs` in the disqus section, on the line `var disqus_shortname = '';`.

## Google Analytics
Add your Google Analytics ID to `default.hbs` in the `<head>` section, on the line `ga('create', 'YOUR_ID_HERE', 'auto');`.

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

Make sure you are on Ghost 0.5.9+, then go to Settings -> Navigation and add your links.


# Screenshots

## Index page
![index](https://raw.githubusercontent.com/mihneadb/no-nonsense/master/screenshots/index.png)

## Post
![post](https://raw.githubusercontent.com/mihneadb/no-nonsense/master/screenshots/post.png)

## Author page
![author](https://raw.githubusercontent.com/mihneadb/no-nonsense/master/screenshots/author.png)

## Error page
![error](https://raw.githubusercontent.com/mihneadb/no-nonsense/master/screenshots/error.png)

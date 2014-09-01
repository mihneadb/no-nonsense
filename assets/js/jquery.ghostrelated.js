/*!
 * @package jquery.ghostrelated
 * @version 0.2.0
 * @Copyright (C) 2014 Dane Grant (danecando@gmail.com)
 * @License MIT
 */
;(function($) {

    defaults = {
        feed: '/rss',
        titleClass: '.post-title',
        tagsClass: '.post-meta',
        limit: 5,
        debug: false
    }


    function RelatedPosts(element, options) {

        this.element = element;
        this.options = $.extend({}, defaults, options);

        this.parseRss();
    };

    RelatedPosts.prototype.displayRelated = function(posts) {

        var self = this,
            count = 0;

        this._currentPostTags = this.getCurrentPostTags(this.options.tagsClass);

        var related = this.matchByTag(this._currentPostTags, posts);

        related.forEach(function(post) {
            if (count < self.options.limit) {
                $(self.element).append($('<li><a href="' + post.url + '">' + post.title + '</a></li>'));
            }
            count++;
        });

        if (count == 0) {
            $(this.element).append($('<p>No related posts were found. ' +
                'Check the <a href="/">index</a>.</p>'));
        }
    
    };

    RelatedPosts.prototype.parseRss = function(pageNum, prevId, feeds) {

        var page = pageNum || 1,
            prevId = prevId || '',
            feeds = feeds || [],
            self = this;

        $.ajax({
            url: this.options.feed + '/' + page,
            type: 'GET'
        })
        .done(function(data, textStatus, xhr) {

            var curId = $(data).find('item > guid').text();

            if (curId != prevId) {
                feeds.push(data);
                self.parseRss(page+1, curId, feeds);
            } else {
                var posts = self.getPosts(feeds);
                self.displayRelated(posts);
            }

        })
        .fail(function(e) {
            self.reportError(e);
        });

    };

    RelatedPosts.prototype.getCurrentPostTitle = function(titleClass) {

        if (titleClass[0] != '.') {
            titleClass = '.' + titleClass;
        }

        var postTitle = $(titleClass).text();

        if (postTitle.length < 1) {
            this.reportError("Couldn't find the post title with class: " + titleClass);
        }

        return postTitle;
    };


    RelatedPosts.prototype.getCurrentPostTags = function(tagsClass) {

        if (tagsClass[0] != '.') {
            tagsClass = '.' + tagsClass;
        }

        var tags = [];
        $(tagsClass + ' a').each(function() {
            tags.push($(this).text());
        });

        if (tags.length < 1) {
            this.reportError("Couldn't find any tags in this post");
        }

        return tags;
    };


    RelatedPosts.prototype.getPosts = function(feeds) {

        var posts = [], items = [];

        feeds.forEach(function(feed) {
            items = $.merge(items, $(feed).find('item'));
        });

        for (var i = 0; i < items.length; i++) {

            var item = $(items[i]);

            if (item.find('title').text() !== this.getCurrentPostTitle(this.options.titleClass)) {

                posts.push({
                    title: item.find('title').text(),
                    url: item.find('link').text(),
                    content: item.find('description').text(),
                    tags: $.map(item.find('category'), function(elem) {
                        return $(elem).text();
                    })
                });
            }
        }

        if (posts.length < 1) {
            this.reportError("Couldn't find any posts in feed: " + feed);
        }

        return posts;
    };


    RelatedPosts.prototype.matchByTag = function(postTags, posts) {

        var matches = [];

        posts.forEach(function(post) {

            var beenAdded = false;
            post.tags.forEach(function(tag) {

                postTags.forEach(function(postTag) {

                    if (postTag.toLowerCase() === tag.toLowerCase() && !beenAdded) {
                        matches.push(post);
                        beenAdded = true;
                    }
                });
            });
        });

        if (matches.length < 1) {
            this.reportError("There are no closely related posts");
        }

        return matches;
    };


    RelatedPosts.prototype.reportError = function(error) {
        if (this.options.debug) {
            $(this.element).append($('<li>' + error + '</li>'));
        }
    };


    $.fn.ghostRelated = function(options) {

        return this.each(function() {
            new RelatedPosts(this, options);
        });
    };


})(jQuery);

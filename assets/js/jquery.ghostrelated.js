/*!
 * @package jquery.ghostrelated
 * @version 0.1.1
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

        this.displayRelated();
    };

    RelatedPosts.prototype.displayRelated = function() {

        this._currentPostTags = this.getCurrentPostTags(this.options.tagsClass);

        var that = this;
        $.ajax({
            url: this.options.feed,
            type: 'GET'
        })
        .done(function(data) {

            // Success fetching feed, find related posts and output them
            var posts = that.getPosts(data);
            var related = that.matchByTag(that._currentPostTags, posts);

            var count = 0;
            related.forEach(function(post) {
                if (count < that.options.limit) {
                    $(that.element).append($('<li><a href="' + post.url + '">' + post.title + '</a></li>'));
                }
                count++;
            });

            if (count == 0) {
                $(that.element).append($('<p>No related posts were found. ' +
                    'Check the <a href="/">index</a>.</p>'));
            }
        })
        .fail(function(e) {
            that.reportError(e);
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


    RelatedPosts.prototype.getPosts = function(feed) {

        var posts = [];
        var items = $(feed).find('item');

        for (var i = 0; i < items.length; i++) {

            var item = items.eq(i);

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

Prism.highlightAll();

// are we on a post page?
if ($('.post-content')) {
    $('.post-content').fitVids();

    $('.related-posts').ghostRelated({
        limit: 4
    });
}

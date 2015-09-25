var githubwiki = (function() {
    var module = {};

    module.wikiurl = '';

    function githubname(name) {
	return name.replace(/ /g, '-').replace(/\?/g, '%3F') + '.md';
    };

    function linkRenderer(link) {
	gh_name = githubname(link);
	return '<a href="' + module.wikiurl + gh_name + '">' + link + '</a>';
    };

    function linkRendererTitle(link, title) {
	gh_name = githubname(link);
	return '<a href="' + module.wikiurl + gh_name + '">' + title + '</a>';
    };

    marked.setOptions({
	internalLink: linkRenderer,
	internalLinkTitle: linkRendererTitle
    });

    module.get = function(page, callback) {
	$.get(module.wikiurl + page, function(data) {
	    callback(marked(data));
	});
    };

    module.setURL = function(url) {
	module.wikiurl = url;
    };

    module.setMarkedOptions = function(options) {
	marked.setOptions(options);
    };

    return module;
}());

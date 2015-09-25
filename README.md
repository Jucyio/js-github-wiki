# githubwiki

> A library to fetch and format Github wiki content

## Install

``` bash
bower install js-github-wiki
```

## Usage

Minimal usage:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
      <title>GithubWiki</title>
      <script src="node_modules/jquery/dist/jquery.min.js"></script>
      <script src="bower_components/marked/lib/marked.js"></script>
      <script src="bower_components/github-wiki/js/githubwiki.js"></script>
  </head>
  <body>
    <div id="content"></div>
    <script>
      githubwiki.setWiki('SchoolIdolTomodachi', 'frgl');
      githubwiki.get("Home.md", function(text) {
        document.getElementById('content').innerHTML = text;
      });
     </script>
  </body>
</html>
```

You can also set custom renderer for the internal wiki links (the *[[link]]* or *[[link|title]]* syntaxes) like this:

```js
function linkRenderer(link) {
        return 'Hey here is a link: ' + link;
};

function linkRendererTitle(title, link) {
        return 'Hey here is a link: ' + link + ' with a title: ' + title;
};

githubwiki.setMarkedOptions({
        internalLink: linkRenderer,
        internalLinkTitle: linkRendererTitle
});
```
(You can check the marked documentation available here: https://github.com/Engil/marked (internalLink and internalLinkTitle are options excusive to a custom fork we used in order to parse internal wiki links)

## Methods documentation

```js
// Method to escape a wiki page name in a Github fashion.
// Wiki pages filenames are based on the page title, so in order to access them we need to do a little bit of escaping.
githubWiki.getGithubName("Bla bla bla");
// Will return "Bla-bla-bla

// Method to set the wiki we are going to work on.
// Wiki repositories raw files are basically available through an URL like this
// https://raw.githubusercontent.com/wiki/Username/Project/
githubWiki.setWiki("Username", "Project");

// Method to get a wiki page
githubWiki.get("Page", callback);
// Will call the function passed in argument with the wikipage content already parsed by marked.

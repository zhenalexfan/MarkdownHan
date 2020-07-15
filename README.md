
# Introducing MarkdownHan

* [阅读简体中文版](README.zhs.md).

<div>
<img width="120px" height="60px" src="docs/img/markdown-han-logo.png"/>
</div>

MarkdownHan (stylized as M↓漢) is another dialect of Markdown, attempting to enable features commonly used in Chinese and Japanese writing. Specifically, M↓漢 brings [ruby markups](https://www.w3.org/International/articles/ruby/markup.en), inserted text, and deleted text to the original John Gruber version of Markdown syntax. 

You can try using M↓漢 in the [web demo](http://playground.alexfan.dev/markdownhan). 

## What is Markdown?

Markdown is a plain-text format for writing structured documents. It was developed by John Gruber (with help from Aaron Swartz) and released in 2004 in the form of a [syntax description](http://daringfireball.net/projects/markdown/syntax) and a Perl script for converting Markdown to HTML. Thereafter, Markdown was implemented in different languages, and used by millions of users on Reddit, StackOverflow, GitHub, and Telegram, etc. 

## Why M↓漢?

As many discussions on the Chinese writing system have pointed out, currently, most digital writing and typography tools do not have a great support for Chinese. The CSS typography framework [Han.css](https://hanzi.pro/) by [Yijun CHEN](https://www.thetype.com/author/ethantw/) has a great number of features for Chinese *typography* on the web. Inspired by this project, I noticed that Markdown, the tool I use the most for *writing*, however, do not support structurally writing [ruby annotations](https://www.w3.org/International/articles/ruby/markup.en) — [while this feature has also been requested](https://discourse.gohugo.io/t/using-furigana-ruby-with-markdown/15156) — thus I decided to create an extension to the Markdown syntax. 

## What is new in M↓漢?

The table below shows three new syntaxes enabled by M↓漢. 

|Name  	|M↓漢 grammar sample   	|HTML output   	|
|---	|---	|---	|
|Ruby annotation  	|`*:中文/zhōngwén/写作/xiězuò/:*`   	|`<ruby>中文<rt>zhōngwén</rt>写作<rt>xiězuò</rt></ruby>`   	|
|Inserted text   	|`中文_:写作:_`   	|`中文<ins>写作</ins>`   	|
|Deleted text   	|`中文~~写作~~`   	|`中文<del>写作</del>`   	|

These new syntaxes can be used with original Markdown syntaxes. As just an attempt, this project does not discuss more specifications to these grammars. 

Similar to Markdown, M↓漢 is also two things: (1) a text formatting syntax; (2) a script that converts M↓漢 plain text to HTML built with Javascript. The demo shows how this script works. 

## Development

M↓漢 is a fork of [Marked](https://github.com/markedjs/marked), an open-source Javascript Markdown parser. 

While M↓漢 passed test cases in the original Marked project, I did not create new test cases for its new syntaxes — there might be bugs when parsing complex text, but hopefully it should work as a demonstration and in most cases. 

## License

Copyright for portions of project MarkdownHan are held by Christopher Jeffrey as part of project Marked. All other copyright for project MarkdownHan are held by Zhen Fan, 2020. (MIT License)

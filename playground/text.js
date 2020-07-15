// This file is generated from `text/*` text files using `generated_textjs.js`
TEXT_EN = 
 `# Introducing MarkdownHan

[MarkdownHan](https://github.com/zhenalexfan/MarkdownHan) (stylized as **M↓漢**) is another dialect of Markdown, attempting to enable features commonly used in Chinese and Japanese writing. Specifically, M↓漢 brings [ruby markups](https://www.w3.org/International/articles/ruby/markup.en), [inserted text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins), and [deleted text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del) to the original John Gruber version of Markdown syntax.

## What is Markdown?

Markdown is a plain-text format for writing structured documents. It was developed by John Gruber (with help from Aaron Swartz) and released in 2004 in the form of a [syntax description](http://daringfireball.net/projects/markdown/syntax) and a Perl script for converting Markdown to HTML. Thereafter, Markdown was implemented in different languages, and used by millions of users on Reddit, StackOverflow, GitHub, and Telegram, etc.

## Why M↓漢?

As many discussions on the Chinese writing system have pointed out, currently, most digital writing and typography tools do not have a great support for Chinese. The CSS typography framework [Han.css](https://hanzi.pro/) by [Yijun CHEN](https://www.thetype.com/author/ethantw/) has a great number of features for Chinese *typography* on the web. Inspired by this project, I noticed that Markdown, the tool I use the most for *writing*, however, do not support structurally writing [ruby annotations](https://www.w3.org/International/articles/ruby/markup.en) — [while this feature has also been requested](https://discourse.gohugo.io/t/using-furigana-ruby-with-markdown/15156) — thus I decided to create an extension to the Markdown syntax.

## What is new in M↓漢?

The table below shows three new syntaxes enabled by M↓漢.

|Name  	|M↓漢 grammar sample   	|HTML output   	|
|---	|---	|---	|
|Ruby annotation  	|\`*:中文/zhōngwén/写作/xiězuò/:*\`   	|\`<ruby>中文<rt>zhōngwén</rt>写作<rt>xiězuò</rt></ruby>\`   	|
|Inserted text   	|\`中文_:写作:_\`   	|\`中文<ins>写作</ins>\`   	|
|Deleted text   	|\`中文~~写作~~\`   	|\`中文<del>写作</del>\`   	|

These new syntaxes can be used with original Markdown syntaxes. As just an attempt, this project does not discuss more specifications to these grammars.

Similar to Markdown, M↓漢 is also two things: (1) a text formatting syntax; (2) a script that converts M↓漢 plain text to HTML built with Javascript. The demo shows how this script works.

## Development

M↓漢 is a fork of [Marked](https://github.com/markedjs/marked), an open-source Javascript Markdown parser.

While M↓漢 passed test cases in the original Marked project, I did not create new test cases for its new syntaxes — there might be bugs when parsing complex text, but hopefully it should work as a demonstration and in most cases.

## License

Copyright for portions of project MarkdownHan are held by Christopher Jeffrey as part of project Marked. All other copyright for project MarkdownHan are held by Zhen Fan, 2020. (MIT License)
`;
TEXT_ZHS = 
 `# 介绍MarkdownHan

[MarkdownHan](https://github.com/zhenalexfan/MarkdownHan)（风格化作**「M↓漢」**） 是Markdown的*又一个*延伸，尝试为原有的Markdown语法增加了一些中文和日文写作里常用的特性。具体而言，M↓漢在[John Gruber的Markdown](https://daringfireball.net/projects/markdown/)基础上增加了写作中的[*:行/háng/间/jiān/注/zhù/:*](https://www.w3.org/International/articles/ruby/markup.en)、[_:增订:_](https://www.w3schools.com/tags/tag_ins.asp)和[~~删订~~](https://www.w3schools.com/tags/tag_del.asp)的语法。

你可以在这个网页的「Markdown输入」区域输入文字测试使用M↓漢。

## 什么是Markdown？

Markdown是一个用*纯文本*来实现_:结构化:__:写作:_的工具。它由John Gruber（在Aaron Swartz帮助下）开发，在2004年以其[语法说明](http://daringfireball.net/projects/markdown/syntax)和一个实现纯文本向HTML转换进行Markdown转换的Perl脚本的形式问世。此后，Markdown被用许多语言实现，也渐渐被Reddit、StackOverflow、GitHub、Telegram等许多平台支持，被人们广泛使用。

## 为什么提出了M↓漢？

从互联网上许多关于中文书写系统的讨论中，我认识到当前很多*写作*和*字体排印*工具都在支持中文需求上有很多欠缺，甚至认为当前互联网上中文的书写习惯也已经被来自西方的工具改变。[陈奕钧](https://www.thetype.com/author/ethantw/)的[汉字标准格式](https://hanzi.pro/)在*字体排印*上（网页）支援了许多特性。受这个项目的启示，我想到也许在*写作*也可以做些什么。因为自己写作最常用的Markdown对东亚文字写作常见的[行间注](https://www.w3.org/International/articles/ruby/markup.en)没有支持——随后也读到了[有人在日语写作中有这一需求](https://discourse.gohugo.io/t/using-furigana-ruby-with-markdown/15156)——便想尝试为中文和日文的写作扩展一些Markdown语法。

## M↓漢新增的语法

下面的表格说明了新增的三种语法。

|名称   	|M↓漢语法示例   	|转换后的HTML示例   	|
|---	|---	|---	|
|行间注   	|\`*:中文/zhōngwén/写作/xiězuò/:*\`   	|\`<ruby>中文<rt>zhōngwén</rt>写作<rt>xiězuò</rt></ruby>\`   	|
|增订   	|\`中文_:写作:_\`   	|\`中文<ins>写作</ins>\`   	|
|删订   	|\`中文~~写作~~\`   	|\`中文<del>写作</del>\`   	|

可以与其他Markdown语法搭配使用。仅作为一次尝试，故在此不提更多的规格说明。

类似于Markdown，M↓漢除了是一种语法以外，也被实现成了一个按照M↓漢的语法将纯文本转换成HTML的Javascript程序。这个演示使用这段程序来展示了效果。

## 开发

M↓漢的程序在[Marked](https://github.com/markedjs/marked)的基础上开发。Marked是一个开源的、Javascript编写的Markdown解析器。

M↓漢的开发通过了Marked工程里的原有的所有测试。但没有为新的语法新增新的测试——也许复杂情况下仍然存在问题，但希望还是可以用的。

## License

Copyright for portions of project MarkdownHan are held by Christopher Jeffrey as part of project Marked. All other copyright for project MarkdownHan are held by Zhen Fan, 2020. (MIT License)
`;
TEXT_ZHT = 
 `# 介紹MarkdownHan

[MarkdownHan](https://github.com/zhenalexfan/MarkdownHan)（風格化作**「M↓漢」**） 是Markdown的*又一個*延伸，嘗試為原有的Markdown語法增加了一些中文和日文寫作裏常用的特性。具體而言，M↓漢在[John Gruber的Markdown](https://daringfireball.net/projects/markdown/)基礎上增加了寫作中的[*:行/háng/間/jiān/注/zhù/:*](https://www.w3.org/International/articles/ruby/markup.en)、[_:增訂:_](https://www.w3schools.com/tags/tag_ins.asp)和[~~刪訂~~](https://www.w3schools.com/tags/tag_del.asp)的語法。

你可以在這個網頁的「Markdown輸入」區域輸入文字測試使用M↓漢。

## 什麽是Markdown？

Markdown是一個用*純文本*來實現_:結構化:__:寫作:_的工具。它由John Gruber（在Aaron Swartz幫助下）開發，在2004年以其[語法說明](http://daringfireball.net/projects/markdown/syntax)和一個實現純文本向HTML轉換進行Markdown轉換的Perl腳本的形式問世。此後，Markdown被用許多語言實現，也漸漸被Reddit、StackOverflow、GitHub、Telegram等許多平台支持，被人們廣泛使用。

## 為什麽提出了M↓漢？

從互聯網上許多關于中文書寫系統的討論中，我認識到當前很多*寫作*和*字體排印*工具都在支持中文需求上有很多欠缺，甚至認為當前互聯網上中文的書寫習慣也已經被來自西方的工具改變。[陳奕鈞](https://www.thetype.com/author/ethantw/)的[漢字標准格式](https://hanzi.pro/)在*字體排印*上（網頁）支援了許多特性。受這個項目的啓示，我想到也許在*寫作*也可以做些什麽。因為自己寫作最常用的Markdown對東亞文字寫作常見的[行間注](https://www.w3.org/International/articles/ruby/markup.en)沒有支持——隨後也讀到了[有人在日語寫作中有這一需求](https://discourse.gohugo.io/t/using-furigana-ruby-with-markdown/15156)——便想嘗試為中文和日文的寫作擴展一些Markdown語法。

## M↓漢新增的語法

下面的表格說明了新增的三種語法。

|名稱   	|M↓漢語法示例   	|轉換後的HTML示例   	|
|---	|---	|---	|
|行間注   	|\`*:中文/zhōngwén/寫作/xiězuò/:*\`   	|\`<ruby>中文<rt>zhōngwén</rt>寫作<rt>xiězuò</rt></ruby>\`   	|
|增訂   	|\`中文_:寫作:_\`   	|\`中文<ins>寫作</ins>\`   	|
|刪訂   	|\`中文~~寫作~~\`   	|\`中文<del>寫作</del>\`   	|

可以與其他Markdown語法搭配使用。僅作為一次嘗試，故在此不提更多的規格說明。

類似于Markdown，M↓漢除了是一種語法以外，也被實現成了一個按照M↓漢的語法將純文本轉換成HTML的Javascript程序。這個演示使用這段程序來展示了效果。

## 開發

M↓漢的程序在[Marked](https://github.com/markedjs/marked)的基礎上開發。Marked是一個開源的、Javascript編寫的Markdown解析器。

M↓漢的開發通過了Marked工程裏的原有的所有測試。但沒有為新的語法新增新的測試——也許複雜情況下仍然存在問題，但希望還是可以用的。

## License

Copyright for portions of project MarkdownHan are held by Christopher Jeffrey as part of project Marked. All other copyright for project MarkdownHan are held by Zhen Fan, 2020. (MIT License)
`;
TEXT_JA = 
 `# Markdownの概要

*:Markdown/マークダウン/:*は、文書を記述するための*軽量*マークアップ言語のひとつである。本来は_:プレーンテキスト形式で:_手軽に書いた文書からHTMLを生成するために***:開/かい/発/はつ/:***されたものである。しかし、現在ではHTMLのほかパワーポイント形式やLaTeX形式のファイルへ変換するソフトウェア（コンバータ）も開発されている。各コンバータの開発者によって多様な拡張が施されるため、各種の方言が存在する。
`;
SAMPLES = { en : TEXT_EN,
zhs : TEXT_ZHS,
zht : TEXT_ZHT,
ja : TEXT_JA }
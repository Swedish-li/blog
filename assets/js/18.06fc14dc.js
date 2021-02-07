(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{419:function(s,a,t){"use strict";t.r(a);var e=t(9),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("记录如何在 Vuepress 中配置 katex 的使用和 Katex 的基本使用方式")]),s._v(" "),t("h2",{attrs:{id:"vuepress-中的-katex-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-中的-katex-配置"}},[s._v("#")]),s._v(" Vuepress 中的 Katex 配置")]),s._v(" "),t("p",[s._v("添加 markdown-it 插件依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @swedish-li/markdown-it-katex\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加 katex 依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" katex\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在 config.js 中添加 "),t("a",{attrs:{href:"https://github.com/Swedish-li/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("@swedish-li/markdown-it-katex")]),t("OutboundLink")],1),s._v(" 配置")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  markdown"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("extendMarkdown")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("md")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      md"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      md"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@swedish-li/markdown-it-katex'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("在 index.styl 中导入 Katex 的样式")]),s._v(" "),t("div",{staticClass:"language-stylus line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-stylus"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-declaration"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~katex/dist/katex.min.css'")])]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"在-markdown-中使用-latex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中使用-latex"}},[s._v("#")]),s._v(" 在 Markdown 中使用 Latex")]),s._v(" "),t("p",[s._v("单行的 Latex 在两边加上 "),t("code",[s._v("$")]),s._v(" 符号，多行的 Latex 需要在开头和结尾加上 "),t("code",[s._v("$$")])]),s._v(" "),t("h3",{attrs:{id:"的单行-latex-写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#的单行-latex-写法"}},[s._v("#")]),s._v(" 的单行 Latex 写法")]),s._v(" "),t("div",{staticClass:"language-latex line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-latex"}},[t("code",[t("span",{pre:!0,attrs:{class:"token equation string"}},[s._v("$"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\sqrt")]),s._v("{3x-1}+(1+x)^2$")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("渲染结果:")]),s._v(" "),t("p",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("msqrt",[t("mrow",[t("mn",[s._v("3")]),t("mi",[s._v("x")]),t("mo",[s._v("−")]),t("mn",[s._v("1")])],1)],1),t("mo",[s._v("+")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",[s._v("+")]),t("mi",[s._v("x")]),t("msup",[t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mn",[s._v("2")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\sqrt{3x-1}+(1+x)^2")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.04em","vertical-align":"-0.17444499999999996em"}}),t("span",{staticClass:"mord sqrt"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8655550000000001em"}},[t("span",{staticClass:"svg-align",staticStyle:{top:"-3em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord",staticStyle:{"padding-left":"0.833em"}},[t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mord"},[s._v("1")])])]),t("span",{staticStyle:{top:"-2.825555em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"hide-tail",staticStyle:{"min-width":"0.853em",height:"1.08em"}},[t("svg",{attrs:{width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"}},[t("path",{attrs:{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}})])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.17444499999999996em"}},[t("span")])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"mclose"},[t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")])])])])])])])])])])])]),s._v(" "),t("h3",{attrs:{id:"多行的-latex-写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多行的-latex-写法"}},[s._v("#")]),s._v(" 多行的 Latex 写法")]),s._v(" "),t("div",{staticClass:"language-latex line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-latex"}},[t("code",[t("span",{pre:!0,attrs:{class:"token equation string"}},[s._v("$$"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\begin")]),s._v("{alignedat}{5}\nP &"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\rarr")]),s._v(" Translate &"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\rarr")]),s._v(" P_T "),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\\\")]),s._v("\nV &"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\rarr")]),s._v(" Rotate &"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\rarr")]),s._v(" V_T\n"),t("span",{pre:!0,attrs:{class:"token equation-command regex"}},[s._v("\\end")]),s._v("{alignedat}$$")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("渲染结果")]),s._v("\nP &\\rarr Translate &\\rarr P_T \\\\\nV &\\rarr Rotate &\\rarr V_T\n\\end{alignedat}\n"),t("p",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow"),t("annotation",{attrs:{encoding:"application/x-tex"}})],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}})])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
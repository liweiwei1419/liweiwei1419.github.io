(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{848:function(s,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("今天我们通过另一道问题，再和大家谈一谈「后序遍历」以及「无后效性」在解决一类树的问题中的应用。希望今天的介绍能够让大家有一点点感觉。")]),s._v(" "),t("p",[t("strong",[s._v("例：「力扣」第 543 题：二叉树的直径")])]),s._v(" "),t("p",[s._v("给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。")]),s._v(" "),t("p",[t("strong",[s._v("示例 :")]),s._v("\n给定二叉树")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   \t\t\t\t   1\n         / \\\n        2   3\n       / \\\n      4   5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("返回 "),t("strong",[s._v("3")]),s._v(", 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v("：两结点之间的路径长度是以它们之间边的数目表示。")]),s._v(" "),t("p",[t("strong",[s._v("数据范围")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("树中结点的总数在区间 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mn",[s._v("1")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mn",[s._v("1")]),t("msup",[t("mn",[s._v("0")]),t("mn",[s._v("4")])],1),t("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("[1, 10^4]")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.0641em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])]),t("span",{staticClass:"mclose"},[s._v("]")])])])]),s._v(".")]),s._v(" "),t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[s._v("−")]),t("mn",[s._v("100")]),t("mo",[s._v("≤")]),t("mi",[s._v("N")]),t("mi",[s._v("o")]),t("mi",[s._v("d")]),t("mi",[s._v("e")]),t("mi",{attrs:{mathvariant:"normal"}},[s._v(".")]),t("mi",[s._v("v")]),t("mi",[s._v("a")]),t("mi",[s._v("l")]),t("mo",[s._v("≤")]),t("mn",[s._v("100")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-100 \\le Node.val \\le 100")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7804em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("−")]),t("span",{staticClass:"mord"},[s._v("100")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8304em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[s._v("N")]),t("span",{staticClass:"mord mathnormal"},[s._v("o")]),t("span",{staticClass:"mord mathnormal"},[s._v("d")]),t("span",{staticClass:"mord mathnormal"},[s._v("e")]),t("span",{staticClass:"mord"},[s._v(".")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mord mathnormal"},[s._v("a")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("100")])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
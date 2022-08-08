(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{682:function(s,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[s._v("题目链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/powx-n/",target:"_blank",rel:"noopener noreferrer"}},[s._v("50. Pow(x, n)"),t("OutboundLink")],1),s._v("；")]),s._v(" "),t("li",[s._v("题解链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/powx-n/solution/ba-zhi-shu-bu-fen-kan-zuo-er-jin-zhi-shu-python-da/",target:"_blank",rel:"noopener noreferrer"}},[s._v("自顶向下（递归）与自顶向上（递推）"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("p",[s._v("今天要和大家分享的是「力扣」第 50 题：Pow(x, n)。这题有一个名称叫「快速幂」，我们这里只分享「递归」和「非递归」的写法，其中 "),t("strong",[s._v("「递归」对应「当指数为奇数时，把指数分解成偶数 + 1，当指数为偶数时，把指数除以 2」，「非递归」对应把指数转化成二进制")]),s._v("。「快速幂」还有矩阵的求法，感兴趣的朋友可以在网络上自行搜索（我也不会）。")]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：x = 2.00000, n = 10\n输出：1024.00000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：x = 2.10000, n = 3\n输出：9.26100\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：x = 2.00000, n = -2\n输出：0.25000\n解释：2-2 = 1/22 = 1/4 = 0.25\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[s._v("−")]),t("mn",[s._v("100.0")]),t("mo",[s._v("<")]),t("mi",[s._v("x")]),t("mo",[s._v("<")]),t("mn",[s._v("100.0")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-100.0 < x < 100.0")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("−")]),t("span",{staticClass:"mord"},[s._v("100.0")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("<")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("100.0")])])])])]),s._v(" "),t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[s._v("−")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("31")])],1),t("mo",[s._v("≤")]),t("mi",[s._v("n")]),t("mo",[s._v("≤")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("31")])],1),t("mo",[s._v("−")]),t("mn",[s._v("1")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-2^{31} \\le n \\le 2^{31}-1")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9501em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("−")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("31")])])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7719em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8974em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("31")])])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")])])])])]),s._v(" "),t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("msup",[t("mn",[s._v("0")]),t("mn",[s._v("4")])],1),t("mo",[s._v("≤")]),t("msup",[t("mi",[s._v("x")]),t("mi",[s._v("n")])],1),t("mo",[s._v("≤")]),t("mn",[s._v("1")]),t("msup",[t("mn",[s._v("0")]),t("mn",[s._v("4")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("-10^4 \\le x^n \\le 10^4")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9501em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("−")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8004em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("n")])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8141em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])])])])]),s._v("​")])]),s._v(" "),t("h2",{attrs:{id:"把指数部分看做二进制数-python-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把指数部分看做二进制数-python-代码"}},[s._v("#")]),s._v(" 把指数部分看做二进制数（Python 代码）")]),s._v(" "),t("p",[s._v("当指数为负数的时候，可以转化为底数取导数，指数取相反数的情况，这一点并不难理解。")]),s._v(" "),t("p",[s._v("为了避免一次又一次将底数相乘，我们采用这样“偷懒”的策略，比如要计算 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("msup",[t("mn",[s._v("5")]),t("mn",[s._v("18")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("5^{18}")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8141em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("18")])])])])])])])])])])])]),s._v("，其实我们只要算出 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("msup",[t("mn",[s._v("5")]),t("mn",[s._v("9")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("5^9")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8141em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[t("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("9")])])])])])])])])])])]),s._v("，然后再自己乘自己就好了，这样就可以避免做 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mn",[s._v("9")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("9")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("9")])])])]),s._v(" 次“"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",[s._v("×")]),t("mn",[s._v("5")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\times 5")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("×")]),t("span",{staticClass:"mord"},[s._v("5")])])])]),s._v("” 的运算。（这种思想有点像“记忆化递归”。）")]),s._v(" "),t("p",[s._v("那么有一种机制就能帮助我们找到一个整数的合适的“分解”，那么就是将一个整数看成它的二进制形式。就那上面的例子来说，"),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mn",[s._v("18")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("18")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("18")])])])]),s._v(" 的二进制表示为 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("10010")]),t("msub",[t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mn",[s._v("2")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("(10010)_2")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("10010")]),t("span",{staticClass:"mclose"},[t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])])])])]),s._v("，即：")]),s._v(" "),t("p",{staticClass:"katex-block"},[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mn",[s._v("18")]),t("mo",[s._v("=")]),t("mn",[s._v("1")]),t("mo",[s._v("×")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("4")])],1),t("mo",[s._v("+")]),t("mn",[s._v("1")]),t("mo",[s._v("×")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("1")])],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("18 = 1 \\times 2^4 + 1\\times2^1\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("18")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.9474em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8641em"}},[t("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8641em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8641em"}},[t("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("1")])])])])])])])])])])])])]),s._v(" "),t("p",[s._v("那么：")]),s._v(" "),t("p",{staticClass:"katex-block"},[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("msup",[t("mn",[s._v("5")]),t("mn",[s._v("18")])],1),t("mo",[s._v("=")]),t("msup",[t("mn",[s._v("5")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("4")])],1)],1),t("mo",[s._v("×")]),t("msup",[t("mn",[s._v("5")]),t("msup",[t("mn",[s._v("2")]),t("mn",[s._v("1")])],1)],1)],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("5^{18} = 5^{2^4} \\times 5^{2^1}\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8641em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8641em"}},[t("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("18")])])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.1202em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.0369em"}},[t("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8913em"}},[t("span",{staticStyle:{top:"-2.931em","margin-right":"0.0714em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),t("span",{staticClass:"sizing reset-size3 size1 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("4")])])])])])])])])])])])])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1.0369em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.0369em"}},[t("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[t("span",{staticClass:"mord mtight"},[s._v("2")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.8913em"}},[t("span",{staticStyle:{top:"-2.931em","margin-right":"0.0714em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),t("span",{staticClass:"sizing reset-size3 size1 mtight"},[t("span",{staticClass:"mord mtight"},[s._v("1")])])])])])])])])])])])])])])])])])])])])]),s._v(" "),t("p",[s._v("于是，我们可以把指数 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")])])])]),s._v(" 做“二进制分解”，"),t("strong",[s._v("在底数不断自身乘以自身的过程中，将最终结果需要的部分保存下来")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://pic.leetcode-cn.com/ab780b00a05f762c87ae4c68e74ef8d3a8b961a98762c02b61585d8f8c61747c-image.png",alt:"image.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("写得比较晦涩，相信聪明的你看我写的代码一定能看懂。")]),s._v(" "),t("div",{staticClass:"language-python [] line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("myPow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" x\n            n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n\n\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" x\n            x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" x\n            n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
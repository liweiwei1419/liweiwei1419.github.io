(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1148:function(s,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[s._v("题目链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/bricks-falling-when-hit/",target:"_blank",rel:"noopener noreferrer"}},[s._v("803. 打砖块"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("题解链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/bricks-falling-when-hit/solution/803-da-zhuan-kuai-by-leetcode-r5kf/",target:"_blank",rel:"noopener noreferrer"}},[s._v("🎦 803. 打砖块"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("视频讲解")]),s._v(" "),t("p",[s._v("📺 这道题在 "),t("a",{attrs:{href:"https://leetcode-cn.com/problems/bricks-falling-when-hit/solution/803-da-zhuan-kuai-by-leetcode-r5kf/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方题解"),t("OutboundLink")],1),s._v(" 和 "),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1Xv411W74B",target:"_blank",rel:"noopener noreferrer"}},[s._v("B 站"),t("OutboundLink")],1),s._v(" 可以收看视频讲解，可以点击下面的视频右上角「去 bilibili 观看」，选择快速播放，获得更好的观看体验。")])]),s._v(" "),t("div",{staticStyle:{position:"relative",padding:"30% 45%"}},[t("iframe",{staticStyle:{position:"absolute",width:"100%",height:"100%",left:"0",top:"0"},attrs:{src:"https://player.bilibili.com/player.html?aid=246251062&bvid=BV1Xv411W74B&cid=287320353&page=1",frameborder:"no",scrolling:"no"}})]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("有一个 "),t("code",[s._v("m x n")]),s._v(" 的二元网格，其中 "),t("code",[s._v("1")]),s._v(" 表示砖块，"),t("code",[s._v("0")]),s._v(" 表示空白。砖块 "),t("strong",[s._v("稳定")]),s._v("（不会掉落）的前提是：")]),s._v(" "),t("ul",[t("li",[s._v("一块砖直接连接到网格的顶部，或者")]),s._v(" "),t("li",[s._v("至少有一块相邻（4 个方向之一）砖块 "),t("strong",[s._v("稳定")]),s._v(" 不会掉落时")])]),s._v(" "),t("p",[s._v("给你一个数组 "),t("code",[s._v("hits")]),s._v(" ，这是需要依次消除砖块的位置。每当消除 "),t("code",[s._v("hits[i] = (rowi, coli)")]),s._v(" 位置上的砖块时，对应位置的砖块（若存在）会消失，然后其他的砖块可能因为这一消除操作而掉落。一旦砖块掉落，它会立即从网格中消失（即，它不会落在其他稳定的砖块上）。")]),s._v(" "),t("p",[s._v("返回一个数组 "),t("code",[s._v("result")]),s._v(" ，其中 "),t("code",[s._v("result[i]")]),s._v(" 表示第 "),t("code",[s._v("i")]),s._v(" 次消除操作对应掉落的砖块数目。")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v("，消除可能指向是没有砖块的空白位置，如果发生这种情况，则没有砖块掉落。")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]\n输出：[2]\n解释：\n网格开始为：\n[[1,0,0,0]，\n [1,1,1,0]]\n消除 (1,0) 处加粗的砖块，得到网格：\n[[1,0,0,0]\n [0,1,1,0]]\n两个加粗的砖不再稳定，因为它们不再与顶部相连，也不再与另一个稳定的砖相邻，因此它们将掉落。得到网格：\n[[1,0,0,0],\n [0,0,0,0]]\n因此，结果为 [2] 。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]\n输出：[0,0]\n解释：\n网格开始为：\n[[1,0,0,0],\n [1,1,0,0]]\n消除 (1,1) 处加粗的砖块，得到网格：\n[[1,0,0,0],\n [1,0,0,0]]\n剩下的砖都很稳定，所以不会掉落。网格保持不变：\n[[1,0,0,0],\n [1,0,0,0]]\n接下来消除 (1,0) 处加粗的砖块，得到网格：\n[[1,0,0,0],\n [0,0,0,0]]\n剩下的砖块仍然是稳定的，所以不会有砖块掉落。\n因此，结果为 [0,0] 。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("m == grid.length")])]),s._v(" "),t("li",[t("code",[s._v("n == grid[i].length")])]),s._v(" "),t("li",[t("code",[s._v("1 <= m, n <= 200")])]),s._v(" "),t("li",[t("code",[s._v("grid[i][j]")]),s._v(" 为 "),t("code",[s._v("0")]),s._v(" 或 "),t("code",[s._v("1")])]),s._v(" "),t("li",[t("code",[s._v("1 <= hits.length <= 4 * 10^4")])]),s._v(" "),t("li",[t("code",[s._v("hits[i].length == 2")])]),s._v(" "),t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mn",[s._v("0")]),t("mo",[s._v("≤")]),t("msub",[t("mi",[s._v("x")]),t("mi",[s._v("i")])],1),t("mo",[s._v("≤")]),t("mi",[s._v("m")]),t("mo",[s._v("−")]),t("mn",[s._v("1")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0 \\le x_i \\le m - 1")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7804em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.786em","vertical-align":"-0.15em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6667em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")])])])])]),s._v(" "),t("li",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mn",[s._v("0")]),t("mo",[s._v("≤")]),t("msub",[t("mi",[s._v("y")]),t("mi",[s._v("i")])],1),t("mo",[s._v("≤")]),t("mi",[s._v("n")]),t("mo",[s._v("−")]),t("mn",[s._v("1")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("0 \\le y_i \\le n - 1")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7804em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("0")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8304em","vertical-align":"-0.1944em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("y")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6667em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")])])])])]),s._v(" "),t("li",[s._v("所有 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("msub",[t("mi",[s._v("x")]),t("mi",[s._v("i")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("msub",[t("mi",[s._v("y")]),t("mi",[s._v("i")])],1),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("(x_i, y_i)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("y")]),t("span",{staticClass:"msupsub"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[t("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),t("span",{staticClass:"sizing reset-size6 size3 mtight"},[t("span",{staticClass:"mord mathnormal mtight"},[s._v("i")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[t("span")])])])])]),t("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v(" 互不相同")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),t("p",[s._v("本题详解请见本文的「题解链接」，有视频讲解和文字讲解。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
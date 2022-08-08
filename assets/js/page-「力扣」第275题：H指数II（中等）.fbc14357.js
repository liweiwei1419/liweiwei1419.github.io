(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{649:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx93fac2tcj30p00an74m.jpg",alt:"0275",loading:"lazy"}})]),t._v(" "),s("ul",[s("li",[t._v("题目链接："),s("a",{attrs:{href:"https://leetcode-cn.com/problems/h-index-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("275. H 指数 II"),s("OutboundLink")],1),t._v("；")]),t._v(" "),s("li",[t._v("题解链接："),s("a",{attrs:{href:"https://leetcode-cn.com/problems/h-index-ii/solution/jian-er-zhi-zhi-er-fen-cha-zhao-by-liweiwei1419-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("二分查找猜论文篇数（Java）"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("给你一个整数数组 "),s("code",[t._v("citations")]),t._v(" ，其中 "),s("code",[t._v("citations[i]")]),t._v(" 表示研究者的第 "),s("code",[t._v("i")]),t._v(" 篇论文被引用的次数，"),s("code",[t._v("citations")]),t._v(" 已经按照 "),s("strong",[t._v("升序排列")]),t._v(" 。计算并返回该研究者的 "),s("strong",[s("code",[t._v("h")]),t._v(" 指数")]),t._v("。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://baike.baidu.com/item/h-index/3991452?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("h 指数的定义"),s("OutboundLink")],1),t._v("：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （"),s("code",[t._v("n")]),t._v(" 篇论文中）"),s("strong",[t._v("总共")]),t._v("有 "),s("code",[t._v("h")]),t._v(" 篇论文分别被引用了"),s("strong",[t._v("至少")]),t._v(" "),s("code",[t._v("h")]),t._v(" 次。且其余的 "),s("em",[s("code",[t._v("n - h")])]),t._v(" 篇论文每篇被引用次数 "),s("strong",[t._v("不超过")]),t._v(" "),s("em",[s("code",[t._v("h")])]),t._v(" 次。")]),t._v(" "),s("p",[s("strong",[t._v("提示："),s("strong",[t._v("如果 "),s("code",[t._v("h")]),t._v(" 有多种可能的值，")]),s("code",[t._v("h")]),t._v(" 指数")]),t._v(" 是其中最大的那个。")]),t._v(" "),s("p",[t._v("请你设计并实现对数时间复杂度的算法解决此问题。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：citations = [0,1,3,5,6]\n输出：3\n解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。\n由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3 。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("strong",[t._v("示例 2：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：citations = [1,2,100]\n输出：2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("n == citations.length")])]),t._v(" "),s("li",[s("code",[t._v("1 <= n <= 105")])]),t._v(" "),s("li",[s("code",[t._v("0 <= citations[i] <= 1000")])]),t._v(" "),s("li",[s("code",[t._v("citations")]),t._v(" 按 "),s("strong",[t._v("升序排列")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("友情提示")]),t._v(" "),s("p",[t._v("这题题意比较难理解，本题解已经花了很多篇幅解释题意，请读者有一些耐心阅读。")])]),t._v(" "),s("h2",{attrs:{id:"理解题意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解题意"}},[t._v("#")]),t._v(" 理解题意")]),t._v(" "),s("p",[t._v("这道问题理解题意要花很长时间，一个有效的办法就是仔细研究示例，然后去理解题目的意思。我真正明白题目的意思是看到这句描述：")]),t._v(" "),s("blockquote",[s("p",[t._v("例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。")])]),t._v(" "),s("p",[t._v("所以 h 指数是 20 表示："),s("strong",[t._v("引用次数大于等于 20 的文章数量最少是 20 篇")]),t._v("。")]),t._v(" "),s("p",[t._v("再来理解一下题目中给出的定义：")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("strong",[s("code",[t._v("N")]),t._v(" 篇论文中总共有 "),s("code",[t._v("h")]),t._v(" 篇论文分别被引用了至少 "),s("code",[t._v("h")]),t._v(" 次")]),t._v("；")]),t._v(" "),s("li",[s("strong",[t._v("其余的 "),s("code",[t._v("N - h")]),t._v(" 篇论文每篇被引用次数不超过 "),s("code",[t._v("h")]),t._v(" 次")]),t._v("。")])])]),t._v(" "),s("p",[t._v("h 指数想说的是这样一件事情，一个人的论文根据被引用的次数，有一个阈值（分水岭，就是这里的 "),s("code",[t._v("h")]),t._v("），引用次数大于等于这个阈值的论文是「高引用论文」。所以可以把一个研究者的论文被引用的次数 "),s("strong",[t._v("按照升序排序")]),t._v("（这一点是题目给出的前提，很重要）。题目其实要我们找的是一条分割线，这条分割线的含义是：分割线右边的所有论文的引用次数都很高。重要的事情说 3 遍：")]),t._v(" "),s("ul",[s("li",[t._v("h 指数是 "),s("strong",[t._v("论文数量")]),t._v("，不是引用次数。")]),t._v(" "),s("li",[t._v("h 指数是 "),s("strong",[t._v("论文数量")]),t._v("，不是引用次数。")]),t._v(" "),s("li",[t._v("h 指数是 "),s("strong",[t._v("论文数量")]),t._v("，不是引用次数。")])]),t._v(" "),s("p",[t._v("所以分割线满足的条件是："),s("strong",[t._v("分割线右边的最少引用次数 >= 分割线右边的论文篇数")]),t._v("。"),s("strong",[t._v("题目要求返回的是论文数量")]),t._v("。")]),t._v(" "),s("p",[t._v("再看看题目的示例：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxdr86nz0qj30ru0didgn.jpg",alt:"image.png"}}),t._v(" "),s("p",[t._v("这个例子有点儿特殊，论文被引用了 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("3")])])])]),t._v(" 次，篇数有 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("3")])])])]),t._v(" 篇。再来看一个更一般的例子：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h1a9l9ethhj20wg0by756.jpg",alt:"image.png"}}),t._v(" "),s("p",[s("strong",[t._v("结论")]),t._v("：这条分割线越靠左边，说明被引用的次数很多，文章还很多，h 指数越高。")]),t._v(" "),s("p",[t._v("在有序数组中查找一个位置，可以使用二分查找。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("上面着重号的部分：分割线右边的最少引用次数 >= 分割线右边的论文篇数。")]),t._v(" "),s("p",[t._v("二分查找就是在区间 "),s("code",[t._v("[left..right]")]),t._v(" 任意猜测一个位置 "),s("code",[t._v("mid")]),t._v("，看看下一轮应该往左边找还是往右边找。")]),t._v(" "),s("p",[t._v("这一类问题做得多了，可以总结出一个规律，题目要找的是「分割线右边的最少引用次数 >= 分割线右边的论文篇数」，可以对这个条件取反，写 "),s("code",[t._v("if")]),t._v(" 和 "),s("code",[t._v("else")]),t._v(" 语句不容易出错（详细叙述可以参考 "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/",target:"_blank",rel:"noopener noreferrer"}},[t._v("题解"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("p",[s("strong",[t._v("情况 1")]),t._v("：如果 「分割线右边的最少引用次数 < 分割线右边的论文篇数」，这一点可以看示例 "),s("code",[t._v("[0,| 1, 3, 5, 6]")]),t._v("，猜测有 4 篇论文最少引用次数为 4 ，但是分割线右边的最小引用次数才为 1，说明分割线太靠左了。下一轮应该往右边找，因此下一轮搜索区间为 "),s("code",[t._v("[mid + 1..right]")]),t._v(" ，此时设置 "),s("code",[t._v("left = mid + 1")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("情况 2")]),t._v("：剩下的部分就是「分割线右边的最少引用次数 >= 分割线右边的论文篇数」，它肯定在区间 "),s("code",[t._v("[left..mid]")]),t._v(" 里，此时设置 "),s("code",[t._v("right = mid")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("参考代码")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" citations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" citations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("citations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特殊判断")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("citations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二分查找猜测论文的数量，需要满足：分割线右边的最少引用次数 >= 分割线右边的论文篇数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// citations[mid] 表示分割线右边的文章的最少引用的次数")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("citations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一轮搜索区间 [mid + 1..right]")]),t._v("\n                left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一轮搜索区间 [left..mid]")]),t._v("\n                right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[s("strong",[t._v("说明")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("while (left < right)")]),t._v(" 与 "),s("code",[t._v("left = mid + 1")]),t._v("、"),s("code",[t._v("right = mid;")]),t._v(" 配合使用表示退出循环以后有 "),s("code",[t._v("left == right")]),t._v(" 成立；")]),t._v(" "),s("li",[s("code",[t._v("citations[mid]")]),t._v(" 表示分割线右边的最少的被引用文章的引用次数；")]),t._v(" "),s("li",[s("code",[t._v("len - mid")]),t._v(" 表示分割线右边的文章数量；")]),t._v(" "),s("li",[t._v("退出循环以后，"),s("code",[t._v("mid")]),t._v(" 就来到了合适的位置，题目要返回的是论文篇数，所以需要返回 "),s("code",[t._v("len - left")]),t._v("；")]),t._v(" "),s("li",[t._v("特殊判断 "),s("code",[t._v("citations[len - 1] == 0")]),t._v(" 表示如果全部文章的引用次数都为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("0")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v("，则 h 指数为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("0")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v("；")]),t._v(" "),s("li",[t._v("初始化 "),s("code",[t._v("int right = len - 1;")]),t._v(" 这是因为分割线最右也只能在 "),s("code",[t._v("len - 1")]),t._v(" 的左边，如下图所示：")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gxdr90ug6ij31040bggm1.jpg",alt:"image.png"}}),t._v(" "),s("p",[t._v("或者从代码层面上理解，"),s("code",[t._v("citations[len]")]),t._v(" 会越界。")]),t._v(" "),s("ul",[s("li",[t._v("可以翻到英文题面，最后有给数据范围，所以不单独判断数组是否为空，")]),t._v(" "),s("li",[s("code",[t._v("int mid = (left + right) / 2;")]),t._v(" 写成这样是因为题目给出的数据范围不会使得 "),s("code",[t._v("left + right")]),t._v(" 越界。")])]),t._v(" "),s("p",[s("strong",[t._v("复杂度分析")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("N")]),s("mi",[t._v("log")]),s("mo",[t._v("⁡")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N\\log N)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mop"},[t._v("lo"),s("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，主要耗时在排序上；")]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，只使用了常数个变量。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
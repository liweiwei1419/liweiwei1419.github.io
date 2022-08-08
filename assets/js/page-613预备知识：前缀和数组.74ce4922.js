(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{735:function(t,a,s){"use strict";s.r(a);var e=s(1),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("「树状数组」也叫 Binary Indexed Tree，二进制索引树，很好地表示了「树状数组」处理数据的思路："),a("strong",[t._v("「树状数组」里某个元素管理了原始输入数组多少数据是由下标决定的")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"预备知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预备知识"}},[t._v("#")]),t._v(" 预备知识")]),t._v(" "),a("ul",[a("li",[t._v("知道前缀和就可以求区间和，这是因为不同规模的区间和有重复的部分，相减以后就得到了区间和。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/aba1fdd954062295bb641be1b32251adf8e7253892bcac6497fcebf1509a8f97.png",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),a("p",[t._v("如图所示："),a("strong",[t._v("红色部分的和 = 绿色部分的和 - 黄色部分的和")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以定义：前缀和 "),a("code",[t._v("preSum[i]")]),t._v(" 表示 "),a("code",[t._v("nums[0, i]")]),t._v(" 的和，则区间和 "),a("code",[t._v("sumRange[from, to] = preSum[to] - preSum[from - 1]")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("注意到 "),a("code",[t._v("preSum[from - 1]")]),t._v(" 有下标越界的风险，通常的做法是：让前缀和数组多设置一位，为此修改定义："),a("code",[t._v("preSum[i]")]),t._v(" 表示 "),a("code",[t._v("nums[0, i)")]),t._v(" 的和，初始化的时候 "),a("code",[t._v("preSum[0] = 0")]),t._v("，则： "),a("code",[t._v("sumRange[from, to] = preSum[to + 1] - preSum[from]")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("预先计算出「前缀和」使得计算「区间和」的时间复杂度成为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。")])])]),t._v(" "),a("p",[t._v("相关的练习题有：")]),t._v(" "),a("ul",[a("li",[t._v("「力扣」第 303 题：区域和检索 - 数组不可变；")]),t._v(" "),a("li",[t._v("「力扣」第 307 题：区域和检索 - 数组可修改（用前缀和做会超时）。")])]),t._v(" "),a("p",[t._v("做「力扣」第 307 题的时候会发现，如果有修改的需求，单独修改一个值，最坏情况下需要修改整个前缀和数组的值，时间复杂度是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("N")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，这里 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 是输入数组的长度。")]),t._v(" "),a("p",[t._v("「前缀和」数组的思路是：将原始数组进行预处理，将来需要查询数据的时候，只需要查询预处理数组的某些值即可。")]),t._v(" "),a("h2",{attrs:{id:"组织成树形结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组织成树形结构"}},[t._v("#")]),t._v(" 组织成树形结构")]),t._v(" "),a("p",[t._v("要优化「修改操作」造成的线性时间复杂度，"),a("strong",[t._v("预处理数据组织成线性结构肯定是不行的")]),t._v("，因此一种方案是把预处理的数据组织成「树形结构」，有两种数据结构：")]),t._v(" "),a("ul",[a("li",[t._v("线段树：高效处理「区间和」查询（不仅仅可以处理和、还可以处理区间最值等），单点修改；")]),t._v(" "),a("li",[t._v("树状数组：高效处理「前缀和」查询，单点修改。")])]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("事实上，「区间修改」也是支持的，但涉及的知识比较复杂，感兴趣的朋友可以自行查阅相关资料进行学习；")]),t._v(" "),a("li",[t._v("「线段树」能做的事情的范围大于「树状数组」能做的事情，「树状数组」做的事情更少、更专一，代码层面相对较简单。")])]),t._v(" "),a("p",[t._v("「线段树」和「树状数组」一样，都是对原始输入数组进行了预处理，使得在真正需要查询数据的时候，我们只需要看「预处理数组」的部分信息即可，由于组织成树形结构，「修改」和「查询」的时间复杂度都是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("N")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(\\log N)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。")]),t._v(" "),a("p",[t._v("思想：空间换时间。")]),t._v(" "),a("p",[t._v("注意：「线段树」和「树状数组」"),a("strong",[t._v("不能处理输入数组的长度有增加或者减少")]),t._v("的情况。")]),t._v(" "),a("h3",{attrs:{id:"线段树是一棵二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线段树是一棵二叉树"}},[t._v("#")]),t._v(" 线段树是一棵二叉树")]),t._v(" "),a("p",[t._v("红色部分表示预处理数组，蓝色部分是原始输入数组，箭头表示当前值是哪些结点的值的和。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/c08d174b2046e57178c20098f613a55740a5e896181526b144d15bdf7666452a.png",alt:"在这里插入图片描述",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"树状数组是多叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树状数组是多叉树"}},[t._v("#")]),t._v(" 树状数组是多叉树")]),t._v(" "),a("p",[t._v("红色部分表示预处理数组，蓝色部分是原始输入数组，箭头表示当前值是哪些结点的值的和。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.leetcode-cn.com/257e6c5742751f7cfdfd0704e7380ceccbd123335347a589165d74fa7ad11d40.png",alt:"在这里插入图片描述",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);
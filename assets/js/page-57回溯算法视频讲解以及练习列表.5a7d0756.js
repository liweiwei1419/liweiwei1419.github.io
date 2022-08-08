(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{566:function(e,t,r){"use strict";r.r(t);var o=r(1),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("下面提供一些我做过的「回溯」算法的问题，以便大家学习和理解「回溯」算法。")]),e._v(" "),t("h2",{attrs:{id:"视频题解列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频题解列表"}},[e._v("#")]),e._v(" 视频题解列表")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("题目链接")]),e._v(" "),t("th",[e._v("力扣")]),e._v(" "),t("th",[e._v("B 站")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("46. 全排列（中等）"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/solution/quan-pai-lie-by-leetcode-solution-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("力扣"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1oa4y1v7Kz?from=search&seid=14615048896751357901",target:"_blank",rel:"noopener noreferrer"}},[e._v("B 站"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("47. 全排列 II（中等）"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:""}},[e._v("力扣")])]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("B 站"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/",target:"_blank",rel:"noopener noreferrer"}},[e._v("78. 子集（中等）"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/solution/hui-su-python-dai-ma-by-liweiwei1419/",target:"_blank",rel:"noopener noreferrer"}},[e._v("力扣"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("B 站"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("90. 子集 II（中等）"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("（空缺）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("B 站"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"题型一-排列、组合、子集相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题型一-排列、组合、子集相关问题"}},[e._v("#")]),e._v(" 题型一：排列、组合、子集相关问题")]),e._v(" "),t("p",[e._v("通过这些问题理解回溯算法的思想，回溯算法的知识点讲解在「力扣」第 46 题的视频题解和文字题解。")]),e._v(" "),t("p",[e._v("回溯就是用深度优先遍历的方式去搜索 树（图）的所有解。深度优先遍历有很明显的递归结构。")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("这部分练习可以帮助我们熟悉「回溯算法」的一些概念和通用的解题思路。解题的步骤是：先画图，再编码。去思考可以剪枝的条件， "),t("strong",[e._v("为什么有的时候用 "),t("code",[e._v("used")]),e._v(" 数组，有的时候设置搜索起点 "),t("code",[e._v("begin")]),e._v(" 变量")]),e._v("，理解状态变量设计的想法。")])]),e._v(" "),t("p",[e._v("做对下面这些问题的技巧：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("画图")]),e._v("；")]),e._v(" "),t("li",[e._v("理解深度优先遍历与递归；")]),e._v(" "),t("li",[e._v("多调试。")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("题号")]),e._v(" "),t("th",[e._v("题目序号")]),e._v(" "),t("th",[e._v("题解")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("46")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("全排列"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/solution/quan-pai-lie-by-leetcode-solution-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频题解"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liweiw/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("47")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("全排列 II"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频题解"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("78")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/",target:"_blank",rel:"noopener noreferrer"}},[e._v("子集"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频题解"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/solution/hui-su-python-dai-ma-by-liweiwei1419/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("90")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("子集 II"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV147411A7Yq?p=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("77")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combinations/",target:"_blank",rel:"noopener noreferrer"}},[e._v("组合"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("39")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combination-sum/",target:"_blank",rel:"noopener noreferrer"}},[e._v("组合总和"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combination-sum/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-m-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("40")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combination-sum-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("组合总和 II"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/combination-sum-ii/solution/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("113")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/path-sum-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("路径总和 II"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/path-sum-ii/solution/hui-su-suan-fa-shen-du-you-xian-bian-li-zhuang-tai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("60")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutation-sequence/",target:"_blank",rel:"noopener noreferrer"}},[e._v("第 k 个排列"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/permutation-sequence/solution/hui-su-jian-zhi-python-dai-ma-java-dai-ma-by-liwei/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("257")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-paths/",target:"_blank",rel:"noopener noreferrer"}},[e._v("二叉树的所有路径"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-paths/solution/shen-du-you-xian-bian-li-python-dai-ma-by-liweiwei/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("491")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/increasing-subsequences/",target:"_blank",rel:"noopener noreferrer"}},[e._v("递增子序列"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("1593")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/split-a-string-into-the-max-number-of-unique-substrings/",target:"_blank",rel:"noopener noreferrer"}},[e._v("拆分字符串使唯一子字符串的数目最大"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("1071")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-tile-possibilities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("活字印刷"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-tile-possibilities/solution/hui-su-suan-fa-python-dai-ma-by-liweiwei1419/",target:"_blank",rel:"noopener noreferrer"}},[e._v("设计递归函数返回值"),t("OutboundLink")],1)])])])]),e._v(" "),t("ul",[t("li",[e._v("第 47 题提示：思考为什么造成了重复，如何在搜索之前就判断这一支会产生重复；")]),e._v(" "),t("li",[e._v("第 60 题提示：利用了剪枝的思想，减去了大量枝叶，直接来到需要的叶子结点；")]),e._v(" "),t("li",[e._v("第 90 题提示：剪枝技巧同 47 题、39 题、40 题。")])]),e._v(" "),t("h2",{attrs:{id:"题型二-字符串上的回溯问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题型二-字符串上的回溯问题"}},[e._v("#")]),e._v(" 题型二：字符串上的回溯问题")]),e._v(" "),t("p",[e._v("重点理解：由于字符串每次都生成新字符，无须状态重置。")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("字符串的问题的特殊之处在于，字符串的拼接生成新对象，因此在这一类问题上没有显示「回溯」的过程，但是如果使用 "),t("code",[e._v("StringBuilder")]),e._v(" 拼接字符串就另当别论。\n在这里把它们单独作为一个题型，是希望朋友们能够注意到这个非常细节的地方。")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("题号")]),e._v(" "),t("th",[e._v("链接")]),e._v(" "),t("th",[e._v("题解")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("17")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/",target:"_blank",rel:"noopener noreferrer"}},[e._v("电话号码的字母组合"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/hui-su-sou-suo-wu-xian-shi-hui-su-yan-du-you-xian-/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("22")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/generate-parentheses/",target:"_blank",rel:"noopener noreferrer"}},[e._v("括号生成"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/generate-parentheses/solution/hui-su-suan-fa-by-liweiwei1419/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("93")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/restore-ip-addresses/",target:"_blank",rel:"noopener noreferrer"}},[e._v("复原 IP 地址"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/restore-ip-addresses/solution/hui-su-suan-fa-hua-tu-fen-xi-jian-zhi-tiao-jian-by/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("784")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-case-permutation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("字母大小写全排列"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/letter-case-permutation/solution/shen-du-you-xian-bian-li-hui-su-suan-fa-python-dai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])])])]),e._v(" "),t("p",[e._v("第 22 题提示：这道题广度优先遍历也很好写，可以通过这个问题理解一下为什么回溯算法都是深度优先遍历，并且都用递归来写。")]),e._v(" "),t("h2",{attrs:{id:"题型三-flood-fill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题型三-flood-fill"}},[e._v("#")]),e._v(" 题型三：Flood Fill")]),e._v(" "),t("p",[e._v("Flood 是「洪水」的意思，Flood Fill 直译是「泛洪填充」的意思，体现了洪水能够从一点开始，迅速填满当前位置附近的地势低的区域。类似的应用还有：PS 软件中的「点一下把这一片区域的颜色都替换掉」，扫雷游戏「点一下打开一大片没有雷的区域」。")]),e._v(" "),t("p",[e._v("下面这几个问题，思想不难，但是初学的时候代码很不容易写对，并且也很难调试。我们的建议是多写几遍，忘记了就再写一次，参考规范的编写实现（设置 "),t("code",[e._v("visited")]),e._v(" 数组，设置方向数组，抽取私有方法），把代码写对。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("题号")]),e._v(" "),t("th",[e._v("链接")]),e._v(" "),t("th",[e._v("题解")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("79")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/word-search/",target:"_blank",rel:"noopener noreferrer"}},[e._v("单词搜索"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/word-search/solution/zai-er-wei-ping-mian-shang-shi-yong-hui-su-fa-pyth/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("200")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/surrounded-regions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("被围绕的区域"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("130")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/surrounded-regions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("被围绕的区域"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("733")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/flood-fill/",target:"_blank",rel:"noopener noreferrer"}},[e._v("733. 图像渲染（Flood Fill，中等）"),t("OutboundLink")],1)]),e._v(" "),t("td")])])]),e._v(" "),t("p",[t("strong",[e._v("说明")]),e._v("：以上问题都不建议修改输入数据，设置 "),t("code",[e._v("visited")]),e._v(" 数组是标准的做法。可能会遇到参数很多，是不是都可以写成成员变量的问题，面试中拿不准的记得问一下面试官")]),e._v(" "),t("h2",{attrs:{id:"题型四-一些游戏问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题型四-一些游戏问题"}},[e._v("#")]),e._v(" "),t("strong",[e._v("题型四")]),e._v("：一些游戏问题")]),e._v(" "),t("p",[e._v("回溯算法是早期简单的人工智能，有些教程把回溯叫做暴力搜索，但回溯没有那么暴力，回溯是有方向地搜索。「力扣」上有一些简单的游戏类问题，解决它们有一定的难度，大家可以尝试一下。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("序号")]),e._v(" "),t("th",[e._v("题目序号")]),e._v(" "),t("th",[e._v("题解")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("51")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/n-queens/",target:"_blank",rel:"noopener noreferrer"}},[e._v("N 皇后"),t("OutboundLink")],1),e._v("（困难）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/n-queens/solution/gen-ju-di-46-ti-quan-pai-lie-de-hui-su-suan-fa-si-/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("37")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/sudoku-solver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("解数独"),t("OutboundLink")],1),e._v("（困难）")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("529")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/minesweeper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("扫雷游戏"),t("OutboundLink")],1),e._v("（中等）")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://blog.csdn.net/lw_power/article/details/109314152",target:"_blank",rel:"noopener noreferrer"}},[e._v("文字题解"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("488")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/zuma-game/",target:"_blank",rel:"noopener noreferrer"}},[e._v("488. 祖玛游戏（困难）"),t("OutboundLink")],1)]),e._v(" "),t("td")])])]),e._v(" "),t("p",[t("strong",[e._v("说明")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("第 51 题：经典问题，掌握「空间换时间」技巧；")]),e._v(" "),t("li",[e._v("第 529 题：寻找连通分量。DFS 和 BFS 均可；")]),e._v(" "),t("li",[e._v("第 488 题：很难，可以不做。")])]),e._v(" "),t("p",[e._v("请大家做了一些回溯算法的问题以后顺便思考一下：深度优先遍历、递归、栈，它们三者的关系，我个人以为它们背后统一的逻辑都是「后进先出」。完成练习有助于我们深刻理解算法思想，我们加油！")])])}),[],!1,null,null,null);t.default=n.exports}}]);
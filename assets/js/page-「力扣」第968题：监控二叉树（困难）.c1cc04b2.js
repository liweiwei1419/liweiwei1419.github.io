(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{839:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[s._v("题目链接："),t("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-tree-cameras/",target:"_blank",rel:"noopener noreferrer"}},[s._v("968. 监控二叉树"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("给定一个二叉树，我们在树的节点上安装摄像头。")]),s._v(" "),t("p",[s._v("节点上的每个摄影头都可以监视"),t("strong",[s._v("其父对象、自身及其直接子对象。")])]),s._v(" "),t("p",[s._v("计算监控树的所有节点所需的最小摄像头数量。")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_01.png",alt:"img",loading:"lazy"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：[0,0,null,0,0]\n输出：1\n解释：如图所示，一台摄像头足以监控所有节点。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_02.png",alt:"img",loading:"lazy"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：[0,0,null,0,null,0,null,null,0]\n输出：2\n解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ol",[t("li",[s._v("给定树的节点数的范围是 "),t("code",[s._v("[1, 1000]")]),s._v("。")]),s._v(" "),t("li",[s._v("每个节点的值都是 0。")])]),s._v(" "),t("p",[t("strong",[s._v("Constraints:")])]),s._v(" "),t("ul",[t("li",[s._v("The number of nodes in the tree is in the range "),t("code",[s._v("[1, 1000]")]),s._v(".")]),s._v(" "),t("li",[t("code",[s._v("Node.val == 0")])])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("说明：这题很难，返回的状态有 3 个数值。设置 3 个状态：")]),s._v(" "),t("ol",[t("li",[s._v("自己有灯")]),s._v(" "),t("li",[s._v("自己无灯，孩子也无灯")]),s._v(" "),t("li",[s._v("自己无灯，孩子有灯")])]),s._v(" "),t("p",[t("strong",[s._v("参考代码")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("minCameraCover")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * @param node\n     * @return\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前结点没有相机，子节点有相机")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" leftChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" rightChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 孩子无灯、孙子也无灯，自己一定要有灯")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("leftChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" rightChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            res"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前结点有相机")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 孩子有灯")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("leftChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" rightChild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
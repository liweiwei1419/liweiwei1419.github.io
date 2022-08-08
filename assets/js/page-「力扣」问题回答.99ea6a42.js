(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{679:function(_,v,e){"use strict";e.r(v);var d=e(1),t=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("本文是在这篇 "),v("a",{attrs:{href:"https://leetcode-cn.com/circle/discuss/rFK9HC/view/tDWDHh/",target:"_blank",rel:"noopener noreferrer"}},[_._v("帖子"),v("OutboundLink")],1),_._v(" 下我的回答。")]),_._v(" "),v("h1",{attrs:{id:"回答-1-取-mid-为什么要加-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回答-1-取-mid-为什么要加-1"}},[_._v("#")]),_._v(" 回答 1：取 mid 为什么要加 1")]),_._v(" "),v("p",[v("code",[_._v("int mid = left + (right - left) / 2 + 1;")]),_._v(" （+1 也可以写在括号里面，目的是为了改变整数除法默认下取整的行为）只出现在 "),v("code",[_._v("while (left < right)")]),_._v(" 这种写法里，因为这种写法要求我们一定要弄清楚 "),v("code",[_._v("mid")]),_._v(" 位置的值是保留还是剔除：")]),_._v(" "),v("ul",[v("li",[_._v("如果保留，就不加 1 或者减 1；")]),_._v(" "),v("li",[_._v("如果剔除，就要加 1 或者减 1。")])]),_._v(" "),v("p",[_._v("需要重点理解： "),v("code",[_._v("if")]),_._v(" 和 "),v("code",[_._v("else")]),_._v(" 里面出现了 "),v("code",[_._v("left = mid")]),_._v(" ，"),v("strong",[_._v("加 "),v("code",[_._v("1")]),_._v(" 是避免出现死循环")]),_._v("。你可以试试看取 "),v("code",[_._v("mid")]),_._v(" 的时候不加 1 ，一定会有某一些测试用例 "),v("strong",[_._v("超时")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("原因")]),_._v("：整数除法是下取整。取 "),v("code",[_._v("mid")]),_._v(" 的时候 "),v("strong",[_._v("不能做到真正取到中间位置")]),_._v("，例如 "),v("code",[_._v("left = 3, right = 4")]),_._v("， "),v("code",[_._v("mid = (left + right) / 2 = 3")]),_._v("；")]),_._v(" "),v("p",[_._v("你给的「第一种」代码里 "),v("code",[_._v("if")]),_._v(" 和 "),v("code",[_._v("else")]),_._v(" 里面的代码表示：根据 "),v("code",[_._v("mid")]),_._v(" 位置的值把区间 "),v("code",[_._v("[left..right]")]),_._v(" 分成两个部分："),v("code",[_._v("[left..mid - 1]")]),_._v(" 与 "),v("code",[_._v("[mid..right]")]),_._v("。"),v("code",[_._v("left = mid")]),_._v(" 一定需要与 "),v("code",[_._v("right = mid - 1")]),_._v(" 配对使用。因为：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("left = mid")]),_._v(" 表示下一轮搜索区间是 "),v("code",[_._v("[mid..right]")]),_._v(" ，所以设置 "),v("code",[_._v("left = mid")]),_._v("；")]),_._v(" "),v("li",[v("code",[_._v("right = mid - 1")]),_._v(" 表示下一轮搜索区间是区间 "),v("code",[_._v("[left..mid - 1]")]),_._v("，所以设置 "),v("code",[_._v("right = mid - 1")]),_._v("。")])]),_._v(" "),v("p",[_._v("当区间里只剩下两个元素的时候 "),v("code",[_._v("left")]),_._v(" 的值等于 "),v("code",[_._v("mid")]),_._v(" 的值，还看上面的例子 "),v("code",[_._v("left = 3, right = 4")]),_._v("， "),v("code",[_._v("mid = (left + right) / 2 = 3 = mid")]),_._v("，此时一旦进入这个区间 "),v("code",[_._v("[mid..right]")]),_._v(" ，代码执行 "),v("code",[_._v("left = mid")]),_._v(" ，搜索区间不能缩小，所以进入死循环。")]),_._v(" "),v("p",[_._v("如果实在对着屏幕很难理解为什么会出现死循环，"),v("strong",[_._v("在循环体里把 "),v("code",[_._v("left")]),_._v(" 和 "),v("code",[_._v("right")]),_._v(" 的值打印出来看一下就清楚了")]),_._v("。「力扣」第 69 题是这种情况下最容易看到死循环的问题，我写过题解展示过这种死循环，可以看 "),v("a",{attrs:{href:"https://leetcode-cn.com/problems/sqrtx/solution/er-fen-cha-zhao-niu-dun-fa-python-dai-ma-by-liweiw/",target:"_blank",rel:"noopener noreferrer"}},[_._v("这里"),v("OutboundLink")],1),_._v("，可以直接翻到最后「问答」那里，看第 3 点。")]),_._v(" "),v("hr"),_._v(" "),v("h1",{attrs:{id:"回答-2-你给出的-「第二种」-代码为什么也能通过"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回答-2-你给出的-「第二种」-代码为什么也能通过"}},[_._v("#")]),_._v(" 回答 2：你给出的 「第二种」 代码为什么也能通过")]),_._v(" "),v("p",[_._v("你给出的 「第二种」 代码："),v("code",[_._v("while (left <= right)")]),_._v(" 这种写法，这种写法要求："),v("strong",[v("code",[_._v("if")]),_._v(" 和 "),v("code",[_._v("else")]),_._v(" 里面的 "),v("code",[_._v("right")]),_._v(" 和 "),v("code",[_._v("left")]),_._v(" 都要 "),v("code",[_._v("-1")]),_._v(" 或者 "),v("code",[_._v("+ 1")]),_._v("，它没有死循环的问题")]),_._v("，但是有一点要注意的是："),v("strong",[_._v("一定要判断 "),v("code",[_._v("mid")]),_._v(" 位置的值可能是解的时候，把结果先保存下来")]),_._v("。")]),_._v(" "),v("p",[_._v("本题 "),v("code",[_._v("ans[i] = items[mid][1];")]),_._v(" 就设置在 "),v("code",[_._v("else")]),_._v(" 里，表示当 "),v("code",[_._v("items[mid][0] <= queries[i]")]),_._v(" 的时候，"),v("code",[_._v("mid")]),_._v(" 位置的值有可能是我们要找的（至于为什么是这样，看题目）。当 "),v("code",[_._v("left == right")]),_._v(" 的时候，循环体还会继续执行，由于 "),v("code",[_._v("left")]),_._v(" 和 "),v("code",[_._v("right")]),_._v(" 一定会 +1 或者 -1，还会继续查找，所以没有死循环的问题，由于之前保留过 "),v("code",[_._v("ans")]),_._v(" 的值，所以不会丢失解。")]),_._v(" "),v("p",[_._v("我帮你简单总结一下网络上常见的三种模板的区别：")]),_._v(" "),v("hr"),_._v(" "),v("h1",{attrs:{id:"总结-三种模板写法比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-三种模板写法比较"}},[_._v("#")]),_._v(" 总结：三种模板写法比较")]),_._v(" "),v("ul",[v("li",[_._v("模板一："),v("code",[_._v("while (left <= right)")]),_._v(" ，这种写法里面的 "),v("code",[_._v("left")]),_._v(" 和 "),v("code",[_._v("right")]),_._v(" 都要加 1 或者减 1，还要判断 mid 位置的值有可能是解的时候，把 "),v("code",[_._v("mid")]),_._v(" 的值保存下来，所以这种写法别人也叫带 "),v("code",[_._v("ans")]),_._v(" 的写法，我以前看到力扣的大佬零神就比较喜欢这样写；")]),_._v(" "),v("li",[_._v("模板二："),v("code",[_._v("while (left < right)")]),_._v(" 这种写法需要清楚 "),v("code",[_._v("mid")]),_._v(" 位置的值是否保留，所以一定是 "),v("code",[_._v("left = mid")]),_._v(" 与 "),v("code",[_._v("right = mid - 1")]),_._v(" 配对，"),v("code",[_._v("left = mid + 1")]),_._v(" 与 "),v("code",[_._v("right = mid")]),_._v(" 配对。这种模板最难理解的地方就是出现 "),v("code",[_._v("left = mid")]),_._v(" 的时候，一定要把取 "),v("code",[_._v("mid")]),_._v(" 的表达式 +1。好处是退出循环以后，很多时候 "),v("code",[_._v("left")]),_._v(" 与 "),v("code",[_._v("right")]),_._v(" 就是要找的解，而且这种写法也要求我们必须弄清楚 "),v("code",[_._v("mid")]),_._v(" 到底有没有可能是解；")])]),_._v(" "),v("blockquote",[v("p",[_._v("这里有个小技巧，一般我会在注释里写上「下一轮搜索区间是什么」。如果下一轮搜索区间是 "),v("code",[_._v("[mid..right]")]),_._v(" ，这个时候就设置 "),v("code",[_._v("left = mid")]),_._v("，这种情况的反面区间就是 "),v("code",[_._v("[left..mid - 1]")]),_._v(" ，那么 "),v("code",[_._v("else")]),_._v(" 就设置 "),v("code",[_._v("right = mid - 1")]),_._v("，所以就不用记忆配对关系了。")])]),_._v(" "),v("ul",[v("li",[_._v("模板三："),v("code",[_._v("while (left + 1 < right)")]),_._v(" 这种写法里面的 "),v("code",[_._v("left")]),_._v(" 和 "),v("code",[_._v("right")]),_._v(" 都不加 1 或者减 1，意思就是都认为 "),v("code",[_._v("mid")]),_._v(" 可能是要找的值，所以退出循环以后一定要再判断一下 "),v("code",[_._v("left")]),_._v(" 和 "),v("code",[_._v("right")]),_._v(" 哪个有可能是解。退出 "),v("code",[_._v("while (left + 1 < right)")]),_._v(" 循环以后，区间里剩下两个元素，所以还要单独判断一下这两个位置哪个是要找的元素的值，很多时候会增加不必要的判断逻辑。")])]),_._v(" "),v("p",[v("strong",[_._v("三种模板实际上都是一个意思")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("模板二说一定要搞清楚 "),v("code",[_._v("mid")]),_._v(" 位置是不是要保留，退出循环以后 "),v("code",[_._v("left")]),_._v(" 与 "),v("code",[_._v("right")]),_._v(" 重合，区间 "),v("code",[_._v("[left..right]")]),_._v(" 只有 1 个元素；")]),_._v(" "),v("li",[_._v("模板三说 "),v("code",[_._v("mid")]),_._v(" 全部保留，退出循环以后 "),v("code",[_._v("left")]),_._v(" 在左，"),v("code",[_._v("right")]),_._v(" 在右，区间 "),v("code",[_._v("[left..right]")]),_._v(" 有 2 个元素；")]),_._v(" "),v("li",[_._v("模板一说 "),v("code",[_._v("mid")]),_._v(" 全部不保留，退出循环以后 "),v("code",[_._v("left")]),_._v(" 在右，"),v("code",[_._v("right")]),_._v(" 在左，区间 "),v("code",[_._v("[left..right]")]),_._v(" 为空区间。")])]),_._v(" "),v("p",[_._v("模板一和模板三屏蔽了 + 1 还是 -1 的细节，但是都有相应的「补救措施」。")]),_._v(" "),v("p",[_._v("不管哪种模板一定要判断的是 "),v("strong",[_._v("下一轮「向左找」还是「向右找」")]),_._v("，这一点应该从题目中分析得到，所以一定要认真审题哦。")])])}),[],!1,null,null,null);v.default=t.exports}}]);
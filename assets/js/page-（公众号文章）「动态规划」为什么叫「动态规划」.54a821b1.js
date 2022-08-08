(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{851:function(e,o,v){"use strict";v.r(o);var i=v(1),t=Object(i.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("今天这篇推文回答一个问题，「动态规划」为什么叫「动态规划」？")]),e._v(" "),o("p",[e._v("今天还是闲聊，内容很主观，是不能写在书里的。严格说起来，很多观点都经不起推敲。所以大家看看就好，可能我有一部分理解和你的是重合的，有一部分并不一样。大家感兴趣的话，可以聊聊。")]),e._v(" "),o("p",[e._v("「动态规划」这个名字我个人觉得挺不好的（也有可能是翻译的锅，哈哈哈），因为这个名字根本不知道它是干嘛的。我们看看其它算法和数据结构的名字，多多少少都有点沾边：")]),e._v(" "),o("ul",[o("li",[e._v("「二分查找」：不是向左走就是向右走，每一次考虑的元素的范围是上一次的一半；")]),e._v(" "),o("li",[e._v("「滑动窗口（尺取法）」：一个窗口朝着右边滑动，量体裁衣的时候用手比划长度；")]),e._v(" "),o("li",[e._v("「堆」：了解了堆的定义，知道是一个完全二叉树，一些数字堆在一起，没有空隙，并且保持了某种定义；")]),e._v(" "),o("li",[e._v("「二叉搜索树」：二叉树 + 二分搜索，每一次查找不是向左走就是向右走；")]),e._v(" "),o("li",[e._v("「并查集」：用于合并和查找的不相交集合；")]),e._v(" "),o("li",[e._v("「哈希表」：存在一个「神奇的」哈希函数，把一个对象映射到一个整数，只要对象的各个属性不变，哈希函数得到的整数就不变；")]),e._v(" "),o("li",[e._v("「红黑树」：规定了红色结点、黑色结点以及一些规则；")]),e._v(" "),o("li",[e._v("「B 树」：保持了某种意义上的、广义的「平衡」的二叉搜索树树；")]),e._v(" "),o("li",[e._v("「栈」：只在一端读取元素的线性数据结构，因为它很简单，用多了我也慢慢接受了；")]),e._v(" "),o("li",[e._v("「队列」：先进先出，就是生活中的「队列」；")]),e._v(" "),o("li",[e._v("「回溯算法」：其实就是深度优先遍历，一种尝试不能得到结果以后就回到上一次尝试的地方，朝着新的选择继续搜索。「回到从前」叫「回溯」；")]),e._v(" "),o("li",[e._v("「暴力算法」：就很暴力，考虑每一种情况；")]),e._v(" "),o("li",[e._v("「贪心算法」：只看眼前，不考虑全局；")]),e._v(" "),o("li",[e._v("「线段树」：回答区间问题；")]),e._v(" "),o("li",[e._v("「树状数组（Binary Indexed Tree）」：建立在数组上的树（基于下标的二进制表示的树）。")])]),e._v(" "),o("p",[e._v("因此就有一个问题，为什么会叫「动态规划」。在网上搜索了一下，在维基百科的「Dynamic programming」这个词条（注意是英文的，不是中文的「动态规划」）里找到了一点答案。")]),e._v(" "),o("p",[e._v("我对自己理解英文阅读能力不是很有自信，同时我又不想让关注这个公众号的读者在阅读上有负担，所以就借助了字典工具，并且逐字逐句中英文对照翻译了一下。")]),e._v(" "),o("p",[o("strong",[e._v("说明")]),e._v("：感兴趣且有条件的朋友最好自行搜索一下。因为我的截取的片段多少有一点断章取义的意思。如果大家发现我翻译和解释有问题，欢迎指出。")]),e._v(" "),o("blockquote",[o("p",[e._v("Bellman explains the reasoning behind the term "),o("em",[e._v("dynamic programming")]),e._v(" in his autobiography, "),o("em",[e._v("Eye of the Hurricane: An Autobiography")]),e._v(":")])]),e._v(" "),o("p",[e._v("翻译：Bellman 在他的自传 《Eye of the Hurricane: An Autobiography》中解释了术语「动态规划」的由来。")]),e._v(" "),o("blockquote",[o("p",[e._v("I spent the Fall quarter (of 1950) at "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/RAND_Corporation",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAND"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("翻译：我在 RAND（一家公司的名称）度过了 1950 年的秋季。")]),e._v(" "),o("blockquote",[o("p",[e._v("My first task was to find a name for multistage decision processes.")])]),e._v(" "),o("p",[e._v("翻译：我的第一个任务是为多阶段决策过程找到一个名称。")]),e._v(" "),o("blockquote",[o("p",[e._v('An interesting question is, "Where did the name, dynamic programming, come from?"')])]),e._v(" "),o("p",[e._v("翻译：一个有趣的问题是，「dynamic programming 这个名字从何而来？」")]),e._v(" "),o("blockquote",[o("p",[e._v("The 1950s were not good years for mathematical research.")])]),e._v(" "),o("p",[e._v("翻译：20 世纪 50 年代不是数学研究的好年头。")]),e._v(" "),o("blockquote",[o("p",[e._v("We had a very interesting gentleman in Washington named "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Charles_Erwin_Wilson",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wilson"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("翻译：在华盛顿有一位非常有趣的绅士，名叫 Wilson。")]),e._v(" "),o("blockquote",[o("p",[e._v('He was Secretary of Defense, and he actually had a pathological fear and hatred of the word "research".')])]),e._v(" "),o("p",[e._v("翻译：他是国防部长，其实对「research」这个词有病态的恐惧和仇恨。")]),e._v(" "),o("blockquote",[o("p",[e._v("I’m not using the term lightly; I’m using it precisely.")])]),e._v(" "),o("p",[e._v("翻译：所以我不能轻易地使用这个术语（research）（公布于世），但是我的确正在使用它。")]),e._v(" "),o("blockquote",[o("p",[e._v("His face would suffuse, he would turn red, and he would get violent if people used the term research in his presence.")])]),e._v(" "),o("p",[e._v("翻译：如果人们在他面前使用「research」这个词，他会很敏感，甚至脸红且暴躁。")]),e._v(" "),o("blockquote",[o("p",[e._v("You can imagine how he felt, then, about the term mathematical.")])]),e._v(" "),o("p",[e._v("翻译：你可以想象它对数学术语的敏感程度。")]),e._v(" "),o("blockquote",[o("p",[e._v("The RAND Corporation was employed by the Air Force, and the Air Force had Wilson as its boss, essentially.")])]),e._v(" "),o("p",[e._v("翻译：RAND 公司受雇于空军，而空军基本上以 Wilson 为上司。")]),e._v(" "),o("blockquote",[o("p",[e._v("Hence, I felt I had to do something to shield Wilson and the Air Force from the fact that I was really doing mathematics inside the RAND Corporation.")])]),e._v(" "),o("p",[e._v("翻译：因此，我觉得我必须做一些事情以避免 Wilson 和空军对我在 RAND 公司做数学（研究）的干扰。")]),e._v(" "),o("blockquote",[o("p",[e._v("What title, what name, could I choose?")])]),e._v(" "),o("p",[e._v("翻译：那么我可以使用什么标题和名字呢？")]),e._v(" "),o("blockquote",[o("p",[e._v("In the first place I was interested in planning, in decision making, in thinking.")])]),e._v(" "),o("p",[e._v("翻译：首先我对计划、决策和思考感兴趣。")]),e._v(" "),o("blockquote",[o("p",[e._v("But planning, is not a good word for various reasons.")])]),e._v(" "),o("p",[e._v("翻译：但是由于种种原因 planning 不是一个好的词汇（什么原因并没有提到）。")]),e._v(" "),o("blockquote",[o("p",[e._v('I decided therefore to use the word "programming".')])]),e._v(" "),o("p",[e._v("翻译：因此我决定使用「programming」。")]),e._v(" "),o("blockquote",[o("p",[e._v("I wanted to get across the idea that this was dynamic, this was multistage, this was time-varying.")])]),e._v(" "),o("p",[e._v("翻译：我认为这个想法是动态的、多阶段的，并且是随着时间变化的。")]),e._v(" "),o("blockquote",[o("p",[e._v("I thought, let's kill two birds with one stone.")])]),e._v(" "),o("p",[e._v("翻译：所以干脆一石二鸟（weiwei 注：与其框死在几个词汇上，倒不如用令一个词一起概括了）。")]),e._v(" "),o("blockquote",[o("p",[e._v("Let's take a word that has an absolutely precise meaning, namely dynamic, in the classical physical sense.")])]),e._v(" "),o("p",[e._v("翻译：让我们用一个在经典物理学上，具有绝对精确含义的词，即「dynamic」。")]),e._v(" "),o("blockquote",[o("p",[e._v("It also has a very interesting property as an adjective, and that is it's impossible to use the word dynamic in a pejorative sense.")])]),e._v(" "),o("p",[e._v("翻译：它（dynamic）同时也是一个形容词，并且作为形容词，它不可能用于一个贬义的语境中。")]),e._v(" "),o("blockquote",[o("p",[e._v("Try thinking of some combination that will possibly give it a pejorative meaning. It's impossible.")])]),e._v(" "),o("p",[e._v("翻译：我们可以设想一下「dynamic」可能会用于什么样的贬义的语境中呢。这很难想象。")]),e._v(" "),o("blockquote",[o("p",[e._v("Thus, I thought dynamic programming was a good name.")])]),e._v(" "),o("p",[e._v("翻译：因此，我认为「dynamic programming」是一个好的名字。")]),e._v(" "),o("blockquote",[o("p",[e._v("It was something not even a Congressman could object to.")])]),e._v(" "),o("p",[e._v("翻译：（使用这个术语）这是连美国国会议员都很难反对的。")]),e._v(" "),o("blockquote",[o("p",[e._v("So I used it as an umbrella for my activities.")])]),e._v(" "),o("p",[e._v("翻译：因此我（使用这个术语）可以保护我（，使我的研究工作得以正常进行）。")]),e._v(" "),o("blockquote",[o("p",[e._v("— Richard Bellman, "),o("em",[e._v("Eye of the Hurricane: An Autobiography")]),e._v(" (1984, page 159)")])]),e._v(" "),o("p",[e._v("（这是落款，无意义）。")]),e._v(" "),o("p",[e._v("「维基百科」后面有提到：")]),e._v(" "),o("blockquote",[o("p",[e._v("The above explanation of the origin of the term is lacking.")])]),e._v(" "),o("p",[e._v("翻译：上面的解释其实也不足以命名（使用 dynamic programming）的由来。")]),e._v(" "),o("blockquote",[o("p",[e._v("This cannot be strictly true,")])]),e._v(" "),o("p",[e._v("翻译：这不可能严格正确。")]),e._v(" "),o("p",[o("strong",[e._v("再次声明")]),e._v("：以下内容很主观，不一定适用于所有情况，仅供大家参考。")]),e._v(" "),o("p",[e._v("我认为「dynamic」是发明人 Richard Bellman 为了避免造成麻烦起的一个不那么贴切的名字，很有可能 Bellman 说的「dynamic programming」和我们做算法题的「dynamic programming」并不是那么吻合。")]),e._v(" "),o("p",[e._v("我最能接受的「programming」的语义是：")]),e._v(" "),o("blockquote",[o("p",[e._v("programming 指的是一种表格法。")])]),e._v(" "),o("p",[e._v("这是来自《算法导论（第 3 版）》第 15 章《动态规划》第一段话。")]),e._v(" "),o("p",[e._v("当然这仅限于我做的那些算法问题，因为有一部分使用「动态规划」解决的问题的的确确就是在填写一张表格（一维、二维甚至更高维），因此我认为「动态规划」的核心思想之一还是「空间换时间」。")]),e._v(" "),o("p",[e._v("当然随着我做的题目越来越多（当然也没多少），我觉得「动态规划」所体现的算法思想不足以用 「dynamic」和「 programming」体现。我昨天罗列了一下，如果让我总结「动态规划」，我可以总结出哪些关键字：")]),e._v(" "),o("ul",[o("li",[e._v("考虑了所有可能的情况；")]),e._v(" "),o("li",[e._v("把结果记录下来（空间换时间）；")]),e._v(" "),o("li",[e._v("定义子问题（状态）；")]),e._v(" "),o("li",[e._v("组合子问题的解（状态转移方程）；")]),e._v(" "),o("li",[e._v("重复子问题")]),e._v(" "),o("li",[e._v("最优子结构（小规模问题的解组成了大规模问题的解，min、max、count 这几个函数都有这样的性质）；")]),e._v(" "),o("li",[e._v("无后效性（超级重要的一个概念）；")]),e._v(" "),o("li",[e._v("「状态」「阶段」「决策」；")]),e._v(" "),o("li",[e._v("求解过程构成了一张有向无环图。")])]),e._v(" "),o("p",[e._v("我不喜欢做算法题的原因是：算法问题在一定程度上会让「我（仅指我个人）」对算法和数据结构的理解变得很狭隘，变得钻到技巧里而忽略了算法设计思想，另一方面的原因是，我的确没有太多时间做题，也不是很感兴趣。")]),e._v(" "),o("p",[e._v("这就是今天的分享，感谢大家的收看。")])])}),[],!1,null,null,null);o.default=t.exports}}]);
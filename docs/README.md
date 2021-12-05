---
title: 快来算法吧
icon: huanyingye
---

# 快来算法吧

本站为公益项目，内容开源，可以随意取用，转载需注明来源。

留言需要注册 GitHub 账号。

由于本站免费，维护需要占用时间精力，请不要贴一段代码让别人 bug。

使用 [vuepress-theme-hope](https://vuepress-theme-hope.gitee.io/zh/) 构建，部署在 GitHub 上。


[视频：算法新手如何刷力扣（LeetCode）？【干货分享】](https://www.bilibili.com/video/BV17K411J7yR)


## 「力扣」分类以及题解目录（按照 LeetBook 的章节编排，第 16 章以后为目前 LeetBook 不包含的章节）

**说明**：题目分类与我的 LeetBook 章节对应。

### 第 1 章 时间复杂度

这部分内容介绍了 时间复杂度 这个概念，可以收看 [【视频讲解】](https://leetcode-cn.com/leetbook/read/learning-algorithms-with-leetcode/xs3ij1/) ，完全免费。 这一章节没有练习。

### 第 2 章 二分查找

+ 可以我的  LeetBook 收看二分查找的知识点 [讲解](https://leetcode-cn.com/leetbook/read/learning-algorithms-with-leetcode/xsq0b7/)，免费；
+ 知识点讲解：[写对二分查找不能靠模板，需要理解加练习 （附练习题，持续更新）](https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/)、[【视频讲解】](https://www.bilibili.com/video/av83911694?p=1)。

#### 题型一：二分求下标

+ 重点问题

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 704  | [二分查找](https://leetcode-cn.com/problems/binary-search/)（简单） |                                                              |
| 35   | [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)（简单） | [【视频讲解】](https://www.bilibili.com/video/av83911694?p=2)、[文字题解](https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/) |
| 34   | [在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)（简单） | [【视频讲解】](https://www.bilibili.com/video/av83911694?p=3)、[文字题解](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/si-lu-hen-jian-dan-xi-jie-fei-mo-gui-de-er-fen-cha/) |
| 1095 | [ 山脉数组中查找目标值](https://leetcode-cn.com/problems/find-in-mountain-array/)（中等） | [【视频讲解】](https://www.bilibili.com/video/BV1GK4115778)、[文字题解](https://leetcode-cn.com/problems/find-in-mountain-array/solution/shi-yong-chao-hao-yong-de-er-fen-fa-mo-ban-python-/) |
| 4    | [寻找两个有序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)（困难） | [【视频讲解】](https://www.bilibili.com/video/BV1Xv411z76J)、[文字题解](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/he-bing-yi-hou-zhao-gui-bing-guo-cheng-zhong-zhao-/) |


**说明**：

+ 第 34 题：二分查找找边界问题、[CSDN](https://blog.csdn.net/lw_power/article/details/104066739)、[庸才顾子汐：关于 while (left <= right) 写法返回值的详细讨论](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/da-jia-bu-yao-kan-labuladong-de-jie-fa-fei-chang-2/)；
+ 第 4 题：二分查找里最难的问题，重点在于理解：① 为什么是在短数组里找边界；② 边界条件的判断。

---

**练习**：


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 33   | [搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)（中等） | [文字题解](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/er-fen-fa-python-dai-ma-java-dai-ma-by-liweiwei141/) |
| 81   | [搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)（中等） | [文字题解](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/solution/er-fen-cha-zhao-by-liweiwei1419/) |
| 153  | [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)（中等） | [文字题解](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/er-fen-fa-fen-zhi-fa-python-dai-ma-java-dai-ma-by-/) |
| 154  | [154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)（困难） | [文字题解](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/solution/er-fen-fa-fen-zhi-fa-python-dai-ma-by-liweiwei1419/) |
| 275  | [ H指数 II](https://leetcode-cn.com/problems/h-index-ii/)（中等） | [文字题解](https://leetcode-cn.com/problems/h-index-ii/solution/jian-er-zhi-zhi-er-fen-cha-zhao-by-liweiwei1419-2/) |
| 436  | [寻找右区间](https://leetcode-cn.com/problems/find-right-interval/)（中等） | [文字题解](https://leetcode-cn.com/problems/find-right-interval/solution/er-fen-cha-zhao-hong-hei-shu-by-liweiwei1419/) |
| 1237 | [找出给定方程的正整数解](https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation/)（中等） |                                                              |
| 1300 | [转变数组后最接近目标值的数组和](https://leetcode-cn.com/problems/sum-of-mutated-array-closest-to-target/)（中等） | [文字题解](https://leetcode-cn.com/problems/sum-of-mutated-array-closest-to-target/solution/er-fen-cha-zhao-by-liweiwei1419-2/) |

#### 题型二：二分确定一个有范围的整数（二分答案）

**算法思想**：减而治之。如果题目要我们找一个整数，这个整数有确定的范围，可以通过二分查找逐渐缩小范围，最后逼近到一个数。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 69   | [x 的平方根](https://leetcode-cn.com/problems/sqrtx/)（简单） | [文字题解](https://leetcode-cn.com/problems/sqrtx/solution/er-fen-cha-zhao-niu-dun-fa-python-dai-ma-by-liweiw/) |
| 287  | [寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/)（中等） | [文字题解](https://leetcode-cn.com/problems/find-the-duplicate-number/solution/er-fen-fa-si-lu-ji-dai-ma-python-by-liweiwei1419/) |
| 374  | [猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)（简单） | [文字题解](https://leetcode-cn.com/problems/guess-number-higher-or-lower/solution/shi-fen-hao-yong-de-er-fen-cha-zhao-fa-mo-ban-pyth/) |
| 1283 | [使结果不超过阈值的最小除数](https://leetcode-cn.com/problems/find-the-smallest-divisor-given-a-threshold/)（中等） | [文字题解](https://leetcode-cn.com/problems/find-the-smallest-divisor-given-a-threshold/solution/er-fen-cha-zhao-ding-wei-chu-shu-by-liweiwei1419/) |
| 1292 | [元素和小于等于阈值的正方形的最大边长](https://leetcode-cn.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/)（中等） |                                                              |

#### 题型三：复杂的判别函数（最大值极小化问题）

**说明**：这一类问题本质上还是「题型二」（二分答案），但是初学的时候会觉得有一些绕。这一类问题的问法都差不多，**关键字是「连续」、「正整数」**，请大家注意捕捉题目中这样的关键信息。

+ [二分查找之「最大值极小化」相关问题及解题步骤](https://juejin.im/post/6862249637161091085)
+ [二分查找之「最大值极小化」例题选讲](https://juejin.im/post/6864407058662457358/)

| 题号   | 链接                                                         | 题解                                                         |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 875    | [爱吃香蕉的珂珂](https://leetcode-cn.com/problems/koko-eating-bananas/)（中等） | [文字题解](https://leetcode-cn.com/problems/koko-eating-bananas/solution/er-fen-cha-zhao-ding-wei-su-du-by-liweiwei1419/) |
| 410    | [分割数组的最大值](https://leetcode-cn.com/problems/split-array-largest-sum/)（困难） | [文字题解](https://leetcode-cn.com/problems/split-array-largest-sum/solution/er-fen-cha-zhao-by-liweiwei1419-4/) |
| LCP 12 | [小张刷题计划](https://leetcode-cn.com/problems/xiao-zhang-shua-ti-ji-hua/)（中等） |                                                              |
| 1011   | [在 D 天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days)（中等） |                                                              |
| 1482   | [制作 m 束花所需的最少天数](https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/)（中等） |                                                              |
| 1552   | [两球之间的磁力](https://leetcode-cn.com/problems/magnetic-force-between-two-balls/)（中等） |                                                              |

### 第 3 章 基础排序算法

这一部分包含了四种基础排序算法：选择排序、插入排序、希尔排序、冒泡排序。

「力扣」第 912 题：[排序数组](https://leetcode-cn.com/problems/sort-an-array/) 的 [题解](https://leetcode-cn.com/problems/sort-an-array/solution/fu-xi-ji-chu-pai-xu-suan-fa-java-by-liweiwei1419/)：总结了排序问题的一些要点和学习资料，可以从排序问题开始学习算法。

数组的问题可以作为算法「新手场」，因为这些问题只需要掌握编程语言的基础知识就可以完成。以下问题都很容易想到解决方案，即使没有学习过相关的数据结构和算法知识。

#### 知识点：循环不变量

+ 循环不变量用于证明算法的有效性，也是编码正确的理论依据；
+ 循环不变量定义帮助分清先加还是先赋值，还有一些边界条件。定义清楚循环不变量以后，代码的编写就会很轻松；
+ 建议把「循环不变量」作为注释写在代码里，以方便自己调试和他人阅读。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 912  | [排序数组](https://leetcode-cn.com/problems/sort-an-array)（中等） | [文字题解](https://leetcode-cn.com/problems/sort-an-array/solution/fu-xi-ji-chu-pai-xu-suan-fa-java-by-liweiwei1419/) |
| 26   | [删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)（简单） |                                                              |
| 27   | [移除元素](https://leetcode-cn.com/problems/remove-element/)（简单） |                                                              |
| 283  | [移动零](https://leetcode-cn.com/problems/move-zeroes)（简单） | [文字题解](https://leetcode-cn.com/problems/move-zeroes/solution/zun-shou-xun-huan-bu-bian-shi-java-by-liweiwei1419/) |

### 第 4 章 高级排序算法（重要）

这一部分需要重点掌握三种高级排序算法：归并排序、快速排序、堆排序。

| 题号     | 链接                                                         | 题解                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 88       | [合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)（简单） | [从后向前归并](https://leetcode-cn.com/problems/merge-sorted-array/solution/si-xiang-mei-you-chuang-xin-de-di-fang-zhu-yao-ti-/) |
| 《剑》51 | [数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)（困难） | [【视频讲解】](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/shu-zu-zhong-de-ni-xu-dui-by-leetcode-solution/)、[文字题解](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/bao-li-jie-fa-fen-zhi-si-xiang-shu-zhuang-shu-zu-b/) |
| 75       | [颜色分类](https://leetcode-cn.com/problems/sort-colors/)（中等） | [文字题解](https://leetcode-cn.com/problems/sort-colors/solution/kuai-su-pai-xu-partition-guo-cheng-she-ji-xun-huan/) |
| 215      | [数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)（中等） | [文字题解](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/partitionfen-er-zhi-zhi-you-xian-dui-lie-java-dai-/) |
| 451      | [根据字符出现频率排序](https://leetcode-cn.com/problems/sort-characters-by-frequency)（中等） |                                                              |

**说明**：

+ 第 88 题：归并排序，注意这里从后向前归并；
+ 《剑指 Offer》第 51 题：归并排序、树状数组（选学）；
+ 第 75 题：著名的「荷兰国旗」问题、快排；
+ 第 215 题：快排、优先队列；
+ 第 451 题：快排、优先队列。

### 第 5 章 非比较排序（选学）

这一部分包含了三种非比较排序排序：计数排序、基数排序、桶排序。解决这些问题需要知道 **原地哈希** 这个概念。

| 题号    | 链接                                                         | 题解                                                         |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 41      | [缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)（困难） | [【视频讲解】](https://www.bilibili.com/video/BV167411N7vd)、[文字题解](https://leetcode-cn.com/problems/first-missing-positive/solution/tong-pai-xu-python-dai-ma-by-liweiwei1419/) |
| 《剑》3 | [剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)（中等） |                                                              |
| 448     | [找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)（简单） |                                                              |
| 442     | [数组中重复的数据](https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/)（中等） |                                                              |

### 第 6 章 滑动窗口与双指针

#### 一、滑动窗口

+ 思想简单，但是代码比较难一次写对；
+ 滑动窗口的思想是：**先向右移动右指针、再向右移动左指针**，这样左右指针交替执行（ **不回头** ），可以完成一些问题；
+ 滑动窗口是 **暴力解法的优化** ，如何 **根据目标函数把暴力解法的一系列解排除掉，是使用滑动窗口的前提** ，一定要分析清楚；
+ 下面提供的是一种参考的写法，请**不要照搬**，应该 **先理解滑动窗口的思想（暴力解法的剪枝）** ，然后多加练习，掌握编写代码的技巧和细节。

滑动窗口的参考写法（不是模板，**请不要原样照搬**，仅供参考，理解算法设计思想是更重要的）：

```java
public class Solution {

    public String slidingWindow(String s, String t) {
        // 起始的时候，都位于 0，同方向移动
        int left = 0;
        int right = 0;
        while (right < sLen) {
            if ( 在右移的过程中检测是否满足条件 ) {
                // 对状态做修改，好让程序在后面检测到满足条件
            }
            // 右边界右移 1 格
            right++;
            while ( 满足条件 ) {
                // 走到这里是满足条件的，左边界逐渐逐渐左移，可以取最小值
                if ( 在左移的过程中检测是否不满足条件 ) {
                    // 对状态做修改，好让程序在后面检测到不满足条件
                }
                // 左边界左移 1 格
                left++;
            }
            // 走到这里是不满足条件的，右边界逐渐右移，可以取最大值
        }
        return 需要的结果变量;
    }
}
```

**友情提示**：第 3 题和第 76 题是必须要会做的基本问题。上面的问题理解透彻了，下面的问题就可以比较轻松地做出来。

**重点问题**：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 3    | [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters)（中等） | [文字题解](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/ge-ban-fa-hua-dong-chuang-kou-dong-tai-gui-hua-pyt/) |
| 76   | [最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring)（困难） | [【视频讲解】]()                                             |
| 209  | [长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum)（中等） |                                                              |
| 424  | [替换后的最长重复字符](https://leetcode-cn.com/problems/longest-repeating-character-replacement/)（中等） |                                                              |
| 1493 | [ 删掉一个元素以后全为 1 的最长子数组](https://leetcode-cn.com/problems/longest-subarray-of-1s-after-deleting-one-element/)（中等） |                                                              |

**说明**：

+ 第 3 题：先暴力解法，再优化；
+ 第 76 题：滑动窗口的典型问题，重点分析为什么可以使用滑动窗口。字符频数数组可以使用哈希表，也可以直接使用数组；使用 **距离** 的定义加速计算；
+ 第 424 题：重点分析为什么可以使用滑动窗口。设计变量 `maxCount`  的含义：在滑动的过程中，出现的字符频数最多的个数；收集结果的判断语句（`while (right - left > maxCount + k)`）比较难想到。第 424 题同类问题：「力扣」第 1493 题：[删掉一个元素以后全为 1 的最长子数组](https://leetcode-cn.com/problems/longest-subarray-of-1s-after-deleting-one-element/) 。

```Java []
public class Solution {

    // 第 424 题代码：滑动窗口（暴力解法的优化）

    public int longestSubarray(int[] nums) {
        int len = nums.length;
        int left = 0;
        int right = 0;

        // 连续的 1 的个数
        int ones = 0;

        // 删除一个元素以后全为 1 的最长的子串的长度
        int maxCount = 0;
        int res = 0;

        while (right < len) {
            if (nums[right] == 1) {
                ones++;
            }
            maxCount = Math.max(maxCount, ones);
            right++;
            // maxCount + 1 里的 1 就表示删除的那个元素
            while (right - left > maxCount + 1) {
                if (nums[left] == 1) {
                    ones--;
                }
                left++;
            }
            res = Math.max(res, right - left);
        }
        // 注意：这里返回 res 要减 1
        return res - 1;
    }
}
```

**练习**：

| 题号 | 题目                                                         | 题解 | 知识点 |
| ---- | ------------------------------------------------------------ | ---- | ------ |
| 438  | [找到字符串中所有字母异位词](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)（中等） |      |        |
| 567  | [字符串的排列](https://leetcode-cn.com/problems/permutation-in-string)（中等） |      |        |
| 643  | [子数组最大平均数 I](https://leetcode-cn.com/problems/maximum-average-subarray-i)（简单） |      |        |
| 978  | [最长湍流子数组](https://leetcode-cn.com/problems/longest-turbulent-subarray)（中等） |      |        |
| 992  | [K 个不同整数的子数组](https://leetcode-cn.com/problems/subarrays-with-k-different-integers)（困难） |      |        |

**说明**：

+ 第 209 题：题目中给出的关键信息：**数组里的元素全部是正整数**。一共有以下 3 种方法。

  + 方法一：暴力解法

  + 方法二：滑动窗口（分析可以使用滑动窗口的原因）

  + 方法三：构造前缀和数组，然后使用二分查找

+ 第 438 题：同第 76 题；
+ 第 567 题：同第 76 题，收集符合条件的语句不一样而已。

#### 二、双指针

「双指针」问题其实也是朴素算法的优化，一下子排序掉很多不符合题意的解，「滑动窗口」技巧也是这样的。依然是分析为什么可以使用双指针是更重要的。

二分查找算法应用于查找下标也可以认为是双指针的解法。

| 题号 | 链接                                                         | 题解                                                         | 知识点 |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| 11   | [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water)（中等） |                                                              |        |
| 15   | [三数之和](https://leetcode-cn.com/problems/3sum)（中等）    |                                                              |        |
| 16   | [最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)（中等） | [文字题解](https://leetcode-cn.com/problems/3sum-closest/solution/shuang-zhi-zhen-dui-zhuang-python-dai-ma-java-dai-/) |        |
| 42   | [接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)（困难） | [文字题解](https://leetcode-cn.com/problems/trapping-rain-water/solution/bao-li-jie-fa-yi-kong-jian-huan-shi-jian-zhi-zhen-/) |        |
| 167  | [两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)（简单） | [文字题解](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/shuang-zhi-zhen-dui-zhuang-er-fen-fa-python-dai-ma/) |        |
| 925  | [长按键入](https://leetcode-cn.com/problems/long-pressed-name/)（简单） |                                                              |        |

#### 第 7 章 链表

解决链表问题，很实用的技巧是「画图」。其它算法问题的分析和讲解（和面试官讲解）也是这样。

可以为链表编写测试函数，方便调试。建议实现的方法有：① 通过数组创建一个单链表；② 根据当前结点打印当前结点以及后面的结点。这两个方法可以非常方便地帮助我们调试关于链表的程序。

#### 题型一：基本的链表指针指向问题

注意：有一些问题需要使用「虚拟头结点」，以避免对链表第一个结点的复杂的分类讨论逻辑。这个思想在数组里我们见过，叫「哨兵」。

使用递归函数，避免复杂的更改指针变量指向操作，使得求解问题变得简单。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 2    | [两数相加](https://leetcode-cn.com/problems/add-two-numbers) |                                                              |
| 82   | [删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/) |                                                              |
| 26   | [反转链表](https://leetcode-cn.com/problems/reverse-linked-list) |                                                              |
| 24   | [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs) |                                                              |
| 25   | [K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group) |                                                              |
| 328  | [奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list) |                                                              |
| 203  | [移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/) |                                                              |
| 21   | [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)（简单） |                                                              |
| 876  | [链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)（简单） | [文字题解](https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/) |
| 148  | [排序链表](https://leetcode-cn.com/problems/sort-list/)      | [文字题解](https://leetcode-cn.com/problems/sort-list/solution/zi-di-xiang-shang-de-gui-bing-pai-xu-java-dai-ma-b/) |

说明：

+ 这些问题使用递归和迭代都可以完成：206、24、25、328、203、21；
+ 第 148 题需要知道如何使用递归函数实现链表排序，迭代的写法仅供参考。

#### 题型二：快慢指针技巧

确切地说，叫「同步指针」可能更好一些。

使用两个指针变量，刚开始都位于链表的第一个结点，一个永远一次只走一步，另一个永远一次只走两步，一个在前，一个在后，**同时走**。这样当快指针走完的时候，慢指针就来到了链表的中间位置。

解决这些问题的共同特点就是使用两个指针变量同步移动。快慢指针的前进方向相同，且它们步伐的「差」是恒定的，根据这种确定性去解决链表中的一些问题。使用这种思想还可以解决链表的以下问题：

| 题号 | 链接                                                         | 题解 |
| ---- | ------------------------------------------------------------ | ---- |
| 19   | [倒数第 k 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/) |      |
| 141  | [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/) |      |
| 142  | [环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/) |      |
| 161  | [相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/) |      |

**说明**：

+ 第 19 题：，快指针先走几步，不是靠猜的，要在纸上画图模拟一下，就清楚了；
+ 第 141 题：，在环中的时候可以想象，A 同学开始有存款 100 元，每天赚 1 元，B 同学开始有存款 50 元，每天赚 2 元，B 同学一定会在某一天和 A 同学的存款一样；
+ 第 161 题：起点不同，构造相同长度让它们相遇，同样是利用了同步走这个等量关系。

#### 题型三：设计数据结构

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 707  | [设计链表](https://leetcode-cn.com/problems/design-linked-list)（中等） |                                                              |
| 355  | [设计推特](https://leetcode-cn.com/problems/design-twitter)（中等） | [哈希表 + 链表 + 优先队列（经典多路归并问题）（Java）](https://leetcode-cn.com/problems/design-twitter/solution/ha-xi-biao-lian-biao-you-xian-dui-lie-java-by-liwe/) |
| 146  | [LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache)（中等） | [哈希表 + 双向链表（Java）](https://leetcode-cn.com/problems/lru-cache/solution/ha-xi-biao-shuang-xiang-lian-biao-java-by-liweiw-2/) |
| 460  | [LFU 缓存](https://leetcode-cn.com/problems/lfu-cache)（困难） | [哈希表 + 双向链表（Java）](https://leetcode-cn.com/problems/lfu-cache/solution/ha-xi-biao-shuang-xiang-lian-biao-java-by-liweiwei/) |
| 1206 | [设计跳表](https://leetcode-cn.com/problems/design-skiplist)（困难） |                                                              |

### 第 8 章 栈与队列

#### 一、栈

##### 题型一：基本的使用栈解决的问题

下面的问题非常基础，一定需要掌握：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 20   | [有效的括号](https://leetcode-cn.com/problems/valid-parentheses)（简单） |                                                              |
| 71   | [简化路径](https://leetcode-cn.com/problems/simplify-path)（中等） |                                                              |
| 155  | [最小栈](https://leetcode-cn.com/problems/min-stack)（简单） | [文字题解](https://leetcode-cn.com/problems/min-stack/solution/shi-yong-fu-zhu-zhan-tong-bu-he-bu-tong-bu-python-/) |
| 225  | [用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)（简单） | [文字题解](https://leetcode-cn.com/problems/implement-stack-using-queues/solution/peek-he-pop-shi-yi-ci-jiang-dui-shou-yuan-su-chu-d/) |
| 232  | [用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks)（简单） | [文字题解](https://leetcode-cn.com/problems/implement-queue-using-stacks/solution/shi-yong-liang-ge-zhan-yi-ge-zhuan-men-ru-dui-yi-g/) |
| 946  | [946. 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences)（中等） |                                                              |

**练习**：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 284  | [顶端迭代器](https://leetcode-cn.com/problems/peeking-iterator)（中等） |                                                              |
| 341  | [扁平化嵌套列表迭代器](https://leetcode-cn.com/problems/flatten-nested-list-iterator)（中等） |                                                              |
| 946  | [验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences)（中等） |                                                              |
| 1111 | [有效括号的嵌套深度](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)（中等） | [文字题解](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solution/qian-tao-shen-du-wan-cheng-gua-hao-pi-pei-wen-ti-s/) |

##### 题型二：单调栈

单调栈就是普通的栈，在使用的过程中恰好符合了「后进先出」，栈内元素单调的特点。「单调栈」和「单调队列」的问题通常来说很特殊，掌握例题和一些练习就可以了。

经验：单调栈中一般存下标。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 84   | [柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)（困难） | [视频题解](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/)、[文字题解](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/) |
| 42   | [接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)（困难） | [文字题解](https://leetcode-cn.com/problems/trapping-rain-water/solution/bao-li-jie-fa-yi-kong-jian-huan-shi-jian-zhi-zhen-/) |
| 739  | [每日温度](https://leetcode-cn.com/problems/daily-temperatures/)（中等） | [文字题解](https://leetcode-cn.com/problems/daily-temperatures/solution/bao-li-jie-fa-dan-diao-zhan-by-liweiwei1419/) |
| 316  | [去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/)（困难） | [文字题解](https://leetcode-cn.com/problems/remove-duplicate-letters/solution/zhan-by-liweiwei1419/) |

**说明**：

+ 第 739 题：推荐阅读 [程序员的自我修养：739. Daily Temperatures](https://leetcode-cn.com/problems/daily-temperatures/solution/cheng-xu-yuan-de-zi-wo-xiu-yang-739-daily-temperat/)；

**练习**：

| 序号 | 题目                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 496  | [下一个更大元素 I（简单）](https://leetcode-cn.com/problems/next-greater-element-i/) | [暴力解法、单调栈](https://leetcode-cn.com/problems/next-greater-element-i/solution/bao-li-jie-fa-dan-diao-zhan-by-liweiwei1419-2/) |
| 503  | [下一个更大元素 II（中等）](https://leetcode-cn.com/problems/next-greater-element-ii/) |                                                              |
| 901  | [股票价格跨度（中等）](https://leetcode-cn.com/problems/online-stock-span/) | [LeetCode 第 901 题：股票价格跨度（单调栈）](https://blog.csdn.net/lw_power/article/details/103957702) |

#### 二、队列

##### 题型一：基本的使用队列解决的问题

所有的使用广度优先遍历解决的问题，都使用了队列。

| 题号 | 题目序号                                                     | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 622  | [设计循环队列](https://leetcode-cn.com/problems/design-circular-queue)（中等） | [数组实现的循环队列](https://leetcode-cn.com/problems/design-circular-queue/solution/shu-zu-shi-xian-de-xun-huan-dui-lie-by-liweiwei141/) |
| 641  | [设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque)（中等） | [数组实现的循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/solution/shu-zu-shi-xian-de-xun-huan-shuang-duan-dui-lie-by/) |
| 621  | [任务调度器](https://leetcode-cn.com/problems/task-scheduler)（中等） |                                                              |
| 1306 | [跳跃游戏 III（中等）](https://leetcode-cn.com/problems/jump-game-iii)（中等） |                                                              |

##### 题型二：单调队列

单调队列就是普通的队列。「力扣」上的单调队列目前就发现这一个问题，关键分析清楚为什么设计的算法恰好使得单调队列。另外，「背包问题」中有使用单调队列进行优化的例子，感兴趣的朋友可以了解一下，是竞赛方面的知识。

经验：单调队列中一般存下标。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 239  | [滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum)（中等） | [文字题解](https://leetcode-cn.com/problems/sliding-window-maximum/solution/zui-da-suo-yin-dui-shuang-duan-dui-lie-cun-suo-yin/) |

### 第 9 章 优先队列

说明：了解「堆」作为「优先队列」的实现是有必要的，有助于理解 `remove()` 、`replace()` 这些编码的细节，使用堆的时候才会更加有效。

应用：**动态** 选取当前队列中优先级最高的元素，重点理解「动态」的含义。

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 23   | [合并K个排序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)（困难） | [文字题解](https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/tan-xin-suan-fa-you-xian-dui-lie-fen-zhi-fa-python/) |
| 215  | [数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)（中等） | [文字题解](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/partitionfen-er-zhi-zhi-you-xian-dui-lie-java-dai-/) |
| 295  | [数据流的中位数](https://leetcode-cn.com/problems/find-median-from-data-stream)（困难） | [文字题解](https://leetcode-cn.com/problems/find-median-from-data-stream/solution/you-xian-dui-lie-python-dai-ma-java-dai-ma-by-liwe/) |
| 347  | [前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements)（中等） |                                                              |
| 703  | [数据流中的第K大元素](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream)（简单） |                                                              |
| 973  | [最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin)（中等） |                                                              |
| 1296 | [划分数组为连续数字的集合](https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers)（中等） |                                                              |

### 第 10 章 并查集

并查集知识点的【视频讲解】在第 990 题视频题解里有。基础且常见的问题有：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 990  | [等式方程的可满足性](https://leetcode-cn.com/problems/satisfiability-of-equality-equations)（中等） | [视频题解](https://leetcode-cn.com/problems/satisfiability-of-equality-equations/solution/deng-shi-fang-cheng-de-ke-man-zu-xing-by-leetcode-/)、[文字题解](https://leetcode-cn.com/problems/satisfiability-of-equality-equations/solution/shi-yong-bing-cha-ji-chu-li-bu-xiang-jiao-ji-he-we/) |
| 547  | [朋友圈（中等）](https://leetcode-cn.com/problems/friend-circles)（中等） | [文字题解](https://leetcode-cn.com/problems/friend-circles/solution/bing-cha-ji-python-dai-ma-java-dai-ma-by-liweiwei1/) |
| 200  | [岛屿数量（中等）](https://leetcode-cn.com/problems/number-of-islands)（中等） | [文字题解](https://leetcode-cn.com/problems/number-of-islands/solution/dfs-bfs-bing-cha-ji-python-dai-ma-java-dai-ma-by-l/) |
| 684  | [冗余连接](https://leetcode-cn.com/problems/redundant-connection/)（中等） |                                                              |
| 1319 | [连通网络的操作次数](https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected)（中等） | [文字题解](https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/solution/bing-cha-ji-by-liweiwei1419/) |
| 128  | [最长连续序列（困难）](https://leetcode-cn.com/problems/longest-consecutive-sequence)（中等） |                                                              |

选做问题：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 945  | [使数组唯一的最小增量](https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/)（中等） | [文字题解](https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/solution/tan-xin-suan-fa-bing-cha-ji-java-by-liweiwei1419/) |
| 399  | [除法求值](https://leetcode-cn.com/problems/evaluate-division)（中等） |                                                              |
| 685  | [冗余连接 II](https://leetcode-cn.com/problems/redundant-connection-ii/)（困难） |                                                              |
| 721  | [账户合并](https://leetcode-cn.com/problems/accounts-merge/)（中等） |                                                              |
| 765  | [情侣牵手](https://leetcode-cn.com/problems/couples-holding-hands)（困难） |                                                              |
| 952  | [按公因数计算最大组件大小](https://leetcode-cn.com/problems/largest-component-size-by-common-factor)（困难） | [文字题解](https://leetcode-cn.com/problems/largest-component-size-by-common-factor/solution/bing-cha-ji-java-python-by-liweiwei1419/) |

### 第 11 章 树（二叉树与二分搜索树）

| 题号 | 题目序号                                                     | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 105  | [从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)（中等） | [视频题解](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-yu-zhong-xu-bian-li-xu-lie-gou-zao-9/)、[文字题解](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/qian-xu-bian-li-python-dai-ma-java-dai-ma-by-liwei/) |
| 106  | [从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)（中等） | [文字题解](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solution/hou-xu-bian-li-python-dai-ma-java-dai-ma-by-liwe-2/) |
| 226  | [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)（中等） | [文字题解](https://leetcode-cn.com/problems/invert-binary-tree/solution/qian-zhong-hou-xu-bian-li-ceng-xu-bian-li-by-liwei/) |
| 94   | [二叉树的中序遍历（中等）](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/) | [文字题解](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/mo-ni-xi-tong-zhan-wan-cheng-fei-di-gui-zhong-xu-b/) |
| 230  | [二叉搜索树中第 K 小的元素（中等）](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/) | [文字题解](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/di-gui-yu-fei-di-gui-xie-fa-tong-li-wan-cheng-di-1/) |
| 108  | [将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)（中等） | [文字题解](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/solution/fen-er-zhi-zhi-di-gui-by-liweiwei1419/) |
| 109  | [有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)（中等） | [文字题解](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/fen-zhi-fa-python-dai-ma-java-dai-ma-by-liweiwei14/) |
| 199  | [二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)（中等） | [文字题解](https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/dfs-he-bfspython-dai-ma-by-liweiwei1419/) |

### 第 12 章 回溯算法



### 第 13 章 动态规划（上）

动态规划的两个重要思想：

+ **穷举**：动态规划没有为问题设计专门的算法，它考虑了完成一件事情所有的情况；
+ **空间换时间**：记住了每一步求解的结果。

动态规划的两个思考方向：

+ 「自顶向下」记忆化递归：
+ 「自底向上」递推。

可以使用动态规划的解决问题需要具备的三个条件：

+ 重复子问题：在计算的过程中，有一些问题会重复计算，必须记住结果。没有重复子问题的话，可以「分而治之」求解；
+ 最优子结构：广义上说是「大规模问题的解与小规模问题的解的关系」，不一定需要在求最优解的场景下；
+ **无后效性**：特别重要，无后效性是设计状态非常重要的思考角度。「无后效性」即当前阶段一旦计算出结果，后面阶段的计算不会修改前面阶段计算出的状态值。整个求解的过程构成「有向无环图」。

动态规划的两个重要概念：

+ 状态：记录了解决问题到了哪一步，通常用若干个变量表示；
+ 状态转移方程：表达了大规模问题的解与小规模问题的解的关系。

问题分类参考：

+ [FennelDumplings](https://leetcode-cn.com/u/feeenedumplings/)：[力扣上的 DP 问题分类汇总](https://leetcode-cn.com/circle/article/NfHhXD/)；
+ [日沉云起!](https://leetcode-cn.com/u/richenyunqi/)：[leetcode动态规划题目总结](http://leetcode-cn.com/circle/article/2Xxlw3/)。

**说明**：下面给出的典型问题还会添加（2020 年 12 月 2 日）。

#### 一、入门问题

了解「自顶向下」记忆化递归与「自底向上」递推两种动态规划的方式。

| 题号 | 链接                                                         | 题解 |
| ---- | ------------------------------------------------------------ | ---- |
| 509  | [斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)（简单） |      |

+ 第 509 题：斐波拉契数列递归做一定要加缓存，记忆化递归。

#### 二、重复子问题

这部分需要用到「分步计数乘法原理」、「分类计数加法原理」。

| 题号     | 链接                                                         | 题解                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 70       | [ 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)（简单） | [CSDN](https://blog.csdn.net/lw_power/article/details/103799112) |
| 91       | [解码方法](https://leetcode-cn.com/problems/decode-ways/)（中等） | [文字题解](https://leetcode-cn.com/problems/decode-ways/solution/dong-tai-gui-hua-java-python-by-liweiwei1419/) |
| 《剑》46 | [把数字翻译成字符串](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)（中等） | [视频题解](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-by-leetcode-sol/) |

第 70 题：和斐波拉契数是同一道问题。计数类问题会用到分类计数原理、分步计数原理。

#### 三、最优子结构


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 279  | [完全平方数](https://leetcode-cn.com/problems/perfect-squares/)（中等） |                                                              |
| 322  | [零钱兑换](https://leetcode-cn.com/problems/coin-change/)（中等） | [文字题解](https://leetcode-cn.com/problems/coin-change/solution/dong-tai-gui-hua-shi-yong-wan-quan-bei-bao-wen-ti-/) |
| 343  | [整数拆分](https://leetcode-cn.com/problems/integer-break/)（中等） | [文字题解](https://leetcode-cn.com/problems/integer-break/solution/tan-xin-xuan-ze-xing-zhi-de-jian-dan-zheng-ming-py/) |
| 377  | [组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv/)（中等） | [动态规划](https://leetcode-cn.com/problems/combination-sum-iv/solution/dong-tai-gui-hua-python-dai-ma-by-liweiwei1419/) |

**说明**：

第 377 题注意甄别不是背包问题。

#### 四、无后效性


| 序号 | 链接                                                         | 题解                                                         |      |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| 198  | [打家劫舍](https://leetcode-cn.com/problems/house-robber/)（简单） | [文字题解](https://leetcode-cn.com/problems/the-masseuse-lcci/solution/dong-tai-gui-hua-by-liweiwei1419-8/) |      |
| 120  | [三角形最小路径和](https://leetcode-cn.com/problems/triangle/)（中等） |                                                              |      |
| 62   | [不同路径](https://leetcode-cn.com/problems/unique-paths/)（中等） |                                                              |      |
| 63   | [不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)（中等） |                                                              |      |
| 64   | [最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)（中等） |                                                              |      |

练习：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 121  | [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)（简单） | [暴力枚举 + 动态规划 + 差分思想](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/bao-li-mei-ju-dong-tai-gui-hua-chai-fen-si-xiang-b/)、[CSDN](https://blog.csdn.net/lw_power/article/details/103772951) |
| 122  | [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)（简单） | [暴力搜索 + 贪心算法 + 动态规划](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/tan-xin-suan-fa-by-liweiwei1419-2/)、[CSDN](https://blog.csdn.net/lw_power/article/details/103773246) |
| 123  | [买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)（困难） | [动态规划](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/dong-tai-gui-hua-by-liweiwei1419-7/)、[CSDN](https://blog.csdn.net/lw_power/article/details/103773822) |
| 188  | [188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)（困难） | [动态规划](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/solution/dong-tai-gui-hua-by-liweiwei1419-4/) |
| 309  | [最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)（中等） | [动态规划](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/dong-tai-gui-hua-by-liweiwei1419-5/) |
| 714  | [买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)（中等） | [动态规划](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/dong-tai-gui-hua-by-liweiwei1419-6/) |

以下是一些「动态规划」经典问题。因为这些问题很重要，所以单独作为一个分类。

#### 五、最大子段和


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 53   | [最大子序和](https://leetcode-cn.com/problems/maximum-subarray)（中等） | [文字题解](https://leetcode-cn.com/problems/maximum-subarray/solution/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/)、[CSDN](https://blog.csdn.net/lw_power/article/details/104062895) |

练习：


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 152  | [乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/)（中等） | [动态规划（理解无后效性）](https://leetcode-cn.com/problems/maximum-product-subarray/solution/dong-tai-gui-hua-li-jie-wu-hou-xiao-xing-by-liweiw/) |

#### 六、最长上升子序列


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 300  | [最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)（中等） | [动态规划 （包含O (N log N) 解法的状态定义以及解释）](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-er-fen-cha-zhao-tan-xin-suan-fa-p/) |

**说明**：第 300 题是非常经典的动态规划问题。$O(N \log N)$ 的解法，针对问题本身的特点进行状态定义，并证明状态数组是有序数组，降低了时间复杂度。

练习：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 354  | [俄罗斯套娃信封问题](https://leetcode-cn.com/problems/russian-doll-envelopes/) | [文字题解](https://leetcode-cn.com/problems/russian-doll-envelopes/solution/tan-xin-suan-fa-er-fen-cha-zhao-python-dai-ma-java/) |
| 646  | [最长数对链](https://leetcode-cn.com/problems/maximum-length-of-pair-chain/)（中等） |                                                              |

#### 七、最长公共子串

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1143 | [最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)（中等） | [文字题解](https://leetcode-cn.com/problems/russian-doll-envelopes/solution/tan-xin-suan-fa-er-fen-cha-zhao-python-dai-ma-java/) |
| 72   | [ 编辑距离](https://leetcode-cn.com/problems/edit-distance/)（困难） | [文字题解](https://leetcode-cn.com/problems/edit-distance/solution/dong-tai-gui-hua-java-by-liweiwei1419/)、[CDSN](https://blog.csdn.net/lw_power/article/details/103818533) |
| 10   | [正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)（困难） |                                                              |

#### 八、区间 DP 与划分型 DP

区间 DP：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 5    | [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)（中等） | [文字题解](https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/) |
| 312  | [戳气球](https://leetcode-cn.com/problems/burst-balloons/)（困难） |                                                              |

划分型 DP：

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 410  | [分割数组的最大值](https://leetcode-cn.com/problems/split-array-largest-sum/)（困难） | [文字题解](https://leetcode-cn.com/problems/split-array-largest-sum/solution/er-fen-cha-zhao-by-liweiwei1419-4/) |

#### 九、树形 DP


| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 337  | [打家劫舍 III](https://leetcode-cn.com/problems/house-robber-iii/)（中等） | [文字题解](https://leetcode-cn.com/problems/house-robber-iii/solution/shu-xing-dp-ru-men-wen-ti-by-liweiwei1419/) |
| 124  | [二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)（困难） |                                                              |

### 第 14 章 动态规划（下）

#### 一、背包问题

![image.png](https://pic.leetcode-cn.com/1606097488-eTRqgH-image.png)

背包九讲：https://github.com/tianyicui/pack

| 题目序号                                                     | 题解                                                         | 知识点                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| [416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/) | [动态规划（0-1 背包问题）](https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/) | 很重要的动态规划模型，必须掌握 |
| [518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/) | [动态规划（套用完全背包问题模型）](https://leetcode-cn.com/problems/coin-change-2/solution/dong-tai-gui-hua-wan-quan-bei-bao-wen-ti-by-liweiw/) |                                |
| [322. 零钱兑换（中等）](https://leetcode-cn.com/problems/coin-change/) | [动态规划、使用「完全背包」问题思路、图的广度优先遍历](https://leetcode-cn.com/problems/coin-change/solution/dong-tai-gui-hua-shi-yong-wan-quan-bei-bao-wen-ti-/) |                                |
| [494. 目标和](https://leetcode-cn.com/problems/target-sum/)  |                                                              | 0-1 背包问题                   |
| [474. 一和零](https://leetcode-cn.com/problems/ones-and-zeroes/) | [动态规划（转换为 0-1 背包问题）](https://leetcode-cn.com/problems/ones-and-zeroes/solution/dong-tai-gui-hua-zhuan-huan-wei-0-1-bei-bao-wen-ti/) |                                |

（会补充「博弈类型 DP」、「状态压缩 DP」、「数位 DP」等。）

#### 其它问题

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 746  | [使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)（简单） | [文字题解](https://leetcode-cn.com/problems/min-cost-climbing-stairs/solution/dong-tai-gui-hua-by-liweiwei1419-3/) |
| 887  | [鸡蛋掉落](https://leetcode-cn.com/problems/super-egg-drop/)（困难） | [动态规划（只解释官方题解方法一）（Java）](https://leetcode-cn.com/problems/super-egg-drop/solution/dong-tai-gui-hua-zhi-jie-shi-guan-fang-ti-jie-fang/) |
| 32   | [最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/)（困难） | [CSDN](https://blog.csdn.net/lw_power/article/details/103939326) |

### 第 15 章 贪心算法

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 12   | [整数转罗马数字](https://leetcode-cn.com/problems/integer-to-roman/)（中等） | [贪心算法（Java）](https://leetcode-cn.com/problems/integer-to-roman/solution/tan-xin-suan-fa-by-liweiwei1419/) |
| 452  | [用最少数量的箭引爆气球](https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons)（中等） |                                                              |
| 455  | [分发饼干](https://leetcode-cn.com/problems/assign-cookies)（中等） |                                                              |
| 122  | [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii)（简单） |                                                              |
| 56   | [合并区间](https://leetcode-cn.com/problems/merge-intervals/)（中等） | [贪心算法（Java）](https://leetcode-cn.com/problems/merge-intervals/solution/tan-xin-suan-fa-java-by-liweiwei1419-3/) |
| 45   | [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)（困难） |                                                              |
| 55   | [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)（中等） |                                                              |
| 376  | [摆动序列](https://leetcode-cn.com/problems/wiggle-subsequence/)（中等） |                                                              |

### 第 17 章 哈希表

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | [两数之和](https://leetcode-cn.com/problems/two-sum)（简单） | 【[视频讲解](https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-solution/)】 |
| 36   | [有效的数独](https://leetcode-cn.com/problems/valid-sudoku/)（中等） | [哈希表（布尔数组、位运算）](https://leetcode-cn.com/problems/valid-sudoku/solution/ha-xi-biao-bu-er-shu-zu-wei-yun-suan-by-liweiwei14/) |
| 49   | [字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)（中等） | [自定义字符串的哈希规则，使用质数作为乘法因子（Java）](https://leetcode-cn.com/problems/group-anagrams/solution/zi-ding-yi-zi-fu-chuan-de-ha-xi-gui-ze-shi-yong-zh/) |
| 202  | [快乐数](https://leetcode-cn.com/problems/happy-number/)（简单） |                                                              |
| 217  | [存在重复元素](https://leetcode-cn.com/problems/contains-duplicate)（简单） |                                                              |
| 219  | [存在重复元素 II](https://leetcode-cn.com/problems/contains-duplicate-ii)（简单） |                                                              |
| 454  | [四数相加 II](https://leetcode-cn.com/problems/4sum-ii/)（中等） |                                                              |

### 第 18 章 前缀和与哈希表

| 题号 | 链接                                                         | 题解                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 560  | [和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)（中等） | [暴力解法、前缀和、前缀和优化（Java）](https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/bao-li-jie-fa-qian-zhui-he-qian-zhui-he-you-hua-ja/) |
| 1248 | [统计「优美子数组」](https://leetcode-cn.com/problems/count-number-of-nice-subarrays/)（中等） |                                                              |
| 974  | [和可被 K 整除的子数组](https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/)（中等） |                                                              |

### 第 19 章 广度优先遍历

| 题号  | 链接                                                         | 题解                                                         |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 剑 13 | [机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)（中等） | [深度优先遍历、广度优先遍历](https://blog.csdn.net/lw_power/article/details/105398995) |
| 207   | [课程表](https://leetcode-cn.com/problems/course-schedule/)（中等） | [拓扑排序、深度优先遍历](https://leetcode-cn.com/problems/course-schedule/solution/tuo-bu-pai-xu-by-liweiwei1419/) |
| 210   | [课程表 II](https://leetcode-cn.com/problems/course-schedule-ii/)（中等） | [拓扑排序（广度优先遍历） + 深度优先遍历（Java、Python）](https://leetcode-cn.com/problems/course-schedule-ii/solution/tuo-bu-pai-xu-shen-du-you-xian-bian-li-python-dai-/) |
| 993   | [二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)（中等） | [深度优先遍历、广度优先遍历](https://leetcode-cn.com/problems/cousins-in-binary-tree/solution/yan-du-you-xian-bian-li-python-dai-ma-by-liweiwei1/) |
| 690   | [员工的重要性](https://leetcode-cn.com/problems/employee-importance/)（简单） | [深度优先遍历、广度优先遍历（Java、Python）](https://leetcode-cn.com/problems/employee-importance/solution/shen-du-you-xian-bian-li-yan-du-you-xian-bian-li-j/) |
| 1306  | [跳跃游戏 III](https://leetcode-cn.com/problems/jump-game-iii/)（中等） | [广度优先遍历](https://leetcode-cn.com/problems/jump-game-iii/solution/yan-du-you-xian-bian-li-by-liweiwei1419/) |
| 365   | [水壶问题](https://leetcode-cn.com/problems/water-and-jug-problem/)（中等） | [图的广度优先遍历（Java）](https://leetcode-cn.com/problems/water-and-jug-problem/solution/tu-de-yan-du-you-xian-bian-li-by-liweiwei1419/) |
| 127   | [单词接龙](https://leetcode-cn.com/problems/word-ladder/)（中等） | [广度优先遍历、双向广度优先遍历（Java、Python）](https://leetcode-cn.com/problems/word-ladder/solution/yan-du-you-xian-bian-li-shuang-xiang-yan-du-you-2/) |
| 126   | [单词接龙 II](https://leetcode-cn.com/problems/word-ladder-ii/)（困难） | [单双向广度优先遍历 + 回溯算法（Java、Python）](https://leetcode-cn.com/problems/word-ladder-ii/solution/yan-du-you-xian-bian-li-shuang-xiang-yan-du-you--2/) |

树的广度优先遍历的一些问题、LeetBook 里的一些问题。

### 第 20 章 图论算法（最小生成树）

+ 文章：[最小生成树算法（Prim、Kruskal）](https://juejin.im/post/6858481283715039240)；

### 第 21 章 图论算法（单源最短路径）

+ 文章：[Dijkstra 算法（解决没有负权边的单源最短路径问题）](https://juejin.im/post/6857030974631313422)。

### 第 22 章 分治算法

> 分治思想（分而治之）把一个规模较大的问题拆分成为若干个规模较小的相同类型的子问题，然后对这些子问题递归求解，等待每一个子问题完成以后，再得到原问题的解。
>
> 分治算法可以并行执行，但是在基础算法领域，分治算法是以 **深度优先遍历** 的方式执行的。

应用分治思想的典型算法：归并排序、快速排序。

分治思想的典型问题：「剑指 Offer 第 51 题」：[《剑指 Offer》 51. 数组中的逆序对（视频讲解）](https://www.bilibili.com/video/BV1Qk4y1r7u5)。

| 题号 | 链接                                                  | 题解                                                         |
| ---- | ----------------------------------------------------- | ------------------------------------------------------------ |
| 50   | [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/) | [文字题解](https://leetcode-cn.com/problems/powx-n/solution/ba-zhi-shu-bu-fen-kan-zuo-er-jin-zhi-shu-python-da/) |

其它典型问题（待添加）

| 题目                                                         | 题解                                                         | 知识点                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------ |
| [66. 加一（简单）](https://leetcode-cn.com/problems/plus-one/) |                                                              |                          |
| [189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/) |                                                              | 记住这个旋转三次的操作。 |
| [8. 字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/) | [尽量不使用库函数、一次遍历（Java）](https://leetcode-cn.com/problems/string-to-integer-atoi/solution/jin-liang-bu-shi-yong-ku-han-shu-nai-xin-diao-shi-/) |                          |

还会继续更新，欢迎朋友们多提宝贵意见！
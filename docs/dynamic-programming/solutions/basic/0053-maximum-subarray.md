---
title: 「力扣」第 53 题：最大子序和（中等）
icon: shipin 
categories: 动态规划
tags:
 - 动态规划
 - 分治算法
permalink: leetcode-algo/0053-maximum-subarray
---

提示：经典的「动态规划」问题，一定要掌握。

动态规划告诉我们可以不用直接去解决题目，而是去发现这个问题最开始的样子，通过「状态」转移，每一步参考了之前计算的结果，得到最终的答案。

+ [题目链接](https://leetcode-cn.com/problems/maximum-subarray/)
+ [题解链接](https://leetcode-cn.com/problems/maximum-subarray/solution/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/)

## :tv: 视频讲解

+ [视频](https://www.bilibili.com/video/BV1Lq4y1X7oF?spm_id_from=333.999.0.0)

## 题目描述

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例：

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

进阶：

如果你已经实现复杂度为 $O(n)$ 的解法，尝试使用更为精妙的分治法求解。

::: danger 提示
这是一道典型的使用「动态规划」解决的问题，需要我们掌握动态规划问题设计状态的技巧（**无后效性**），并且需要知道如何推导状态转移方程，最后再去优化空间。
:::


## 方法一：动态规划

「力扣」第 53 题（最大子序和）是「力扣」第 124 题（二叉树的最大路径和）的线性版本，它们的状态设计思想和状态转移是类似的，希望大家能够通过本题题解进一步体会状态是如何想到的（即子问题的定义需要从哪些方面考虑）。

本题接的重点在「关键 1：理解题意」和「关键 2：如何定义子问题（如何定义状态）」和「最后再谈谈「无后效性」。

### **关键 1：理解题意**

+ 题目要我们找出和最大的连续子数组的值是多少，「连续」是关键字，连续很重要，不是子序列；
+ 题目只要求返回结果，不要求得到最大的连续子数组是哪一个。这样的问题通常可以使用「动态规划」解决。

### **关键 2：如何定义子问题（如何定义状态）**

**设计状态思路**：把不确定的因素确定下来，进而把子问题定义清楚，把子问题定义得简单。动态规划的思想通过解决了一个一个简单的问题，进而把简单的问题的解组成了复杂的问题的解。

::: danger 温馨提示
上面这句话大家姑且这么一看，脑子里有个印象，没有那么绝对。可能不同的人看会有不同的理解。如果我以后讲解的动态规划的设计思想与这里讲解的「设计状态思路」不一样的，我会再和大家说明。如果讲解有误导的地方，还请大家指出。
:::

我们 **不知道和最大的连续子数组一定会选哪一个数**，那么我们可以求出 **所有** 经过输入数组的某一个数的连续子数组的最大和。

例如，示例 1 输入数组是 `[-2,1,-3,4,-1,2,1,-5,4]` ，我们可以求出以下子问题：

+ 子问题 1：经过 $-2$ 的连续子数组的最大和是多少；
+ 子问题 2：经过 $1$ 的连续子数组的最大和是多少；
+ 子问题 3：经过 $-3$ 的连续子数组的最大和是多少；
+ 子问题 4：经过 $4$ 的连续子数组的最大和是多少；
+ 子问题 5：经过 $-1$ 的连续子数组的最大和是多少；
+ 子问题 6：经过 $2$ 的连续子数组的最大和是多少；
+ 子问题 7：经过 $1$ 的连续子数组的最大和是多少；
+ 子问题 8：经过 $-5$ 的连续子数组的最大和是多少；
+ 子问题 9：经过 $4$ 的连续子数组的最大和是多少。

一共 9 个子问题，这些子问题之间的联系并没有那么好看出来，这是因为 **子问题的描述还有不确定的地方**（**这件事情叫做「有后效性」**，我们在本文的最后会讲解什么是「无后效性」）。

例如「子问题 3」：经过 $-3$ 的连续子数组的最大和是多少。

「经过 $-3$ 的连续子数组」我们任意举出几个：

+ `[-2,1,-3,4]` ，$-3$ 是这个连续子数组的第 3 个元素；
+ `[1,-3,4,-1]` ，$-3$ 是这个连续子数组的第 2 个元素；
+ ……

我们不确定的是：**$-3$ 是连续子数组的第几个元素**。那么我们就把 $-3$ 定义成连续子数组的最后一个元素。在新的定义下，我们列出子问题如下：

+ 子问题 1：以 $-2$ **结尾的**连续子数组的最大和是多少；
+ 子问题 2：以 $1$ 结尾的连续子数组的最大和是多少；
+ 子问题 3：以 $-3$ 结尾的连续子数组的最大和是多少；
+ 子问题 4：以 $4$ 结尾的连续子数组的最大和是多少；
+ 子问题 5：以 $-1$ 结尾的连续子数组的最大和是多少；
+ 子问题 6：以 $2$ 结尾的连续子数组的最大和是多少；
+ 子问题 7：以 $1$ 结尾的连续子数组的最大和是多少；
+ 子问题 8：以 $-5$ 结尾的连续子数组的最大和是多少；
+ 子问题 9：以 $4$ 结尾的连续子数组的最大和是多少。

我们加上了「结尾的」，这些子问题之间就有了联系。我们单独看子问题 1 和子问题 2：

+ 子问题 1：以 $-2$ **结尾的**连续子数组的最大和是多少；

以 $-2$ **结尾的**连续子数组是 `[-2]`，因此最大和就是 $-2$。

+ 子问题 2：以 $1$ 结尾的连续子数组的最大和是多少；

以 $1$ 结尾的连续子数组有 `[-2,1]` 和 `[1]` ，其中 **`[-2,1]` 就是在「子问题 1」的后面加上 1 得到**。$-2 + 1 = -1 < 1$ ，因此「子问题 2」 的答案是 $1$。

大家发现了吗，如果编号为 `i` 的子问题的结果是负数或者 $0$ ，那么编号为 `i + 1` 的子问题就可以把编号为 `i` 的子问题的结果舍弃掉（这里 `i` 为整数，最小值为 `1` ，最大值为 `8`），这是因为：

+ 一个数 `a` 加上负数的结果比 `a` 更小；
+ 一个数 `a` 加上 $0$ 的结果不会比 `a` 更大；
+ 而子问题的定义必须以一个数结尾，因此如果子问题 `i` 的结果是负数或者 $0$，那么子问题 `i + 1` 的答案就是以 `nums[i]` 结尾的那个数。

::: info 提示
因为我们把子问题定义的更清楚，子问题之间的联系就容易观察到。这是我们定义子问题、定义状态的经验。
:::

接下来我们按照编写动态规划题解的步骤，把「状态定义」「状态转移方程」「初始化」「输出」「是否可以空间优化」全都写出来。


### 一、定义状态（定义子问题）

`dp[i]`：表示以 `nums[i]` **结尾** 的 **连续** 子数组的最大和。

**说明**：「结尾」和「连续」是关键字。

### 二、状态转移方程（描述子问题之间的联系）

根据状态的定义，由于 `nums[i]` 一定会被选取，并且以 `nums[i]` 结尾的连续子数组与以 `nums[i - 1]` 结尾的连续子数组只相差一个元素 `nums[i]` 。

假设数组 `nums` 的值全都严格大于 $0$，那么一定有 `dp[i] = dp[i - 1] + nums[i]`。

可是 `dp[i - 1]` 有可能是负数，于是分类讨论：

+ 如果 `dp[i - 1] > 0`，那么可以把 `nums[i]` 直接接在 `dp[i - 1]` 表示的那个数组的后面，得到和更大的连续子数组；
+ 如果 `dp[i - 1] <= 0`，那么 `nums[i]` 加上前面的数 `dp[i - 1]` 以后值不会变大。于是 `dp[i]` 「另起炉灶」，此时单独的一个 `nums[i]` 的值，就是 `dp[i]`。

以上两种情况的最大值就是 `dp[i]` 的值，写出如下状态转移方程：

$$
dp[i] =
\begin{cases}
dp[i - 1] + nums[i], & if \quad dp[i - 1] > 0 \\
nums[i], & if \quad dp[i - 1] \le 0
\end{cases}
$$

记为「状态转移方程 1」。

状态转移方程还可以这样写，反正求的是最大值，也不用分类讨论了，就这两种情况，取最大即可，因此还可以写出状态转移方程如下：

$$
dp[i] = \max \{nums[i],\; dp[i - 1] + nums[i]\}
$$

记为「状态转移方程 2」。

> 友情提示：求解动态规划的问题经常要分类讨论，这是因为动态规划的问题本来就有「最优子结构」的特点，即大问题的最优解通常由小问题的最优解得到。因此我们在设计子问题的时候，就需要把求解出所有子问题的结果，进而选出原问题的最优解。

### 三、思考初始值
`dp[0]` 根据定义，只有 1 个数，一定以 `nums[0]` 结尾，因此 `dp[0] = nums[0]`。

### 四、思考输出

::: danger 注意
+ 这里状态的定义不是题目中的问题的定义，**不能直接将最后一个状态返回回去**；
+ 这里状态的定义不是题目中的问题的定义，**不能直接将最后一个状态返回回去**；
+ 这里状态的定义不是题目中的问题的定义，**不能直接将最后一个状态返回回去**。
:::


::: warning 个人经验
重要的事情说三遍，有时候写东西写得多了，怕读者看不到重点，所以会想方设法进行强调，一句话翻来覆去反复说。我以前和一个在新东方当英语老师的朋友交流过，这样的效果最好。大家可以理解为职业病，我们更多是想要照顾到新手朋友们。大佬要是觉得我讲得啰嗦了，还请忽略。

简单的动态规划问题，很有可能问的问题就可以设计成为子问题，复杂的动态规划问题就没有那么容易看出子问题应该如何设计了，这需要一定的解决问题的经验。

这个问题的输出是把所有的 `dp[0]`、`dp[1]`、……、`dp[n - 1]` 都看一遍，取最大值。 同样的情况也适用于「力扣」第 300 题：「最长上升子序列」（以后我们有空，再把这道题拿出来再讲一遍，超级超级重要的一道动态规划问题）。
:::

### 五、可以优化空间吗

根据「状态转移方程」，`dp[i]` 的值只和 `dp[i - 1]` 有关，因此可以使用「滚动变量」的方式将代码进行优化。

以下「参考代码 1」给出了不空间优化的代码，「参考代码 2」给出了空间优化的代码。

**参考代码 1**：

<CodeGroup>
<CodeGroupItem title="Java">
```java
public class Solution {

    public int maxSubArray(int[] nums) {
        int len = nums.length;
        // dp[i] 表示：以 nums[i] 结尾的连续子数组的最大和
        int[] dp = new int[len];
        dp[0] = nums[0];

        for (int i = 1; i < len; i++) {
            if (dp[i - 1] > 0) {
                dp[i] = dp[i - 1] + nums[i];
            } else {
                dp[i] = nums[i];
            }
        }

        // 也可以在上面遍历的同时求出 res 的最大值，这里我们为了语义清晰分开写，大家可以自行选择
        int res = dp[0];
        for (int i = 1; i < len; i++) {
            res = Math.max(res, dp[i]);
        }
        return res;
    }
}
```
</CodeGroupItem>
<CodeGroupItem title="Python">
```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        size = len(nums)
        if size == 0:
            return 0
        dp = [0 for _ in range(size)]

        dp[0] = nums[0]
        for i in range(1, size):
            if dp[i - 1] >= 0:
                dp[i] = dp[i - 1] + nums[i]
            else:
                dp[i] = nums[i]
        return max(dp)
```
</CodeGroupItem>
</CodeGroup>


**时间复杂度**：$O(N)$ ，这里 $N$ 是输入数组的长度。

**参考代码 2**：

<CodeGroup>
<CodeGroupItem title="Java">
```java
public class Solution {

    public int maxSubArray(int[] nums) {
        int pre = 0;
        int res = nums[0];
        for (int num : nums) {
            pre = Math.max(pre + num, num);
            res = Math.max(res, pre);
        }
        return res;
    }
}
```
</CodeGroupItem>
<CodeGroupItem title="Python">
```python
from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        size = len(nums)
        pre = 0
        res = nums[0]
        for i in range(size):
            pre = max(nums[i], pre + nums[i])
            res = max(res, pre)
        return res
```
</CodeGroupItem>
</CodeGroup>

**时间复杂度**：$O(N)$ ，这里 $N$ 是输入数组的长度。


::: danger 提示
这里再多说一点，如果是在「在线测评系统」（Online Judge）上写代码，我一般都不会写优化空间的代码，这是因为：

1. 一般的问题只要时间复杂度最优就可以；
2. 空间复杂度 online judge 并不在意，只要使用的空间不太离谱，不要一上来就 `int[] dp = new int[Integer.MAX_VALUE]` 就好；
3. 优化空间的代码会丢失可读性，不好理解和向他人阐述。我自己写出来都困难，一般的流程是：先写一版不优化空间的代码，再写优化空间的代码。但是不优化空间的代码都可以通过系统测评了，我为什么还要写优化空间的代码呢？哈哈哈。
:::


## 最后再谈谈「无后效性」

「无后效性」是我多次提到的一个「动态规划」中非常重要的概念，在我看来，理解这个概念无比重要。很遗憾，《算法导论》上没有讲到「无后效性」。我找了一本在「豆瓣」目前豆瓣上评分为 9.2 的书 《算法竞赛进阶指南》，这本书和《算法导论》《算法 4》和 liuyubobobo 老师的算法课程一样，在我学习算法与数据结构的道路上，都发挥了巨大的作用。

李煜东著《算法竞赛进阶指南》，摘录如下：：

> 为了保证计算子问题能够按照顺序、不重复地进行，动态规划要求已经求解的子问题不受后续阶段的影响。这个条件也被叫做「无后效性」。换言之，动态规划对状态空间的遍历构成一张有向无环图，遍历就是该有向无环图的一个拓扑序。有向无环图中的节点对应问题中的「状态」，图中的边则对应状态之间的「转移」，转移的选取就是动态规划中的「决策」。

**我的解释**：

+ 「有向无环图」「拓扑序」表示了每一个子问题只求解一次，以后求解问题的过程不会修改以前求解的子问题的结果；
+ 换句话说：如果之前的阶段求解的子问题的结果包含了一些不确定的信息，导致了后面的阶段求解的子问题无法得到，或者很难得到，这叫「有后效性」，我们在当前这个问题第 1 次拆分的子问题就是「有后效性」的（大家可以再翻到上面再看看）；
+ 解决「有后效性」的办法是固定住需要分类讨论的地方，记录下更多的结果。在代码层面上表现为：
  + 状态数组增加维度，例如：「力扣」的股票系列问题；
  + 把状态定义得更细致、准确，例如：前天推送的第 124 题：状态定义只解决路径来自左右子树的其中一个子树。

::: info 总结
「动态规划」的解法，我们先告诉大家，理解题意非常重要。其次，我们在做「动态规划」的问题的时候，需要经常思考 **为什么想到需要这样定义状态**。
:::

---

## 方法二：分治法（仅供参考）

分治法的思路是这样的，其实也是分类讨论。

连续子序列的最大和主要由这三部分子区间里元素的最大和得到：

+ 第 1 部分：子区间 `[left, mid]`；
+ 第 2 部分：子区间 `[mid + 1, right]`；
+ 第 3 部分：包含子区间 `[mid , mid + 1]` 的子区间，即 `nums[mid]` 与 `nums[mid + 1]` 一定会被选取。

对这三个部分求最大值即可。

**说明**：考虑第 3 部分跨越两个区间的连续子数组的时候，由于 `nums[mid]` 与 `nums[mid + 1]` 一定会被选取，可以从中间向两边扩散，**扩散到底** 选出最大值，具体请见「参考代码 6」。

![image.png](https://pic.leetcode-cn.com/1621840913-dcvfVD-image.png)


**参考代码 3**：


<CodeGroup>
<CodeGroupItem title="Java">
```java
public class Solution {

    public int maxSubArray(int[] nums) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }
        return maxSubArraySum(nums, 0, len - 1);
    }

    private int maxCrossingSum(int[] nums, int left, int mid, int right) {
        // 一定会包含 nums[mid] 这个元素
        int sum = 0;
        int leftSum = Integer.MIN_VALUE;
        // 左半边包含 nums[mid] 元素，最多可以到什么地方
        // 走到最边界，看看最值是什么
        // 计算以 mid 结尾的最大的子数组的和
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            if (sum > leftSum) {
                leftSum = sum;
            }
        }
        sum = 0;
        int rightSum = Integer.MIN_VALUE;
        // 右半边不包含 nums[mid] 元素，最多可以到什么地方
        // 计算以 mid+1 开始的最大的子数组的和
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            if (sum > rightSum) {
                rightSum = sum;
            }
        }
        return leftSum + rightSum;
    }

    private int maxSubArraySum(int[] nums, int left, int right) {
        if (left == right) {
            return nums[left];
        }
        int mid = left + (right - left) / 2;
        return max3(maxSubArraySum(nums, left, mid),
                maxSubArraySum(nums, mid + 1, right),
                maxCrossingSum(nums, left, mid, right));
    }

    private int max3(int num1, int num2, int num3) {
        return Math.max(num1, Math.max(num2, num3));
    }
}
```
</CodeGroupItem>

<CodeGroupItem title="Python">
```python
from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        size = len(nums)
        if size == 0:
            return 0
        return self.__max_sub_array(nums, 0, size - 1)

    def __max_sub_array(self, nums, left, right):
        if left == right:
            return nums[left]
        mid = (left + right) >> 1
        return max(self.__max_sub_array(nums, left, mid),
                   self.__max_sub_array(nums, mid + 1, right),
                   self.__max_cross_array(nums, left, mid, right))

    def __max_cross_array(self, nums, left, mid, right):
        # 一定包含 nums[mid] 元素的最大连续子数组的和，
        # 思路是看看左边"扩散到底"，得到一个最大数，右边"扩散到底"得到一个最大数
        # 然后再加上中间数
        left_sum_max = 0
        start_left = mid - 1
        s1 = 0
        while start_left >= left:
            s1 += nums[start_left]
            left_sum_max = max(left_sum_max, s1)
            start_left -= 1

        right_sum_max = 0
        start_right = mid + 1
        s2 = 0
        while start_right <= right:
            s2 += nums[start_right]
            right_sum_max = max(right_sum_max, s2)
            start_right += 1
        return left_sum_max + nums[mid] + right_sum_max
```
</CodeGroupItem>
</CodeGroup>





**复杂度分析**：

+ 时间复杂度：$O(N \log N)$，这里递归的深度是对数级别的，每一层需要遍历一遍数组（或者数组的一半、四分之一）；
+ 空间复杂度：$O(\log N)$，需要常数个变量用于选取最大值，需要使用的空间取决于递归栈的深度。这里感谢 [@bu-hui-codingde-xiao-cai-ji](/u/bu-hui-codingde-xiao-cai-ji/) 朋友的提醒。

## 参考资料

+ https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/





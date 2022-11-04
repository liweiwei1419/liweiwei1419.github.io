---
title: 「力扣」第 233 题：数字 1 的个数（困难）
icon: yongyan
category: 动态规划
tags:
  - 动态规划
  - 数位 DP
---

- 题目链接：[233. 数字 1 的个数](https://leetcode-cn.com/problems/number-of-digit-one/)；
- 题解链接：[数位 DP（Java）](https://leetcode-cn.com/problems/number-of-digit-one/solution/shu-wei-dpjava-by-liweiwei1419-awxv/)。

## 题目描述

给定一个整数 `n`，计算所有小于等于 `n` 的非负整数中数字 `1` 出现的个数。

**示例 1：**

```
输入：n = 13
输出：6
```

**示例 2：**

```
输入：n = 0
输出：0
```

**提示：**

- $0 \le n \le 10^9$

## 阅读提示

- 目前（2021 年 8 月）绝大多数面试、笔试都不会要求做出这个解法；
- 由于编写题解时间、精力有限，编写的过程中难免会出现错误和描述不准确的地方，敬请见谅；
- **参考题解**：[@2021293707](/u/2021293707/) 的 《[数位 dp 两个一维 dp table 解决](https://leetcode-cn.com/problems/number-of-digit-one/solution/shu-wei-dp-liang-ge-yi-wei-dp-tablejie-j-7bai/)》，建议先阅读这篇题解，我加了一些例子，并且补充了解决这道问题的想法；
- 还是想通过本题向大家介绍「动态规划」的思考路径：「拆分问题」与「组合问题的解」，分别对应「状态定义」与「状态转移方程」；
- 我们采用的是「自底向上」的「递推」求解；
- 定义这个问题的「子问题」相对比麻烦，「组合问题的解」的时候需要分类讨论的情况也相对麻烦，但是不难。

**理解题意**：

- 范围 1 ~ n 里 **所有** 的 **整数** 中出现 1 的个数；
- 如果 `n = 12` ，1 到 12 这 12 个数里：
  - 1 贡献了 1 个 1；
  - 10 贡献了 1 个 1；
  - **11 贡献了 2 个 1**；
  - 12 贡献了 1 个 1
    因此一共 1 + 1 + 2 + 1 = 5 个 1。**注意**：这里 11 ，「1」出现了两次，所以题目 **不是问「包含 1」的整数的个数**，而是问所有的数里，出现了「1」的总数。

**思路分析**：

- 计数问题，有可能用到「动态规划」。事实上，这道问题就是「动态规划」关于「数位」的入门问题；

- 「数位」讨论的是（正）整数有关的一些问题。叫「数位」，是把一个数按照个位、十位、百位拆开来看；

- 因此本题分类讨论（拆分问题）的 **大致依据** 是：个位出现 1 的个数、十位出现 1 的个数……，但实际上的分类讨论会稍微复杂一些；

- 一个基本的拆分方法是：把一个整数拆分成「整块」部分和「余项」部分（「整块」和「余项」是我自己的定义，不是很准确，需要结合上下文理解它的意思）；

  - 「整块」：0~9 所有的 1 位数是一个「整块」，0~99 所有的 2 位数是一个「整块」，0~999 所有的 3 位数是一个「整块」，**它们之间有递推关系**（等会推导）；

  - 「余项」：把 **最高位** 去掉，剩下的部分就是「余项」。

举个例子，例如 2876。

- 2876 是 4 位数，「整块」就是 0~999，不是到 9999，因为 999 是不超过 2879 的最大三位数，0~999 里的 1 的总数是可以直接利用的结果；
- 最高位是 2，说明有 2 个「整块」，分别是 「0~999」和 「1000~1999」；
- 「余项」就是「876」。

## 定义状态 1（与结果间接相关）

这部分回答的是这样几个问题：

- 0~9 所有的 1 位数里的 1 的总数；
- 0~99 所有的 2 位数里的 1 的总数；
- ……
- 0~999999 所有的 6 位数里的 1 的总数。

因此定义 `A[i]` 表示 0~ $10^{i + 1} - 1$ 的所有 $i + 1$​ 位数里 1 的总数。

- `A[0] = 1` 这是因为 0~9 所有的 1 位数里的 1 的总数只有 1 。

- `A[1]` 考虑 0~99 所有的 2 位数，分类讨论如下：

  注意：这部分同样都是 10 为什么一个是 $10*A[0]$​​ ，另一个是 10 ，看到 `A[2]` 就会清晰一点了。

  - 个位数固定是 1，十位数可能是 0、1、2、3、4、5、6、7、8、9 ，一共 10 种可能，因此这种情况下的结果是 $10*A[0]$；
  - 十位数固定是 1，个位数可能是 0、1、2、3、4、5、6、7、8、9 ，一共 10 种可能，因此这种情况下的结果是 10。

- `A[2]` 考虑 0~999 所有的 3 位数，分类讨论如下：
  - 最高位是 0，剩下是 `A[1]` ，最高位是 1，剩下是 `A[1]`，……，最高位是 9，剩下是 `A[1]`。一共是 $10*A[1]$​​；
  - 在上一步，最高位是 1，「最高位」的这个 1 还没统计出来，因此百位数固定是 1，十位数、个位数是 0~99 一共有 100 个

综上，可以归纳出：

$$
A[i] = 10*A[i-1] + 10^i
$$

> **说明**：「乘号」是「分步计数的乘法原理」，$10*A[i-1]$ 和 $10^i$ 都可以选出数字 $1$，用「加号」是「分类计数的加法原理」。很多计数问题其实都在应用这两个最基本的定理。

这里 $A[i-1]$ 前面的 $10$ 指的是最高位是 0、1、…… 、9 的时候，剩下的数位对结果的贡献，所以是乘以 $10$。

后面 $10^i$ 指的是，最高位是 1 的时候，对结果集的贡献。例如 `A[3]` ，即 0 ~ 9999 里所有的 4 位数对 1 的贡献，1 开头的数一共有 1000 个，它们分别是 1000、10001、…… 、1999。

## 定义状态 2（与结果直接相关）

这部分回答的是这样几个问题，以 2784 为例：

- `dp[0]` 表示： 1~4 所有的数里 1 的总数；
- `dp[1]` 表示： 1~84 所有的数里 1 的总数；
- `dp[2]` 表示： 1~784 所有的数里 1 的总数；
- `dp[3]` 表示： 1~2784 所有的数里 1 的总数。

核心的想法是 **把「余项」一点一点扩大**。

因此 `dp[i]` 表示：1 ~ 整数 `n` 从右向左数 **截取到** 第 `i + 1` 位的所有的数里 1 的总数。

> 所以题目要求的答案是 `dp[N - 1]`，这里 $N$ 是整数 `n` 的长度。

因此 **从右向左遍历 `n` 的每一位** `i`（这里 `i` 从 `0` 开始），根据看到的数值进行分类讨论，假设当前看到的数是 $d$​（$0 \le d \le 9$​​）。

`dp[0]` 当 `d = 0` 时 `dp[0] = 0` ，当 `d = 1、2、3、4、5、6、7、8、9` 时 `dp[0] = 1`。

- 如果 $d = 0$​​ ，最高位一定不会有 `1` ，此时状态值取决于它右边一位的状态值，即 `dp[i] = dp[i - 1]` ；
- 如果 $d = 1$​​ ，此时分 3 种情况：

  - 情况 1：最高位不是 `1` ，对当前状态值的贡献是 `dp[i - 1]` （和 $d = 0$ 的情况一下）
  - 情况 2：最高位是 `1` ，有多少个数的最高位是 1 呢？看它右边的数，例如 165，最高位是 1 的元素个数为 66（= 65 + 1），它们是 100、101、…… 、165，
  - 情况 3：还有不足 `(i + 1)` 位的所有整数里 1 的个数 ，答案是 `A[i - 1]`。

  例如 165，情况 1 是 0~65 里对结果的贡献、情况 2 是 100~165 里对结果的贡献（只数出了最高位的 1 的个数），而 0~99 就是情况 3 对结果的贡献。

- 如果 $d > 1$​​ ，此时分 3 种情况：

  - 情况 1：最高位不是 1，对当前状态值的贡献是 `dp[i - 1]`；
  - 情况 2：最高位是 1，对当前状态值的贡献是 $10^i$；
  - 情况 3：「整块」里对当前状态值的贡献，是 $d * A[i - 1]$。

  例如 465，情况 1 是 0~65 里对结果的贡献，情况 2 是 100~199 里对结果的贡献（只数出了最高位的 1 的个数），而 0~99 、 100~199（最高位的 1 在「情况 2」已经算过）、 200~299、 300~399 对结果的贡献就是 $4 * A[3]$​ 。

**参考代码**：

```Java []
public class Solution {

    public int countDigitOne(int n) {
        // 转换成为字符串
        String s = String.valueOf(n);
        char[] charArray = s.toCharArray();
        int len = s.length();
        if (len == 1) {
            return n == 0 ? 0 : 1;
        }

        // 第 1 部分：求「整块」的 1 的个数
        // A[i] 表示：0~10^{i+1} - 1 里包含 1 的个数
        // i = 0 时，10^{i+1} - 1 = 10 - 1 = 9
        // i = 1 时，10^{i+1} - 1 = 100 - 1 = 99
        // 5 位数，例如 12345，讨论到 0~9999 里出现的 1 的总数就可以了
        int[] A = new int[len - 1];
        A[0] = 1;
        for (int i = 1; i < len - 1; i++) {
            A[i] = 10 * A[i - 1] + (int) Math.pow(10, i);
        }

        // 第 2 部分：求「余项」的 1 的个数
        int[] dp = new int[len];
        if (charArray[len - 1] == '0') {
            dp[0] = 0;
        } else {
            dp[0] = 1;
        }
        for (int i = 1; i < len; i++) {
          	// 从右向左读每一个数位
            char currChar = charArray[len - i - 1];
            if (currChar == '0') {
                // 高位是 0，没有 1，就取决于低位中 1 的个数
                dp[i] = dp[i - 1];
            } else if (currChar == '1') {
                // 最高位是 1，高位是 1 的个数取决于后面有多少个数，要记得加 1
                int rest = Integer.parseInt(s.substring(len - i, len)) + 1;
                // dp[i - 1] 和情况 1 一样理解
                // A[i - 1] 比如 199，A[i - 1] 表示 0 到 99 的里 1 的个数
                dp[i] = rest + dp[i - 1] + A[i - 1];
            } else {
                // 最高位是 2、3、4、5、6、7、8、9、10
                // (currChar - '0') * A[i - 1] 表示有几个整块
                // dp[i - 1] 表示余数部分
                // (int) Math.pow(10, i) 最高位是 1 每一位都是 1 所以是 10 的方幂
                dp[i] = (currChar - '0') * A[i - 1] + dp[i - 1] + (int) Math.pow(10, i);
            }
        }
        return dp[len - 1];
    }
}
```

**复杂度分析**：

- 时间复杂度：$O(\log n)$，取决于 $n$ 的位数；
- 空间复杂度：$O(\log n)$。
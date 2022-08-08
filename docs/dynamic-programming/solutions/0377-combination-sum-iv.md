---
title: 「力扣」第 377 题：组合总和 Ⅳ（中等）
icon: yongyan
category: 动态规划
tags:
  - 动态规划
---

+ 题目链接：[377. 组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv/)；
+ 题解链接：[动态规划](https://leetcode-cn.com/problems/combination-sum-iv/solution/dong-tai-gui-hua-python-dai-ma-by-liweiwei1419/)。

## 题目描述

给你一个由 **不同** 整数组成的数组 `nums` ，和一个目标整数 `target` 。请你从 `nums` 中找出并返回总和为 `target` 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

 

**示例 1：**

```
输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
```

**示例 2：**

```
输入：nums = [9], target = 3
输出：0
```

**提示：**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- `nums` 中的所有元素 **互不相同**
- `1 <= target <= 1000`

**进阶：**如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？

## 方法：动态规划

**题意分析**：

+ 输入数组的每个元素可以使用多次，这一点和「完全背包」问题有点像；
+ 顺序不同的序列被视作不同的组合，这一点和所有的「背包问题」都不同。

**思路分析**：

+ 遇到这一类问题，做一件事情有很多种做法，每一种做法有若干个步骤，脑子里能想到的常规思路大概有「回溯搜索」、「动态规划」；
+ 由于不用得到具体的组合表示，因此考虑使用「动态规划」来解。

我们先画树形图分析。

![377-1.png](https://tva1.sinaimg.cn/large/e6c9d24egy1h2u7qwyk2bj21hc0u043d.jpg)

很容易发现「重复问题」，因此，我们可以使用「动态规划」来做，如果题目问具体的解，那么用「回溯搜索」做（「力扣」第 39 题：组合之和）。

对上图的解释：

![image.png](https://tva1.sinaimg.cn/large/e6c9d24egy1h2u7r171nbj21580t4tey.jpg)

怎么写代码呢？

+ 递归求解：由于有大量「重复子问题」，因此必须使用缓存，以避免相同问题重复求解，这个方法叫「记忆化搜索」，在《算法导论》这本书上也把它归入到「动态规划」的定义中。这种思考问题的方式是「从上到下」的，直接面对问题求解，遇到什么问题，就解决什么问题，同时记住结果；

+ 「动态规划」告诉了我们另一种思考问题的方式：「从底向上」，可以不直接面对问题求解，从这个问题最小的样子开始，通过逐步递推，至到得到所求的问题的答案。

虽然这个问题没有明显的「最优子结构」，但这种「从底向上」递推的思路是很深刻的，我们也把它归纳到「动态规划」的解法中。

## 方法：动态规划

“动态规划”的两个步骤是思考“状态”以及“状态转移方程”。

1、状态

对于“状态”，我们首先思考能不能就用问题当中问的方式定义状态，上面递归树都画出来了。当然就用问题问的方式。

`dp[i]` ：对于给定的由正整数组成且不存在重复数字的数组，和为 `i` 的组合的个数。

思考输出什么？因为状态就是问题当中问的方式而定义的，因此输出就是最后一个状态 `dp[n]`。

2、状态转移方程

由上面的树形图，可以很容易地写出状态转移方程：

```python
dp[i] = sum{dp[i - num] for num in nums and if i >= num}
```

注意：在 $0$ 这一点，我们定义 `dp[0] = 1 `的，它表示如果 `nums` 里有一个数恰好等于 `target`，它单独成为 $1$ 种可能。


**参考代码**：

Java 代码：

```java
public class Solution {

    /**
     * 这里状态定义就是题目要求的，并不难，状态转移方程要动点脑子，也不难：
     * 状态转移方程：dp[i]= dp[i - nums[0]] + dp[i - nums[1]] + dp[i - nums[2]] + ... （当 [] 里面的数 >= 0）
     * 特别注意：dp[0] = 1，表示，如果那个硬币的面值刚刚好等于需要凑出的价值，这个就成为 1 种组合方案
     * 再举一个具体的例子：nums=[1, 3, 4], target=7;
     * dp[7] = dp[6] + dp[4] + dp[3]
     * 即：7 的组合数可以由三部分组成，1 和 dp[6]，3 和 dp[4], 4 和dp[3];
     *
     * @param nums
     * @param target
     * @return
     */
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        // 这个值被其它状态参考，设置为 1 是合理的
        dp[0] = 1;

        for (int i = 1; i <= target; i++) {
            for (int num : nums) {
                if (num <= i) {
                    dp[i] += dp[i - num];
                }
            }
        }
        return dp[target];
    }
}
```

Java 代码：

```java
public class Solution {

    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int i = 0; i < target; i++) {
            for (int num : nums) {
                if (i + num <= target) {
                    dp[i + num] += dp[i];
                }
            }
        }
        return dp[target];
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {1, 2, 3};
        int target = 4;
        int res = solution.combinationSum4(nums, target);
        System.out.println(res);
    }
}
```

Python 代码：

```python
class Solution:
    def combinationSum4(self, nums, target):
        size = len(nums)
        if size == 0 or target <= 0:
            return 0

        dp = [0 for _ in range(target + 1)]
        
        # 这一步很关键，想想为什么 dp[0] 是 1
        # 因为 0 表示空集，空集和它"前面"的元素凑成一种解法，所以是 1
        # 这个值被其它状态参考，设置为 1 是合理的
        
        dp[0] = 1

        for i in range(1, target + 1):
            for j in range(size):
                if i >= nums[j]:
                    dp[i] += dp[i - nums[j]]

        return dp[-1]
```






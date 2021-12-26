## 「优先队列」专题 4：典型问题


### 例题：「力扣」第 347 题：前K个高频元素

+ 链接：[347. 前K个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)。

> 给定一个非空的整数数组，返回其中出现频率前 **k** 高的元素。
>
> **示例 1:**
>
> ```
> 输入: nums = [1,1,1,2,2,3], k = 2
> 输出: [1,2]
> ```
>
> **示例 2:**
>
> ```
> 输入: nums = [1], k = 1
> 输出: [1]
> ```
>
> **说明：**
>
> - 你可以假设给定的 *k* 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
> - 你的算法的时间复杂度**必须**优于 O(*n* log *n*) , *n* 是数组的大小。

分析：“**你的算法的时间复杂度必须优于** **O(n log n) , n 是数组的大小**”。这是题目对我们的要求，我们很容易想到的一种思路是将 counter 以后的数据对 value 进行排序，但即使是最好的排序算法，时间复杂度也是 $O(n \log n)$，换言之，题目限制了我们不能使用排序算法。那么，对于前 k 这样的问题，一个很自然的思路就是使用优先队列，想到这一点，这道问题就是一个常规问题了。

Python 代码：

```python
class Solution:
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        import heapq
        import collections

        # 堆有序数组
        l = []

        wordcount = collections.defaultdict(int)
        for num in nums:
            wordcount[num] += 1

        for key, val in wordcount.items():
            heapq.heappush(l, (-val, key))
        res = []
        for _ in range(k):
            _, key = heapq.heappop(l)
            res.append(key)
        return res
```



例题1：LeetCode 第 347 题

题目要求：前K个高频元素。注意：你可以假设给定的 k 总是合理的，1 ≤ k ≤ 数组中不相同的元素的个数。**你的算法的时间复杂度必须优于** **O(n log n) , n** **是数组的大小**。

题目难度：中等。

中文网址：https://leetcode-cn.com/problems/top-k-frequent-elements/description/

英文网址：

求解关键：“**你的算法的时间复杂度必须优于** **O(n log n) , n** **是数组的大小**”。这是题目对我们的要求，我们很容易想到的一种思路是将 counter 以后的数据对 value 进行排序，但即使是最好的排序算法，时间复杂度也是 **O(n log n)** ，换言之，题目限制了我们不能使用排序算法。那么，对于前 k 这样的问题，一个很自然的思路就是使用优先队列，想到这一点，这道问题就是一个常规问题了。



https://leetcode-cn.com/problems/top-k-frequent-elements/solution/leetcode-di-347-hao-wen-ti-qian-k-ge-gao-pin-yuan-/



层数更低，

索引更低

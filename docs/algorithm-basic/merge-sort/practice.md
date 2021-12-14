---
title: 2.15 归并排序练习
icon: yongyan
category: 排序算法
tags:
  - 排序算法
  - 分而治之
  - 归并排序
---


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


---


通过「归并排序」和「快速排序」的学习，深入理解递归。


和排序相关的问题

「归并排序」和「快速排序」是非常重要的排序算法，**深刻理解它们对于理解「递归」函数的运行机制有着非常大的帮助**，同时它们也是「分治思想」的典型应用。「逆序对」和「荷兰国旗问题（颜色分类）」也是非常经典的算法问题。

| 题目链接                                                     | 力扣                                                         | B 站                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| [《剑指 Offer》 51. 数组中的逆序对（困难）](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/) | [力扣](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/shu-zu-zhong-de-ni-xu-dui-by-leetcode-solution/) | [B 站](https://www.bilibili.com/video/BV1Qk4y1r7u5)     |
| [315. 计算右侧小于当前元素的个数（困难）](https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/) | [力扣](https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/solution/gui-bing-pai-xu-suo-yin-shu-zu-python-dai-ma-java-/) | [B 站](https://www.bilibili.com/video/BV1Hz411v7XC?p=1) |

计算「逆序对」完全就是按照「归并排序」的思路而来。

| 题目链接                                                     | 力扣                                                         | B 站                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| [75. 颜色分类（中等）](https://leetcode-cn.com/problems/sort-colors/) | [力扣](https://leetcode-cn.com/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/) | [B 站](https://www.bilibili.com/video/BV1tz4y1o7n5) |

在「颜色分类」问题的讲解中，我们向大家介绍了「循环不变量」，在编写代码的过程中，我们应该一直遵守所使用的变量的语义，在「程序执行前」「执行过程中」「执行结束」以后保持不变。遵守我们自己定义「循环不变量」是我们写对正确代码的重要方法。

| 题目链接                                                     | 力扣                                                         | B 站                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| [41. 缺失的第一个正数（困难）](https://leetcode-cn.com/problems/first-missing-positive/) | [力扣](https://leetcode-cn.com/problems/first-missing-positive/solution/tong-pai-xu-python-dai-ma-by-liweiwei1419/) | [B 站](https://www.bilibili.com/video/BV167411N7vd) |

「缺失的第一个正数」是一个经典的算法问题，用到的思想是「原地哈希」，可以理解为是「桶排序」算法的特殊应用：一个萝卜一个坑，一个桶里只存放一个元素。要和大家强调的是，可以这样做是和输入数组的元素的数值密切相关。
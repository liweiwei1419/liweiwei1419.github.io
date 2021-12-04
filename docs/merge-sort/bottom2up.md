---
title: 自底向上的归并排序
---

# 自底向上的归并排序（选学、面试基本不考）

以上我们使用的是「自顶向下」的归并排序，下面我们介绍「自底向上」的归并排序算法。我们并不须要递归，只须要迭代就可以了。
假设待排序的数组为： [8, 6, 2, 3, 1, 5, 7, 4] 。

![image.png](https://tva1.sinaimg.cn/large/008i3skNgy1gx1mg16h5cj30u00yvaev.jpg)



```java
for(int size = 1; size < n;size+=size){
    // 1 个元素，2 个元素，4 个元素，8 个元素
}
```

```java
/**
 * 自底向上的归并排序，使用迭代就可以完成
 */
@Test
public void test07() {
    int[] randomArray = ArrayUtil.generateRandomArray(100, 1, 100000);
    int n = randomArray.length;
    for (int size = 1; size <= n; size += size) {
        for (int k = 0; k + size < n; k += size + size) {
            mergeTwoSortedArray(randomArray, k, k + size - 1, Integer.min(k + size + size - 1, n - 1));
        }
    }
    System.out.println(Arrays.toString(randomArray));
    Boolean judgeArraySorted = ArrayUtil.judgeArraySorted(randomArray);
    System.out.println(judgeArraySorted);
}
```

小结：自底向上的归并排序的过程。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1354172/1593154034170-eae39f75-2cb8-434f-92c0-c638d24aa388.png)
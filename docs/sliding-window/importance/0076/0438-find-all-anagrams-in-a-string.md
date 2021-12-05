#### LC 76 练习 1：「力扣」第 438 题：找到字符串中所有字母异位词





**参考代码**：

```java
import java.util.ArrayList;
import java.util.List;

public class Solution {

    // 方法一：滑动窗口（用加法）

    public List<Integer> findAnagrams(String s, String p) {
        int sLen = s.length();
        int pLen = p.length();
        List<Integer> res = new ArrayList<>();
        if (sLen == 0 || pLen == 0 || sLen < pLen) {
            return res;
        }

        char[] charArrayS = s.toCharArray();
        char[] charArrayP = p.toCharArray();
        int[] pFreq = new int[128];
        int[] winFreq = new int[128];
        for (char c : charArrayP) {
            pFreq[c]++;
        }

        int left = 0;
        int right = 0;
        int distance = 0;
        while (right < sLen) {
            if (pFreq[charArrayS[right]] == 0) {
                right++;
                continue;
            }

            if (winFreq[charArrayS[right]] < pFreq[charArrayS[right]]) {
                distance++;
            }
            winFreq[charArrayS[right]]++;
            right++;
            while (distance == pLen) {
                if (right - left == pLen) {
                    res.add(left);
                }
                if (pFreq[charArrayS[left]] == 0) {
                    left++;
                    continue;
                }
                if (winFreq[charArrayS[left]] == pFreq[charArrayS[left]]) {
                    distance--;
                }
                winFreq[charArrayS[left]]--;
                left++;
            }
        }
        return res;
    }
}
```


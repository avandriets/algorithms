<!-- TOC -->
* [Arrays and strings](#arrays-and-strings)
  * [Two pointers](#two-pointers)
    * [Palindrome](#palindrome)
    * [Two sum](#two-sum)
    * [Merge two sorted arrays](#merge-two-sorted-arrays)
    * [Is Subsequence](#is-subsequence)
    * [Reverse String](#reverse-string)
    * [Squares of a Sorted Array](#squares-of-a-sorted-array)
  * [Sliding window](#sliding-window)
    * [Longest subarray](#longest-subarray)
    * [Longest binary substring](#longest-binary-substring)
    * [Subarray Product Less Than K.](#subarray-product-less-than-k)
    * [Fixed window size](#fixed-window-size)
    * [Maximum Average Subarray](#maximum-average-subarray)
    * [Max Consecutive Ones III](#max-consecutive-ones-iii)
  * [Prefix Sum](#prefix-sum)
    * [Subarray sum limit with prefix](#subarray-sum-limit-with-prefix)
    * [Number of Ways to Split Array](#number-of-ways-to-split-array)
    * [Minimum Value to Get Positive Step by Step Sum](#minimum-value-to-get-positive-step-by-step-sum)
    * [K Radius Subarray Averages](#k-radius-subarray-averages)
<!-- TOC -->

# Arrays and strings

## Two pointers

### [Palindrome](two-pointers%2Fpalindrome.ts)

Given a string s, return true if it is a palindrome, false otherwise.

### [Two sum](two-pointers%2Ftwo-sum.ts)

Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to
target, false otherwise. This problem is similar to Two Sum.

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

### [Merge two sorted arrays](two-pointers%2Fmerge-two-sorted-arrays.ts)

Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

### [Is Subsequence](two-pointers%2Fis-subsequence.ts)

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters
from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a
subsequence of "abcde" while "aec" is not.

### [Reverse String](two-pointers%2Freverse-string.ts)

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example

```javascript
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]
```

### [Squares of a Sorted Array](two-pointers%2Fsquares-of-sorted-array.ts)

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in
non-decreasing order.

Example

```
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
Explanation: After
squaring, the
array
becomes [16, 1, 0, 9, 100].After
sorting, it
becomes [0, 1, 9, 16, 100].
```

## Sliding window

### [Longest subarray](sliding-window%2Flongest-subarray.ts)

Given an array of positive integers nums and an integer k,
find the length of the longest subarray whose sum is less than or equal to k.

Example

```
nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8
```

### [Longest binary substring](sliding-window%2Flongest-binary-substring.ts)

You are given a binary substring s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to
a "1". What is the length of the longest substring achievable that contains only "1"?

Example

```
For example, given s = "1101100111", the answer is 5.
If you perform the flip at index 2, the string becomes 1111100111.
```

### [Subarray Product Less Than K.](sliding-window%2Fsubarray-product.ts)

Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the
elements in the subarray is strictly less than k.

```
For example, given the input nums = [10, 5, 2, 6], k = 100,
the answer is 8. The subarrays with products less than k are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
```

### [Fixed window size](sliding-window%2Ffixed-window-size.ts)

Given an integer array nums and an integer k,
find the sum of the subarray with the largest sum whose length is k.

```
nums = [3, -1, 4, 12, -8, 5, 6], k = 4,
the answer is 18.
```

### [Maximum Average Subarray](sliding-window%2Fmaximum-average-subarray.ts)

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
Any answer with a calculation error less than 10-5 will be accepted.

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

### [Max Consecutive Ones III](sliding-window%2Fmax-consecutive-ones-3.ts)

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at
most k 0's.

```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

## Prefix Sum

### [Subarray sum limit with prefix](prefix-sum%2Fsubarray-sum-limit.ts)

Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array
that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or
false otherwise.

```
For example, given nums = [1, 6, 3, 2, 7, 2],
queries = [[0, 3], [2, 5], [2, 4]], 
and limit = 13, the answer is [true, false, true]. 
For each query, the subarray sums are [12, 14, 12].
```

### [Number of Ways to Split Array](prefix-sum%2Fnumber-of-ways-to-split-array.ts)

Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a
sum greater than or equal to the sum of the second section. The second section should have at least one number.

### [Minimum Value to Get Positive Step by Step Sum](prefix-sum%2Fmin-start-value.ts)

Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
Return the minimum positive value of startValue such that the step by step sum is never less than 1.

```
Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
```

### [K Radius Subarray Averages](prefix-sum%2Fradius-subarray-averages.ts)

You are given a 0-indexed array nums of n integers, and an integer k.
The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in
nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i,
then the k-radius average is -1.
Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
The average of x elements is the sum of the x elements divided by x, using integer division. The integer division
truncates toward zero, which means losing its fractional part.
For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

```
Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
Output: [-1,-1,-1,5,4,4,-1,-1,-1]
Explanation:
- avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
- The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
  Using integer division, avg[3] = 37 / 7 = 5.
- For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
- For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
- avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.
```

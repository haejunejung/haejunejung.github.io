---
layout : post
title : Merge Sort
date : 2022.10.29
categories : C++
---

Merge Sort (병합 정렬)

- 정렬 알고리즘 중 시간 복잡도 O(nlongn)을 가지는 알고리즘
- 같은 시간 복잡도를 가지는 알고리즘으로는 Quick Sort가 있다
- Quick Sort에 비해 공간 복잡도를 더 많이 사용하게 된다     
- 이미 정렬되어 있는 배열에 대해서 정렬을 하는 특정 상황에서는 다른 정렬 알고리즘이 더 빠를 수 있다

<br/><br/>
# Code
- 재귀를 사용하여 배열에 있는 모든 수를 하나씩 쪼갠다 - partition -
- 오름차순 혹은 내림차순으로 병합하면서 정렬한다 - merge -

<br/><br/>

```
int A[500000];  /* 입력 받는 배열 */
int temp[500000]; /* merge하기 위해 사용되는 배열 */

void merge (int left, int right) {  /* 실제로 병합, 정렬되는 함수 */
    int mid = (left + right) / 2; /* mid를 기준으로 배열이 2개 있다고 생각 */

    int i = left;  /* 1번 배열의 맨 왼쪽 index */
    int j = mid + 1; /* 2번 배열의 맨 왼쪽 index */
    int k = left; /* temp 배열의 시작점을 1번 배열의 맨 왼쪽으로 잡았다
            그 이유는 병합하려는 두 배열의 제일 작은 index가 left이기 때문이다 */ 

    while (i <= mid && j <= right) { /* temp의 왼쪽부터 작은 수를 채워넣는다 */
        if (A[i] <= A[j]) temp[k++] = A[i++];
        else temp[k++] = A[j++];
    }

    /* 2번 배열의 수가 다 사용되고 1번 배열에는 남아있다면, 나머지를 채워넣는다 */
    while (i <= mid) { 
        temp[k++] = A[i++];
    }

    /* 위와 반대로 1번 배열의 수가 다 사용되었다면, 나머지 2번 배열의 수를 채워넣는다 */
    while (j <= right) { 
        temp[k++] = A[j++];
    }

    /* temp에 정렬된 수를 실제 배열 A에 넣어준다 -> 정렬된 수를 넣는다 */
    for (int i = left; i <= right; ++i) {
        A[i] = temp[i];
    }
}

void partition (int left, int right) { /* 배열을 가장 작은 단위로 쪼갠다 */
    if (left < right) {
        int mid = (left + right) / 2;
        partition(left, mid);
        partition(mid+1, right);
        merge(left, right);
    }
}
```

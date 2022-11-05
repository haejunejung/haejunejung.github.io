---
title:  Ch14.Recursion
date:   2022.11.06
categories: 이산수학
---

Recursion

# Recursion (재귀)

## Recursion

- 재귀(Recursion)는 새로운 Object를 만들기 위해서 사용된다
- 반면, 귀납법(Induction)은 증명을 하기 위해서 사용된다
- 함수 f (domain N) 을 정의하기 위해 2가지 단계로 구분된다

1. Basis step: Specify f(0)
2. Recursive step: n보다 작은 자연수로 f(n)을 찾기 위한 규칙들

이것을 함수 f의 Recursive or Inductive definition라고 한다

## Structural Induction

1. Basis step: Show that the result holds for all elements specified in the basis step of the recursive definition
2. Recursive step: Show that if the statment is true for each of the elements used to construct new elements in the recursive step of the definition, the result holds for these new elements

## Rooted Trees

- vertex(정점)과 edge(간선)으로 구성된다
- 특히, root라고 불리는 vertex를 갖는 트리를 Rooted Tree라고 한다

1. Basis step: A single vertex r is a rooted tree
2. Recursive step: Suppose that T1,T2, . . . , Tn are disjoint rooted trees with roots r1,r2, . . . ,rn, respectively. Then the graph formed by starting with a root r, which is not in any of the rooted trees T1,T2, . . . , Tn, and adding an edge from r to each of the vertices r1,r2, . . . ,rn , is also a rooted tree.

## Extended Binary Trees

1. Basis step: The empty set is an extended binary tree
2. Recursive step: If T1 and T2 are disjoint extended binary trees, there is an extended binary tree, denoted by T1 · T2, consisting of a root r together with edges connecting the root to each of the roots of the left subtree T1 and the right subtree T2, when these trees are nonempty.

## Full binary Trees

1. Basis step: There is a full binary tree consisting only of a single vertex r
2.  If T1 and T2 are disjoint full binary trees, there is a
full binary tree, denoted by T1 · T2, consisting of a root r together with edges connecting the root to each of the roots of the left subtree T1 and the right subtree T2.

Tree에 대한 증명은 추가공부자료에서 더 공부해야겠다:)
---
layout: post
title: Makefile tab 오류 & 해결
categories: [Makefile]
tags: [Makefile]
description: Makefile tab 오류 & 해결
---

vscode에서 makefile을 만들 때, tab으로 인한 오류가 발생할 수 있는데 왜 문제가 생기는지 그리고 어떻게 해결하였는지에 대해서 알아보도록 하자.

## **_문제_**

```bash
# target(목표) : prerequisite(전제 조건)
#     command(명령)

test : main.o file1.o file2.o
	gcc -o test main.o file1.o file2.o

main.o : main.c
	gcc -c main.c

file1.o : file1.c
	gcc -c file1.c

file2.o : file2.c
	gcc -c file2.c
```

command를 쓰기 전에 `반드시 tab을 이용해서 띄워줘야 하는데`, vscode에서 작성할 때 tab으로 해도 오류가 발생하는 경우가 생긴다. 이는 vscode에서 tab을 space로 인식하는 오류가 발생할 수 있어서
생기는 문제이다.

## **_해결_**

해결하는 방법은 Command Palettet (명령 팔레트)에 들어가서, `convert indentation to Tabs`을 입력하고 엔터!

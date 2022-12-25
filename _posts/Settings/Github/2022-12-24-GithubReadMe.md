---
layout: post
title: Github Readme File setting
categories: [GithubSetting]
tags: [GithubSetting]
description: Github Readme File setting
---

# ***Readme File***

## ***💡 생성 방법***

Github를 조금 더 개발자스럽게 만들고 싶어서 Readme File을 통해 Github를 꾸미고 있다 :)      

1. Github에 자신의 이름의 repository를 만든다
2. 생성된 Readme File에 ***HTML*** 형식을 사용하여 Github를 꾸민다

<br><br/>


## ***💡 Badge***

- 기술 스택을 로고와 같은 형태로 나타내는 방법
- 다른 방법들보다 깔끔해서 채택 ✓
- 나의 경우, https://shields.io/ 사이트를 통해서 커스텀하였다

```
<img src="https://img.shields.io/badge/이름-색상코드?style=flat-square&logo=로고명&logoColor=로고색"/>
```

- 위의 문장에서 4가지를 바꿔서 커스텀할 수 있다

1. ***이름*** : Badge에 쓸 내용
2. ***색상코드*** : https://shields.io/ 사이트에서 검색하여 색상을 넣는다. 이 때, #은 빼고 넣는다
3. ***로고명*** : 사용하고 싶은 로고의 이름을 대소문자도 다르지 않게 넣는다
4. ***로고색*** : 넣고 싶은 놓고 색을 넣는다. 보통 Default, "white"로 사용한다


- <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"/></a> ***를 만드는 코드***
```
<img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"/></a> 
```

<br><br/>


## ***💡 백준 티어 Readme에 보여주기***

- Mini 버전이 더 깔끔한 것 같아서 채택 ✓
- 밑의 코드에 자신의 백준아이디를 적으면 된다 :)

```
[![Solved.ac
프로필](http://mazassumnida.wtf/api/mini/generate_badge?boj=백준아이디)](https://solved.ac/백준아이디)
```


<br><br/>

## ***💡 Github Hits 확인하기***

- 자신의 Github를 확인한 횟수를 볼 수 있다
- 미래에 많은 사람들이 내 Github를 확인할 수 있는 환경을 만들고자 하는 마음에 만들었다
- https://hits.seeyoufarm.com/ 사이트에 가서 자신의 github에 맞게 만들고 Copy
- 밑의 코드와 같은 형태로 나온다

```
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fhaejunejung&count_bg=%2379C83D&title_bg=%23555555&icon=android.svg&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)
```

#

-2022.12.24-

- 백준의 잔디를 확인한다던가, 다른 재밌는 것들이 많았지만 현재에는 이정도 단계에서 만족하려고 한다.
- 현재에도 깔끔하다고 생각이 들고, 필요할 때마다 조금씩 변경해나가려고 한다.
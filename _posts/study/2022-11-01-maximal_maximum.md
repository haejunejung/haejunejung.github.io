---
layout : post
title : <Study> Maximum과 maximal
date : 2022.11.02
categories : study
---

Maximum과 Maximal의 차이점

# Maximum (Minimum)
- 우리가 고려하는 것 중에서 가장 많은 것을 의미한다

# MaxiMal (Minimal)
- Maximal이라는 단어의 앞에는 'inclusion-wise'가 생략되어 있다
- 즉, 포함 관계에 따라 최대인 것을 의미한다

# Property
- Maximum인 것은 Maximal이기도 하다
- 하지만 Maximal인 것은 Maximum하다고 할 수 없다 (동일하지 않을 때가 존재한다)
- 정의에 의해 Maximum을 이루는 것들의 크기 (개수)는 모두 동일하다
- 하지만 Maximal의 경우 모두 동일한 것은 아니다

# Example

- 책상이 9개 있는 곳에 학생을 앉힌다고 하자. 이 때, 앉은 사람의 양 옆에는 사람이 앉지 못한다
- 0이 빈 자리, 1이 사람이 앉는 자리라고 하자
<br/><br/>
- 가장 많은 사람이 앉을 수 있는 경우, 학생 수는 5명이다
- 1 0 1 0 1 0 1 0 1 의 경우가 유일하고 가장 많은 학생이 앉을 수 있다
- 이러한 경우를 Maximum이라고 한다 
<br/><br/>
- 하지만 조건을 만족하면서 더 이상 학생이 앉을 수 없는 경우도 있다
- 0 1 0 0 1 0 0 1 0 의 경우는 더 이상 들어갈 수 없지만 조건을 모두 만족한다
- 이러한 경우를 Maximal이라고 한다      


즉, 주어진 조건 속에서 가장 큰 크기를 가지는 경우를 Maximum이라고 하고 주어진 조건을 모두 만족하면서 
더 이상 넣을 수 없는 경우를 Maximal이라고 한다. 당연하지만 Maximum과 Maximal은 여러 경우가 나올 수 있다. 
위의 예시에서는 Maximum이 한 가지 경우밖에 없는 경우이다. Minimum과 Minimal은 반대로 생각하면 된다.     

비슷하게 생겨서 헷갈릴 수 있지만 알아두면 좋을 것 같아서 따로 기록하게 되었다 :)

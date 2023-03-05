---
layout: post
title: 백준 18809 Gaaaaaaaaaarden
categories: [PS, 백준]
tags: [PS, 백준]
description: 백준 18809 Gaaaaaaaaaarden
---

**_백준 18809 Gaaaaaaaaaarden_**

<hr>

## **_문제 설명_**

길고 길었던 겨울이 끝나고 BOJ 마을에도 봄이 찾아왔다. BOJ 마을에서는 꽃을 마을 소유의 정원에 피우려고 한다.
정원은 땅과 호수로 이루어져 있고 2차원 격자판 모양이다.

인건비 절감을 위해 BOJ 마을에서는 직접 사람이 씨앗을 심는 대신 초록색 배양액과 빨간색 배양액을 땅에 적절하게 뿌려서
꽃을 피울 것이다. 이 때, 배양액을 뿌릴 수 있는 땅은 미리 정해져있다.

배양액은 매 초마다 이전에 배양액이 도달한 적이 없는 인접한 땅으로 퍼져간다.

초록색 배양액과 빨간색 배양액이 동일한 시간에 도달한 땅에서는 두 배양액이 합쳐져서 꽃이 피어난다. 꽃이 피어난 땅에서는
배양액이 사라지기 때문에 더 이상 인접한 땅으로 배양액을 퍼뜨리지 않는다.

배양액은 봄이 지나면 사용할 수 없게 되므로 주어진 모든 배양액을 남김없이 사용해야 한다. 예를 들어, 초록색 배양액 2개와
빨간색 배양액 2개가 주어졌는데 초록색 배양액 1개를 땅에 뿌리지 않고, 초록색 배양액 1개와 빨간색 배양액 2개만을 사용하는
것은 불가능하다. 또한, 모든 배양액은 서로 다른 곳에 뿌려져야 한다.

정원과 두 배양액의 개수가 주어져있을 때, 피울 수 있는 꽃의 최대 개수를 구해보자.

<hr>

## **_해결 전략_**

`3줄 요약:`

1. 배양액을 뿌릴 수 있는 곳을 저장한다 => `vector: brothSoil`
2. 어떤 위치에 초록색 배양액과 빨간색 배양액을 뿌릴지 결정한다 => `function: selectSoil`
   - 이 떄, 다음 상황에서 절대 배양액을 모두 뿌릴 수 없는 경우들이 나올 경우 return한다
3. 초록색 배양액과 빨간색 배양액의 위치를 모두 정한 이후에, bfs를 통해서 시간이 지날 때마다의 배양액의 변화 그리고 꽃이 피우는지를 확인한다. `function: bfs`

`자세한 설명:`

배양액을 뿌릴 수 있는 곳을 저장한다. 이유는, 초록색 배양액과 빨간색 배양액을 뿌려야 하는데 저장하지 않고 뿌릴 수 있는
곳을 찾게 되면 매번 garden의 모든 구간을 찾아야 하기 때문이다. 저장해서 사용함으로써 시간복잡도를 줄일 수 있다.

이후에는, 초록색 배양액과 빨간색 배양액이 들어갈 위치를 찾아야 한다. 이 때, 백트래킹을 이용한다. 배양액을 뿌릴 수 있는
곳은 세 가지 방법으로 채울 수 있다. 세 가지 방법은 아래와 같다.

1. 아무것도 뿌리지 않고 넘어가는 경우
2. 초록색 배양액을 뿌리는 경우
3. 빨간색 배양액을 뿌리는 경우

중요한 것은, 단순하게 초록색 배양액과 빨간색 배양액이 모두 사용되었을 때만 고려하게 되면 시간이 많이 소요되기 때문에
몇 가지 조건에 따라 return할 수 있도록 만들어줘야 한다. 해당 조건은 아래와 같다.

1. 초록색 배양액 또는 빨간색 배양액이 음수가 되는 경우 (`(greenCount < 0 || redCount < 0)`)
2. 배양액을 뿌릴 수 있는 전체 개수와 앞으로 뿌릴 수 있는 경우의 차가 초록색 배양액과 빨간색 배양액의 남은 개수의 합보다 적은 경우 (`(brothSoilSize - idx) < (redCount + greenCount)`)
3. 초록색 배양액 또는 빨간색 배양액이 아직 남아있는데, 앞으로 뿌릴 수 있는 개수가 전체 개수와 같은 경우 (`brothSoilSize == idx`)

초록색 배양액과 빨간색 배양액이 모두 정해졌다면, bfs를 이용해서 얼만큼의 꽃을 피울 수 있는지 확인해야 한다. 이 떄,
초록색을 피울 떄와 빨간색을 피울 때 두 가지로 나누어서 큐를 만들었다. 큐에는 위치에 대한 정보가 들어간다. 같은 시간에
도달했을 때 꽃이 피어나므로 시간을 알 수 있어야 하므로 `gtime, rtime`을 만든다. 이 두 배열에는 정원에서 특정
위치에 빨간색 혹은 초록색 배양액이 얼만큼의 시간이 지나고 난 후에 퍼지는지를 알기 위한 용도이다. 추가로 필요한 것은
꽃이 피었는지에 대한 정보이다. 이 정보는 `flower` 배열을 만들어서 해결하였다.

본격적으로 bfs를 들어갈 떄, 중요한 것은 현재 존재하는 greenZone 그리고 redZone의 개수만큼만 진행해야 한다는
점이다. 현재 들어있는 개수만큼 진행하게 될 경우 1초마다 진행하는 것으로 생각할 수 있기 떄문이다. 이후, 내 경우에는
초록색 배양액을 퍼뜨린 후에 빨간색 배양액을 퍼뜨리도록 하였다. 빨간색 배양액을 퍼뜨릴 때, 중요한 것은 이미 초록색
배양액이 존재할 때 시간을 비교하여 꽃이 피는지에 대해서 추가로 확인해야한다는 점이다.

이렇게 구현을 마무리하게 되는데, 조심해야하는 점은 꽃에 대한 정보이다. 동서남북을 보기 전에 현재 위치에 꽃이 피었는지를
보지 않고 구현하게 되면 원하는 답과는 다른 답이 도출된다. 이 점에 유의하면 된다.

<hr>

## **_코드_**

### **_C++_**

```c++
#include <iostream>
#include <vector>
#include <utility>
#include <queue>
#include <cstring>

using namespace std;

int N, M, G, R, brothSoilSize, result,
    garden[50][50], gtime[50][50], rtime[50][50], flower[50][50];
vector<pair<int, int>> brothSoil, greenSoil, redSoil;

const int dx[4] = {-1, 1, 0, 0};
const int dy[4] = {0, 0, -1, 1};

void bfs()
{
    int flowerCount = 0;
    queue<pair<int, int>> greenZone, redZone;
    memset(gtime, 0, sizeof(gtime));
    memset(rtime, 0, sizeof(rtime));
    memset(flower, 0, sizeof(flower));

    for (auto green : greenSoil)
    {
        greenZone.push(green);

        gtime[green.first][green.second] = 1;
    }

    for (auto red : redSoil)
    {
        redZone.push(red);

        rtime[red.first][red.second] = 1;
    }

    while (!greenZone.empty() || !redZone.empty())
    {
        int greenSize = greenZone.size();
        int redSize = redZone.size();

        while (greenSize--)
        {
            int x = greenZone.front().first;
            int y = greenZone.front().second;
            greenZone.pop();

            if (flower[x][y])
                continue;

            for (int i = 0; i < 4; i++)
            {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M)
                    continue;

                if (!garden[nx][ny]) // lake
                    continue;

                if (rtime[nx][ny])
                    continue;

                if (flower[nx][ny])
                    continue;

                if (gtime[nx][ny])
                    continue;

                greenZone.push(make_pair(nx, ny));
                gtime[nx][ny] = gtime[x][y] + 1;
            }
        }

        while (redSize--)
        {
            int x = redZone.front().first;
            int y = redZone.front().second;
            redZone.pop();

            if (flower[x][y])
                continue;

            for (int i = 0; i < 4; i++)
            {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M)
                    continue;

                if (!garden[nx][ny]) // lake
                    continue;

                if (rtime[nx][ny])
                    continue;

                if (flower[nx][ny])
                    continue;

                if (!gtime[nx][ny])
                {
                    redZone.push(make_pair(nx, ny));
                    rtime[nx][ny] = rtime[x][y] + 1;
                }

                else if (gtime[nx][ny] == rtime[x][y] + 1)
                {
                    flower[nx][ny] = 1;
                    flowerCount++;
                }
            }
        }
    }

    result = max(result, flowerCount);
}

void selectSoil(int idx, int greenCount, int redCount)
{
    if (greenCount < 0 || redCount < 0)
        return;

    if ((brothSoilSize - idx) < (redCount + greenCount))
        return;

    if (greenCount == 0 && redCount == 0)
    {
        bfs();
        return;
    }

    if (brothSoilSize == idx)
        return;

    selectSoil(idx + 1, greenCount, redCount);

    if (greenCount > 0)
    {
        greenSoil.push_back(brothSoil[idx]);
        selectSoil(idx + 1, greenCount - 1, redCount);
        greenSoil.pop_back();
    }

    if (redCount > 0)
    {
        redSoil.push_back(brothSoil[idx]);
        selectSoil(idx + 1, greenCount, redCount - 1);
        redSoil.pop_back();
    }
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> N >> M >> G >> R;

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < M; j++)
        {
            cin >> garden[i][j];

            if (garden[i][j] == 2)
                brothSoil.push_back(make_pair(i, j));
        }
    }

    brothSoilSize = brothSoil.size();
    selectSoil(0, G, R);

    cout << result;

    return 0;
}
```

### **_Python_**

```python

```

**궁금한 점은 댓글로 남겨주세요:-)**

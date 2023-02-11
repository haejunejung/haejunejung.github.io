from collections import deque
import sys
input = sys.stdin.readline

M, N, H = map(int, input().split())
tomatoBox = [[[0 for k in range(M)] for j in range(N)] for i in range(H)]
visited = [[[False for k in range(M)] for j in range(N)] for i in range(H)]

queue = deque()
for i in range(H):
    for j in range(N):
        tomatoBox[i][j] = list(map(int, input().split()))
        
for h in range(H):
    for n in range(N):
        for m in range(M):
            if tomatoBox[h][n][m] == 1:
                queue.append((h, n, m))
                visited[h][n][m] = True
        
dh, dn, dm = (-1, 1, 0, 0, 0, 0), (0, 0, -1, 1, 0, 0), (0, 0, 0, 0, -1, 1)

while queue:
    (h, n, m) = queue.popleft()
    
    for i in range(6):
        nh, nn, nm = h + dh[i], n + dn[i], m + dm[i]
        
        if 0 <= nh < H and 0 <= nn < N and 0 <= nm < M:
            if visited[nh][nn][nm] == False and tomatoBox[nh][nn][nm] == 0:
                tomatoBox[nh][nn][nm] = tomatoBox[h][n][m] + 1
                queue.append((nh, nn, nm))
                
result = 0
for h in range(H):
    for n in range(N):
        for m in range(M):
            if tomatoBox[h][n][m] == 0:
                print(-1)
                exit(0)
            
            result = max(result, tomatoBox[h][n][m])
            
print(result - 1)
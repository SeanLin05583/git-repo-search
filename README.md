This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

online demo : https://seanlin05583.github.io/seanlin-profile/git-repo-search

## 執行方式
1. clone repo
    ```
    $ git clone https://github.com/SeanLin05583/git-repo-search.git sean-git-repo-search
    ```
2. cd sean-git-repo-search
    ```
    $ cd sean-git-repo-search
    ```
3. install package
    ```
    $ npm install
    ```
4. start project
    ```
    $ npm start
    ```
    
## 問題描述
1. 偵測文字輸入框的變動,並查詢相關的 GitHub repos(參考 GitHub API)
2. 請留意搜尋 API 有 rate limit,所以必須避免過於頻繁的 API requests
    1. 10 requests per minute.
    2. 送出時 count 提示剩下幾秒可以再送出
3. 請實作 infinite scroll,在使用者滾到頁面底部時自動載入更多 repos, 此功能不得使用任何現成的 library


## 構想

### 畫面

- Banner + 一個 input
    - Banner 來源 https://unsplash.com/
    - Input focus 時按下 Enter 送出
    - Input 輸入後閒置 1.5 秒後送出
- 下方 result + Spinner
    - result 顯示
        - Title
        - Description
        - Owner avatar / name
        - last update time
        - stars
        - forks
        - 點擊前往 github 頁面
- RWD breakpoint：768px 
        

### API

1. call https://api.github.com/search/repositories?q=topic:ruby+topic:rails 確認 API 回傳資料
2. call https://api.github.com/search/repositories?q=topic:ruby+topic:rails&page=1&per_page=1 確認分頁可以正確執行
3. 一次 request 撈取 10 筆

### 架構
因只有一頁式，不使用 redux
```
├ /src
    ├ App.jsx：主檔案
    ├ normalize.css
    ├ style.css：global CSS
    ├ /components
        ├ /BannerWithInput：上方 Banner（包含 Input）
        ├ /RepoData：下方呈現 Repo 資訊
        ├ /CircleSpinner：loading 旋轉圖示
        ├  CountDownTimer：秒數倒數
    ├ /assets：靜態黨
        ├ /img：圖
```
### 套件
 - classnames：module css
 - moment：format time string
 - axios：handle http request
 
 ## 測試 input data
 1. testtesttest
    1 筆資料
 2. react testing enzy
    27 筆資料
 3. asdasdasdasd
    0 筆資料

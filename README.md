# React Blog
* 測試帳密:  
帳號: john  
密碼: Lidemy
* [Blog 網址](https://chang-ching-chung.github.io/React-blog/#/)
* 使用 [Lidemy API](https://github.com/Lidemy/lidemy-student-json-api-server)

![](https://i.imgur.com/oJCpmfp.png)

## 技術棧
* Node
JavaScript 的 runtime
* React
使使用者可以在 JavaScript 裡面用 JSX 語法寫 components
* React-DOM
讓使用者可以使用 ReactDOM.render 將 React components 渲染在瀏覽器上 
* React-redux
是一套狀態管理套件，讓使用者可以在 React 裡面建立一個 Global store 儲存應用程式執行期間所用到的 data，並透過 reducer, action 及 dispatch 更新 data
* React-router-dom
使用者可以透過這個套件達成單頁面應用程式的頁面導向，改變網址並改變頁面內容卻不用頁面重新刷新的功能
* Redux-toolkit
Redux toolkit 是一個將 Redux 的建立流程標準化的套件，一但安裝之後，自動會產生 Redux 樣板，減少使用者設置 Redux store 的麻煩
* Styled-components
是一套讓使用者可以在 React 裡面使用 CSS 語法裝飾 components 的套件，使用者可以在 CSS 語法裡面加入條件判斷，讓 Styled components 可以根據條件變換 CSS 的顏色或是字型等
* Husky, Lint-staged, Prettier
Husky 是用來加上 git hooks 的套件，例如，pre-commit ，表示在 commit 前執行預先設置好的腳本
Prettier 用來格式化程式碼，使其更好閱讀的套件
Lint-staged 此套件讓使用者可以執行例如 prettier 腳本在 git add 之後還沒 commit 的檔案，在這裡我們用來將檔案在 commit 之前做程式碼格式化。

## 前台
### 主頁
* 顯示所有文章列表  
 ![](https://i.imgur.com/l3RTDD1.png)
### 單頁文章內容
* 點進文章標題後，顯示該文章標題、發文時間以及文章內容  
![](https://i.imgur.com/3RVB89u.png)

* 如果是本人發表的文章，標題上方則會顯示刪除及編輯按鈕  
![](https://i.imgur.com/o23dxkJ.png)
* 點擊刪除即可刪除該文章
* 點擊編輯則會跳到編輯頁面，編輯完標題及內容按下更新鈕即可完成更新
*  **注意**: 必須註冊會員並登入後才能刪除及編輯文章  
![](https://i.imgur.com/sl1js2A.png)  
![](https://i.imgur.com/OJDoM4W.png)
### 關於部落格
* 部落格介紹  
![](https://i.imgur.com/cODDqhi.png)
### 文章列表
* 排序從新到舊，5筆為一頁列出文章  
![](https://i.imgur.com/H2GdNlq.png)  
![](https://i.imgur.com/LuLvK58.png)
### 發布文章
* 填寫文章標題及內容即可發布文章
* **注意**: 必須註冊會員並登入後才能發布文章  
![](https://i.imgur.com/bZcs1d2.png)
### 註冊
* 填寫匿稱、使用者名稱及密碼後按下登入，即完成註冊並登入，登入後即會跳轉至首頁
* **注意**: 此處密碼會在後端統一改成 ```Lidemy```  
![](https://i.imgur.com/I730g1p.png)
### 登入
* 填寫之前註冊的使用者名稱及密碼及可登入，登入後一樣導向首頁  
![](https://i.imgur.com/HXvuHl5.png)
### 登出
* 按下後即登出  
![](https://i.imgur.com/aJ6mXkO.png)

## 程式碼說明
* utils.js: 此檔案包含了兩個函式，setAuthToken 以及 getAuthToken，用來將 token 存到 local storage 以及從 local storage 取出 token  
![](https://i.imgur.com/AAihMMu.png)

* WebApi.js: 此檔案包含了所有用函式將 fetch 包起來的函式，例如下圖 getPosts 函式  
![](https://i.imgur.com/eJdzsEM.png)

* postReducer.js: 此檔案包含了用 redux toolkit 所給出的 createSlice API 建立的 postReducer 以及用 WebAPI 所建立的 redux thunk，如下圖  
![](https://i.imgur.com/UUmRkz6.png)  
![](https://i.imgur.com/ry49m7L.png)
* userReducer.js: 此檔案包含了用 redux toolkit 所給出的 createSlice API 建立的 userReducer 以及用 WebAPI 所建立的 redux thunk，如下圖  
![](https://i.imgur.com/d0owtHe.png)  
![](https://i.imgur.com/WuX7Bev.png)



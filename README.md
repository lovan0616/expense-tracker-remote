# 家庭記帳本

一個使用 Node.js + Express 打造的家庭記帳本，你可於此瀏覽所有帳目、篩選帳目類別，並可以新增、修改或刪除帳目。

## Features - 產品功能

1. 使用者可以瀏覽所有的帳目
2. 使用者可以根據類別篩選要瀏覽的帳目
3. 使用者可以點擊新增按鈕，建立一筆新的帳目
4. 使用者可以點擊修改按鈕，修改既有的帳目資訊
5. 使用者可以點擊刪除按鈕，刪除該筆帳目

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/download-center/community)

## Executing - 專案執行流程

0. 啟動MongoDB資料庫伺服器，並安裝Robo 3T，建立連線、建立資料庫

1. 打開你的終端機，Clone 此專案至本機電腦

```
git clone https://github.com/lovan0616/expense-tracker-remote
```

2. 開啟終端機，進入存放此專案的資料夾

```
cd expense-tracker-remote
```

3. 安裝 npm 套件

```
在終端機輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在終端機輸入 npm install -g nodemon 指令
```

5. 新增種子資料

```
在終端機輸入 npm run seed 指令
```


6. 啟動伺服器，執行 app.js 檔案

```
在終端機輸入 npm run dev 指令
```

7. 當終端機出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
`The app is listening on http://localhost:3000`
mongodb connected!
```

現在，你可開啟任一瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用囉！


## Contributor - 專案開發人員

> [Liam Wu]](https://github.com/lovan0616)
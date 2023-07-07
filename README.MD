# 使用 json-server 和 mock.js 写本地接口

```bash
npm i
node mock.js
npm i nodemon -g
nodemon server.js
```

- 安装 node 环境
- 使用 node 运行 mock.js 文件可以生成 db.json 数据
- 使用 node 运行 server.js 开启服务，推荐安装 nodemon 代替 node 运行

## 增删改查

默认符合 restful 规范，支持 get 查询，post 新增，put 修改，delete 删除

```js
//get查询
http://localhost:3000/mocks
http://localhost:3000/mocks?order=20
http://localhost:3000/mocks?_page=2&_limit=20
```

## 自定义接口

使用 post 进行分页查询

```js
//postman 通过raw 传 json
{
    "pageBean": {
        "current": 1,
        "limit": 15,
        "all": 0
    }
}
```

/**
 * 使用 node 运行这个服务，启动接口
 */

import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/testPage", (req, res) => {
  const { pageBean } = req.body;
  const { current, limit } = pageBean;
  const mocks = router.db.get("mocks").value();
  const all = mocks.length;
  const startIndex = (current - 1) * limit;
  const endIndex = startIndex + limit;
  const data = mocks.slice(startIndex, endIndex);
  res.json({
    message: "success",
    data: {
      current,
      data,
      limit,
      all,
    },
    code: 200,
  });
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

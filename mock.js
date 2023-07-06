/**
 * 使用 node 运行这个文件，可以生成db.json数据
 */

import fs from "fs";
import Mock from "mockjs"; //使用mockjs可以生成更加复杂的数据

//将数据添加到 db.json 文件

const data = Mock.mock({
  "mocks|100": [
    {
      order: "@increment",
      id: "@id",
      title: "@ctitle",
      word: "@cword",
      content: "@csentence(10,20)",
      image: "@image('300x300', '#50B347', '#FFF', 'Mock.js')",
      create_time: "@date(yyyy-MM-dd hh:mm:ss)",
    },
  ],
});

const jsonData = JSON.stringify(data, null, 2);
fs.writeFileSync("db.json", jsonData);
console.log("Data generated and saved to db.json");

let inquier = require("inquirer");
// 需要写一个对象数组，否则只会执行第一个问题
inquier
  .prompt([
    {
      name: "userName",
      type: "input",
      message: "你的名字是什么？",
    },
    {
      name: "salary",
      type: "list",
      message: "你工资多少？",
      choices: ["1k", "5k", "1w", "5w", "50w"],
    },

    {
      name: "age",
      type: "checkbox",
      message: "你多大了？",
      choices: ["0-50", "50-100"],
    },
  ])
  .then((answer) => {
    console.log("你的答案是：", answer);
  });
// node bin/demo-inquirer.js

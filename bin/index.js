/**
 * 开发后台脚手架，快速生成后台vue架构
 */
let { program } = require("commander");
let { promisify } = require("util");
let asyncFiglet = promisify(require("figlet"));
let chalk = require("chalk");
let inquirer = require("inquirer");
let init = require("./init");
// 设置版本
program.version("1.0.0");
// 设置参数
program.option("-n --name <type>", "output name");
// 日志打印函数
function log(content) {
  console.log(chalk.green(content));
}
// 打印logo
async function printLogo() {
  let data = await asyncFiglet("my-cli");
  log(data);
}
program
  .command("create <app-name>")
  .description("创建vue项目")
  .action(async (name) => {
    await printLogo();
    log("准备创建项目.....");
    let answer = await inquirer.prompt([
      {
        name: "language",
        type: "list",
        message: "请选择语言版本",
        choices: ["js", "ts"],
      },
    ]);
    if (answer.language == "js") {
      // 下载
      log("您选择了js");
      init(name);
    } else {
      log("敬请期待");
    }
  });
// 参数解析
program.parse(process.argv);
// node  bin/index.js

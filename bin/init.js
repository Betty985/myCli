/***
 * 项目克隆
 */
let { promisify } = require("util");
const ora = require("ora");
const download = promisify(require("download-git-repo"));
const shell = require("shelljs");
const chalk = require("chalk");
const modify=require('./modify')
const log = (content) => console.log(chalk.yellow(content));
const map=new Map()
map.set('vue','https://github.com/Betty985/hello-template.git')
map.set('react','https://github.com/Betty985/hello-template-react.git')
// 参数为项目名称
module.exports = async (name,type) => {
  const src=map.get(type)
  log(`🚀创建项目：${name}`);
  //   重名会导致下载失败
  //   -rf 强制删除
  shell.rm("-rf", name);
  //   启动下载效果
  let spinner = ora("下载中...").start();
  try {
    await download(`direct:${src}`, name, {
      clone: true,
    });
    modify(name)
    spinner.succeed("下载完成");
    spinner.stop();
    log(`下载完成。请通过以下命令启动：
 ============================
cd ${name}
yarn 或 npm i
npm run dev或yarn dev
       `);
  } catch (error) {
    log("下载失败");
    spinner.stop();
      //   -rf 强制删除
   shell.rm("-rf", name);
  }
};

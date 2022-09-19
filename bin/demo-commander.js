const { program } = require("commander");
program.version("0.0.1");
// 指定参数。参数一般为两种类型，布尔型和字符串型
// 后面拼接参数是字符串类型的，不拼接是布尔类型的。默认是布尔类型的
program
  .option("-n", "输出名称")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

// 简写的方法获取options
const options = program.opts();
// 通过node bin/demo-commander.js 参数如-p 运行
// 定义命令行  前缀my在package.json的bin里定义
program
  .command("create <app-name>")
  .description("创建一个标准的vue项目")
  .action((name) => {
    console.log(`正在创建vue项目${name}`);
  });
// 解析参数需要放在最后
program.parse(process.argv);


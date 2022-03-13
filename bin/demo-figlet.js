let figlet = require("figlet");
// node自带的库， promisify可以把对象包装成promisify
let { promisify } = require("util");
let asyncFiglet = promisify(require("figlet"));
// callback调用方式
figlet("Hello World!", function (err, data) {
  if (err) {
    console.log("Something is wrong");
    console.dir(err);
    return;
  }
  console.log(data);
});
// async /await方式
async function run() {
  // 报错可能导致程序中断
  try {
    let data = await asyncFiglet("async");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
run();
// node bin/demo-figlet.js

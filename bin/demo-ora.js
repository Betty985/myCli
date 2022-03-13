import ora from "ora";

const spinner = ora("Loading unicorns").start();

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
  spinner.stop();
}, 3000);
// node bin/demo-ora.js

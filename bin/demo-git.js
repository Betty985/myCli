let download = require("download-git-repo");
download(
  "https://github.com/xlearns/my-cli/blob/master/bin/index.js",
  "test/tmp",
  function (err) {
    console.log(err ? "Error" : "Success");
  }
);
// node bin/demo-git.js

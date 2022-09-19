let download = require("download-git-repo");
download(
  "https://github.com/Betty985/hello-template-react",
  "test/tmp",
  function (err) {
    console.log(err ? "Error" : "Success");
  }
);
// node bin/demo-git.js

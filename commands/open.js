const os = require("os");
const exec = require("child_process").exec;
function open(param) {
  if (os.type() == "Windows_NT") {
    //windows
    exec(`start ${param ? param : "."}`, function (err, stdout, stderr) {
      if (err) {
        console.log("sorry,open floder error");
      } else {
        console.log("success!");
      }
    });
  } else if (os.type() == "Darwin") {
    //mac
    exec(`open ${param ? param : "."}`, function (err, stdout, stderr) {
      if (err) {
        console.log("sorry,open floder error");
      } else {
        console.log("success!");
      }
    });
  } else if (os.type() == "Linux") {
    //Linux
  } else {
    //不支持
    console.log("sorry,i don't know this os.");
  }
}

module.exports = open;

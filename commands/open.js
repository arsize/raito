const os = require("os");
const exec = require("child_process").exec;
function open(param) {
  if (os.type() == "Windows_NT") {
    //windows
    if (param) {
      exec(`cd ${param} && start .`, function (err) {
        if (err) {
          console.log("sorry,open folder error");
        } else {
          console.log("success!");
        }
      })

    } else {
      exec(`start .`, function (err, stdout, stderr) {
        if (err) {
          console.log("sorry,open folder error");
        } else {
          console.log("success!");
        }
      });
    }

  } else if (os.type() == "Darwin") {
    //mac
    exec(`open ${param ? param : "."}`, function (err, stdout, stderr) {
      if (err) {
        console.log("sorry,open folder error");
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

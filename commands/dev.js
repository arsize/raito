const exec = require("child_process").exec;
function dev(param) {
    exec(`npx live-server ${param ? '--port=' + param : ''}`, function (err) {
        if (err) {
            console.log("sorry,server error");
        } else {
            console.log("success!");
        }
    })

}


module.exports = dev
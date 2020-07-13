const inquirer = require('inquirer');

function post() {
    const promptList = [{
        type: "confirm",
        message: "是否有token？",
        name: "filter",
        when: function (answers) { // 当watch为true的时候才会提问当前问题
            return answers.watch
        }
    }, {
        type: 'list',
        message: '请选择Content-Type:',
        name: 'contentType',
        choices: [
            "application/json",
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/xml"
        ],
        filter: function (val) {
            return val.toLowerCase();
        }
    }, {
        type: 'input',
        message: '请输入url',
        name: 'url',
        default: "" // 默认值
    }, {
        type: 'input',
        message: '请输入json字符串（传参）',
        name: 'params',
        default: "" // 默认值
    }]

    inquirer.prompt(promptList).then(answers => {
        console.log(answers);
    })
}

module.exports = post()
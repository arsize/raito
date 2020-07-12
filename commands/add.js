const path = require("path");

const checkFilesList = require("../utils").checkFilesList;
const wrightFileList = require("../utils").wrightFileList;

function add(parms) {
  let filelist = checkFilesList(path.resolve(__dirname, "../tempfile.json"));
  let id = randomCoding() + parseInt(Math.random() * 10);
  let temparr = process.cwd().split(path.sep);
  let name = temparr[temparr.length - 1];
  let pathFull = process.cwd();
  let newFileList = Object.assign(
    {
      [name]: {
        Path: pathFull,
        Go: id,
        Des:parms?parms:"--"
      },
    },
    filelist
  );

  function randomCoding() {
    var arr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var idvalue = "";
    let n = 3;
    for (var i = 0; i < n; i++) {
      idvalue += arr[Math.floor(Math.random() * 26)];
    }
    return idvalue;
  }

  wrightFileList(newFileList, path.resolve(__dirname, "../tempfile.json"));
}

module.exports = add
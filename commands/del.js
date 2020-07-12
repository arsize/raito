const path = require("path");
const checkFilesList = require("../utils").checkFilesList;
const wrightFileList = require("../utils").wrightFileList;

function del(params) {
  let filelist = checkFilesList(path.resolve(__dirname, "../tempfile.json"));
  let endList = Object.keys(filelist).filter((k) => {
    return params.every((item) => {
      if (filelist[k]['Go'] == item) {
        return false;
      } else {
        return true;
      }
    });
  });
  let temp = {}
  endList.map(item=>{
      temp[item] = filelist[item]
  })
  wrightFileList(temp, path.resolve(__dirname, "../tempfile.json"));
}

module.exports = del;

const checkFilesList = require("../utils").checkFilesList;
const path = require("path");
const open = require("./open")

function go(param) {
  let filelist = checkFilesList(path.resolve(__dirname, "../tempfile.json"));
  if (param) {
    Object.keys(filelist).map((key) => {
      if (filelist[key]["Go"] == param) {
        open(filelist[key]["Path"])
      }
    });
  }
}

module.exports = go;

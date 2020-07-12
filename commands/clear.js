const wrightFileList = require("../utils").wrightFileList;
const path = require("path");
wrightFileList({}, path.resolve(__dirname, "../tempfile.json"));
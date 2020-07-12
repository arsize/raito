const path = require('path')
const getFileList = require("../utils").getFileList
const checkFilesList = require('../utils').checkFilesList

function showList(){
    let jsonpath = path.resolve(__dirname,'../tempfile.json')
    let filelist = checkFilesList(jsonpath)
    getFileList(filelist)
}


module.exports = showList()
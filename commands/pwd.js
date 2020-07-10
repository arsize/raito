const path = require('path')
function pwd() {
    console.log(`${path.resolve(__dirname)}`)
}

module.exports = pwd()
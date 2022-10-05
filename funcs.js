const FILEPATH = './data/data.json'
const DIRPATH = './data'

const fs = require('fs')

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function pathChecker(args) {
    switch(args) {
        case 'file': {
            if(!fs.existsSync(FILEPATH)) {
                fs.writeFileSync(FILEPATH, '[]', 'utf-8')
            }
        }
            break;
        case 'dir': {
            if(!fs.existsSync(DIRPATH)) {
                fs.mkdirSync(DIRPATH)
            }
        }
            break;
    }
}

function scan(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (result) => {
            resolve(result)
        })
    })
}

function closeScan() {
    rl.close()
}

function readAndWriteData(newData) {
    const fileData = JSON.parse(fs.readFileSync(FILEPATH, 'utf-8'))
    fileData.push(newData)

    fs.writeFileSync(FILEPATH, JSON.stringify(fileData), 'utf-8')
}

function print(message) {
    console.log(message)
}

module.exports = {
    pathChecker,
    scan,
    closeScan,
    readAndWriteData,
    print,
}
// Ancokkkkk lupa async sama practice arrow func
const {
    pathChecker, 
    scan, 
    closeScan, 
    readAndWriteData, 
    print
} = require('./funcs')

{
    pathChecker('dir')
    pathChecker('file')
}

const main = async () => {
    const nama = await scan('Nama  : ')
    const nim = await scan('NIM   : ')
    const email = await scan('Email : ')
    closeScan()

    readAndWriteData({nama, nim, email})

    print('Oke!')
}

main()
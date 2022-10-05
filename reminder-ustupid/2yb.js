const getUserAsync = async (id, callback) => {
    const time = (id == 1) ? 3000 : 2000

    setTimeout(() => {
        const nama = (id == 1) ? 'Ivandohan' : 'D. Ohannn'
        callback({id, nama})
    }, time)
}

const userSatuB = getUserAsync(1, (data) => {
    console.log(data.nama)
})

const userDuaB = getUserAsync(2, (data) => {
    console.log(data.nama)
})

const hw = 'Hello World!'
console.log(hw)
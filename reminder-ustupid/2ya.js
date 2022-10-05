const getUserSync = (id) => {
    const nama = (id == 1) ? 'Ivandohan' : 'D. Ohann'

    return {id, nama}
}

const userSatu = getUserSync(1)
console.log(userSatu.nama)

const userDua = getUserSync(2)
console.log(userDua.nama)

const hw = 'Hello World!'
console.log(hw)



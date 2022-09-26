const yargs = require('yargs')
const { readAndWriteData, print } = require('./funcs')

yargs.command({
    command: 'add',
    describe: ' To add new data',
    builder: {
        name: {
            describe: 'Your name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Your email e.g your@email.com',
            demandOption: false,
            type: 'string'
        },
        phoneNumber: {
            describe: 'Your phone number e.g 08223156',
            demandOption: false,
            type: 'string',
        },
    },
    handler: function(argv) {
        readAndWriteData({
            name: argv.name, 
            email: argv.email, 
            phoneNumber: argv.phoneNumber
        })

        print('Oke!') 
    }
})

yargs.parse()
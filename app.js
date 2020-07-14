const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// run the application by node app.js add --title:"" --body=""

// Customize yargs version
yargs.version('1.1.0')

// Create add command by taling arguments as a title and a body
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: { 
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command by taking the title as a argument
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {   // will list all the notes from the notes.js
        notes.listNotes()
    }
})

// Create read command to read the node according to the title passed
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title :{
            describe: "Note title",
            demandOption :true,
            type: 'string'        
        }
    },
    handler(argv) {
     notes.readNotes(argv.title)
    }
})

yargs.parse()
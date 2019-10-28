const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')



yargs.version('1.1.0')

yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
     	title: {
     		describe: 'Note title',
     		demandOption: true,
     		type: 'string'
     	}
     },
      handler: function (argv) {
     	console.log('Title ' + argv.title)
     }
})


yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function () {
		console.log('Removing the note!')
	}
})

yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: function () {
		console.log('List all the notes')
	}
})

yargs.command({
	command: 'read',
	describe: 'Read all notes',
	handler: function () {
		console.log('Read all the notes')
	}
})


yargs.parse()






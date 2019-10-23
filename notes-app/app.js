const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')

const command = process.argv[2]


const success = chalk.green.bgYellowBright;
const msg = getNotes()

console.log(process.argv)


console.log(msg)

console.log(validator.isURL('http://michaelrwiss.com/'))
console.log(success('Success!'));
console.log(success('Good Day!'));

if (command === 'add') {
	console.log('Adding note!')
} else if (command === 'remove') {
	console.log('Removing note')
}




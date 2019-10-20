const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')


const success = chalk.green;
const msg = getNotes()




console.log(msg)

console.log(validator.isURL('http://michaelrwiss.com/'))
console.log(success('Success!'));


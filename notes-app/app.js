const getNotes = require('./notes.js')

const add = require('./utils.js')

const msg = getNotes()

const sum = add(4, -1)

console.log(sum)

console.log(msg)


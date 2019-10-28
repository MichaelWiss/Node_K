const fs = require('fs')
// const person = require('1-json.json')



// // const book = {
// // 	title: 'Ego is the Enemy',
// // 	author: 'Ryan Holiday'
// // }

// // const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// // fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')


const dataJSON = dataBuffer.toString()


const user = JSON.parse(dataJSON)

user.planet = 'Saturn'
user.age = '48'



const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
console.log(user.planet)
console.log(user.age)



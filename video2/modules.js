const { people, ages } = require('./people')
// const xyz = require('./people')

console.log(people, ages)
// console.log(xyz.ages)

const os = require('os');

console.log(os.platform(), os.homedir())
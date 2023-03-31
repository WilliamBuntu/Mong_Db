const now = new Date()
const before = new Date('february 1 2016 20:54:64')

const diff = now.getTime() - before.getTime()

console.log( diff)

console.log(new Date(diff))
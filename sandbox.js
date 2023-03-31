const now = new Date()
const before = new Date('february 1 2016 20:54:64')


console.log(now)
console.log(typeof now)

// years months days times

console.log('Full Year:', now.getFullYear())
console.log('Full Month:', now.getMonth())
console.log('Full date:', now.getDate())
console.log('Full Day:', now.getDay())
console.log('Full hours:', now.getHours())
console.log('Full Minutes:', now.getMinutes())
console.log('Full Seconds:', now.getSeconds())

// timestapms

console.log('TimeStamps',now.getTime())

// Data strings

console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())


// calculating timestamps

const diff = now.getTime - before.getTime

console.log( diff)

console.log(new Date(diff))
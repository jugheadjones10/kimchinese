var dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
var { DateTime } = require("luxon")
dayjs.extend(utc)


// console.log(dayjs.utc("2022-04-16T14:42:53+09:00"))
// console.log(dayjs().local().utcOffset())
// console.log(DateTime.fromISO("2022-04-18T00:42:53", { zone: "Asia/Seoul"}).toUTC().toISO())
// console.log(DateTime.fromISO("2022-04-20T10:29:00", { zone: "Asia/Seoul" }).toISO())
// console.log(DateTime.fromISO("2022-04-20T10:40:00", { zone: "Asia/Seoul" }).diffNow().toMillis())
// console.log(DateTime.local({ zone: "Asia/Seoul"}).plus({ days: 1 }).startOf("day").toISO())
// console.log(DateTime.local({ zone: "Asia/Seoul"}).plus({ days: 1 }).startOf("day").toUTC().toISO())
console.log(DateTime.utc().toISO())
console.log(DateTime.local().toISO())
console.log(DateTime.now().toISO())
console.log(DateTime.local().zoneName)


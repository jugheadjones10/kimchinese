const log4js = require("log4js");

log4js.configure({
	appenders: {
		out: { type: 'stdout' },
		// app: { type: 'file', filename: 'logs/logs6' }
	},
	categories: {
		default: { appenders: ['out'], level: 'trace' },
		impt: { appenders: ['out'], level: 'warn' }
	}
});

const deflogger = log4js.getLogger()
const imptlogger = log4js.getLogger("impt")
module.exports = { deflogger, imptlogger }


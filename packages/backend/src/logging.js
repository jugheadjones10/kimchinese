const { Logtail } = require("@logtail/node")
const { LogtailTransport } = require("@logtail/winston")
const logtail = new Logtail(process.env.LOGTAIL_TOKEN)

const colors = require("colors")
const { createLogger, format, transports } = require("winston")
const { combine, timestamp, printf, cli, errors, prettyPrint } = format

const TelegramLogger = require("winston-telegram")

const { DateTime } = require("luxon")

// The first obstacle is the format option on the parent logger. If I don't set any formats, winston sets json as the defualt
// format, stripping my error messages of their properties. The second obstacle is handling of errors by transports. When winson
// hands the info object from the parent logger to transports, the error object is copied and all its enumerable properties are
// lost. So transports end up being unable to display error messages.
const logger = createLogger({
  level: "info",
  format: combine(
    errors({ stack: true }),
    timestamp({
      format: () => DateTime.now().setZone("Asia/Seoul").toISO(),
    })
  ),
  transports: [
    new transports.Console({
      handleExceptions: true,
      handleRejections: true,
      format: combine(
        cli({ colors: { info: "green", warn: "yellow", error: "red" } }),
        printf(({ level, message, timestamp, stack }) => {
          return `${colors.inverse(timestamp)} ${colors.bold(
            level
          )}: ${message} ${stack ? `\n${stack}` : ""}`
        })
      ),
    }),
  ],
})
// add exceptions catching

// Can I add exceptions-catching for logtail and telegram?
if (process.env.TOGGLE_LOGTAIL_LOGS === "1") {
  const logtailTransport = new LogtailTransport(logtail)
  logger.add(logtailTransport)
  logger.exceptions.handle(logtailTransport)
  logger.rejections.handle(logtailTransport)
}

if (process.env.TOGGLE_TELEGRAM_LOGS === "1") {
  //How to make telegram handle uncaught rejections? Do we really need it?
  const telegramTransport = new TelegramLogger({
    handleExceptions: true,
    token: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
    level: "info",
    formatMessage: function (options, { level, message, timestamp, stack }) {
      // Return different format for verbose
      return `[${timestamp}] ${level}: ${message} ${stack ? `\n${stack}` : ""}`
    },
  })
  logger.add(telegramTransport)
}

module.exports = logger

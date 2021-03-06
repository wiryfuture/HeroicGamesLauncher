import {
  createLogger,
  format
} from 'winston'
import { heroicFolder } from './constants'
import DailyRotateFile from 'winston-daily-rotate-file'
import isDev from 'electron-is-dev'
// If we're developing, logs will be in ./logs for easy access, in production they'll be in the user's heroic folder
const logsFolder: string = isDev ? './logs/' : `${heroicFolder}logs/`
const heroicLogsFolder = `${logsFolder}heroic`

// Need real-world data on how big these logs realistically get so the maxsize of them aren't just guesses (right they are)
const heroicCrashes = new DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  dirname: heroicLogsFolder,
  filename: 'crashes-%DATE%.log',
  maxFiles: '2d',
  maxSize: '2m'
})
const heroicDebug = new DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  dirname: heroicLogsFolder,
  filename: 'debug-%DATE%.log',
  level: 'debug',
  maxFiles: '1d',
  maxSize: '10m'
})
const heroicErrors = new DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  dirname: heroicLogsFolder,
  filename: 'errors-%DATE%.log',
  level: 'warn',
  maxFiles: '5d',
  maxSize: '3m'
})
const heroicInfo = new DailyRotateFile({
  datePattern: 'YYYY-MM-DD',
  dirname: heroicLogsFolder,
  filename: 'info-%DATE%.log',
  level: 'info',
  maxFiles: '2d',
  maxSize: '5m'
})

const Logger = createLogger({
  exceptionHandlers: [
    heroicCrashes
  ],
  exitOnError: false,
  format: format.combine(
    format.timestamp({
      format: 'HH:mm:ss.SSZZ'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  level: 'info',
  transports: [
    heroicErrors,
    heroicInfo,
    heroicDebug
  ]
})

/*
 --- Usage ---
LEVEL: Log level to use for this message, which can be the NPM log level or the RFC5424 log levels
    -- NOTE -- We need to decide which logging levels we want to use
MESSAGE: Whatever message you want in the log, probably using backticks to include a variable
SERVICENAME: Name of the service that's reporting this log, so you can find where the log was fired, which follows the message in the log

Logger.LEVEL({message: 'MESSAGE', service: 'SERVICENAME'})
*/

export {
  Logger
}

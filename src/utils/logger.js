import log from 'loglevel'

const level = import.meta.env.PROD ? 'warn' : 'debug'
log.setLevel(level)

export default log
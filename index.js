const log = require('./src/logger')
const server = require('./src/server')

const port = process.env.PORT || 3000

log.info(`Starting server on port ${port}`)
server.listen(port, () => {
  log.info(`Listening on http://localhost:${port}`)
})

const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()

const app = new Koa()

const log = require('./logger')

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  log.info('%s %s - %ims', ctx.method, ctx.url, ms)
})

const Greeter = require('./greeter')

router.get('/hello/:name*', async ctx => {
  const greeter = new Greeter()
  ctx.body = greeter.greet(ctx.params.name)
})

app.use(router.routes())

module.exports = app

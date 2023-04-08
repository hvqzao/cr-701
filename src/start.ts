import Express from 'express'
import Session from 'express-session'
// import ConnectRedis from 'connect-redis'
import RedisStore from 'connect-redis'
import Redis from 'ioredis'

const app = async () => {
  // const RedisStore = ConnectRedis(Session)
  const redis = new Redis(process.env.REDIS || '')
  const session = Session({
    // store: new RedisStore({
    store: RedisStore({
      client: redis
    }),
    secret: process.env.SECRET || ''
  })
  const express = Express()
  express.use(session)
}

app()

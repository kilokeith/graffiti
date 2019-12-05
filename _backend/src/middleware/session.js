import Redis from "ioredis";
import expressSession from "express-session";

let RedisStore = require("connect-redis")(expressSession);
let redisClient = new Redis(process.env.REDISTOGO_URL);

const session = expressSession({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
});

export default session;

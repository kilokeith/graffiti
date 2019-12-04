import expressSession from 'express-session';
import RedisStoreSetup from 'connect-redis';

const RedisStore = RedisStoreSetup(expressSession);

const session = expressSession({
  store: new RedisStore({
    url: process.env.REDISTOGO_URL
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
});

export default session;

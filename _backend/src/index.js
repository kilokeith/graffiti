import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import SourceMapSupport from 'source-map-support';
import ejs from 'ejs';
import env from '../../config/env';
import paths from '../../config/paths';
// db
import db from './database/db'

// import routes
import routes from './routes';
// import session
import session from './middleware/session'
// define our app using express
const app = express();

// add Source Map Support
if (process.env.NODE_ENV === "development") {
  SourceMapSupport.install({
    handleUncaughtExceptions: true
  });
}

// server shutdown handling
process.on("SIGINT", function(message) {
  console.info("server shutting down", message);
  process.exit(1);
});
// server error handling
process.on('unhandledRejection', function(reason, p) {
  console.error(reason, 'Unhandled Rejection at Promise', p);
});
// server error handling
process.on('uncaughtException', function(err) {
  console.error("MAJOR CRASH ERROR");
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1);
});
// server crash handling
process.once('SIGUSR2', function() {
  console.info("server got a SIGUSR2");
  return process.kill(process.pid, 'SIGUSR2');
});



// configure app
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
// set the port
const port = process.env.PORT || 3000;
// set the template engine
ejs.delimiter = '?';
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', paths.appBuild);

// use sessions
app.use(session);

// handle routes
app.use(routes);

// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});

let config 		= require(`${global.__server}/configs/config`);
import helmet from 'helmet';
import hpp from 'hpp';

const appConfig = config.get('app');

//route filter
module.exports = function(app) {
	// Don't expose any software information to hackers.
	app.disable('x-powered-by');

	// Prevent HTTP Parameter pollution.
	app.use(hpp());

	//helment security filters
	//https://www.npmjs.org/package/helmet

	// Content Security Policy
	app.use(helmet.contentSecurityPolicy({
		defaultSrc: ["'self'"],
		scriptSrc: ["'self'"],
		styleSrc: ["'self'"],
		imgSrc: ["'self'"],
		connectSrc: ["'self'", 'ws:'],
		fontSrc: ["'self'"],
		objectSrc: ["'none'"],
		mediaSrc: ["'none'"],
		frameSrc: ["'none'"],
	}));

	app.use(helmet.hidePoweredBy());
	app.use(helmet.xssFilter());
	app.use(helmet.frameguard('deny'));
	app.use(helmet.ieNoOpen());
	app.use(helmet.noSniff());

	//url filtering
	// app.use(require(`${__dirname}/url_filters`)());
};

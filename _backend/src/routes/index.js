import express from "express";
import compression from "compression";
import path from "path";
import enforce from "express-sslify";
import { trimEnd } from "lodash";
//import controller file
import apiRoutes from "./api";
import errorRoutes from "./errors";
// allow-cors
import cors from "../middleware/cors";
// paths config
import paths from "../../../config/paths";
const appHtml = path.resolve(__dirname, paths.appBuild, "index.html");
const favicon = path.resolve(__dirname, paths.appBuild, "favicon.ico");
const serviceWorker = path.resolve(
  __dirname,
  paths.appBuild,
  "service-worker.js"
);

// get an instance of express router
const router = express.Router();

// on heroku force connections to use https
if (process.env.NODE_ENV !== "development") {
  router.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// compress output
router.use(compression());

// fix for tokens with "." at the end
router.param("token", (req, res, next, token) => {
  req.params.token = trimEnd(token, ".");
  next();
});

// static assets
router.use("/static", express.static(path.join(paths.appBuild, "static")));
router.get("/favicon.ico", (req, res) => {
  return res.sendFile(favicon);
});
router.get("/service-worker.js", (req, res) => {
  return res.sendFile(serviceWorker);
});

// apis
router.use("/api", cors, apiRoutes);

// home route
router.get("/", (req, res) => {
  return res.send("🍔");
});

router.use(errorRoutes.handle403);
router.use(errorRoutes.handle500);
router.use(errorRoutes.handle404);

export default router;

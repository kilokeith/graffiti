import { apiError } from "../lib/helpers";

const bypass = (process.env.BYPASS_ON_DEV && process.env.NODE_ENV === "development");

export const okResp = (req, res, next) => res.send();

// are they logged in?
export const isLoggedIn = req => bypass || req.user != null;

// redirect to admin if logged in
export const loginRedirect = (req, res, next) => {
  // console.log("USER", req.user);
  if (isLoggedIn(req)) {
    return res.redirect('/admin');
  } else {
    return next();
  }
}

// redirect to loggin if not logged in
export const sendToLogin = (req, res, next) => {
  // console.log("USER", req.user);
  if (isLoggedIn(req)) {
    return next();
  } else {
    return res.redirect('/auth/login');
  }
}

export const forbidUnlessLoggedIn = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next();
  } else {
    return next(apiError("User not logged in"));
  }
}

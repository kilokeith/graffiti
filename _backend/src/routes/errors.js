const fourOThreeErrors = [
  "EBADCSRFTOKEN",
  "EBADAUTHTOKEN",
  "HTTP_FORBIDDEN"
];

const handleErrorResp = (res, status, msg) => {
  // set status code (possibly again)
  res.status(status);
  // send back a formatted error
  return res.format({
    text() { res.send(msg)},
    html() { res.send(`<h2 align=center>${msg}</h2>`); },
    json() { res.json({error: msg}); },
    default() { res.send(msg); }
  });
}

// handle 403 errors
const handle403 = (err, req, res, next) => {
  // check for 403 errors, if not then pass to 500
  if (!fourOThreeErrors.includes(err.code)) return next(err);

  if(err.code === "EBADAUTHTOKEN") {
    return res.render("forbidden.html", (renderErr, html) => {
      console.log(renderErr)
      if(renderErr) return handleErrorResp(res, 403, "Forbidden");
      return res.send(html);
    });
  }

  console.error("403 error", err);
  return handleErrorResp(res, 403, "Forbidden");
};

// catch 404
const handle404 = (req, res, next) => {
  console.error("404 error", req.path);
  return handleErrorResp(res, 404, "Page Not Found!");
};

// handle 500 errors
const handle500 = (err, req, res, next) => {
  console.error("500 error", err);
  return handleErrorResp(res, 500, "Server error!");
};

export default { handle403, handle404, handle500 }

export function toBoolean(val, fallback = false) {
  if (typeof val === "boolean") {
    return val;
  } else if (typeof val === "string") {
    switch (val.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case null:
        return false;
      default:
        return Boolean(val);
    }
  } else if (typeof val === "number") {
    return Boolean(val);
  } else {
    return fallback;
  }
}

export function apiError(message) {
  let err = typeof message === "string" ? new Error(message) : message;
  err.statusCode = 403;
  err.code = "HTTP_FORBIDDEN";
  return err;
}

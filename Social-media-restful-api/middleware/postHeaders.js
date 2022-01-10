function postHeaders(req, res, next) {
  res
    .header("Content-Type", "application/json; charset=utf-8")
    .header("Access-Control-Expose-Headers", "Location");
  next()
}

module.exports = postHeaders
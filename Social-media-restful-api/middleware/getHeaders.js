function getHeaders(req, res, next) {
  res
    .header("Vary", "Origin, Accept-Encoding")
    .header("Access-Control-Allow-Credentials", true)
    .header("Cache-Control", "no-cache")
    .header("Pragma", "no-cache")
    .header("Expires", "-1")
    .header("X-Content-Type-Options", "nosniff")
    .header("Access-Control-Allow-Origin", "*")
    .header("Access-Control-Allow-Headers", "Content-Type, x-requested-with")
  next()
}

module.exports = getHeaders

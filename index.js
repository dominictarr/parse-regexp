var rx = /^\/((?:\\\/|[^\/])+)\/(.*)$/
module.exports = function (string) {
  var m = rx.exec(string)
  return m ? new RegExp(m[1], m[2]) : null
}

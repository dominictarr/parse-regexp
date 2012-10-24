
var expected = [
  /(?:)/,
  /whatever/,
  /this/g,
  /that/i,
  /again/mgi,
  /^\/([^\/]+)\/(.*)$/, //basic RegExp to parse simple regexp
  /^\/((?:\\\/|[^\/])+)\/(.*)$/ //RegExp that can parse all above RegExp
]

var assert = require('assert')
var parse = require('..')

expected.forEach(function (r) {
  var str = r.toString()
  var rx = parse(str)
  console.log(JSON.stringify(str), '->', rx)
  assert.equal(rx.toString(), r.toString())
})

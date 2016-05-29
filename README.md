# parse-regexp
parse a regexp string. `parse(reg_exp.toString()) == reg_exp`

<img src=https://secure.travis-ci.org/'Dominic Tarr'/parse-regexp.png?branch=master>

Put RegExps in your config files or, or use them as object keys!

```
  var rxparse = require('regexp-parse')
  rxparse('/whatever/m')

  => /whatever/m

```

If you are using this to parse user input I would recommend
first passing the regular expression through [safe-regex](https://github.com/substack/safe-regex)

## License

MIT

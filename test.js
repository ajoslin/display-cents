'use strict'

var test = require('tape')
var displayCents = require('./')

test(function (t) {
  t.equal(displayCents(100), '1.00')
  t.equal(displayCents({}), 'NaN')
  t.end()
})

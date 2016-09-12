var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes')

var Raven = require('raven-js')
var SentryKey = 'd957254a37cc439bb7015a6506a45cbd'
var SentryApp = '44'
var SentryURL = 'http://d957254a37cc439bb7015a6506a45cbd@sentry.micropyramid.com/44'

Raven.config(SentryURL).install()


ReactDOM.render(routes, document.getElementById("app"));


var $         = require('jquery');
var React     = require('react');
var ReactDOM  = require('react-dom');
var History   = require('history');

var AppRouter = require('./app_router.jsx');

var render = ReactDOM.render;

const history = History.useBasename(History.createHistory)({
  basename: '/index_dev.html'
});

$(document).ready(function(){
  render(
    <AppRouter history={history} />,
    $('#app-content')[0]
  );
});
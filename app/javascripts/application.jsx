var $ = require('jquery');

var React    = require('react');
var ReactDOM = require('react-dom');

var Header    = require('./layouts/header.jsx');
var AppRouter = require('./app_router.jsx');

var render = ReactDOM.render;

$(document).ready(function(){
  render(
    <Header />,
    $('header')[0]
  );

  render(
    <AppRouter />,
    $('main')[0]
  )
});
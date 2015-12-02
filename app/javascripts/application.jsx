var $ = require('jquery');

var React    = require('react');
var ReactDOM = require('react-dom');

var Header = require('./layouts/header.jsx')

$(document).ready(function(){
  ReactDOM.render(
    <Header />,
    $('header')[0]
  );
});
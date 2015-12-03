var React = require('react');

var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="nav-bar">
        <Link to={'/sign_in'} className="nav-btn">Sign In</Link>
        <Link to={'/sign_up'} className="nav-btn">Sign Up</Link>
      </div>
    );
  }
});

module.exports = NavBar;
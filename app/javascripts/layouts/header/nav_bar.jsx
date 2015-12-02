var React = require('react');

var SignInButton  = require("./nav_bar/sign_in_button.jsx");
var SignOutButton = require("./nav_bar/sign_out_button.jsx")

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="nav-bar">
        <SignInButton />
        <SignOutButton />
      </div>
    );
  }
});

module.exports = NavBar;
var React = require('react');

var Mui = require('material-ui');

var TextField    = Mui.TextField;
var RaisedButton = Mui.RaisedButton;

var SignUpButton = require('../layouts/header/nav_bar/sign_up_button.jsx');

var Header = require('../layouts/header.jsx');

var SignIn = React.createClass({
  buttonStyle: {
    margin: "10 0"
  },

  render: function(){
    return (
      <main className="sign-in-panel panel" id="sign-in-panel">
        <h1>Sign in</h1>
        <TextField hintText="Email Address" fullWidth={true} />
        <TextField hintText="Password" type="password" fullWidth={true} />
        <RaisedButton style={this.buttonStyle} label="Sign in" />
        <SignUpButton className="pull-right-20" />
      </main>
    );
  }
});

module.exports = SignIn;
var React = require('react');

var Mui = require('material-ui');

var TextField    = Mui.TextField;
var RaisedButton = Mui.RaisedButton;

var Header = require('../layouts/header.jsx');

var SignUp = React.createClass({
  buttonStyle: {
    margin: "10 0"
  },

  render: function(){
    return (
      <main className="sign-up-panel panel" id="sign-up-panel">
        <h1>Sign Up</h1>
        <TextField hintText="Email Address" fullWidth={true} />
        <TextField hintText="Password" type="password" fullWidth={true} />
        <TextField hintText="Password Confirmation" type="password" fullWidth={true} />
        <RaisedButton style={this.buttonStyle} label="Sign Up" />
      </main>
    );
  }
});

module.exports = SignUp;
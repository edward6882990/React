var React       = require("react");
var ReactRouter = require("react-router");
var History     = require('history');

var Link = ReactRouter.Link;

var SignInButton = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  render: function(){
    return (
      <Link to={'/sign_in'} className={this.props.className + " nav-btn"}>Sign In</Link>
    );
  }
});

module.exports = SignInButton;
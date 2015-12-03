var React       = require("react");
var ReactRouter = require("react-router");
var History     = require('history');

var Link = ReactRouter.Link;

var SignUpButton = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  render: function(){
    return (
      <Link to={'/sign_up'} className={this.props.className + " nav-btn"}>Sign Up</Link>
    );
  }
});

module.exports = SignUpButton;
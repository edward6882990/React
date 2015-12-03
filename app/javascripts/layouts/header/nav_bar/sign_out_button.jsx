var React       = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

var SignOutButton = React.createClass({
  render: function(){
    return (
      <a href="#" className="nav-btn">Sign Out</a>
    );
  }
});

module.exports = SignOutButton;
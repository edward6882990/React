var React = require("react");

var NavBar = require("./header/nav_bar.jsx");

var Header = React.createClass({
  render: function(){
    return (
      <div>
        <span className="header-logo">Fober</span>
        <NavBar />
      </div>
    )
  }
});

module.exports = Header;
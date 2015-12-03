var React = require("react");

var NavBar = require("./header/nav_bar.jsx");

var Header = React.createClass({
  render: function(){
    return (
      <header>
        <span className="header-logo">Fober</span>
        <NavBar />
      </header>
    );
  }
});

module.exports = Header;
var React  = require('react');
var Header = require('./layouts/header.jsx');

const Application = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Application;

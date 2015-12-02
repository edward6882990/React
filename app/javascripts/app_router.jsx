var React       = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route  = ReactRouter.Route;
var Link   = ReactRouter.Link;

var Views = require('./views.jsx');

var AppRouter = React.createClass({
  render: function(){
    return (
      <Router>
        <Route path="/" component={Views.SignIn}>
          <Route path="sign_in" compnent={Views.SignIn} />
        </Route>
      </Router>
    );
  }
});

module.exports = AppRouter;
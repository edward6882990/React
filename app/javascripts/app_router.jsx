var React       = require('react');
var ReactRouter = require('react-router');

var Router     = ReactRouter.Router;
var Route      = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Views = require('./views.jsx');

var Application = require('./application.jsx');

var AppRouter = React.createClass({
  render: function(){
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Application}>
          <IndexRoute component={Views.SignIn}/>
          <Route path="sign_in" component={Views.SignIn} />
          <Route path="sign_up" component={Views.SignUp} />
        </Route>
      </Router>
    );
  }
});

module.exports = AppRouter;
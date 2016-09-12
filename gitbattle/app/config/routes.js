var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/main');
var Home = require("../components/home");

var PromptContainer = require('../containers/PromptContainer')
var ConfirmBattleContainer = require('../containers/battleConfirmContainer')

var routes = (
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='playerOne' component={PromptContainer} />
    <Route path='playerTwo/:playerOne' component={PromptContainer} />
    <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
    </Router>
);

module.exports = routes;

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function(){
    return(
      <div>
        Start Battle
        <Link to='/playerOne'>
        start..
        </Link>
      </div>
    )
  }
})


module.exports = Home;

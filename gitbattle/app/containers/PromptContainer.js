var React = require('react');
var transaparentBG = require('../styles/index.js').transparentBg

var PromptContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      username: ''
    }
  },
  onUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username:''
    });
    if (this.props.routeParams.playerOne){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    }
    else{
      this.context.router.push('/playerTwo/'+this.state.username)
    }
  },
  render: function(){
    return(
        <div className="container">
        <h2>Player 1</h2>
        <form onSubmit={this.onSubmitUser}>
        <div className="form-group" style={transaparentBG}>
        <label>Player1:</label>
        <input type="text" value={this.state.username} onChange={this.onUpdateUser} className="form-control" placeholder="Github Username" />
        </div>
        <button type="submit" className="btn btn-default">Continue</button>
        </form>
        </div>
    )
  }
})

module.exports = PromptContainer;

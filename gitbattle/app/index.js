var React = require('react');
var ReactDOM = require('react-dom');


USER_DATA = {
  name: 'Ravi',
  username: 'ravigadila',
  image_url: 'https://avatars3.githubusercontent.com/u/8197942?v=3&s=460'
}

var ProfileName = React.createClass({
  render: function(){
    return(
        <p>{this.props.name}</p>
    )
  }
});

var ProfileImage = React.createClass({
  render: function(){
    return(
        <img src={this.props.image_url} style={{height: 100, width: 100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return(
        <a href={'https://github.com/'+this.props.username}>{this.props.username}</a>
    )
  }
});


var Profile = React.createClass({
  render: function(){
    return(
        <div>
        <ProfileImage image_url={this.props.user.image_url} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
        </div>
    )
  }
});

ReactDOM.render(<Profile user={USER_DATA} />, document.getElementById("app"));


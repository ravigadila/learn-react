var Axios = require('axios')

var id = '5ff71a10345fe13ed154'
var sec = 'd1ea0bb3291a468b935a0b5b264bd70f97f88dc6'

var param = "?client_id="+id+"&client_secret="+sec;

function getUserInfo(username){
  return Axios.get('http://api.github.com/users/'+username+param)
}
var helpers = {
  getPlayersInfo: function (players){
    return Axios.all(players.map(function (username){
      return getUserInfo(username)
    })).then(function(info){
      return info.map(function (user){
        return user.data;
      })
    })
    
  }
}

module.exports = helpers;

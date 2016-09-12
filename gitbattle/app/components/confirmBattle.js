var React = require('react')

function puke(object){
  return <pre>{JSON.stringify(object, null, '')}</pre>
}
function ConfirmBattle(props){
  console.log(props)
  return props.isLoading === true
    ? <p> loading..</p>
    : <div> complit {puke(props)}</div>
}

module.exports = ConfirmBattle;

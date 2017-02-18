import React, { Component } from 'react';


class Lifecycle extends Component {
	constructor(props) {
		console.log('constructor called')
		super(props);
		this.state = { 
			count: 0
		};
		this.Add = this.Add.bind(this);
		this.Remove = this.Remove.bind(this);
	}


	componentWillMount(){
		console.log('componentWillMount called')
	}

	componentDidMount() {
		console.log('componentDidMount called')
	}

	Add(){
		this.setState({count: this.state.count + 1})
	}
	Remove(){
		this.setState({count: this.state.count - 1})
	}

	componentWillReceiveProps(){
		console.log('componentWillReceiveProps called')
	}

	shouldComponentUpdate(){
		console.log('shouldComponentUpdate called');
		return true
	}

	componentWillUpdate(){
		console.log('componentWillUpdate called')
	}

	componentDidUpdate(){
		console.log('componentDidUpdate called');
	}

	render() {
		console.log('render called');
		return (
			<div>
				<div>
					<h1>{this.state.count}</h1>
				</div>
				<button onClick={this.Add}>
					<span>+(Add)</span>
				</button>
				<button onClick={this.Remove}>
					<span>-(Remove)</span>
				</button>
			</div>
		);
	}
}

export default Lifecycle;

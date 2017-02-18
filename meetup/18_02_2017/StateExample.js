import React, { Component } from 'react';


class StateExample extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			count: 0
		};
		this.Add = this.Add.bind(this);
		this.Remove = this.Remove.bind(this);
	}
	Add(){
		this.setState({count: this.state.count + 1})
	}
	Remove(){
		this.setState({count: this.state.count - 1})
	}
	render() {
		return (
			<div>
				<div>
					<h1>{this.state.count}</h1>
				</div>
				<button class="ActionButton" onClick={this.Add}>
					<span>+(Add)</span>
				</button>
				<button class="ActionButton" onClick={this.Remove}>
					<span>-(Remove)</span>
				</button>
			</div>
		);
	}
}

export default StateExample;

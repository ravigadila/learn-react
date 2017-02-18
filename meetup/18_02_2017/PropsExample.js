import React, { Component } from 'react';


class PropsExample extends Component {
	alertmessage(){
		alert('Hi, Test alert')
	}
	render() {
		return (
			<button class="ActionButton" onClick={this.alertmessage}>
				<span>{this.props.buttontext}</span>
			</button>
		);
	}
}

export default PropsExample;

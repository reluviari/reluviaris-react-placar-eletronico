import React from "react";

class BotaoGol extends React.Component {
	handleClick(event) {
		event.preventDefault(), this.props.marcarGol();
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>Gol!</button>
			</div>
		);
	}
}

export default BotaoGol;

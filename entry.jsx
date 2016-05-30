var React = require('react'),
	ReactDOM = require('react-dom');

var Timer = React.createClass({
	getInitialState: function() {
		return {elapsedTime: 0};
	},

	componentDidMount: function() {
		this.timer = setInterval(this.tick, 50);
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},

	tick: function() {
		this.setState({elapsedTime: new Date() - this.props.startTime});
	},

	render: function() {

		var elapsedTime = Math.round(this.state.elapsedTime / 100);

		var seconds = (elapsedTime / 10).toFixed(1);

		return	<div>Elapsed Time: <b>{seconds} seconds</b></div>;
	}
});

ReactDOM.render(
	<Timer startTime={Date.now()} />,
	document.getElementById("main")
);

module.exports = Timer;
import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term : '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<form className="form-input">
				<div className="form-group">
				<input className="form-control" onChange={this.onInputChange} value={this.state.term} placeholder="Type a city..."/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
				</div>	
			</form>
		);
	}
}

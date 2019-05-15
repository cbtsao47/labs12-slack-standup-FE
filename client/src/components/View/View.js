import './view.css';
import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import ReportsDash from '../Dashboard/ReportsDash';

class View extends Component {
	state = {};
	render() {
		return (
			<div className="view">
				<ReportsDash className="reportsDash"/>
				<Dashboard className="usersDash"/>
			</div>
		);
	}
}

export default View;

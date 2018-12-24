import React,{ Component } from 'react';

class specialbox extends Component{
	render(){
		return(
				<div className = "specialbox">
					<div className = "specialimg"></div>
					<div className = "specialitem">{this.props.name}</div>
				</div>
			)
	}
}

export default specialbox;
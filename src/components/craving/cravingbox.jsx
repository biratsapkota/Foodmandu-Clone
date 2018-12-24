import React,{Component} from 'react';

class cravingbox extends Component{
	render(){
		return(
			<div className = "cravingbox">
				<div className="cravingimg">
					<img src = {this.props.image_url}/>
				</div>
				<div className="cravingitem">{this.props.name}</div>
			</div>		
		);
	}
}

export default cravingbox;
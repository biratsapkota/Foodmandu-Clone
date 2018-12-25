import React, {Component} from 'react';
import RestaurantLeft from './restaurantleft';
import RestaurantRight from './restaurantright';

class restaurants extends Component{
	render(){
		return(
			<React.Fragment>
				<RestaurantLeft/>
				<RestaurantRight/>
			</React.Fragment>
		)
	}
}

export default restaurants;
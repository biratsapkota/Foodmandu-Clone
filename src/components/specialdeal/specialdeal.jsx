import React, { Component } from 'react';
import Specialbox from './specialbox'

class specialdeal extends Component{
	render(){
		return(
			<div className="specialdeal">
				<div className = "specialhead">
					SPECIAL DEALS
				</div>
				<div className="specialboxes">
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
					<Specialbox name="Flat Iron Grill" link ="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"/>
				</div>
			</div>
		)
	}
}

export default specialdeal;
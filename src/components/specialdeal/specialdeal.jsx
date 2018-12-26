import React, { Component } from 'react';
import SpecialBox from './specialbox'

class specialdeal extends Component{
	render(){
		let specialdeal =[
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			},
			{
				name:"Flat Iron Grill",
				image_url:"https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545649415/images/Super7_Web_Feature_Listing__1_-min_251118033425.png"
			}
		]

		let display_specialdeal = specialdeal.map(specialdeal =>
				< SpecialBox name={specialdeal.name} image_url={specialdeal.image_url} />
			) 
		return(
			<div className="specialdeal">
				<div className = "specialhead">
					SPECIAL DEALS
				</div>
				<div className="specialboxes">
					{ display_specialdeal }
				</div>
				<div className = "viewdeal">
					View all Deals -->
				</div>
			</div>
		)
	}
}

export default specialdeal;
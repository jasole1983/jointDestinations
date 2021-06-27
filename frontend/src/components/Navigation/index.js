import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal/index";

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<>
				<ProfileButton user={sessionUser} />
			</>
		);
	} else {
		sessionLinks = (
			<>
				<div className='navi'>
					<LoginFormModal className='navi_btn' id='login_btn' />
					<button className='navi_btn'>
						<NavLink exact to='/' className='navi_link' id='home_btn'>
							<i className='fas fa-cannabis' />
						</NavLink>
					</button>
				</div>
			</>
		);
	}
	return (
		<div className='nav_bar'>
			<div className='app'>UNLIT</div>
			<div className='ints'>
				<div id='checkin-div' className='ints_link'>
					<NavLink to='/checkin' className='dirNavLink'>
						Check-In
					</NavLink>
				</div>
				<div id='nearby-div' className='ints_link'>
					<NavLink to='/nearby' className='dirNavLink'>
						Events Near Me
					</NavLink>
				</div>
				<div id='review-div' className='ints_link'>
					<NavLink to='/reviews' className='dirNavLink'>
						Highest Rated
					</NavLink>
				</div>
			</div>
			<div className='navi'>{isLoaded && sessionLinks}</div>
		</div>
	);
}

export default Navigation;

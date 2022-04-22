import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from "utils/enum";
import Service from "../partials/cards/Service";
import Reminder from "../partials/cards/Reminder";


const Home = () => {
	return (
		<>
			<Reminder />
			<Service />
		</>
	)
}

export default Home

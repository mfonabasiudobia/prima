import React, { useState } from 'react';
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const Dashboard = ({ children } : any) => {
	
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<div className={`page-wrapper`}>
				<Header />
				{children}
				<Footer />
		</div>
	)
}

export default Dashboard
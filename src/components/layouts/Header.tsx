import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const styles = {
	wrapper : `home-bg relative text-white 
	xs:bg-[-20rem_bottom]
	sm:bg-[-19rem_bottom]
	md:bg-[-10rem_bottom]
	lg:bg-[right_bottom]
	before:rounded-br-[100px] before:rounded-tr-[125px] md:before:-rotate-[10deg]
	before:absolute before:top-0 before:-left-[5%] before:h-[120%]
	before:bg-gradient-to-r before:from-orange-500/100 before:via-orange-500/100 before:to-orange-500/80
	xs:before:w-[65%] 
	sm:before:w-[65%] 
	md:before:w-[55%] 
	md:after:w-[21%]
	lg:after:w-[21%] 
	after:opacity-100 after:absolute after:top-0 after:left-0 after:z-0 after:h-full after:bg-orange-500 overflow-hidden`,
	container : `container relative grid md:grid-cols-1 gap-10 min-h-[280px] md:min-h-[420px]  
	xs:px:1 xs:w-[94%] xs:min-h-auto
	sm:px:1 sm:w-[94%] 
	`,
	title: `text-4xl xs:text-lg  font-bold relative z-10`,
	details : `text-2xl xs:text-[18px] xs:leading-5 relative z-10 pb-3 `,
	left : `relative space-y-16 py-12 pt-16 xs:pt-16 pr-5 md:pr-12 xs:space-y-10 sm:min-h-[390px] xs:min-h-[320px]`,
	contBanCentral : 'space-y-3 xs:w-[70%] xs:space-y-1',
	logoHead : 'xs:h-8',
}

const Header = ({ setIsSidebarOpen } : any) => {
	return (
		<section className={`${styles.wrapper}`}>
			<div className={styles.container}>
				<div className={styles.left}>
					<NavLink to="/">
						<img src="/svgs/logo.svg" className="h-12 relative z-10 logoHead" />
					</NavLink>

					<section className={styles.contBanCentral}>
						<h1 className={styles.title}>Comunidad Prima</h1>
						<p className={styles.details}>Juntos en el progreso<br></br> de nuestros afiliados y sus familias</p>
					</section>
				</div>
			</div>
		</section>
	)
}

export default Header
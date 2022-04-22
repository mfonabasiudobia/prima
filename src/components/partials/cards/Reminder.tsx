import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const styles = {
	wrapper : `bg-white flex items-center container rounded-xl px-7 py-3 shadow-lg`,
	wrapperRight : `flex flex-col justify-center flex-1 items-start px-4`,
	title : `text-xl font-bold text-green-200`,
	paragraph : `text-sm font-light`,

}

const Service = (props : any) => {
	return (
		<section className="py-7 rounded-xl bg-white mx-3 relative -top-7">
			<div className={styles.wrapper}>
				<div>
					<img src="/images/hero-bg.png" className="h-auto w-[100px] pl-2 pt-2" />
				</div>

				<div className={styles.wrapperRight}>
					<h2 className={styles.title}>Lanzamos la 5ta temporada de El Depa!</h2>
					<p className={styles.paragraph}>Acompaña a los chicos del #ElDepa en su convivencia mientras conocen más sobre las automático. Todo esto desde nuestra app. AFP.</p>
				</div>
			</div>

		</section>
	)
}

export default Service
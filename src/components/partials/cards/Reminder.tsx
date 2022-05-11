import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const styles = {
	wrapper : `bg-white flex items-center px-7 py-7 shadow-lg  rounded-xl`,
	wrapperRight : `flex flex-col justify-center flex-1 items-start px-4`,
	title : `text-lg font-bold text-green-200`,
	paragraph : `textop font-light xs:text-[16px]`,
	icnComunidad : 'xs:hidden',
	textop : '',
	bcontainer: 'bg-white items-center md:max-w-[1294px] sm:w-[100%] xs:w-[100%]  mx-auto -mt-10 rounded-3xl relative pt-8',

}

const Service = (props : any) => {
	return (
		<div className={styles.bcontainer}>		
		<section className=" bg-white mx-auto relative container">
			<div className={styles.wrapper}>
				<div className={styles.icnComunidad}>
					<img src="/images/icn_pregunta.png" className="h-auto w-[100px] px-4 pt-2" />
				</div>

				<div className={styles.wrapperRight}>
					<h2 className={styles.title}>¿Qué es Comunidad Prima?</h2>
					<p className={styles.paragraph}>Comprometidos con acompañar a nuestros afiliados en su progreso, creamos Comunidad Prima, un espacio para dar a conocer los productos y/o servicios de nuestros afiliados y familiares para asi impulsar sus negocios.</p>
				</div>
			</div>

		</section>
	</div>
	)
}

export default Service
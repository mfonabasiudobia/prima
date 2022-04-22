import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsFillPlayFill } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { routes } from "utils/enum";


const styles = {
	wrapper : `bg-orange-500 py-16 text-white`,
	container : `container grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-0`,
	sectionTitle : `font-bold text-sm`,
	linksWrapper : `text-xs space-y-2 font-light`,
	section : `space-y-2`,
	socialsWrapper: `flex space-x-2 items-center`,
	socialIcon : `rounded-full bg-white p-2 text-orange-500`
}

const Footer = () => {

	
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>

				<section className="space-y-16">
					<img src="/svgs/logo.svg" className="h-10 w-auto" />	

				 <div className={styles.socialsWrapper}>
					<a href="#" className={styles.socialIcon}><FaFacebookF size={15} /></a>	
					<a href="#" className={styles.socialIcon}><BsInstagram size={15} /></a>	
					<a href="#" className={styles.socialIcon}><BsFillPlayFill size={15} /></a>	
					<a href="#" className={styles.socialIcon}><FaLinkedinIn size={15} /></a>	
				 </div>			
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Contáctanos</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">Agencias</NavLink></li>
						<li><NavLink to="/">App móvil</NavLink></li>
						<li><NavLink to="/">Chat Web</NavLink></li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Teléfonos</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">Lima: (01) 615-7272</NavLink></li>
						<li><NavLink to="/">Provincias: 0-801-18010</NavLink></li>
					</ul>

					<div className="pt-10 text-center md:w-1/2 flex flex-col items-start md:items-center">
						<h2 className="text-xs">LIBRO DE <br /> RECLAMACIONES</h2>
						<img src="/images/open-book.png" className="h-10 w-auto" />
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Otros enlaces</h2>
					<ul className={styles.linksWrapper}>
						<li><NavLink to="/">Comprobante electrónico</NavLink></li>
						<li><NavLink to="/">Política de Seguridad y Salud en el trabajo</NavLink></li>
						<li><NavLink to="/">Política de calidad</NavLink></li>
						<li><NavLink to="/">Protección de datos personales</NavLink></li>
						<li><NavLink to="/">Comisión equivalente por flujo</NavLink></li>
						<li><NavLink to="/">Sistemas de Denuncias Alerta Genética</NavLink></li>
						<li><NavLink to="/">Traspaso Afiliados del periodo de Licitación</NavLink></li>
						<li><NavLink to="/">Campaña traspasos - Términos y condiciones</NavLink></li>
						<li><NavLink to="/">Prima AFP Concursos</NavLink></li>
					</ul>
				</section>

			</div>
		</div>
	)

}

export default Footer
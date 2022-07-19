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
					<a href="https://www.facebook.com/PrimaAFP/" target="_blank"  rel="noreferrer" className={styles.socialIcon}><FaFacebookF size={15} /></a>	
					<a href="https://www.instagram.com/primaafp/"  target="_blank"  rel="noreferrer" className={styles.socialIcon}><BsInstagram size={15} /></a>	
					<a href="https://www.youtube.com/channel/UCU6o1n74cGuZqL555IDlkwg"  rel="noreferrer" target="_blank" className={styles.socialIcon}><BsFillPlayFill size={15} /></a>	
					<a href="https://www.linkedin.com/company/prima-afp/"  target="_blank" rel="noreferrer" className={styles.socialIcon}><FaLinkedinIn size={15} /></a>	
				 </div>			
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Contáctanos</h2>
					<ul className={styles.linksWrapper}>
						<li><a href="https://www.prima.com.pe/public-zone/sobre-prima-afp/canales-de-atencion/" rel="noreferrer">Agencias</a></li>
						<li><a href="https://play.google.com/store/apps/details?id=prima.android.splashscreentest&hl=es_PE" rel="noreferrer">App móvil</a></li>
						<li><a href="https://salesiq.zoho.com/signaturesupport.ls?widgetcode=49c13587d730313d939d75a12056e4cf0cbeab76ff2c5be8ea90353528a397b955e25b04c7489d5ea523f33b8cf0da45" rel="noreferrer">Chat Web</a></li>
					</ul>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Teléfonos</h2>
					<ul className={styles.linksWrapper}>
						<li>Lima: (01) 615-7272</li>
						<li>Provincias: 0-801-18010</li>
					</ul>

					<div className="pt-10 text-center md:w-1/2 flex flex-col items-start md:items-center">
						<h2 className="text-xs">LIBRO DE <br /> RECLAMACIONES</h2>
						<img src="/images/open-book.png" className="h-10 w-auto" />
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Otros enlaces</h2>
					<ul className={styles.linksWrapper}>
						<li><a href="http://asp402r.paperless.com.pe/BoletaPrimaAfp/" rel="noreferrer">Comprobante electrónico</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/files/2021/pdf/Politica_SST_2021.pdf" rel="noreferrer">Política de Seguridad y Salud en el trabajo</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/files/2020/pdf/Nuestra_Politica_Calidad.pdf" rel="noreferrer">Política de calidad</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/sobre-prima-afp/politica-de-privacidad/" rel="noreferrer">Protección de datos personales</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/formularios/comision-equivalente-por-flujo/" rel="noreferrer">Comisión equivalente por flujo</a></li>
						<li><a href="https://secure.ethicspoint.com/domain/media/es/gui/56087/index.html" rel="noreferrer">Sistemas de Denuncias Alerta Genética</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/aportes-y-fondo/traspaso-afiliado-periodo-de-licitacion/" rel="noreferrer">Traspaso Afiliados del periodo de Licitación</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/informativa/traspasos_tyc/" rel="noreferrer">Campaña traspasos - Términos y condiciones</a></li>
						<li><a href="https://www.prima.com.pe/public-zone/informativa/concursos_prima/" rel="noreferrer">Prima AFP Concursos</a></li>
					</ul>
				</section>

			</div>
		</div>
	)

}

export default Footer
import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsChevronRight } from "react-icons/bs";
import Modal from "../../Modal";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { routes } from "../../../../utils/enum";

const styles = {
    wrapper : `shadow-xl relative p-5 py-7 text-grey-500`,
    cancel : `w-10 h-10 p-1 rounded-full absolute right-5 top-5 bg-white text-red-500 flex items-center justify-center`,
    body: `py-5 md:p-10 space-y-5`,
    bodyHeader : `pb-4`,
    title : `md:text-xl lg:text-xl font-emeric sm:text-lg xs:text-lg`,
    headerDescription : `text-baseEx mt-2.5 sm:text-md`,
    item : `flex`,
    itemWrapper : ``,
    itemTitle :  `text-orange-500 font-emeric text-lgEx`,
    itemDescription : `text-baseEx font-medium py-2 xs:text-sm`,
    contactLink : `rounded-lg px-4 py-2 bg-orange-500 font-bold text-white flex items-center space-x-2 text-baseEx`,
    itemNote : 'text-xs ',
    itemContNote : 'flex py-3 opacity-75',
    itemContent : 'flex-col justify-center flex-1',
    itemImage : 'lg:w-[80px] md:w-[70px] xs:w-[60px] sm:w-[50px] mr-[12px;]',
}

const OpenContact = ({ isOpen, setIsOpen } : any) => {

  return (
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen()} title="Select a token" bodyClass="md:w-[720px]" >
           <div className={styles.wrapper} >
                  
                          <button onClick={() => setIsOpen()} className={styles.cancel}>
                                <FaTimes size={20} />
                          </button>

                          <section className={styles.body}>
                          
                          <header className={styles.bodyHeader}>
                                  <h1 className={styles.title}>¿Cómo funciona?</h1>
                                  <p className={styles.headerDescription}>Te contamos en 3 sencillos pasos como puedes publicar tu negocio:</p>
                           </header>
  
  
                           <div className={styles.itemWrapper}>
                                
                                  <div className={styles.item}>
                                      <span className={styles.itemImage} >
                                          <img src="/images/icn_paso_1.png" />
                                      </span>
  
                                      <div className={styles.itemContent}>
                                          <h1 className={styles.itemTitle}>Paso 1: Registro</h1>
                                          <p className={styles.itemDescription}>En la página de inicio de Comunidad Prima encontrarás el botón de registro que te dirigirá al formulario de inscripción del negocio.</p>
                                          <div className={styles.itemContNote}>
                                              <span className='pr-2'><MdInfoOutline size={20} /></span>
                                              <p className={styles.itemNote}>El formulario solo lo puede llenar el afiliado de Prima AFP y podrá registrar un negocio propio o de un familiar directo.</p></div>
                                      </div>
                                      
                                      
                                  </div>
                              </div>
                              <div className={styles.itemWrapper}>
                                  <div className={styles.item}>
                                  <span  className={styles.itemImage}>
                                          <img src="/images/icn_paso_2.png" />
                                      </span>
                                      <div  className={styles.itemContent}>
                                          <h1 className={styles.itemTitle}>Paso 2: Evaluación</h1>
                                          <p className={styles.itemDescription}>Nuestro equipo se encargará de verificar tu solicitud de inscripción y validar la información proporcionada.</p>
                                          
                                      </div></div>
                              
                              </div>
                              <div className={styles.itemWrapper}>
                                  <div className={styles.item}>
                                    <span  className={styles.itemImage}>
                                          <img src="/images/icn_paso_3.png" />
                                      </span>
                                      <div  className={styles.itemContent}>
                                          <h1 className={styles.itemTitle}>Paso 3: Publicación</h1>
                                          <p className={styles.itemDescription}>Luego de la evaluación, el emprendimiento será publicado en <strong>Comunidad Prima</strong>, un lugar segundo donde podrás llegar a más personas.</p>
                                          
                                      </div></div>
                               
                           </div>
                        </section>
  
                        <div className="flex justify-end items-center">
                              <NavLink to={routes.REGISTER} className={styles.contactLink}>
                                  <span> Solicitalo aqui</span>
                                  <BsChevronRight size={20} />
                            </NavLink>
                        </div>
            </div>
        </Modal>
    )
}

export default OpenContact
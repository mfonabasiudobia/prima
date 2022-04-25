import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsChevronRight } from "react-icons/bs";
import Modal from "../../Modal";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";


const styles = {
    wrapper : `shadow-xl relative p-5 py-7`,
    cancel : `w-10 h-10 p-1 shadow-xl rounded-full absolute right-5 top-5 bg-white text-red-500 flex items-center justify-center`,
    body: `py-5 md:p-10 space-y-5`,
    bodyHeader : ``,
    title : `text-xl font-emeric`,
    headerDescription : ``,
    item : `flex space-x-3 px-3 md:px-7 py-4 rounded-xl items-center`,
    itemWrapper : `space-y-3`,
    itemTitle :  `text-orange-500 font-emeric text-lg`,
    itemDescription : `text-sm font-medium`,
    contactLink : `rounded-lg px-4 py-2 bg-orange-500 font-bold text-white flex items-center space-x-2`,
    itemNote : 'text-gray-400 text-xs pl-2',
    itemContNote : 'text-gray-400 flex'
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
                                    <div>
                                        <img src="/images/bg/vibra.png" className="w-14 h-auto w-auto object-cover" />
                                    </div>

                                    <div>
                                        <h1 className={styles.itemTitle}>Paso 1: Registro</h1>
                                        <p className={styles.itemDescription}>En la página de inicio de Comunidad Prima encontrarás el botón de registro que te dirigirá al formulario de inscripción del negocio.</p>
                                        <div className={styles.itemContNote}>
                                            <MdInfoOutline size={20} />
                                            <p className={styles.itemNote}>El formulario solo lo puede llenar el afiliado de Prima AFP y podrá registrar un negocio propio o de un familiar directo.</p></div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className={styles.itemWrapper}>
                                <div className={styles.item}>
                                <div>
                                        <img src="/images/bg/vibra.png" className="w-14 h-auto w-auto object-cover" />
                                    </div>
                                    <div>
                                        <h1 className={styles.itemTitle}>Paso 2: Evaluación</h1>
                                        <p className={styles.itemDescription}>Nuestro equipo se encargará de verificar tu solicitud de inscripción y validar la información proporcionada.</p>
                                        
                                    </div></div>
                            
                            </div>
                            <div className={styles.itemWrapper}>
                                <div className={styles.item}>
                                <div>
                                        <img src="/images/bg/vibra.png" className="w-14 h-auto w-auto object-cover" />
                                    </div>
                                    <div>
                                        <h1 className={styles.itemTitle}>Paso 3: Publicación</h1>
                                        <p className={styles.itemDescription}>Luego de la evaluación, el emprendimiento será publicado en <strong>Comunidad Prima</strong>, un lugar segundo donde podrás llegar a más personas.</p>
                                        
                                    </div></div>
                             
                         </div>
                      </section>

                      <div className="flex justify-end items-center">
                            <NavLink to="contact" className={styles.contactLink}>
                                <span> Solicitalo aqui</span>
                                <BsChevronRight size={20} />
                          </NavLink>
                      </div>
            </div>
        </Modal>
    )
}

export default OpenContact
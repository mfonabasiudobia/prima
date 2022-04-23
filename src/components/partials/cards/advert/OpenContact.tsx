import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsChevronRight } from "react-icons/bs";
import Modal from "../../Modal";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const styles = {
    wrapper : `shadow-xl relative p-5 py-7`,
    cancel : `w-10 h-10 p-1 shadow-xl rounded-full absolute right-5 top-5 bg-white text-red-500 flex items-center justify-center`,
    body: `py-5 md:p-10 space-y-5`,
    bodyHeader : ``,
    title : `text-xl font-bold`,
    headerDescription : ``,
    item : `flex space-x-3 px-3 md:px-7 py-4 shadow-lg rounded-xl items-center`,
    itemWrapper : `space-y-3`,
    itemTitle :  `text-orange-500 font-bold text-lg`,
    itemDescription : `text-sm font-medium`,
    contactLink : `rounded-lg px-4 py-2 bg-orange-500 font-bold text-white flex items-center space-x-2`
}

const OpenContact = ({ isOpen, setIsOpen } : any) => {

  return (
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen()} title="Select a token" >
           <div className={styles.wrapper} >
                  
                  
                          <button onClick={() => setIsOpen()} className={styles.cancel}>
                                <FaTimes size={20} />
                          </button>

                      <section className={styles.body}>
                          
                        <header className={styles.bodyHeader}>
                                <h1 className={styles.title}>Tienda de Ropa Yanuy mi empredimiento?</h1>
                                <p className={styles.headerDescription}>Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos</p>
                         </header>


                         <div className={styles.itemWrapper}>
                             {[1,2,3].map((item, index) => 
                                <div className={styles.item} key={index}>
                                    <div>
                                        <img src="/images/bg/vibra.png" className="w-14 h-auto w-auto object-cover" />
                                    </div>

                                    <div>
                                        <h1 className={styles.itemTitle}>{index + 1}: Tienda de Ropa Yanuy mi</h1>
                                        <p className={styles.itemDescription}>Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos</p>
                                    </div>
                                </div>
                             )}
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
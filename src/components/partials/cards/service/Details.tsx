import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {  FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Modal from "../../Modal";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { strlen } from "@mfonabasiudobia/str-func";
import { MdInfoOutline } from "react-icons/md";

const styles = {
    wrapper : `shadow-xl`,
    topHeader : `relative`,
    container : `relative h-[30vh]`,
    cancel : `z-10 w-8 h-8 p-1 shadow-xl rounded-full absolute right-5 top-5 bg-white text-red-500 flex items-center justify-center`,
    body: `px-7 py-5 md:py-10 md:px-16 sm:px-16 xs:text-xs space-y-3 text-grey-500 text-base`,
    bodyHeader : `flex justify-between items-start text-base`,
    title : `text-xl font-bold text-orange-500 xs:text-[22px]`,
    list: `list-disc list-inside marker:text-green-200 marker:text-2xl`,
    footer : `text-sm space-y-5`,
    footerHeader : `flex items-center space-x-7 my-7`,
    footerTitle :   ` font-bold text-[18px] `,
    location : `z-10 bg-green-200 shadow-xl py-1.5 font-light text-white text-left rounded-lg text-sm pr-5 pl-2 flex items-center justify-center space-x-2 absolute  bottom-5 left-16 xs:left-8 `,
    locationName :  `font-bold`,
    infoDetail : 'text-grey-500 text-sm',
    legalInfo : 'pl-2 xs:text-[12px]',
    bodyDetail: 'card-modal-content listCard listCardModal text-baseEx xs:text-sm'
}

const Details = ({ isOpen, setIsOpen, details } : any) => {

  return (
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen()} title="Select a token" bodyClass="md:w-[830px]">
           <div className={styles.wrapper} >
                  
                  <section className={styles.topHeader}>
                      <div className={styles.container}>
                          
                          <button 
                            onClick={() => setIsOpen()}
                            className={styles.cancel}>
                                <FaTimes size={20} />
                         </button>

                         <button 
                            className={styles.location}>
                                <MdLocationOn size={22} />
                                <div>
                                    <h4 className={styles.locationName}>{details.department}</h4>
                                    <span>{details.district}</span>
                                </div>
                         </button>
                      </div>

                      <img src={details.urlImageBackground} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                  </section>

                      <section className={styles.body}>
                          
                        <header className={styles.bodyHeader}>
                                <h1 className={styles.title}>{details.name}</h1>
                                <div className="flex items-center space-x-2 font-semibold text-lg">
                                    <BsWhatsapp size={20} className="text-green-500" />
                                    <span>{details.phone}</span>
                                </div>
                         </header>

                         <div className="text-baseEx py-1 xs:text-[18px]">
                             <strong>RUC:</strong> {details.RUC}
                         </div>

                         <div className={styles.bodyDetail}>
                         <div dangerouslySetInnerHTML={{__html:details.cardInfoModal}}/>
                        </div>

                        

                         <footer className={styles.footer}>
                            <div className={styles.footerHeader}>
                                <h1 className={styles.footerTitle}>Contáctame en:</h1>
                                <div className="flex items-center space-x-2 font-semibold">
                                   {strlen(details.socialInstagram) > 0 && <a href={details.socialInstagram} target='_blank' rel="noreferrer">
                                        <BsInstagram size={24}  />
                                    </a>}

                                    {strlen(details.socialFacebook) > 0 && <a href={details.socialFacebook} target='_blank' rel="noreferrer">
                                        <FaFacebookF size={15}  />
                                    </a>  
                                    }
                                </div>
                             </div>
                            <div className='infoDetail items-center space-x-2 flex mb-4 mt-6'>
                            <span><MdInfoOutline size={20} /></span> 
                             <p className={styles.legalInfo}> Prima AFP ofrece este espacio digital como punto de contacto entre emprendedores y compradores, no somos responsables de la calidad de los productos y/o servicios que se ofrecen, ni de las transacciones de compra y venta.</p>
                            </div>
                         </footer>

                      </section>

            </div>
        </Modal>
    )
}

export default Details
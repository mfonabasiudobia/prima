import React, { useRef, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, isOpen, setIsOpen } : any) => {

	 const ref = useRef<any>(null);

	useEffect(() => {
	    const handleClickOutside = (e : any) => {
	      if (isOpen && ref.current && !ref.current.contains(e.target)) return setIsOpen();
	    };
	     
	     document.addEventListener('click', handleClickOutside, true);

	     return () => document.removeEventListener('click', handleClickOutside, true);
	
  	}, [ isOpen ]);

	return (
		 <section className={`modal-wrapper ${isOpen ? 'show-modal' : 'hide-modal'} `}>

	      <div className="modal-inner-wrapper">

	      	<div className="modal-body" ref={ref}>
				{ children }
			</div>
		  </div>
		</section>
	)
}

export default Modal
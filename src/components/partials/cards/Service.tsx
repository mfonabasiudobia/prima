import React, { useState, useRef, useEffect } from 'react'
import { MdLocationOn } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Details from "./service/Details";
import OpenContact from "./advert/OpenContact";
import { Data } from "../../../data/cards";
import { categories } from "../../../data/categories";
import Pagination from "../Pagination";

const styles = {
	title : `text-xl font-bold group-hover:text-orange-500`,
	body : `p-5 py-7 space-y-3 md:px-7`,
	location: `flex items-center text-green-200 space-x-1 font-semibold`,
	list: `list-disc list-inside marker:text-green-200 marker:text-xl`,
	button : `rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white font-bold py-2 px-7 border-2 border-orange-500`,
	item : `rounded-2xl shadow-xl group overflow-hidden border hover:border hover:border-orange-500`,
	image : `h-[20vh] object-cover w-full`,
	activePaginationButton : `bg-orange-500 text-white`,
	arrowBtn : `text-gray-500 hover:text-orange-500`,
	advert : `bg-gradient-to-r from-orange-500 to-orange-400 flex items-center container rounded-xl`,
	advertBtn : `rounded-xl text-orange-500 bg-white font-bold py-2 px-7`,
	advertRight : `flex flex-col justify-center flex-1 text-white items-start space-y-3 py-3 px-3`,
	advertRightTitle : `text-xl font-bold`,
	advertRightParagraph : `text-sm font-light`,
	sectionTitle : `text-xl text-orange-500 font-bold text-center`,
	sectionNavItem : `snap-center rounded  whitespace-nowrap hover:bg-orange-500 hover:text-white font-medium py-2 px-7 border border-orange-500`,
	sectionNavArrow : `text-orange-500 py-5 font-bold`

}

const Service = (props : any) => {

	const [data, setData ] = useState<any>({ selected : 0, isDescOpen : false, isContactOpen : false });
	const [details, setDetails] = useState<any>({});
	const [category, setCategory] = useState<number>(0);
	const [prevCategory, setPrevCategory] = useState<number>(0);

	const [currentPage, setCurrentPage] = useState<number>(0);

	const catNav = useRef<any>();

	 useEffect(() => {
    		
    	if(prevCategory < category)
	    		catNav.current.scrollLeft += (categories[category].title.length*8);
	    else 
	    		catNav.current.scrollLeft -= (categories[category].title.length*8);

	    setPrevCategory(category);
	 

	  },[category])

	 const filterCards = (data)  =>  {
	 	return category == 0 ? data : data.filter((item) => item.category_id === categories[category].id);
	 }
	 

	return (
		<>
		<Details details={details} isOpen={data.isDescOpen} setIsOpen={() => setData({...data, isDescOpen : !data.isDescOpen })} />
		<OpenContact isOpen={data.isContactOpen} setIsOpen={() => setData({...data, isContactOpen : !data.isContactOpen })} />

		<section className="py-12">
			<header className="container">
				<h1 className={styles.sectionTitle}>Conoce Comunidad Prima</h1>

				<div className="flex justify-center items-center space-x-3 py-7">
					<button 
							onClick={() => catNav.current.scrollLeft -= 150} 
							className={`${styles.sectionNavArrow}`}>
							<BsChevronLeft size={20} />
					</button>
					<div className='no-scrollbar overflow-x-auto flex items-center space-x-3 scroll-smooth snap-mandatory snap-x' ref={catNav}>
						{categories.map((item, index) => 
							<button 
								onClick={() => setCategory(index)}
								key={index} 
								className={`${styles.sectionNavItem} ${index == category ? styles.activePaginationButton : 'text-orange-500'}`}>
								{item.title}
							</button>
						)}
					</div>
					<button 
							onClick={() => catNav.current.scrollLeft += 150} 
							className={`${styles.sectionNavArrow}`}>
							<BsChevronRight size={20} />
					</button>
				</div>
			</header>
			<div className="container grid md:grid-cols-3 gap-5">
				{filterCards(Data).slice(currentPage*6).map((item,index) => index < 6 &&
					<div className={styles.item} key={index}>
						<img src={item.urlImageBackground} className={styles.image} />
						<section className={styles.body}>
							<header>
								<h1 className={styles.title}>{item.name}</h1>
								<div className={styles.location}>
									<MdLocationOn size={20}/> <span>{item.department}</span>
								</div>
							</header>
					
							<div className='italic' dangerouslySetInnerHTML={{__html:details.cardInfo}}/>							

							<button 
								onClick={() => {
									setData({...data, isDescOpen : !data.isDescOpen })
									setDetails(item)
								}}
								className={styles.button}>
								Ver detalle
							</button>
						</section>
					</div>
				)}
			</div>

			    <Pagination
	                setCurrentPage={(value : number) => setCurrentPage(value)}
	                total={filterCards(Data).length}
	                currentPage={currentPage} />

			<div className={styles.advert}>
				<div>
					<img src="/images/hero-bg.png" className="h-auto w-[100px] md:w-[200px] pl-2 pt-2" />
				</div>

				<div className={styles.advertRight}>
					<h2 className={styles.advertRightTitle}>Lanzamos la 5ta temporada de El Depa!</h2>
					<p className={styles.advertRightParagraph}>Acompaña a los chicos del #ElDepa en su convivencia mientras conocen más sobre las automático. Todo esto desde nuestra app. AFP.</p>
					<button 
						onClick={() => setData({...data, isContactOpen : !data.isContactOpen })}
						className={styles.advertBtn}>Conoce mais</button>
				</div>
			</div>

		</section>
		</>
	)
}

export default Service
import React from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const styles = {
  pagination : `flex justify-center items-center space-x-3 py-12`,
  paginationButton : `w-8 h-8 rounded flex items-center justify-center`,
  activePaginationButton : `bg-orange-500 text-white`,
  inactivePaginationButton : `bg-gray-100 hover:bg-orange-500 hover:text-white `,
  arrowBtn : `text-gray-500 hover:text-orange-500`,
}

const Pagination = ({ total, setCurrentPage, currentPage } : any) => {

  const pages = Math.ceil(total / 6);

  return (
        <div className={styles.pagination}>
            <button 
              onClick={() => setCurrentPage(currentPage == 0 ? 0 : --currentPage)} 
              className={`${styles.arrowBtn}`}>
              <BsChevronLeft size={20} />
            </button>
              {Array.from(Array(pages).keys()).map((item, index) =>
                  (<button 
                    key={index} 
                    onClick={() => setCurrentPage(item)} 
                    className={`${styles.paginationButton} ${item == currentPage ? styles.activePaginationButton : styles.inactivePaginationButton}`}>
                    {item + 1}
                  </button>))}
            <button 
              onClick={() => setCurrentPage(currentPage == pages - 1 ? currentPage : ++currentPage)} 
              className={`${styles.arrowBtn}`}>
              <BsChevronRight size={20} />
            </button>
      </div>
  )
}

export default Pagination

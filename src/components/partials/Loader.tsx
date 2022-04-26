import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading } : any) => {

	return (
		<div className={`modal-wrapper ${!loading && 'hide-modal'}`}>
			<div className={`modal-inner-wrapper after:bg-black`}>
				<div className={` relative z-[200]`}>
					<ClipLoader color="#fff" loading={loading}  size={150}  />
				</div>
			</div>
		</div>
	)

}

export default Loader
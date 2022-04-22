import React from 'react'
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const styles = {
	title : `text-xl font-bold text-orange-500`,
	wrapper : `container space-y-7`,
	form : `grid grid-cols-1 md:grid-cols-3 gap-5`,
	formHeader : `col-span-1 md:col-span-3 text-green-200 text-lg md:text-xl font-bold`,
	spanAll : `col-span-1 md:col-span-3`,
	submit : `rounded-lg px-4 py-2 text-base bg-orange-500 font-bold text-white flex items-center space-x-2`
}

const Contact = () => {
	return (
		<section className="py-7 rounded-3xl bg-white mr-5 md:mr-10 shadow-xl relative -top-12">
			<div className={styles.wrapper}>
				

                        <header className="space-y-3">
                                <h1 className={styles.title}>Tienda de Ropa Yanuy mi empredimiento?</h1>
                                <p>Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos</p>
                         </header>

				<form className={styles.form}>
					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group ">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>

					<div className="form-group col-start-1">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>


					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>


					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>


					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>


					<div className="form-group">
						<select className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<BsChevronDown />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea className="form-control" placeholder="Description" rows={5}></textarea>
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea className="form-control" placeholder="Description" rows={5}></textarea>
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Nombers" />
					</div>

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<input type="checkbox" className="accent-orange-500"  />
						<label>Accept los termisnxn</label>
					</div>

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<input type="checkbox" className="accent-orange-500"  />
						<label>Accept los termisnxn</label>
					</div>

					 <div className={`${styles.spanAll} flex justify-end items-center`}>
                            <button className={styles.submit}>
                                Register mi negocio
                          	</button>
                      </div>

				</form>
			</div>

		</section>	)
}

export default Contact

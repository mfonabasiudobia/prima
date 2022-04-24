import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import location from "ubigeo-peru";

const styles = {
	title : `text-xl font-bold text-orange-500`,
	wrapper : `container space-y-7`,
	form : `grid grid-cols-1 md:grid-cols-3 gap-5`,
	formHeader : `col-span-1 md:col-span-3 text-green-200 text-lg md:text-xl font-bold`,
	spanAll : `col-span-1 md:col-span-3`,
	submit : `rounded-lg px-4 py-2 text-base bg-orange-500 font-bold text-white flex items-center space-x-2`
}

const Contact = () => {

	useEffect(() => {
		// alert(JSON.stringify(location))
	},[])

	const url =  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

	const schema = yup.object().shape({
      ['item1'] : yup.string().required().max(50),
      ['item2'] : yup.string().required().max(50),
      ['item3'] : yup.string().required().max(50),
      ['item4'] : yup.string().required(),
      ['item5'] : yup.string().required().max(8),
      ['item6'] : yup.string().required().max(9),
      ['question'] : yup.boolean().required(),
      ['item7'] : yup.string().when(['question'], {
      	is : true,
      	then : yup.string().required("This field is required")
      }),
      ['item8'] : yup.string().required(),
      ['item9'] : yup.string().required(),
      ['item10'] : yup.string().required(),
      ['item11'] : yup.string().required(),
      ['item12'] : yup.string().required(),
      ['item13'] : yup.string().required(),
      ['item14'] : yup.string().required(),
      ['item15'] : yup.string().required(),
      ['item16'] : yup.string().required(),
      ['item17'] : yup.string().required(),
      ['item18'] : yup.string().required(),
      ['item19'] : yup.string().required(),
      ['item20'] : yup.string().required(),
      ['item21'] : yup.string().required(),
      ['item22'] : yup.string().required().max(2000),
      ['item23'] : yup.string().required().max(2000),
      ['item24'] : yup.string().required().matches(/^[0-9]+$/,"Must be only digits").length(9),
      ['email'] : yup.string().required().email(),
     })


      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(schema)
      });


      const handleForm = () => {

      }

	return (
		<section className="py-7 rounded-3xl bg-white mr-5 md:mr-10 shadow-xl relative -top-12">
			<div className={styles.wrapper}>
				

                        <header className="space-y-3">
                                <h1 className={styles.title}>Tienda de Ropa Yanuy mi empredimiento?</h1>
                                <p>Tu dinero acumulado sigue generando la rentabilidad Una alternativa diferente de ahorro e inversión, con objetivos</p>
                         </header>

				<form className={styles.form} onSubmit={handleSubmit(handleForm)}>
					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group">
						<input 
							{...register('item1')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item1']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item2')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item2']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item3')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item3']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item4')}
							className="form-control"
							 placeholder="Nombers">
							<option>Nombers</option>
						</select>
						 <p className="error">{errors['item3']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item5')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item5']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item6')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item6']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('email')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['email']?.message}</p>
					</div>

					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>	

					<div  className={`${styles.spanAll} flex items-center space-x-2`}>
						<span>dinero acumulado sigue?</span> 
						<label>Yes</label>
						<input type="radio" value={1} {...register('question')} className="accent-orange-500" name="question" />
						<label>No</label> 
						<input type="radio" value={0} {...register('question')} className="accent-orange-500" name="question" /> 
					</div>

					<div className="form-group ">
						<BsChevronDown />
						<select {...register('item7')} className="form-control" placeholder="Nombers">
							<option value="">Nombers</option>
						</select>
						 <p className="error">{errors['item7']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item8')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item8']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item9')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item9']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item10')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item10']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item11')}
							className="form-control" 
							placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<p className="error">{errors['item11']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item12')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item12']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item13')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item13']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item14')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						 <p className="error">{errors['item14']?.message}</p>
					</div>


					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group">
						<input 
							{...register('item15')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						<p className="error">{errors['item15']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item16')}
							className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<p className="error">{errors['item16']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item17')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
						<p className="error">{errors['item17']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item18')}
							className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<p className="error">{errors['item18']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item19')}
							className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<p className="error">{errors['item19']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('item20')}
							className="form-control" placeholder="Nombers">
							<option>Nombers</option>
						</select>
						<p className="error">{errors['item20']?.message}</p>
					</div>

					<div className="form-group md:col-span-2">
						<input type="text" {...register('item21')} className="form-control" placeholder="Nombers" />
						<p className="error">{errors['item21']?.message}</p>
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea 
						{...register('item22')}
						className="form-control" placeholder="Description" rows={5}></textarea>
						<p className="error">{errors['item22']?.message}</p>
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea 
							{...register('item23')}
							className="form-control" placeholder="Description" rows={5}></textarea>
							<p className="error">{errors['item23']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('item24')}
							type="text" 
							className="form-control" 
							placeholder="Nombers" />
							<p className="error">{errors['item24']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							type="text" 
							className="form-control" 
							placeholder="URL Instagram" />
					</div>

					<div className="form-group">
						<input 
							type="text" 
							className="form-control" 
							placeholder="URL Facebook" />
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
                            <button type="submit" className={styles.submit}>
                                Register mi negocio
                          	</button>
                      </div>

				</form>
			</div>

		</section>	)
}

export default Contact

import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import location from "ubigeo-peru";

const styles = {
	title : `text-xl font-bold text-orange-500`,
	orangeLink : 'text-orange',
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
      ['affiliateName'] : yup.string().required().max(50),
      ['affiliateLastName'] : yup.string().required().max(50),
      ['affiliateMothersLastName'] : yup.string().required().max(50),
      ['affiliateDocumentType'] : yup.string().required(),
      ['affiliateDocumentNumber'] : yup.string().required().max(8),
      ['affiliatePhone'] : yup.string().required().max(9),
      ['businessOwner'] : yup.boolean().required(),
      ['relationshipMember'] : yup.string().when(['businessOwner'], {
      	is : true,
      	then : yup.string().required("This field is required")
      }),
      ['ownerName'] : yup.string().required(),
      ['ownerLastName'] : yup.string().required(),
      ['ownerMothersLastName'] : yup.string().required(),
      ['ownerDocumentType'] : yup.string().required(),
      ['ownerDocumentNumber'] : yup.string().required(),
      ['ownerPhone'] : yup.string().required(),
      ['ownerEmail'] : yup.string().required(),
      ['businessName'] : yup.string().required(),
      ['category'] : yup.string().required(),
      ['documentNumber'] : yup.string().required(),
      ['department'] : yup.string().required(),
      ['province'] : yup.string().required(),
      ['district'] : yup.string().required(),
      ['address'] : yup.string().required(),
      ['shortDescription'] : yup.string().required().max(2000),
      ['mainProducts'] : yup.string().required().max(2000),
      ['phone'] : yup.string().required().matches(/^[0-9]+$/,"Must be only digits").length(9),
      ['affiliateEmail'] : yup.string().required().email(),
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
                                <h1 className={styles.title}>Regístrate en Comunidad Prima</h1>
                                <p>Ingresa los datos solicitados y acepta nuestros términos y condiciones:</p>
                         </header>

				<form className={styles.form} onSubmit={handleSubmit(handleForm)}>
					<div className={styles.formHeader}>
						Tu dinero acumulado sigue
					</div>

					<div className="form-group">
						<input 
							{...register('affiliateName')}
							type="text" 
							className="form-control" 
							placeholder="Nombres" />
						 <p className="error">{errors['affiliateName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliateLastName')}
							type="text" 
							className="form-control" 
							placeholder="Apellido Paterno" />
						 <p className="error">{errors['affiliateLastName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliateMothersLastName')}
							type="text" 
							className="form-control" 
							placeholder="Apellido Materno" />
						 <p className="error">{errors['affiliateMothersLastName']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('affiliateDocumentType')}
							className="form-control"
							>
								 <option hidden selected>Tipo de Documento</option>
							<option value="1">D.N.I</option>
							<option value="2">Pasaporte</option>
							<option value="3">Carnet de extranjería</option>
							<option value="4">Carnet autorización ministerio de trabajo y promoción social</option>
							<option value="5">Carnet del permiso temporal de permanencia</option>
							<option value="6">Carnet de identidad de extranjero</option>
							<option value="7">Carnet de solicitante de refugio</option>
							</select>
						 <p className="error">{errors['affiliateMothersLastName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliateDocumentNumber')}
							type="text" 
							className="form-control" 
							placeholder="N° Documento" />
						 <p className="error">{errors['affiliateDocumentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliatePhone')}
							type="text" 
							className="form-control" 
							placeholder="Celular" />
						 <p className="error">{errors['affiliatePhone']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliateEmail')}
							type="text" 
							className="form-control" 
							placeholder="Email registrado" />
						 <p className="error">{errors['affiliateEmail']?.message}</p>
					</div>

					<div className={styles.formHeader}>
						Información del titular del negocio 
					</div>	

					<div  className={`${styles.spanAll} flex items-center space-x-2`}>
						<span>¿Es propietario del negocio?</span> 
						<label>Si</label>
						<input type="radio" value={1} {...register('businessOwner')} className="accent-orange-500" name="question" />
						<label>No</label> 
						<input type="radio" value={0} {...register('businessOwner')} className="accent-orange-500" name="question" /> 
					</div>

					<div className="form-group ">
						<BsChevronDown />
						<select {...register('relationshipMember')} className="form-control" >
						<option hidden selected>Vínculo con el afiliado</option>
							<option value="1">Cónyuge</option>
							<option value="1">Hijo (a)</option>
							<option value="1">Hermano (a)</option>
							<option value="1">Padre / Madr</option>
						</select>
						 <p className="error">{errors['relationshipMember']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerName')}
							type="text" 
							className="form-control" 
							placeholder="Nombres" />
						 <p className="error">{errors['ownerName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerLastName')}
							type="text" 
							className="form-control" 
							placeholder="Apellido Paterno" />
						 <p className="error">{errors['ownerLastName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerMothersLastName')}
							type="text" 
							className="form-control" 
							placeholder="Apellido Materno" />
						 <p className="error">{errors['ownerMothersLastName']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('ownerDocumentType')}
							className="form-control">
								<option hidden selected>Tipo de Documento</option>
							<option value="1">D.N.I</option>
							<option value="2">Pasaporte</option>
							<option value="3">Carnet de extranjería</option>
							<option value="4">Carnet autorización ministerio de trabajo y promoción social</option>
							<option value="5">Carnet del permiso temporal de permanencia</option>
							<option value="6">Carnet de identidad de extranjero</option>
							<option value="7">Carnet de solicitante de refugio</option>
						</select>
						<p className="error">{errors['ownerDocumentType']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerDocumentNumber')}
							type="text" 
							className="form-control" 
							placeholder="N° Documento" />
						 <p className="error">{errors['ownerDocumentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerPhone')}
							type="text" 
							className="form-control" 
							placeholder="Celular" />
						 <p className="error">{errors['ownerPhone']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerEmail')}
							type="text" 
							className="form-control" 
							placeholder="Email" />
						 <p className="error">{errors['ownerEmail']?.message}</p>
					</div>


					<div className={styles.formHeader}>
					Información del negocio
					</div>

					<div className="form-group">
						<input 
							{...register('businessName')}
							type="text" 
							className="form-control" 
							placeholder="Nombre del negocio" />
						<p className="error">{errors['businessName']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('category')}
							className="form-control" >
								<option hidden selected>Categoría</option>
							<option>Nombers</option>
							<option value="1">Calzado</option>
							<option value="2">Comidas y postres</option>
							<option value="3">Decoraciones, fiestas y toldos</option>
							<option value="4">Florerías</option>
							<option value="5">Joyería y artesanía</option>
							<option value="6">Maquillaje y peluquería</option>
							<option value="7">Moda, satrería y accesorios</option>
							<option value="8">Movilidad</option>
							<option value="9">Muebles</option>
							<option value="10">Panaderías y cafetería</option>
							<option value="11">Servicios para el hogar</option>
							<option value="12">Servicios Profesionales</option>
							<option value="13">Terapia física y de lenguaje</option>
							<option value="14">Turismo</option>
							<option value="15">Tutorías y clases</option>
							<option value="16">Otros</option>			
							</select>
						<p className="error">{errors['category']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('documentNumber')}
							type="text" 
							className="form-control" 
							placeholder="N° RUC/RUS" />
						<p className="error">{errors['documentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('department')}
							className="form-control">
							<option>Departamento</option>
						</select>
						<p className="error">{errors['department']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('province')}
							className="form-control">
							<option>Provincia</option>
						</select>
						<p className="error">{errors['province']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('district')}
							className="form-control" >
							<option>Distrito</option>
						</select>
						<p className="error">{errors['district']?.message}</p>
					</div>

					<div className="form-group md:col-span-2">
						<input type="text" {...register('address')} className="form-control" placeholder="Direción" />
						<p className="error">{errors['address']?.message}</p>
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea 
						{...register('shortDescription')}
						className="form-control" placeholder="Breve descripción" rows={5}></textarea>
						<p className="error">{errors['shortDescription']?.message}</p>
					</div>

					<div className={`${styles.spanAll}`}>
						<textarea 
							{...register('mainProducts')}
							className="form-control" placeholder="Principales productos" rows={5}></textarea>
							<p className="error">{errors['mainProducts']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('phone')}
							type="text" 
							className="form-control" 
							placeholder="Celular o Whatsapp" />
							<p className="error">{errors['phone']?.message}</p>
					</div>

					<div className="form-group">
						<input 
						{...register('urlInstagram')}
							type="text" 
							className="form-control" 
							placeholder="URL Instagram" />
					</div>

					<div className="form-group">
						<input 
						{...register('urlFacebook')}
							type="text" 
							className="form-control" 
							placeholder="URL Facebook" />
					</div>

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<input type="checkbox" className="accent-orange-500"  />
						<label>Acepto los <a href="#">términos y condiciones</a></label>
					</div>

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<input type="checkbox" className="accent-orange-500"  />
						<label>Acepto los <a href="#" className="orange-">términos en la Política de Privacidad para el Tratamiento de Datos Personales</a>.</label>
					</div>

					 <div className={`${styles.spanAll} flex justify-end items-center`}>
                            <button type="submit" className={styles.submit}>
                                Registrar mi negocio
                          	</button>
                      </div>

				</form>
			</div>

		</section>	)
}

export default Contact

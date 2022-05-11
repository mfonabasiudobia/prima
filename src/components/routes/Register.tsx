import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import location from "ubigeo-peru";
import axios from "../../utils/axios";
import Loader from "../partials/Loader";
import Swal from 'sweetalert2'

const styles = {
	title : `text-xl font-bold text-orange-500`,
	orangeLink : 'text-orange',
	wrapper : `container space-y-7 pt-10 text-baseEx text-grey-500 mb-20`,
	form : `grid grid-cols-1 md:grid-cols-3 gap-5`,
	formHeader : `col-span-1 md:col-span-3 text-green-200 text-baseEx md:text-lg mt-4`,
	spanAll : `col-span-1 md:col-span-3`,
	submit : `rounded-lg px-4 py-2 text-baseEx bg-orange-500 font-bold text-white flex items-center space-x-2`
}

const Register = () => {

	const [locationData, setLocationData] = useState<any>({ departments : [], province : [], district : []});
	const [loading, setLoading] = useState<boolean>(false);
	const { departments, province, district } = locationData;

	const schema = yup.object().shape({
      ['affiliateName'] : yup.string().required("No ingresaste nombbre").max(50),
      ['affiliateLastName'] : yup.string().required("No ingresaste apellido pterno").max(50),
      ['affiliateMothersLastName'] : yup.string().required("No ingresaste apellido materno").max(50),
      ['affiliateDocumentType'] : yup.string().required("Tipo de documento es obligatorio"),
      ['affiliateDocumentNumber'] : yup.string().required("Documento es obligatorio").matches(/^[0-9]+$/,"Solo ingresa números").length(8),
      ['affiliatePhone'] : yup.string().required("Teléfono es obligatorio").matches(/^[0-9]+$/,"Solo ingresa números").length(9),
      ['businessOwner'] : yup.boolean().required(),
      ['relationshipMember'] : yup.string().when(['businessOwner'], {
      	is : true,
      	then : yup.string().required("Es obligatorio")
      }),
      ['acceptTerms'] : yup.bool().oneOf([true], 'Es necesario aceptar los Términos y condiciones'),
      ['privacyPolicy'] : yup.bool().oneOf([true], 'Es necesario aceptar la política de privacidad'),
      ['ownerName'] : yup.string().required("Nombre del titular es necesario"),
      ['ownerLastName'] : yup.string().required("Apellido Paterno del titular es necesario"),
      ['ownerMothersLastName'] : yup.string().required("Apellido materno es necesario"),
      ['ownerDocumentType'] : yup.string().required("Tipo de documento es necesario"),
      ['ownerDocumentNumber'] : yup.string().required("Número de documento es necesario"),
      ['ownerPhone'] : yup.string().required("Teléfono es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(9),
      ['ownerEmail'] : yup.string().required("Email es necesario").email("Email incorrecto"),
      ['businessName'] : yup.string().required("Nombre del negocio es necesario"),
      ['category'] : yup.string().required("Categoría es necesario"),
      ['documentNumber'] : yup.string().required("RUC es necesario").matches(/^[0-9]+$/,"Solo ingresa números"),
      ['department'] : yup.string().required("Departamento es necesario"),
      ['province'] : yup.string().required("Provincia es necesaria"),
      ['district'] : yup.string().required("Distrito es necesario"),
      ['address'] : yup.string().required("Dirección es necesaria"),
      ['shortDescription'] : yup.string().required("Debes agregar una descripción del negocio").max(2000),
      ['mainProducts'] : yup.string().required("Debes indicar los productos que vendes").max(2000),
      ['phone'] : yup.string().required("Teléfono es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(9),
      ['affiliateEmail'] : yup.string().required("Email es necesario").email("Email incorrecto"),
     })

	 const { register, handleSubmit, getValues, reset, setValue, control, formState: { errors } } = useForm({
        resolver : yupResolver(schema),
        mode : 'all',
        reValidateMode : 'onChange'
      });

	 const watchDepartment = useWatch({ control, name : 'department'});
	 const watchProvince = useWatch({ control, name : 'province'});
	 const watchBusinessOwner = useWatch({ control, name : 'businessOwner'});
	 const { reniec } : any = location;

	 useEffect(() => {

		let setDepartments : any[] = [];

		for(let i = 0;i < reniec.length - 1; i++) {

				if(reniec[i]['distrito'] == '00' && reniec[i]['provincia'] == '00')
										setDepartments.push(reniec[i]);
				
		}

		 setLocationData({...locationData, departments : setDepartments})

	},[])

	 useEffect(() => {

	 	 if(departments.length > 0){
		 	 	let province : any[] = [];

				for(let i = 0;i < reniec.length - 1; i++) {

						if(reniec[i]['departamento'] == getValues('department') && reniec[i]['distrito'] == '00' && reniec[i]['provincia'] != '00')
																			province.push(reniec[i]);						
				}

				 setLocationData({...locationData, province })
	 	 }
	 		
	 	
	},[watchDepartment])


	 useEffect(() => {

	 	 if(province.length > 0){
		 	 	let district : any[] = [];

				for(let i = 0;i < reniec.length - 1; i++) {

				if(reniec[i]['departamento'] == getValues('department') && reniec[i]['provincia'] == getValues('province')  && reniec[i]['distrito'] != '00')
					district.push(reniec[i]);						
				}

				 setLocationData({...locationData, district })
	 	 }
	 		
	 	
	},[watchProvince])


	 useEffect(() => {

	 if(watchBusinessOwner == 1){
		 	//Auto Update userInfomation if yes
		 	let affilaiteInfo = ["affiliateName","affiliateLastName","affiliateMothersLastName","affiliateDocumentType","affiliateDocumentNumber","affiliatePhone","affiliateEmail"];
		 	let ownerInfo = ["ownerName","ownerLastName","ownerMothersLastName","ownerDocumentType","ownerDocumentNumber","ownerPhone","ownerEmail"];

		 	affilaiteInfo.map((item, index) => setValue(ownerInfo[index], getValues(item)));

		 	setValue('relationshipMember', 0);

		 	

	 }

	 },[watchBusinessOwner])
	 


      const handleForm = async (data, e) => {

      		setLoading(!loading)
  			axios({
  				url: "comunidad-prima/affiliate-prima",
  				method: 'POST',
  				data : data 
  			})
  			.then((res) => { 
  					setLoading(false)
 
  					e.target.reset()

  					Swal.fire({
					  title: 'Registro Exitoso', 
					  icon: 'success',
					  confirmButtonText: 'Regresar',
					  customClass: {
						confirmButton: 'confirmForm'
						}
					})	

  			})
  			.catch((e) => {

  					setLoading(false)

  					Swal.fire({
					  title: 'Opps!',
					  text : 'Ocurrió un error',
					  icon: 'error',
					  confirmButtonText: 'Cancelar',
					  customClass: {
						confirmButton: 'confirmForm'
						}
					})
					
  			});

      }


      const preventInvalidCharacters = (e) => {
      		if(/^[0-9]/.test(e.key) == false){
      				e.preventDefault();
      		}
      }

	return (
		<>
		<Loader loading={loading} />
		<section className="bcontainer">
			<div className={styles.wrapper}>
				

                        <header className="space-y-3">
                                <h1 className={styles.title}>Regístrate en Comunidad Prima</h1>
                                <p>Ingresa los datos solicitados y acepta nuestros términos y condiciones:</p>
                         </header>

				<form className={styles.form} onSubmit={handleSubmit(handleForm)}>
					<h3 className={styles.formHeader}>
						Información del Afiliado</h3>

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
							onKeyPress={preventInvalidCharacters}
							className="form-control" 
							placeholder="N° Documento" />
						 <p className="error">{errors['affiliateDocumentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliatePhone')}
							type="text" 
							onKeyPress={preventInvalidCharacters}
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

					<h3 className={styles.formHeader}>
						Información del titular del negocio 
					</h3>	

					<div  className={`${styles.spanAll} flex items-center space-x-2`}>
						<span>¿Es propietario del negocio?</span> 
						<label htmlFor='yes'>Si</label>
						<input type="radio" id='yes' defaultValue={1} {...register('businessOwner')} className="accent-orange-500" />
						<label htmlFor='no'>No</label> 
						<input type="radio" id='no' defaultValue={0} {...register('businessOwner')} className="accent-orange-500" /> 
					</div>

					<div className="form-group ">
						<BsChevronDown />
						<select {...register('relationshipMember')} className="form-control" >
						<option hidden selected>Vínculo con el afiliado</option>
							<option value="0">Titular</option>
							<option value="1">Cónyuge</option>
							<option value="2">Hijo (a)</option>
							<option value="3">Hermano (a)</option>
							<option value="4">Padre / Madr</option>
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
							onKeyPress={preventInvalidCharacters}
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


					<h3 className={styles.formHeader}>
					Información del negocio
					</h3>

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
							onKeyPress={preventInvalidCharacters} 
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
							{departments.map((item, index) => <option key={index} value={item['departamento']}>{item['nombre']}</option>)}
						</select>
						<p className="error">{errors['department']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('province')}
							className="form-control">
							{province.map((item, index) => <option key={index} value={item['provincia']}>{item['nombre']}</option>)}
							<option>Provincia</option>
						</select>
						<p className="error">{errors['province']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('district')}
							className="form-control" >
							{district.map((item, index) => <option key={index} value={item['distrito']}>{item['nombre']}</option>)}
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
							onKeyPress={preventInvalidCharacters} 
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
						<input type="checkbox" {...register('acceptTerms')} className="accent-orange-500"  />
						<label>Acepto los <a href="#">términos y condiciones</a></label>
						<p className="error">{errors['acceptTerms']?.message}</p>
					</div>

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<input type="checkbox" {...register('privacyPolicy')} className="accent-orange-500"  />
						<label>Acepto los <a href="#" className="orange-">términos en la Política de Privacidad para el Tratamiento de Datos Personales</a>.</label>
						<p className="error">{errors['privacyPolicy']?.message}</p>
					</div>

					 <div className={`${styles.spanAll} flex justify-end items-center`}>
                            <button type="submit" className={styles.submit}>
                                Registrar mi negocio
                          	</button>
                      </div>

				</form>
			</div>

		</section>
		</>	)
}

export default Register

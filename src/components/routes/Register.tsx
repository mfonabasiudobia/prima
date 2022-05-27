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
import ReCAPTCHA from "react-google-recaptcha";

const styles = {
	title : `text-xl font-bold text-orange-500`,
	subTitle : `text-lg font-bold text-grey-500`,
	orangeLink : 'text-orange',
	wrapper : `container space-y-7 pt-10 text-baseEx text-grey-500 mb-20`,
	form : `grid grid-cols-1 md:grid-cols-3 gap-5`,
	formHeader : `col-span-1 md:col-span-3 text-green-200 text-baseEx md:text-lg mt-4`,
	spanAll : `col-span-1 md:col-span-3`,
	submit : `rounded-lg px-4 py-2 text-baseEx bg-orange-500 font-bold text-white flex items-center space-x-2`,
	btnBack : `rounded-lg px-4 py-2 text-baseEx bg-orange-500 font-bold text-white flex items-center space-x-2 inline-block`,
	contBack : 'inline-block '
}

const Register = () => {

	const [locationData, setLocationData] = useState<any>({ departments : [], province : [], district : []});
	const [locationName, setLocationName] = useState<any>({ department : "", province : "", district : ""});
	const [loading, setLoading] = useState<boolean>(false);
	const [recaptchaStatus, setRecaptchaStatus] = useState<boolean>(false);
	const [recaptcha, setRecaptcha] = useState<any>("");
	const { departments, province, district } = locationData;

	const schema = yup.object().shape({
      ['affiliateName'] : yup.string().required("Debes ingresar tu nombre").max(50,'Ingresa un nombre válido'),
      ['affiliateLastName'] : yup.string().required("Debes ingresar apellido paterno").max(50,'Ingresa un apellido válido'),
      ['affiliateMothersLastName'] : yup.string().required("Debes ingresar apellido materno").max(50,'Ingresa un apellido válido'),
      ['affiliateDocumentType'] : yup.string().required("Tipo de documento es obligatorio"),
      ['affiliateDocumentNumber'] : yup.string().required("Documento es obligatorio").matches(/^[0-9]+$/,"Solo ingresa números").length(8,"Debe tener solo 8 números"),
      ['affiliatePhone'] : yup.string().required("Teléfono es obligatorio").matches(/^[0-9]+$/,"Solo ingresa números").length(9,"Debe tener solo 9 números"),
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
      ['ownerDocumentNumber'] : yup.string().required("Número de documento es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(8,"Debe tener solo 8 números"),
      ['ownerPhone'] : yup.string().required("Teléfono es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(9,"Debe tener solo 9 números"),
      ['ownerEmail'] : yup.string().required("Email es necesario").email("Email incorrecto"),
      ['businessName'] : yup.string().required("Nombre del negocio es necesario"),
      ['category'] : yup.string().required("Categoría es necesario"),
      ['documentNumber'] : yup.string().required("RUC es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(11,"Debe tener solo 11 números"),
      ['department'] : yup.string().required("Departamento es necesario"),
      ['province'] : yup.string().required("Provincia es necesaria"),
      ['district'] : yup.string().required("Distrito es necesario"),
      ['address'] : yup.string().required("Dirección es necesaria"),
      ['shortDescription'] : yup.string().required("Debes agregar una descripción del negocio").max(2000,"Debe tener como máximo 2000 caracteres"),
      ['product1'] : yup.string().required("Producto is required").max(80,"Debe tener como máximo 80 caracteres"),
      ['product2'] : yup.string().max(80,"Debe tener como máximo 80 caracteres"),
      ['product3'] : yup.string().max(80,"Debe tener como máximo 80 caracteres"),
      // ['mainProducts'] : yup.string().required("Debes indicar los productos que vendes").max(2000,"Debe tener como máximo 2000 caracteres"),
      ['phone'] : yup.string().required("Teléfono es necesario").matches(/^[0-9]+$/,"Solo ingresa números").length(9,"Debe tener solo 9 números"),
      ['affiliateEmail'] : yup.string().required("Email es necesario").email("Email incorrecto"),
     })

	 const { register, handleSubmit, getValues, reset, setValue, control, formState: { errors } } = useForm({
        resolver : yupResolver(schema),
        mode : 'all',
        reValidateMode : 'onChange'
      });

	 const watchDepartment = useWatch({ control, name : 'department'});
	 const watchProvince = useWatch({ control, name : 'province'});
	 const watchDistrict = useWatch({ control, name : 'district'});
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

				if(reniec[i]['departamento'] == getValues('department') && reniec[i]['distrito'] == '00' && reniec[i]['provincia'] == '00')
							setLocationName({...locationName, department : reniec[i]['nombre']});
				}

				 province = province.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
				 setLocationData({...locationData, province })
	 	 }
	 		
	 	
	},[watchDepartment])


	 useEffect(() => {

	 	 if(province.length > 0){
		 	 	let district : any[] = [];

				for(let i = 0;i < reniec.length - 1; i++) {

				if(reniec[i]['departamento'] == getValues('department') && reniec[i]['provincia'] == getValues('province')  && reniec[i]['distrito'] != '00')
					district.push(reniec[i]);	

				if(reniec[i]['departamento'] == getValues('department') && reniec[i]['provincia'] == getValues('province') && reniec[i]['distrito'] == '00')
					setLocationName({...locationName, province : reniec[i]['nombre']});
				
				}

				 district = district.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
				 setLocationData({...locationData, district })
	 	 }
	 		
	 	
	},[watchProvince])


	   useEffect(() => {

	 	 if(district.length > 0){

				for(let i = 0;i < reniec.length - 1; i++) {


				if(reniec[i]['departamento'] == getValues('department') && reniec[i]['provincia'] == getValues('province') && reniec[i]['distrito'] == getValues('district'))
					setLocationName({...locationName, district : reniec[i]['nombre']});
				
				}
	 	 }


	},[watchDistrict])

	 useEffect(() => {


		 	//Auto Update userInfomation if yes
		 	let affilaiteInfo = ["affiliateName","affiliateLastName","affiliateMothersLastName","affiliateDocumentType","affiliateDocumentNumber","affiliatePhone","affiliateEmail"];
		 	let ownerInfo = ["ownerName","ownerLastName","ownerMothersLastName","ownerDocumentType","ownerDocumentNumber","ownerPhone","ownerEmail"];

		 	affilaiteInfo.map((item, index) => setValue(ownerInfo[index],watchBusinessOwner == 1 ? getValues(item) : ''));

		 	setValue('relationshipMember', watchBusinessOwner == 1 ? 0 : "");

		 	

	 },[watchBusinessOwner])
	 

      const handleForm = async (data, e) => {
      		if(!recaptchaStatus) return; //dont execute if not verify

      		setLoading(!loading)
  			axios({
  				url: "bff-formulario-comunidad/affiliate-prima",
  				method: 'POST',
  				data : {...data, mainProducts : `${getValues('product1')} \n ${getValues('product2')} \n ${getValues('product3')}`, department : locationName.department, district : locationName.district, province : locationName.province },
  				headers : {
  					"g-recaptcha-response" : recaptcha
  				}
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


      const preventInvalidCharacters = (e, name, length) => {

      		if(e.key != 'Backspace'){
      				var str = e.target.value;

      				setValue(name,str.slice(0,length).replace(/[^0-9]+$/g,""));

      		}

      }


      const preventMaxChar = (e, name, length) => {
      		var str = e.target.value;
      		setValue(name,str.slice(0, length));
      }


      const handleRecaptcha = (value) => {

      		if(value != undefined){
				setRecaptchaStatus(true)
				setRecaptcha(value);
      		}else{
      			setRecaptchaStatus(false)
      		}
      }

	return (
		<>
		<Loader loading={loading} />
		<section className="bcontainer">
			<div className={styles.wrapper}>
				<span className={styles.contBack}><a href='/' className={styles.btnBack}>Regresar</a></span>
				

                        <header className="space-y-3">
                                <h1 className={styles.title}>Regístrate en Comunidad Prima</h1>
                                <p>Ingresa los datos solicitados y acepta nuestros términos y condiciones:</p>
								<div className="listCard">
									<ul>
								<li>Recuerda que solo los afiliados a Prima pueden hacer el registro.</li>
								<li>Sólo puedes registrar a tus familiares directos (Padres, Cónyuge, Hijos y Hermanos) siempre y cuando sean mayores de edad.</li>
								<li>El negocio debe ser formal debes tener RUC|RUS.</li>
</ul></div>
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
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'affiliateDocumentNumber', 8)}
							className="form-control" 
							placeholder="N° Documento" />
						 <p className="error">{errors['affiliateDocumentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('affiliatePhone')}
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'affiliatePhone', 9)}
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
						<select {...register('relationshipMember')} 
						className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
						disabled={getValues('businessOwner') == 1 ? true : false}>
						<option hidden selected value="">Vínculo con el afiliado</option>
							<option value="0" className={`${getValues('businessOwner') == 0 && 'hidden'}`}>Titular</option>
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
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false}
							placeholder="Nombres" />
						 <p className="error">{errors['ownerName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerLastName')}
							type="text" 
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false}
							placeholder="Apellido Paterno" />
						 <p className="error">{errors['ownerLastName']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerMothersLastName')}
							type="text" 
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false}
							placeholder="Apellido Materno" />
						 <p className="error">{errors['ownerMothersLastName']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('ownerDocumentType')}
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false}
							>
								<option hidden selected value="">Tipo de Documento</option>
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
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'ownerDocumentNumber', 8)}
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false} 
							placeholder="N° Documento" />
						 <p className="error">{errors['ownerDocumentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerPhone')}
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'ownerPhone', 9)}
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false}
							placeholder="Celular" />
						 <p className="error">{errors['ownerPhone']?.message}</p>
					</div>

					<div className="form-group">
						<input 
							{...register('ownerEmail')}
							type="text" 
							className={`form-control ${getValues('businessOwner') == 1 ? 'cursor-not-allowed' : ''}`} 
							disabled={getValues('businessOwner') == 1 ? true : false} 
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
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'documentNumber', 11)} 
							className="form-control" 
							placeholder="N° RUC/RUS" />
						<p className="error">{errors['documentNumber']?.message}</p>
					</div>

					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('department')}
							className="form-control">
							<option hidden selected>Departamento</option>
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
							<option hidden selected>Provincia</option>
						</select>
						<p className="error">{errors['province']?.message}</p>
					</div>


					<div className="form-group">
						<BsChevronDown />
						<select 
							{...register('district')}
							className="form-control" >
							{district.map((item, index) => <option key={index} value={item['distrito']}>{item['nombre']}</option>)}
							<option hidden selected>Distrito</option>
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

					<h4 className={styles.subTitle}>
					Productos Destacados
					</h4>
					<div className="form-group md:col-span-3">
						<input type="text" 
							onKeyUp={(e) => preventMaxChar(e,'product1', 80)} 
							{...register('product1')} className="form-control" placeholder="Producto 1" />
						<p className="error">{errors['product1']?.message}</p>
					</div>
					<div className="form-group md:col-span-3">
						<input type="text" 
							onKeyUp={(e) => preventMaxChar(e,'product2', 80)} 
							{...register('product2')} className="form-control" placeholder="Producto 2" />
						<p className="error">{errors['product2']?.message}</p>
					</div>
					<div className="form-group md:col-span-3">
						<input type="text" 
							onKeyUp={(e) => preventMaxChar(e,'product3', 80)} 
							{...register('product3')} className="form-control" placeholder="Producto 3" />
						<p className="error">{errors['product3']?.message}</p>
					</div>
					

					<div className="form-group">
						<input 
							{...register('phone')}
							type="number" 
							onKeyUp={(e) => preventInvalidCharacters(e,'phone', 9)} 
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

					<div className={`${styles.spanAll} flex items-center space-x-2`}>
						<ReCAPTCHA
						    sitekey="6LemwRMgAAAAAOBYI3XepKMkuCF5mgjqxsdFbrym"
						    onChange={handleRecaptcha}
						    onExpired={handleRecaptcha}
						    onErrored={handleRecaptcha}
						  />
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

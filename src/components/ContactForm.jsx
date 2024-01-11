import React, { useEffect, useState } from "react";
import { useForm, Controller} from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

    const [countries, setCountries] = useState();

    const {
        register, 
        handleSubmit,
        formState: { errors },
        control
    } = useForm();



    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                const countries = data.map(obj =>{
                    return obj.name.common
                });
                setCountries(countries)
            } catch (error) {
                console.error('errror fetching data:', error);
            }
        };

        fetchData();
    }, [])

  return (
    <section id='contact' className="relative h-screen">



        <div className=' absolute inset-0 mt-200 flex justify-center items-center'>



            <form className='p-20 grid grid-cols-2 gap-2 backdrop-blur-md bg-opacity-30 bg-white rounded-3xl' onSubmit={handleSubmit((data)=> console.log(data))}>
                <h1 className=" col-span-2 text-white text-2xl">Envíe su consulta</h1>
                <div className='col-span-2 ' >
                    <label className='text-white p-2'>Objetivo</label>
                    <textarea  className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full" {...register('objective', {required: 'En que podemos ayudarle!'})}/>
                    {errors.objective && <p className="  text-yellow-500 p-1">{errors.objective.message}</p>}
                </div>

                <div className='col-span-1 p-1'>
                    <label className='text-white p-2'>Nombre</label>
                    <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...register('firstName',{required: 'Ingrese su nombre'})}/>
                    { errors.firstName && <p className=" text-yellow-500 p-1">{errors.firstName.message}</p>}
                </div>
                <div className='col-span-1 p-1'>
                    <label className='text-white p-2'>Apellido</label>
                    <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 " {...register('lastName',{required: 'Ingrese su apellido'})}/>
                    { errors.lastName && <p className=" text-yellow-500 p-1">{errors.lastName.message}</p>}
                </div>

                <div className='col-span-2 '>
                    <label className='text-white p-2'>Email</label>
                    <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...register('email',{required: 'Ingrese un correo',
                    validate: (value) => {
                            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                            return emailRegex.test(value) || 'Correo electrónico inválido'
                    }})}/>
                    { errors.email && <p className=" text-yellow-500 p-1">{errors.email.message}</p>}
                </div>

                <div className='col-span-2  max-h-20 overflow-y-auto'>
                    <label className='text-white p-2'>Pais</label>
                    <Controller
                        name='country'
                        control={control}
                        defaultValue={'Seleccione un pais'}
                        render={({ field})=> ( 
                            
                            <select {...field} className=" block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option className="p-2" value={null}>Seleccione un pais</option>
                                {
                                    countries?.sort().map(obj => {
                                        return <option className="p-2" value={obj}>{obj}</option>
                                    })
                                }
                            </select>
                        )}
                        >

                    </Controller>
                    {errors.country && <p className=" text-yellow-500 p-1">{errors.country.message}</p>}
                </div>

                {/* boletines y recapchat */}
                 <ReCAPTCHA className="col-span-2" sitekey="6LeAFkApAAAAAHmU2GcoKnvT8mK2MuCRiaxc0ajU"/> 


                <input className=' m-4 p-2 bg-[#4A6CF7] hover:bg-blue-500/60 text-white duration-300 ease-in-out relative left-2/4 rounded-lg' type="submit" value={'Contactar'} />
            </form>
        </div>
        
    </section>
    );
};

export default ContactForm;

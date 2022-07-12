import React from 'react'
import { Formik, Form, Field } from "formik";
import * as yup from 'yup'
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {

    const navigate = useNavigate()

    const nuevoClienteSchema = yup.object().shape({
        nombre: yup.string()
            .required("El nombre es obligatorio")
            .min(3, "El nombre es muy corto")
            .max(20, "El nombre es muy largo"),
        empresa: yup.string()
            .required("La empresa es obligatoria"),
        email: yup.string()
            .required("El e-mail es obligatorio")
            .email("E-mail no válido"),
        telefono: yup.number()
            .positive("Número no válido")
            .integer("Número no válido")
            .typeError("El teléfono no es válido")
    })

    const handleSubmit = async values => {
        try {
            const url = 'http://localhost:4000/clientes'
            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json()

            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar cliente</h1>

            {/* Formulario con Formik */}
            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
                onSubmit={async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({errors, touched}) => (
                    <Form
                        className="mt-10"
                    >
                        <div className='mb-4'>
                            <label
                                htmlFor="nombre"
                                className='text-gray-800'
                            >
                                Nombre:
                            </label>
                            <Field
                                type="text"
                                id="nombre"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Nombre del cliente"
                                name="nombre"
                            />
                            {
                                errors.nombre && touched.nombre &&
                                <Alerta 
                                    mensaje={errors.nombre}
                                />
                            }
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor="empresa"
                                className='text-gray-800'
                            >
                                Empresa:
                            </label>
                            <Field
                                type="text"
                                id="empresa"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Empresa del cliente"
                                name="empresa"
                            />
                            {
                                errors.empresa && touched.empresa &&
                                <Alerta 
                                    mensaje={errors.empresa}
                                />
                            }
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor="email"
                                className='text-gray-800'
                            >
                                E-mail:
                            </label>
                            <Field
                                type="email"
                                id="email"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Email del cliente"
                                name="email"
                            />
                            {
                                errors.email && touched.email &&
                                <Alerta 
                                    mensaje={errors.email}
                                />
                            }
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor="telefono"
                                className='text-gray-800'
                            >
                                Teléfono:
                            </label>
                            <Field
                                type="tel"
                                id="telefono"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Teléfono del cliente"
                                name="telefono"
                            />
                            {
                                errors.telefono && touched.telefono &&
                                <Alerta 
                                    mensaje={errors.telefono}
                                />
                            }
                        </div>

                        <div className='mb-4'>
                            <label
                                htmlFor="notas"
                                className='text-gray-800'
                            >
                                Notas:
                            </label>
                            <Field
                                as="textarea"
                                type="text"
                                id="notas"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                placeholder="Notas del cliente"
                                name="notas"
                            />
                        </div>

                        <input type="submit" value="Agregar Cliente" className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario

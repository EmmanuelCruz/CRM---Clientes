import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

    const { id } = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(!cargando)
        const obtenCliente = async () => {
            try {
                const respuesta = await fetch(`${import.meta.env.VITE_URL_CLIENTES}/${id}`)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.error(error)
            } finally{
                setCargando(false)
            }
        }
        obtenCliente()
    }, [])

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 '>Editar Cliente</h1>
            <p className='mt-3'>
                Llena los siguientes campos para editar el cliente
            </p>

            {
                cliente.nombre ? (
                    <Formulario 
                        cliente={cliente}
                        cargando={cargando}
                    />
                ) : <p>El cliente no existe</p>
            }

        </>
    )
}

export default EditarCliente

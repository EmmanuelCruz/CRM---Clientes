import {useEffect, useState} from 'react'
import Cliente from '../components/Cliente'

const Inicio = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        const getClients = async () => {
            try {
                const url = 'http://localhost:4000/clientes'
                const response = await fetch(url)
                const resultado = await response.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        getClients()
    }, [])

    const handleEliminar = async id => {
        const confirmacion = confirm("¿Deseas eliminar este cliente?")

        if(confirmacion){
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url, {
                    method: 'DELETE',
                })
                await respuesta.json()

                const clientesActualizado = clientes.filter(cliente => cliente.id!== id)
                setClientes(clientesActualizado)
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 '>Clientes</h1>
            <p className='mt-3'>
                Administra tus clientes
            </p>

            <table
                className='w-full mt-5 table-auto shadow bg-white'
            >
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Empresa</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map(cliente => (
                        <Cliente cliente={cliente} key={cliente.id} handleEliminar={handleEliminar}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Inicio

import { useNavigate } from 'react-router-dom';

const Cliente = ({ cliente, handleEliminar }) => {

    const navigate = useNavigate()

    const {nombre, empresa, email, telefono, notas, id} = cliente
    
    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p>
                    <span className='text-gray-800 uppercase font-bold'>E-mail:</span>
                    {` ${email}`}
                </p>
                <p>
                    <span className='text-gray-800 uppercase font-bold'>Tel:</span>
                    {` ${telefono}`}
                </p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button
                    type='button'
                    onClick={() => navigate(`/clientes/${id}`)}
                    className='bg-green-600 hover:bg-green-800 block w-full text-white p-2 uppercase font-bold text-xs'
                >
                    Ver
                </button>
                <button
                    type='button'
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                    className='mt-2 bg-blue-600 hover:bg-blue-800 block w-full text-white p-2 uppercase font-bold text-xs'
                >
                    Editar
                </button>
                <button
                    type='button'
                    onClick={() => handleEliminar(id)}
                    className='mt-2 bg-red-600 hover:bg-red-800 block w-full text-white p-2 uppercase font-bold text-xs'
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente

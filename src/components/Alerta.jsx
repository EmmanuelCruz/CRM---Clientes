import React from 'react'

const Alerta = ({mensaje}) => {
    return (
        <div className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>
            {mensaje}
        </div>
    )
}

export default Alerta

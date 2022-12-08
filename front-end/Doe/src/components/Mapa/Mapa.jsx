import React, { useState } from 'react'
import MapaImg from '../../assets/mapa.png'


export const Mapa = () => {
    return(
        <>
            <div className='containerMapa'>
                <img className='imagemMapa' src={MapaImg} alt="" />
            </div>
        </>
    )
}
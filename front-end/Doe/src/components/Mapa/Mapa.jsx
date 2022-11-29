import React, { useState } from 'react'
import MapaImg from '../../assets/mapa.png'
export const Mapa = () => {
    return(
        <>
            <div className='mapa'>
                <img className='imagem' src={MapaImg} alt="" />
            </div>
        </>
    )
}
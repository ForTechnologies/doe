import React from 'react'
import { HeaderGeo } from '../components/HeaderGeo/HeaderGeo'
import { Mapa } from '../components/Mapa/Mapa.jsx'
import { CardsGeo } from '../components/CardsGeo/CardsGeo'
import { Footer } from '../components/Footer/Footer'

export const Geolocalizacao = () => {
    return(
        <>
       <HeaderGeo/>
        <Mapa />
        <CardsGeo />
        <Footer />
        </>
    )
}


export default Geolocalizacao;
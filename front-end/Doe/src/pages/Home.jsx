import React from 'react'
import { Doar } from '../components/Doar/Doar'
import { Footer } from '../components/Footer/Footer'
import { HeaderHome } from '../components/HeaderHome/HeaderHome'
import { Inicio } from '../components/Inicio/Inicio'
import { Objetivo } from '../components/Objetivo/Objetivo'
import { Problema } from '../components/Problema/Problema'
import { Sobre } from '../components/Sobre/Sobre'


export const Home = () => {
  return (
    <>
    <HeaderHome />
    <Inicio />
    <Sobre />
    <Problema />
    <Objetivo />
    <Doar />
    <Footer />
    </>
  )
}

export default Home;
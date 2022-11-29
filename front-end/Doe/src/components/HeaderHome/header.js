import React from 'react'
import HeaderStyle from './style'
import FotoLogo from '../../assets/logoTipoDoe.png'
import BtnPadraoFuncao from '../botoes/index.js'
import ProcurarIcone from '../../assets/procurarIcone.png'
import NotificacaoIcone from '../../assets/notificacaoIcone.png'
import Gato from '../../assets/gato.webp'


export const HeaderHome = () => {
  return (
    <>
      <HeaderStyle>
        <div className='containerHeader'>
          <div className='divHeaderLogo'>
            <img className='logoTipoDoe' src={FotoLogo}></img>
          </div>

          <div className='palavrasHeader'>
            <h3 className='marcado'>Home</h3>
            <h3>Sobre</h3>
            <h3>Problema</h3>
            <h3>Nosso Objetivo</h3>
            <h3>Como doar</h3>
          </div>
            
          <div className='botoesHeader'>
            <BtnPadraoFuncao />
          </div>
        </div>
      </HeaderStyle>
    </>
  )
}

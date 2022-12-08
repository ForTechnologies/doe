import React from 'react'
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import CriarCampanha from '../../components/Campanhas/criarCampanha';
import CampanhaEditOng from '../../components/Campanhas/itemCampanhaEditOng';
import Header from '../../components/Headeer/header';
import CardProcurarComunidades from "../../components/Comunidade/cardBuscarComunidade"

import Gato from '../../assets/fotoCapaOng.webp'

import CardBuscarComunidadeStyle from '../../components/Comunidade/style';
function Comunidades() {






  return (
    <>


      <Header></Header>


      <CardBuscarComunidadeStyle>

        <div className='divEspacoHeaderCampanha containerPaginaComunidades'>
         <div className='teste34'>
          <div className='cardBuscarComunidade'>
            <div className='divCapaComunidade'>
              <img src={Gato}></img>
            </div>
            <div className='fotoComunidade'>
              <img src={Gato}></img>
            </div>
            <div className='divInformacoesComunidade'>
              <div className='tituloCardComunidade'>anjos da noite</div>
              <div className='descricaoCardComunidade'>
                <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores......</p></div>
              <div className='divBotaoCardComunidade'>
                <div className='divFantasmaComunidade'></div>
                <button className='botaoCardComunidade'>Entrar</button>
                <div className='fotosParticipantesComunidade'>
                  <img src={Gato}></img>
                  <img src={Gato}></img>
                  <img src={Gato}></img>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>






          <div className='cardBuscarComunidade'>
            <div className='divCapaComunidade'>
              <img src={Gato}></img>
            </div>
            <div className='fotoComunidade'>
              <img src={Gato}></img>
            </div>
            <div className='divInformacoesComunidade'>
              <div className='tituloCardComunidade'>anjos da noite</div>
              <div className='descricaoCardComunidade'>
                <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores......</p></div>
              <div className='divBotaoCardComunidade'>
                <div className='divFantasmaComunidade'></div>
                <button className='botaoCardComunidade'>Entrar</button>
                <div className='fotosParticipantesComunidade'>
                  <img src={Gato}></img>
                  <img src={Gato}></img>
                  <img src={Gato}></img>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </CardBuscarComunidadeStyle>


    </>









  )
}

export default Comunidades;
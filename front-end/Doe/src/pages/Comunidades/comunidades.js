import React from 'react'
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import CriarCampanha from '../../components/Campanhas/criarCampanha';
import CampanhaEditOng from '../../components/Campanhas/itemCampanhaEditOng';
import Header from '../../components/Headeer/header';
import CardProcurarComunidades from "../../components/Comunidade/cardBuscarComunidade"

import Gato from '../../assets/fotoCapaOng.webp'
import foto4 from "../../assets/mocks/capa4.jpg"
import foto5 from "../../assets/mocks/capa5.jpg"
import foto6 from "../../assets/mocks/capa6.png"
import foto7 from "../../assets/mocks/capa7.jpeg"



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
              <img src={foto4}></img>
            </div>
            <div className='divInformacoesComunidade'>
              <div className='tituloCardComunidade'>Anjos da noite</div>
              <div className='descricaoCardComunidade'>
                <p>Comunidade destinada a ajudar pessoas em situacao de rua, somos os anjos da noite e passamos a madrugada determinados a confortar e alimentar moradores em vunerabilidade em sao paulo capital. Trazendo esperanca, alimento, agasalhos, itens de limpeza e tudo o que alcancamos para tornar o dia das pessoas em maior vulnerabilidade melhor! Estamos atuando desde 2006 e com sua ajuda, conseguimos ir alem e ajudar mais vidas!</p></div>
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
              <img src={foto7}></img>
            </div>
            <div className='fotoComunidade'>
              <img src={foto4}></img>
            </div>
            <div className='divInformacoesComunidade'>
              <div className='tituloCardComunidade'>Agasalhar para cuidar</div>
              <div className='descricaoCardComunidade'>
                <p>Comunidade destinada a arrecadar e distrubuir agasalhos no inverno para moradores de rua. Nos atuamos principalmente nos meses mais frios do sul de sao paulo, nossa luta ja alcancou mais de 2.000 moradores de rua, desde 2009. </p></div>
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
              <img src={foto4}></img>
            </div>
            <div className='fotoComunidade'>
              <img src={foto5}></img>
            </div>
            <div className='divInformacoesComunidade'>
              <div className='tituloCardComunidade'>Capacita quem necessita</div>
              <div className='descricaoCardComunidade'>
                <p>Ong que nasceu com o proposito de capacitar moradores de rua, atraves de um treinamento profissionalizando, humanizar e leva-los ao mercado de trabalho. Nascemos com a vontade de transformar vidas daqueles que mais necessitam!! </p></div>
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
              <div className='tituloCardComunidade'>Criancas no futuro</div>
              <div className='descricaoCardComunidade'>
                <p>Nossa ong veio com a necessidade de ajudar criancas em situacao de rua e prepara-las para um futuro melhor. Contamos com assistencia social, escolas, creches e cursos gratuitos onde os pequenos podem achar oportunidades de um futuro melhor  </p></div>
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
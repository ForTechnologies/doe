import React from 'react'
import HeaderStyle from './style'
import FotoLogo from '../../assets/logoTipoDoe.png'
import ProcurarIcone from '../../assets/procurarIcone.png'
import NotificacaoIcone from '../../assets/notificacaoIcone.png'
import Gato from '../../assets/gato.webp'
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <>

      <HeaderStyle>


        <div className='containerHeader'>

          <div className='divHeaderLogo'>
            <img className='logoTipoDoe' src={FotoLogo}></img>
          </div>
          <div>

            <img className='iconeBusca' src={ProcurarIcone}></img>
            <input placeholder='Pesquisa'></input>


          </div>
          <div>


            <img className='notificacaoIcone' src={NotificacaoIcone}></img>
          </div>

        </div>

        <div className='navBarVertical'>
          <div className='fotoComunidadeNavBarVertical'>
            <img src={Gato}></img>

          </div>
          <div className='divTextFotoPerfil'>
            <a>Perfil</a>
          </div>

          <div className='divListaPaginas'>
            <ul>

              <div className='Text'>

                <Link to="/procurarComunidades">
                  <li> <a>Comunidades</a></li>
                </Link>
              </div>
              <Link to="/procurarCampanhas">
                <li>
                  <a>Campanhas</a>
                </li>
              </Link>
              <Link to="/LocalizarOngs"> 
              <li><a>LocalizarOngs</a></li>
              </Link>
            </ul>
          </div>


          <div className='divBotaoNavBar'>
            <button className='buttonNavBar'> Sair</button>
          </div>
        </div>







      </HeaderStyle>



    </>
  )
}


export default Header;
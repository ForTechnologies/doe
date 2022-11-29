import React from 'react'
import HeaderStyle from './style'
import FotoLogo from '../../assets/logoTipoDoe.png'
import ProcurarIcone from '../../assets/procurarIcone.png'
import NotificacaoIcone from '../../assets/notificacaoIcone.png'
import fotoPerfilOng from '../../assets/capaOng.webp'
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
            <img src={fotoPerfilOng}></img>

          </div>
          <div className='divTextFotoPerfil'> 
          <Link to="/PerfilOng">
          <a>Perfil</a>
          </Link>
           
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
              <Link to="/geolocalizacao"> 
              <li><a>LocalizarOngs</a></li>
              </Link>
            </ul>
          </div>


          <div className='divBotaoNavBar'> <Link to="/Login">

          <button className='buttonNavBar'> Sair</button>
          </Link>
           
          </div>
        </div>







      </HeaderStyle>



    </>
  )
}


export default Header;
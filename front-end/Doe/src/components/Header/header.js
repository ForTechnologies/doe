import React from 'react'
import HeaderStyle from './style'
import FotoLogo from '../../assets/logoTipoDoe.png'
import ProcurarIcone from '../../assets/procurarIcone.png'
import NotificacaoIcone from '../../assets/notificacaoIcone.png'
import Gato from '../../assets/gato.webp'


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
              <li>
                <a href="#home">Comunidades</a>

            <span className='linha'></span>
            </li>
            </div>


            <li><a href="#news">Campanhas</a></li>
            <li><a href="#contact">LocalizarOngs</a></li>
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
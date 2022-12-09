import React from 'react'
import ContaOngEstruturaStyled from './contaOngStyled';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import Gato from '../../assets/gato.webp'
import PerfilOng from '../../assets/capaOng.webp'
import FotoCapaOng from '../../assets/fotoCapaOng.webp'
// import SecaoSobre from './secaoSobre';
// import { Header } from '../Headeer/header';
// import Campanha from '../Campanhas/campanha';
import { Link } from 'react-router-dom';
import PerfilOngEstruturaStyled from './contaDoadorStyle';
import IconeConfiguracao from './../../assets/settings.png';


function ContaOngEstrutura() {
  return (
   

<>



<ContaOngEstruturaStyled>

<PerfilOngEstruturaStyled> 

<div className='Divisor divEspacoHeader'>  




 <div className='cardBuscarComunidade'>

    <div className='divCapaComunidade'>
      <img src={FotoCapaOng}></img>

    </div>

    <div className='fotoComunidade'>

    <img src={PerfilOng}></img>
    </div>

    <div className='divInformacoesComunidade'>

      <div className='tituloCardComunidade'>anjos da noite</div>
     
      <div className='divDescricaoCardComunidade'>
        <div className='textoDescricaoCard'>
      <p> Comunidade destinada a ajudar pessoas em situacao de rua, somos os anjos da noite e passamos a madrugada determinados a confortar e alimentar moradores em vunerabilidade em sao paulo capital. Trazendo esperanca, alimento, agasalhos, itens de limpeza e tudo o que alcancamos para tornar o dia das pessoas em maior vulnerabilidade melhor! Estamos atuando desde 2006 e com sua ajuda, conseguimos ir alem e ajudar mais vidas!</p>
      </div>
      <div className='divIconeConfiguracoes'>

       {/* <Link to="/ContaOngTelaConfig"> <img src={IconeConfiguracao} className="iconeConfig"></img> </Link>  */}
      </div>
      </div>
     


      <div className='divBotaoCardComunidade'>
       
      {/* <button className='botaoCardComunidade'>Entrar</button> */}
             
      </div>

      <div className='abasPerfilOng'>
      <a className='linhaNavBar'><Link to="/PerfilOng" >Sobre</Link></a>
      <a className='linhaNavBar'><Link to="/PerfilOngCampanha">Campanhas</Link></a>
      <a className='linhaNavBar'><Link to="/ContaOngAdicionarCampanha">Nova campanha</Link></a>
      <a className='linhaNavBar'><Link to="/EditarDadosOng">Editar dados</Link></a>

      </div>
      
      </div>
    </div> 

    
</div>







</PerfilOngEstruturaStyled>



</ContaOngEstruturaStyled>





</>


  )
}

export default ContaOngEstrutura;
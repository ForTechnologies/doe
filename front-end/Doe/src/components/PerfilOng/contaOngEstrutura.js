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
      <p> Nos destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados no estado de sao paulo...</p>
      </div>
      <div className='divIconeConfiguracoes'>

       <Link to="/ContaOngTelaConfig"> <img src={IconeConfiguracao} className="iconeConfig"></img> </Link> 
      </div>
      </div>
     


      <div className='divBotaoCardComunidade'>
       
      {/* <button className='botaoCardComunidade'>Entrar</button> */}
             
      </div>

      <div className='abasPerfilOng'>
      <p><Link to="/PerfilOng">Sobre</Link></p>
      <p><Link to="/PerfilOngCampanha">Campanhas</Link></p>
      <p><Link to="/ContaOngAdicionarCampanha">Nova campanha</Link></p>
      <p><Link to="/EditarDadosOng">Editar dados</Link></p>

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
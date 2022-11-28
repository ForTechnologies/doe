import React from 'react'
import PerfilOngEstruturaStyled from './contaDoadorStyle';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import Gato from '../../assets/gato.webp'
import SecaoSobre from './secaoSobre';
import { Header } from '../Headeer/header';
import Campanha from '../Campanhas/campanha';

import { Link } from 'react-router-dom';


export const PerfilOngEstrutura = () => {
  return (
   
<>



  
  <PerfilOngEstruturaStyled>  


<div className='Divisor divEspacoHeader'>  




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
      <p> Campanha destinado a arrecadação de agasalhos da ,ampanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.  Nossa campanha tem como meta agasalhar mais de 100 moradores......</p></div>
      <div className='divBotaoCardComunidade'>
      <button className='botaoCardComunidade'>Entrar</button>
             
      </div>

      <div className='abasPerfilOng'>
      <p><Link to="/">sobre</Link></p>
      <p><Link to="/PerfilOng">Campanhas</Link></p>
      <p>Publicacoes</p>

      </div>
      
      </div>
    </div> 

    
</div>






</PerfilOngEstruturaStyled>





 





</>


  );
}


export default PerfilOngEstrutura;



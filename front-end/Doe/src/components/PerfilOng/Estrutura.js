import React from 'react'
import PerfilOngEstruturaStyled from './style';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import Gato from '../../assets/gato.webp'
import SecaoSobre from './secaoSobre';
import { Header } from '../Header/header';


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
      <p>Sobre</p>
      <p>Campanhas</p>
      <p>Publicacoes</p>

      </div>
      
      </div>
    </div> 

    
</div>






</PerfilOngEstruturaStyled>
<SecaoSobre></SecaoSobre>




 





</>


  );
}


export default PerfilOngEstrutura;



import React from 'react'
import CardBuscarComunidadeStyle from './style';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import Gato from '../../assets/gato.webp'


export const CardBuscarComunidade = () => {
  return (
   
<>


<CardBuscarComunidadeStyle> 


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

</CardBuscarComunidadeStyle>



testeeee







</>


  );
}


export default CardBuscarComunidade;



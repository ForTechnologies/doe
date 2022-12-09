import React from 'react'
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import CriarCampanha from '../../components/Campanhas/criarCampanha';
import CampanhaEditOng from '../../components/Campanhas/itemCampanhaEditOng';
import Header from '../../components/Headeer/header';

import Gato from '../../assets/fotoCapaOng.webp'
import foto3 from "../../assets/mocks/capa3.jpeg"
import foto4 from "../../assets/mocks/capa4.jpg"
import foto5 from "../../assets/mocks/capa5.jpg"
import foto6 from "../../assets/mocks/capa6.png"
import foto7 from "../../assets/mocks/capa7.jpeg"





// import cardsCampanhasStyled from '../../components/Campanhas/style'

import CardCampanhasStyled from '../../components/Campanhas/style'


function Campanhas() {


    
  return (
   <> 

   
    <Header></Header>
<CardCampanhasStyled> 


  <div className="containerPaginaCampanha divEspacoHeaderCampanha">
    <div className='cardTelasCampanha'>
<div className='divCapaCampanha'>
  <img src={foto3}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha anjo da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 



<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={foto4}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha doe um prato de comida</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 

<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={foto5}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha arrecadacao de agasalho</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 


<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={foto7}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha kits de higiene</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 

<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={foto3}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha remedios</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 


<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={foto6}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>anjos da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 


{/* <div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={Gato}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>anjos da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div>  */}


<div className='cardTelasCampanha '>
<div className='divCapaCampanha'>
  <img src={Gato}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Doe nessa noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div>
</div>
</div> 








</div>







</CardCampanhasStyled> 

   
   
   
    </>
   
   
   
   
  
  
   
   
  
  )
}

export default Campanhas;
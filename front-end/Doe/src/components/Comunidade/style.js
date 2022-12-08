import "../../styles/login.css";
import styled from 'styled-components';


export const CardBuscarComunidadeStyle = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
      
    
     
     
    .cardBuscarComunidade {
        margin-top: 30px;
        height: 360px;
        width: 60%;
        border-radius: 20px;
        box-shadow: 0px 0px 1px black;
        margin-left: 12%;

      
       

    }

    .divCapaComunidade {
        height: 40%;
        width: 100%;
        background-color: black;
        border-radius: 20px;
    }


    .divCapaComunidade img {
        border-radius: 20px 20px 0 0;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        object-fit: cover;
        border-top: 100px;

    }


    .fotoComunidade img {
        position: relative;
        z-index: 100;
         width: 100px;
         height: 100px;
         background-color: aliceblue;
         border-radius: 50px;
         transform: translate(20%, -70%);


    }


    .divInformacoesComunidade {
        height: 60%;
        width: 100%;
        transform: translate(0%, -51%);
       
        background-color: #ffff;

    }
     

.tituloCardComunidade {
   background-color: #FFA501;
    width: 100%;
    height: 15%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
}

.descricaoCardComunidade {
    width: 100%;
    height: 50%;
    padding: 20px;
}

.divBotaoCardComunidade {
    width: 100%;
    height: 35%;
    justify-content: space-around;
    display: flex;  
    align-items: center;



}

.botaoCardComunidade {
    height: 40px;
    width: 150px;
    transform: translate(0%, -0%);
    background-color: #FFA501;
    border: 0;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 200;
    cursor: pointer;

}

.fotosParticipantesComunidade {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
   
}


.fotosParticipantesComunidade img {
   
    width: 25%;
    height: 50%;
    background-color: black;
    border-radius: 50%;
    background-position: center;
     background-size: cover;
      object-fit: cover;
  
   
}

.divFantasmaComunidade {
    width: 200px;
    height: 50px;
    

}

         
`;


export default CardBuscarComunidadeStyle;
import "../../styles/login.css";
import styled from 'styled-components';


export const PerfilOngEstruturaStyled = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
     
     


     .Divisor {
        height: 60vh auto;
        width: 100%;
        display: flex;
        overflow-y: hidden;

       
     }
     
     
    .cardBuscarComunidade {
         margin: 40px 90px;
        height: 550px;
        width: 70%;
        border-radius: 20px;
        box-shadow: 0px 0px 1px black;
       
          
    }

    .divCapaComunidade {
        height: 50%;
        width: 100%;
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
         width: 120px;
         height: 120px;
         background-color: aliceblue;
         border-radius: 70px;
         transform: translate(30%, -100%);


    }


    .divInformacoesComunidade {
        height: 60%;
        width: 100%;
        transform: translate(0%, -51%);
       
        background-color: #ffff;

    }
     

.tituloCardComunidade {
    width: 100%;
    height: 15%;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 170px;
}

.descricaoCardComunidade {
    width: 100%;
    height: 45%;
    padding-left: 150%;
    padding: 20px;
    font-size: 18px;

}

.divBotaoCardComunidade {
    width: 100%;
    height: 20%;
    justify-content: flex-end;
    display: flex;  
    align-items: center;
    padding-right: 20px;



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
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
   
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


.abasPerfilOng {

    width: 100%;
    height: 20%;
    justify-content: flex-start;
    display: flex;  
    align-items: center;
    padding-left: 20px;
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;


}

.abasPerfilOng p {


height: 100%;
justify-content: flex-start;
display: flex;  
align-items: flex-end;
font-weight: 200;
text-transform: uppercase;
font-size: 18px;
padding: 20px 20px 10px 0;
border-radius: 0px 0px 20px 20px;


}


.navBarVertical {
    overflow: auto;
    position: fixed;
    width: 18%;
    height: 100vh;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 4px 0px gray;
    display: grid;
    justify-content: center;
    align-items: center;


   

}


.fotoComunidadeNavBarVertical img {
       
         z-index: 100;
         width: 120px;
         height: 120px;
         background-color: aliceblue;
         border-radius: 70px;
         //transform: translate(30%, -100%);


    }





    .navBarVertical {
    overflow: auto;
    position: fixed;
    width: 18%;
    height: 100vh;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 4px 0px gray;
    display: grid;
    justify-content: center;
    align-items: center;


   

}


.fotoComunidadeNavBarVertical img {
       
         z-index: 100;
         width: 120px;
         height: 120px;
         background-color: aliceblue;
         border-radius: 70px;
         //transform: translate(30%, -100%);


    }



         
`;


export default PerfilOngEstruturaStyled;
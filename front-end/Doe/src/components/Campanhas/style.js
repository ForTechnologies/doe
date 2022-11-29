import "../../styles/login.css";
import styled from 'styled-components';


export const CardCampanhasStyled = styled.div`

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
  

margin: 0px 34px;
justify-content: center;
display: flex;
margin-bottom: 40px;


    .cardCampanha {
        
        height: 550px;
        width: 440px;
        border-radius: 20px;
        box-shadow: 0px 0px 1px black;    

    }


    .cardCampanha, input, textarea {
        border: 0;
        outline: 0;
         -webkit-box-shadow: none;
          box-shadow: none;
    }

    .inputAtualizarCapa {
        height: 50px;
        display: flex;
        flex-direction: column;

       
    }


    .divCapaCampanha {
        height: 30%;
        width: 100%;
        background-color: black;
        border-radius: 20px;
    }


    .divCapaCampanha img {
        border-radius: 20px 20px 0 0;
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        object-fit: cover;
        border-top: 100px;

    }


   

    .divInformacoesCampanha {
        height: 60%;
        width: 100%;
        transform: translate(0%, -0%);
        background-color: #ffff;
        

    }
     

.tituloCardCampanha {
    padding: 0 20px;
    width: 100%;
    height: 15%;
   
    display: flex;
    flex-direction: column;
        justify-content: center;
        align-items: center;
    

}

.tituloCardCampanha input {

    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 20px;

}



.descricaoCardCampanha {
    width: 100% auto;
    height: 60%;
    padding: 0 20px;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}

.descricaoCardCampanha textArea {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 18px;
    display: flex;
    align-items: flex-start;
}


.divBotaoCardCampanha {
    width: 100%;
    height: 20%;
    justify-content: space-around;
    display: flex;  
    align-items: center;
    border-radius: 0px 0px 20px 20px;
   

}

.botaoCardCampanha, button {
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

.botaoExcluirCampanha {
    background-color: red;
}


.inputAtualizarCapa {
   align-items: center;
    display: flex;
}

.inputAtualizarCapa input{
   width: 90%;
}






.cardTelasCampanha  {
    width: 300px;
    height: 500px;
    margin-right: 30px;
    margin-left: 30px;
}

.containerPaginaCampanha{
    margin-top: 100px;
    width: 100%;
    height: 100vh auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    
}

    
    
    `



export default CardCampanhasStyled;
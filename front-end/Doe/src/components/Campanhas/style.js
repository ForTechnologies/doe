import "../../styles/login.css";
import styled from 'styled-components';


export const CardCampanhasStyled = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
    background-color: #FFA501;
   
    .cardCampanha {
        
        height: 400px;
        width: 25%;
        border-radius: 20px;
        box-shadow: 0px 0px 1px black;
         
       

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
    
    width: 100%;
    height: 15%;
    padding: 10px;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
}

.descricaoCardCampanha {
    width: 100% auto;
    height: 70% auto;
    padding: 20px;
}

.divBotaoCardCampanha {
    width: 100%;
    height: 30%;
    justify-content: space-around;
    display: flex;  
    align-items: center;
   border-radius: 0px 0px 20px 20px;

}

.botaoCardCampanha {
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
    
    
    `



export default CardCampanhasStyled;
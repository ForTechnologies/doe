import "../../styles/login.css";
import styled from 'styled-components';


export const ContaConfigStyled = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
     
     justify-content: center;
     display: flex;


.containerTelaConfig {
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    z-index: 200;
    transform: translateY(-39%);
    margin-left: 0px;
    margin-top: 150px;
    /* opacity: 0.8; */
   

}

.divCardContainer {
    margin-top: 190px;
    border-radius: 30px;
    background-color: aliceblue;
    z-index: 300;
    height: auto;
    width: 50%;
    opacity: 1.0; //1.0 = totalmente opaco, 0.0 = totalmente transparente
    display: flex;
    flex-direction: column;
   


   
}

.TituloPrincipalConfig{
    height: 40%;
    display: flex;
    justify-content: center;
    padding: 40px;
   
}

.tituloConfigPrinc {
    font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
   

}


.iconeFecharModal img {
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: relative;
    left: 100px;

}




.divisaoConfig {
    margin: 10px 20px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
}




.tituloConfig {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0px 20px;
    font-weight: 600;
    height: 10%;
    font-size: 18px;
  


}

.editarConfig {
    color: blue;
    cursor: pointer;
}


.centroPadrao {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    
}

.centroPadrao img {
    height: 150px;
}

.biografiaTexto {
    padding: 20px 10px;
    width: 80%;
    font-size: 20px;
}

.biografiaTexto textArea {
    padding: 20px 10px;
    width: 600px;
    height: 150px;
    font-size: 20px;
}

.dadosDaEntiedade, p{
   width: 80%;
   display: flex;
   flex-direction: column;
   margin: 5px;

}


ul {
    background-color: white;
    padding: 20px 30px;
}


.divContTextoSobre {
    background-color: white;
    width: 80%;
    height: auto;
}

.tituloSobreOng  {
    height: 40px;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;

}

.textoSobreOng {
    height: 30%;
    padding: 10px;

}
         
`;


export default ContaConfigStyled;
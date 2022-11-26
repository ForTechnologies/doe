import styled from 'styled-components';


export const SecaoSobreStyled = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
   
.ContainerSecaoSobre {
    width: 100%;
    height: 100vh auto;
    display: flex;
    justify-content: center;
}
     
   
.containerCardsInfosPerfilOng {
    height: 100vh auto;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    z-index: 0;




}


.divCardInfoPerfilOngGrid {

    background-color: #FCFCFC;
    width: 500px;
    height: 300px;
    margin: 0px 0px auto;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
   
}


.divCardInfoPerfilOngGrid:nth-child(1) {
    width: 600px;
    height: 800px;
    
    grid-row-start: 1;
    grid-row-end: 4;

}

.divCardInfoPerfilOngGrid:nth-child(2) {
    width: 400px;
    height: 500px;
    grid-row-start: 1;
    grid-row-end: 3;

}

.divCardInfoPerfilOngGrid:nth-child(3) {
    width: 100%;
    height: 350px;
    grid-column-start: 1;
    grid-column-end: 2;
    

}


.divCardInfoPerfilOngGrid:nth-child(4) {
    width: 400px;
    grid-row-start: 3;
    grid-row-end: 6;
    height: 550px;

}

.divCardInfoPerfilOngGrid:nth-child(5) {
    width: 100%;

    grid-column-start: 1;
    grid-column-end: 2;


}

/* card sobre */

.conteudoSobreOng {
    height: 17%;
    margin: 5px 20px auto;
    padding: 20px;
   
}

.carSobreTitulo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 10%;
    text-transform: uppercase;
    

}

.conteudoSobreOng p {
    padding: 10px 0;
    font-weight: lighter;
    height: 10%;


}

/* card sobre */

/* card dados da entiedade */

.conteudoDadosDaEntiedade {
    width: auto;
    height: 8%;
    margin: 4px 20px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.tituloDadosDaEntiedade {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 10%;
    text-transform: uppercase;

}

/* Card dados bancarios  */

.conteudoTransferenciaBancaria {
    width: auto;
    height: 6%;
    margin: 4px 20px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: lighter;


}

.tituloTransferenciaBnacaria {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 10%;
    text-transform: uppercase;

}

.avisoTransferenciaBancaria {
    height: 20%;
    font-weight: bold;
}


/* Doacoes aceitas */

.conteudoDoacoesAceitas {
    width: auto;
    height: 70%;
    margin: 4px 20px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.tituloDoacoesAceitas {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
}

.conteudoDoacoesAceitas li {
    width: auto;
    height: 40%;
    margin: 4px 20px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;

}



.conteudoContato {
    width: auto;
    height: 30%;
    margin: 4px 20px auto;

}

.tituloContato {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;

}

.descricaoContato {
    height: 20%;
    

}

.botoesContato {
    height: 55%;
    padding: 10% auto;


}

.botaoConteudoContato {
 height: 60px;
width: 250px;
justify-content: center;
align-items: center;
color: white;
font-size: 13px;
border-radius: 13px;
background-color: #FF5555;
border: 1px solid transparent;
margin: 10px;
cursor: pointer;

}








@media (max-width: 1000px) {


    .containerCardsInfosPerfilOng {
    height: 100vh auto;
    width: 100%;
    background-color: red;
    display: grid;
   
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    grid-gap: 10px;
    align-items: center;


}


.divCardInfoPerfilOngGrid:nth-child(1) {
    background-color: pink;
    width: 100%;
    height: 600px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;

    
 
}

.divCardInfoPerfilOngGrid:nth-child(2) {
    background-color: blue;
    width: 100%;

    height: 400px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;


}

.divCardInfoPerfilOngGrid:nth-child(3) {
    background-color: black;
    width: 100%;
    height: 350px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;


}


.divCardInfoPerfilOngGrid:nth-child(4) {
    background-color: yellow;
    width: 100%;
  
    height: 550px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 5;


}

.divCardInfoPerfilOngGrid:nth-child(5) {
    background-color: green;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;




}



    
}
     

    `
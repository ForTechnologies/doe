import styled from 'styled-components';


export const BtnPadrao = styled.button `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};

height: 50px;
width: 280px;
justify-content: center;
align-items: center;
color: white;
font-size: 13px;
border-radius: 13px;
background-color: black;
border: 1px solid;


&:hover {
    background-color: #FFA501;
    color: black;
    border: 1px solid black;
    cursor: pointer;
   
}


`;


export const BtnPadraoLaranja = styled.button `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};

height: 50px;
width: 280px;
justify-content: center;
align-items: center;
color: white;
font-size: 13px;
border-radius: 13px;
background-color: black;
border: 1px solid;


&:hover {
    background-color: #FFA501;
    color: black;
    border: 1px solid black;
    cursor: pointer;
   
}


`;


export default BtnPadrao;
import styled from 'styled-components';


export const ContainerPadraoForm = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
  
    flex-direction: column;
     align-items: center;
     width: 65%;
     
     a{
        
        text-decoration: none;
        color: red;
      
          }
`;


export const ContainerPadraoFoto = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};

    width: 55%;
    min-height: 100vh;
    display: flex;
    float: right;
   
     
    img {
        width: 106%;
        height: 100vh;
    }

  

`;



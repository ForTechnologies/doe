import "../../styles/login.css";
import styled from 'styled-components';


export const CriarCampanhaStyled = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
   
    justify-content: center;
     display: flex;
     justify-content: center;
     align-items: center;
     
     main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
}

.formularioAdicionarCampanha {

    margin-top: 30px;
    background-color: #fff;
    padding: 30px 70px;
    border-radius: 15px;
}

.card-post h1{
    font-family: Heebo;
    font-weight: 800;
    text-align: center;

    color: #D2DAF5;

    font-size: 3rem;
    margin-bottom: 5px;
}

.line-post {
    height: 2px;
    background-color: #3E445B;
}

.card-body-post {
    margin-top: 25px;

}

.fields {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 7px;
    font-size: 1.2rem;

    
}

input, textarea {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #808080;
    outline: 0;
    background-color: #DCDCDC;
    font-size: 1.2rem;
    padding-left: 15px;
}

input {
    height: 45px;
}

textarea {
    height: 190px;
    resize: none;
    padding-top: 10px;
}

button{
    margin-top: 30px;
    text-align: center;

}

 button{
    font-family: Heebo;
    font-weight: 800;
    font-size: 1.3rem;
    justify-content: space-between;
     margin-right: 10px;
    padding: 10px 50px;
    color: #fff;
    background-color: #3CB371;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

}

.error-message {
    color: rgb(240, 47, 47);
}



.containerAtualizarCampanha{
    height: 100vh;
    
    

}


.btn-voltar {
background: #FFA501;
;

}
    
    `



export default CriarCampanhaStyled;
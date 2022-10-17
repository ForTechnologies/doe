import styled from 'styled-components';


export const FormControl = styled.div `

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};

  height: 100vh;
  width: 100%;
  margin-bottom: 60em;
  display: flex;
  

 .textEntre {
    margin-top: 180px;
    margin-bottom: 50px;
    color: black;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    
 }

 .textEntre p {
    color: #696F79;
 }


  form {
    position: relative;
    right: 20px;
    width: 100%;
    align-items: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    
  }

 label {
    font-size: 14px;
    font-weight: 10;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
    position: relative;
    right: 0px;
    color: #696F79;


  }


  .btnLogin {
    margin-top: 50px;
    text-align: center;
   
  }

  .btnLogin p{
  color: #696F79;
  font-size: 15px;
  margin-top: 5px;
  text-decoration: none;

  }

  .btnLogin span{
  color: red;
  cursor: pointer;
  text-decoration-line: none;

  }

`;



export const InputPadrao = styled.div `

label {
  color: #696F79;
  font-size: 14px;
    font-weight: 10;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
    position: relative;
    right: 0px;
   
}

input {
  margin-bottom: 20px;
  height: 50px;
width: 320px;
padding: .7em;
border-radius: 12px;
border: none;
display: flex;
background-color: transparent;
border: 1px solid #696F79;

}

input::placeholder {
color: red;
padding-left: 10px;
color: #696F79;

}


p {
  margin-left: 5px;
  color: red;
  font-size: 15px;
  position: relative;
  bottom: 20px;
}



`


export const InputMenorPadrao = styled.div `


label {
  color: #696F79;
  font-size: 14px;
    font-weight: 10;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
    position: relative;
    right: 0px;
   
}

input {

margin-bottom: 0px;
height: 50px;
width: 150px;
padding: .7em;
border-radius: 12px;
border: none;
display: flex;
background-color: transparent;
border: 1px solid #696F79;

}

 select {

margin-bottom: 20px;
margin-right: 25px;
height: 50px;
width: 150px;
padding: .7em;
border-radius: 12px;
border: none;
display: flex;
background-color: transparent;
border: 1px solid #696F79;

}


input::placeholder {
color: red;
padding-left: 10px;
color: #696F79;

}

select::placeholder {
color: red;
padding-left: 10px;
color: #696F79;

}


`


export const FormGrid = styled.form `

width: 93%;
min-height: 70%;
margin: 0px;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
left: 20px;

/* Cor de fundo do autocomplete */
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
}

/* Cor do texto do autocomplete */
input:-webkit-autofill {
    -webkit-text-fill-color: black !important;
}


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid white;
  -webkit-text-fill-color: black !important;
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
}


.gridDoador{
  width: 100%;
  margin-bottom: 15px;
  height: 40px;
 
  
}


.input2, .input5, .input6Ong, .input8Ong {
  display: flex;
}

.input5, .input2, .input6Ong, .input8Ong, input{
  margin-right: 20px;
}

 
.btnCadastroOng {
 margin-top: 30px;
 height: 80px;
 width: 100%;
 justify-content: center;
 position: relative;
 left: 150px;
 display: grid;
 align-items: center;
 text-align: center;

}

`


export const TextoEntre = styled.div `

.rotaVoltar {
  width: 50%;
  display: flex;
  margin-top: 40px;
  height: 17px;
 
}

.textEntreCadastroDoador   {
  height: 170px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  right: 25px;
}

.textEntreCadastroOng {

  height: 110px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  right: 25px;

}



`


export const DivIconSenha = styled.div `

width: 50px;
height: 50px;
display: flex;
position: relative;
left: 260px;
bottom: 70px;


img {
  height: 25px;
  margin: 15px;
  cursor: pointer;

}


`






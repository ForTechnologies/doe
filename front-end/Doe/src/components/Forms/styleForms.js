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

margin-bottom: 20px;
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



`


export const FormGrid = styled.div `

width: 93%;
min-height: 60%;
margin: 0px;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
left: 20px;


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
  height: 200px;
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





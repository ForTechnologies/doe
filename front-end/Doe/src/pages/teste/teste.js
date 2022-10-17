import { useState } from "react";

import { validEmail, validPassword, validaCEP } from "../../utils/regex";

import InputLabel from '../../components/Forms/input.js';

import { InputPadrao, InputMenorPadrao } from '../../components/Forms/styleForms'

import BtnPadraoFuncao from '../../components/botoes/index.js'

import { BtnPadrao } from '../../components/botoes/style'


import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Alert from '@mui/material/Alert';

import estados from "../../utils/estados";



function Teste() {




  
  // Função para retirar os espaços em branco do início e do fim da string.
  function Trim(strTexto)
      {
          return strTexto.replace(/^\s+|\s+$/g, '');
      }

  function IsCEP(strCEP, blnVazio)
      {
          var objER = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/;

          strCEP = Trim(strCEP)
          if(strCEP.length > 0)
              {
                  if(objER.test(strCEP))
                      return true;
                  else
                      return false;
              }
          else
              return blnVazio;
      }

function chkCEP(strCEP){
var Retorno = IsCEP(strCEP, false)
if (Retorno) alert("CEP Válido. Parabéns");
else alert("CEP Inválido.");
return Retorno;
}

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  //Enviar os dados para o back-end
  const addUser = async e => {
    e.preventDefault();

    if(!validatee()) return;


    
  }

  function validatee(){
    if(!user.name) return  setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});



    if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
    if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
    if(user.password.length < 6 ) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});
    if(user.name.length < 6) return  setStatus({type: 'error', mensagem: 'Erro: Preencha seu nome completo!'});

    return true;
  }





  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [CEP, setCep] = useState("");


  const [inputCepErr, setInputCepErr] = useState(false);
  const [inputNomeErr, setInputNomeErr] = useState(false);
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

  const validate = () => {

    if (!validEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }


    if (!validPassword.test(password)) {
      setInputPasswordErr(true);
    } else {
      setInputPasswordErr(false);
    }


    if (!validaCEP.test(CEP)) {
      setInputCepErr(true);
    } else {
      setInputCepErr(false);
    }

  };







console.log(CEP)
console.log(inputCepErr)









  return (

   <>
   

   
   {/* <h1 class="login__title">Login</h1>
      <form class="login__form">
        <input class="login__input" type="email" placeholder="e-mail" />
        <span class="login__input-border"></span>
        <input class="login__input" type="password" placeholder="senha"/>
        <span class="login__input-border"></span>
        <button class="login__submit">Login</button>
        <a class="login__reset" href="#">Esqueceu a senha?</a>
      </form>
     */}
           
        <br></br>
        <br></br>


        <div className='gridDoador input1'>

          <InputPadrao>
          <label>Nome *: </label>
            <input 
  
              placeholder="Digite seu nome completo"
              value={CEP}
              onChange={event => setCep(event.target.value)}
              /> 
           {inputCepErr && <p>Por favor digete um cep valido!</p>}

          </InputPadrao>
        </div>
        <br></br>

       
        <div className='gridDoador input4'>
          <InputPadrao>
          <label>Email *: </label>

            <input className="input1" type="text"
              text="Email *"
              name="teste"
              placeholder="Digite seu email"
             
              value={email}
              onChange={event => setEmail(event.target.value)}
              /> 
           {inputEmailErr && <p>Por favor digete um email valido!</p>}
                
                
          </InputPadrao>

        </div>


       

        <div className='gridDoador input7'>
          <InputPadrao>
          <label>Senha *: </label>

            <input type="text"
              text="Senha *"
              name="teste"
              placeholder="Defina uma senha forte"
              value={password}
      
              onChange={(event) => setPassword(event.target.value)}/>
                    {inputPassordErr && <p>Por favor digite uma senha mais segura</p>}

          </InputPadrao>
        </div>

        
        <div className='btnCadastroOng'>
          <BtnPadrao
          onClick = {validate}> REGISTRAR CONTA
          </BtnPadrao>
        </div>
       
      
   
  
   
   
   
   <div>
      <h1>Cadastrar Usuário</h1>

      {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

      <form onSubmit={addUser}>
        <label>Nome*: </label>
        <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} /><br /><br />

        <label>E-mail*: </label>
        <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput}  value={user.email} /><br /><br />

        <label>Senha*: </label>
        <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />

        * Campo obrigatório<br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
   





{/* 
    <h1>Validar CEP usando expressão regular</h1>
<form onSubmit={chkCEP}>
CEP:
 <input type="text" name="cep" value="" /> (Formato aceito: XX.XXX-XXX)
<input type="submit" value="Verifica CEP" />
</form>
 */}




   
   </>


  );






};

export default Teste;

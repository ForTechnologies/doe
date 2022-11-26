import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import BtnPadrao from '../../components/botoes/style'
import { FormControl, InputPadrao} from '../../components/Forms/styleForms'
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style';
import fotoContainerLogin from '../../assets/imgs-login/containerfotologin.png';
import Alert from '@mui/material/Alert';

import LoginService from "../../services/LoginService";
import constantes from "../../utils/constantes";


// import olhoAberto from '../../assets/olhoAberto.png';
// import olhoFechado from '../../assets/olhoFechado.png';


//import { Link } from 'react-router-dom';
// <Link to="/sobre">Sobre</Link>


const Login = () => {

  // const [input, setInput] = useState('');
  // const [hidePass, setHidePass] = useState(true)




  const [emailInput, setEmailInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");

  const [exibeAlertaVermelho, setExibeAlertaVermelho] = useState(false)
  const [exibeAlerta, setExibeAlerta] = useState(false)
  const [alerta, setAlerta] = useState("");
  const [alertaTipo, setAlertaTipo] = useState("");

  async function enviaDados(evento) {
      evento.preventDefault(); // prevenindo o comportamento padrão do <form>, que é o evento de enviar os dados para outra página

      const service = new LoginService();
      await service.login(emailInput, senhaInput);
      const res = service.state.res;

      switch (res.status) {
          case 200:
              setExibeAlerta(true);
              setExibeAlertaVermelho(false)
              setAlertaTipo("success");
              setAlerta("Login realizado!")
              const tipoUsuario = res.data.tipoUsuarioId.id;
              localStorage.setItem('tipo', tipoUsuario)
              localStorage.setItem('email', res.data.email)
              setTimeout(()=>{
              if(tipoUsuario === constantes.TIPO_DOADOR) {window.location.href = `/doador/perfil`}
              if(tipoUsuario === constantes.TIPO_ONG) {window.location.href = `/ong/perfil`}
              }, 2000)
              break;

          case 204:
              setExibeAlerta(true);
              setAlerta("Usuário não encontrado");
              setAlertaTipo("warning");
              break;

          default:
              setExibeAlertaVermelho(true)
              setAlerta(`Campo ${res.data.errors[0].field}: ${res.data.errors[0].defaultMessage}`);
              break;
      }
  }



  return (

    <div className='container'>
      <ContainerPadraoFoto>
        <div>
          <img src={fotoContainerLogin} alt="homeless segurando uma placa" />
        </div>
      </ContainerPadraoFoto>

      <ContainerPadraoForm>
        <FormControl onSubmit={enviaDados}>
          <form className='FormControl'>
            <div className='textEntre'>
              <h1>Entrar no DOE!</h1>
              <p className='teste'>Seja bem vindo!</p>

            </div>


            <InputPadrao>
              <Input type="text"
                text="Email"
                name="teste"
                placeholder="Digite seu email"
                onInput={(evento) => { setEmailInput(evento.target.value) }}

                >
                  
              </Input>


              <label>Senha *</label>
              <input
                className='inputSenhaLogin'
                type='password'
                id='senhaLogin'
                text="Senha"
                name="senha"
                placeholder="**********"
                // value={input}
                // onChange={(texto) => setInput(texto)}
                onInput={(evento) => { setSenhaInput(evento.target.value) }}
               

              />

            </InputPadrao>

            <div className='btnLogin'>
              <BtnPadrao>
                ENTRAR
              </BtnPadrao>
              <p>Nao tem uma conta?
                <Link to="/CadastroDoador"><span>Cadastre-se</span></Link></p>
                {exibeAlerta ? <Alerta /> : <></>}
                                {exibeAlertaVermelho ? <AlertaVermelho /> : <></>}
            </div>
          </form>
        </FormControl>
      </ContainerPadraoForm>
    </div>


  );

  function Alerta() {
    return (
        <Alert severity={alertaTipo} sx={{ mt: 3 }}>
            {alerta}
        </Alert>
    )
}

function AlertaVermelho() {
    return (
        <Alert variant="filled" severity="error" sx={{ mt: 3 }}>
            {alerta}
        </Alert>
    )
}



}

export default Login;
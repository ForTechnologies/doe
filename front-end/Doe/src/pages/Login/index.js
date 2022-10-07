import React from 'react';
//import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import BtnPadraoFuncao from '../../components/botoes/index.js'
import { FormControl, InputPadrao } from '../../components/Forms/styleForms'
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style';
import fotoContainerLogin from '../../assets/imgs-login/containerfotologin.png'
//import { Link } from 'react-router-dom';


// <Link to="/sobre">Sobre</Link>

const Login = () => {
  return (

    <div className='container'>
      <ContainerPadraoFoto>
        <div>
          <img src={fotoContainerLogin} alt="homeless segurando uma placa" />
        </div>
      </ContainerPadraoFoto>

      <ContainerPadraoForm>
        <FormControl>
          <form className='FormControl'>
            <div className='textEntre'>
              <h1>Entrar no DOE!</h1>
              <p className='teste'>Seja bem vindo!</p>

            </div>
            <InputPadrao>
              <Input type="text"
                text="Email"
                name="teste"
                placeholder="Digite seu email">
              </Input>
              <Input type="text"
                text="Senha"
                name="teste"
                placeholder="**********">
              </Input>
            </InputPadrao>
            <div className='btnLogin'>

              <BtnPadraoFuncao text='ENTRAR'>
              </BtnPadraoFuncao>
              <p>Nao tem uma conta?
                <Link to="/cadastroDoador"><span>Cadastre-se</span></Link></p>
            </div>
          </form>
        </FormControl>
      </ContainerPadraoForm>
    </div>


  );
}

export default Login;
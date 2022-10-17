import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import BtnPadrao from '../../components/botoes/style'
import { FormControl, InputPadrao} from '../../components/Forms/styleForms'
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style';
import fotoContainerLogin from '../../assets/imgs-login/containerfotologin.png';

// import olhoAberto from '../../assets/olhoAberto.png';
// import olhoFechado from '../../assets/olhoFechado.png';


//import { Link } from 'react-router-dom';
// <Link to="/sobre">Sobre</Link>


const Login = () => {

  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true)


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


              <label>Senha *</label>
              <input
                className='inputSenhaLogin'
                type='password'
                id='senhaLogin'
                text="Senha"
                name="senha"
                placeholder="**********"
                value={input}
                onChange={(texto) => setInput(texto)}
              />

              {/* <DivIconSenha> 
                <img  onClick={ () => setHidePass(!hidePass) }
                className='iconOlho' src={olhoFechado} alt="icone olho aberto" sizes="22"></img>

                 </DivIconSenha>
                 */}
            </InputPadrao>

            <div className='btnLogin'>
              <BtnPadrao>
                ENTRAR
              </BtnPadrao>
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
import { useState }  from 'react';
import { Link } from 'react-router-dom';
import rotaVoltar from '../../assets/Voltar.png'
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style.js';
import fotoContainerDoador from '../../assets/img-cadastroDoador/containerFotoDoador.png'
import BtnPadrao from '../../components/botoes//style'
import { FormGrid, InputPadrao, InputMenorPadrao, TextoEntre } from '../../components/Forms/styleForms'
import { validEmail, validPassword } from "../../utils/regex";
import estados from '../../utils/estados.js';
import Alert from '@mui/material/Alert';
import CadastroDoadorService from "../../services/CadastroDoadorService";



/* <Link to="/">retornar a página inicial</Link> */


const CadastroDoador = () => {




  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const [password, setPassword] = useState("");
  const [nascimentoInput, setNascimentoInput] = useState("");
  const [cidadeInput, setCidadeInput] = useState("");
  const [cepInput, setCepInput] = useState("");
  const [enderecoInput, setNumeroInput] = useState("");
  // const [bairroInput, setBairroInput] = useState("");
  const [estadoInput, setEstadoInput] = useState("");

  // const [inputNomeErr, setInputNomeErr] = useState(false);
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);


  const [exibeAlertaVermelho, setExibeAlertaVermelho] = useState(false)
  const [exibeAlerta, setExibeAlerta] = useState(false)
  const [alerta, setAlerta] = useState("");
  const [alertaTipo, setAlertaTipo] = useState("");


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


  };



    async function enviarDados(evento) { // exemplo de recebimento de dados ao enviar (onSubmit) o formulário
      evento.preventDefault(); // prevenindo o comportamento padrão do <form>, que é o evento de enviar os dados para outra página
      console.log("Enviando dados!");

      // criando objeto para enviar os dados para a API
      const DoadorFormatado = { // objeto JSON {}
          nome: nome,
          email: email,
          senha: password,
          dataNascimento: nascimentoInput,

      };

      const EnderecoFormato = {
          email: email,
          cep: cepInput,
          etado: estadoInput,
          cidade: cidadeInput,

      }

      console.log("FORMATAÇÂO: ", DoadorFormatado); // exibindo objeto formatado no console

      const service = new CadastroDoadorService();
      await service.cadastrar(DoadorFormatado, EnderecoFormato);
      const res = service.state.res;

      switch (res.status) {
          case 200:
              setExibeAlerta(true);
              setAlerta("Já existe uma conta cadastrada com este email!");
              setAlertaTipo("warning");
              break;

          case 201:
              setExibeAlerta(true);
              setExibeAlertaVermelho(false);
              setAlerta("Cadastro concluido com sucesso!");
              setAlertaTipo("success")
              break;

          case 400:
              setExibeAlerta(true);
              setAlerta(`Campo ${res.data.errors[0].field}: ${res.data.errors[0].defaultMessage}`);
              setAlertaTipo("warning")
              break;

          default : 
              setExibeAlertaVermelho(true)
              setAlerta(`Campo ${res.data.errors[0].field}: ${res.data.errors[0].defaultMessage}`);
              break;
      }
  }



  return (


    <div className='container'>
      <ContainerPadraoFoto>
        <div>
          <img src={fotoContainerDoador} alt="descricao" />
        </div>
      </ContainerPadraoFoto>

      <ContainerPadraoForm>
        <TextoEntre>
          <div className='rotaVoltar'>
            <Link to="/"><img src={rotaVoltar} alt="descricao" /></Link>
          </div>
          <div className='textEntreCadastroDoador'>
            <h1>Junte-se a nós!</h1>

          </div>
        </TextoEntre>

        
      
        <FormGrid onSubmit={enviarDados}>
         
          <div className='gridDoador input1'>
            <InputPadrao>
              <label>Nome *: </label>
              <input

                placeholder="Digite seu nome completo"
                value={nome}
                onChange={event => setNome(event.target.value)}
                maxLength="50"
                required="required"
              />
            </InputPadrao>
          </div>

          <div className='gridDoador input2'>
            <InputMenorPadrao>
              <label>Nascimento *: </label>
              <input onInput={(evento) => { setNascimentoInput(evento.target.value) }}
                name='nascimento'

                type='date'
                placeholder='DD/MM/AAAA'
                className='small-input'
                required />
            </InputMenorPadrao>

            <InputMenorPadrao>
              <label>CEP *: </label>
              <input onInput={(evento) => { setCepInput(evento.target.value) }}
                type="text"
                text="CEP *"
                name="teste"
                placeholder="Digite teu cep" />
            </InputMenorPadrao>
          </div>

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
              {inputEmailErr && <p>Digite um email valido!</p>}
            </InputPadrao>
          </div>


          <div className='gridDoador input5'>
            <InputMenorPadrao>
              <label>Estado *: </label>
              <select onInput={(evento) => { setEstadoInput(evento.target.value) }}
                name='estado'
                placeholder='Selecione seu estado'
                className='small-select-input'>
                {estados.map((item) =>
                  <option key={item.index} value={item.value}>{item.label}</option>
                )}
              </select>
            </InputMenorPadrao>


            <InputMenorPadrao>
              <label>Cidade *: </label>
              <input onInput={(evento) => { setCidadeInput(evento.target.value) }}
                type="text"
                text="Cidade *"
                name="teste"
                placeholder="Escolha sua cidade"
              />
            </InputMenorPadrao>
          </div>

          <div className='gridDoador input7'>
            <InputPadrao>
              <label>Senha *: </label>
              <input type="text"
                text="Senha *"
                name="teste"
                placeholder="Defina uma senha forte"
                value={password}
                onChange={(event) => setPassword(event.target.value)} />
              {inputPassordErr && <p>*Sua senha deve conter numero, caracter e letra maiscula</p>}
            </InputPadrao>
          </div>

          <div className='gridDoador input8'>
            <InputPadrao>
              <label>Endereço *: </label>
              <input onInput={(evento) => { setNumeroInput(evento.target.value) }}
                type="text"
                text="Endereço *"
                name="teste"
                placeholder="Digite seu endereço completo" />
            </InputPadrao>
          </div>

          <div className='btnCadastroOng'>
            <BtnPadrao
              onClick={validate}> REGISTRAR CONTA
            </BtnPadrao>
            <p>Tem uma ong? <Link to="/cadastroOng" ><span>Cadastre-se aqui</span></Link></p>
          </div>
          {exibeAlerta ? <Alerta /> : <></>}
          {exibeAlertaVermelho ? <AlertaVermelho /> : <></>}
         
        </FormGrid>
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
        Erro: {alerta}
      </Alert>
    )
  }

}

export default CadastroDoador;
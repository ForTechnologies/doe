import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Forms/input.js";
import {
  ContainerPadraoForm,
  ContainerPadraoFoto,
} from "../../components/Containers/style.js";
import fotoContainerOng from "../../assets/img-cadastroOng/fotoContainerOng.png";
import rotaVoltar from "../../assets/Voltar.png";
import BtnPadrao from "../../components/botoes/style";
import {
  FormGrid,
  InputPadrao,
  InputMenorPadrao,
  TextoEntre,
} from "../../components/Forms/styleForms";
import estados from "../../utils/estados.js";
import { cnpjMask } from "../../utils/cnpjMask";
import Alert from "@mui/material/Alert";

import CadastroOngService from "../../services/CadastroOngService";

/* <Link to="/">retornar a página inicial</Link> */

const CadastroOng = () => {
  // // constante e método responáveis pela máscara de formatação do cnpj
  // // https://medium.com/reactbrasil/m%C3%A1scara-de-cnpj-com-react-regex-bafb58d2285e
  // const [values, setValues] = useState({ cnpj: '' })
  // const inputChange = (e) => {
  //     const { name, value } = e.target
  //     setValues({
  //         ...values,
  //         [name]: value
  //     })
  // }

  const [nomeInput, setNomeInput] = useState("");
  const [nomeDirigenteInput, setNomeDirigenteInput] = useState("");

  const [senhaInput, setSenhaInput] = useState("");
  const [cnpjInput, setCnpjInput] = useState("");
  const [telefoneInput, setTelefoneInput] = useState("");
  const [emailContatoInput, setEmailContatoInput] = useState("");
  const [estadoInput, setEstadoInput] = useState("");
  const [cidadeInput, setCidadeInput] = useState("");
  const [ruaInput, setRuaInput] = useState("");
  const [numeroInput, setNumeroInput] = useState("");
  const [bairroInput, setBairroInput] = useState("");

  const [exibeAlertaVermelho, setExibeAlertaVermelho] = useState(false);
  const [exibeAlerta, setExibeAlerta] = useState(false);
  const [alerta, setAlerta] = useState("");
  const [alertaTipo, setAlertaTipo] = useState("");


  

  // constante e método responáveis pela máscara de formatação do cnpj
  // https://medium.com/reactbrasil/m%C3%A1scara-de-cnpj-com-react-regex-bafb58d2285e
  const [values, setValues] = useState({ cnpj: "" });
  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function enviarDados(evento) {
    // exemplo de recebimento de dados ao enviar (onSubmit) o formulário
    evento.preventDefault(); // prevenindo o comportamento padrão do <form>, que é o evento de enviar os dados para outra página

    //setCnpjInput(`(${cnpjInput})`);
    //setTelefoneInput(`(${telefoneInput})`);
    console.log(cnpjInput, telefoneInput);

    // criando objeto para enviar os dados para a API
    const OngFormatado = {
      // objeto JSON {}
      nome: nomeInput,
      dirigente: nomeDirigenteInput,
      senha: senhaInput,
      cnpj: cnpjInput,
      telefone: telefoneInput,
      email: emailContatoInput,
    };

    const EnderecoFormato = {
      email: emailContatoInput,
      bairro: bairroInput,
      rua: ruaInput,
      numero: numeroInput,
      cidade: cidadeInput,
      estado: estadoInput,
    };

    const service = new CadastroOngService();
    await service.cadastrar(OngFormatado, EnderecoFormato);
    const res = service.state.res;

    switch (res.status) {
      case 200:
        setExibeAlerta(true);
        setExibeAlertaVermelho(false);
        setAlerta("Já existe uma conta cadastrada com este email!");
        setAlertaTipo("warning");
        break;

      case 201:
        setExibeAlerta(true);
        setExibeAlertaVermelho(false);
        setAlerta("Cadastro concluido com sucesso!");
        setAlertaTipo("success");
        //window.location.href = "/login";
        break;

      case 400:
        setExibeAlerta(true);
        setExibeAlertaVermelho(false);
        setAlerta(
          `Campo ${res.data.errors[0].field}: ${res.data.errors[0].defaultMessage}`
        );
        setAlertaTipo("warning");
        break;

      default:
        setExibeAlertaVermelho(true);
        setAlerta(`Desculpe, ocorreu um erro inesperado.`);
        break;
    }
  }

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <ContainerPadraoFoto>
        <div>
          <img src={fotoContainerOng} alt="descricao" />
        </div>
      </ContainerPadraoFoto>

      <ContainerPadraoForm>
        <TextoEntre>
          <div className="rotaVoltar">
            <Link to="/">
              <img src={rotaVoltar} alt="descricao" />
            </Link>
          </div>

          <div className="textEntreCadastroOng">
            <h1>Junte-se a nos!</h1>
          </div>
        </TextoEntre>

        <FormGrid onSubmit={enviarDados}>
          <div style={{ width: "150%", height: "100%" }}>
            {/* DIV PARA OS inputs */}
            <div style={{ width: "100%", height: "80%" }}>
              {/* DIV PARA OS inputs  -----------1------------ */}
              <div
                style={{
                  // backgroundColor: "yellowgreen",
                  width: "65%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputPadrao>
                  <label>Nome do dirigente *:</label>
                  <input
                    onInput={(evento) => {
                      setNomeDirigenteInput(evento.target.value);
                    }}
                    id="idNome"
                    type="text"
                    text="Nome do dirigente *"
                    name="teste"
                    placeholder="Digite o nome"
                    required
                  />
                </InputPadrao>
                <InputPadrao>
                  <label>Nome da ong *:</label>
                  <input
                    onInput={(evento) => {
                      setNomeInput(evento.target.value);
                    }}
                    type="text"
                    text="NomeOng"
                    name="teste"
                    placeholder="Digite o nome da ong"
                    required
                  />
                </InputPadrao>
              </div>

              {/* DIV PARA OS inputs  -----------2------------ */}
              <div
                style={{
                  // backgroundColor: "blue",
                  width: "65%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputPadrao>
                  <label>Email principal *:</label>
                  <input
                    onInput={(evento) => {
                      setEmailContatoInput(evento.target.value);
                    }}
                    id="emailPrincipal"
                    type="text"
                    text=" *"
                    name="teste"
                    placeholder="Digite o email principal"
                    required
                  />
                </InputPadrao>
                <InputPadrao>
                  <label>CNPJ da ong *:</label>
                  <input
                    onInput={(evento) => {
                      setCnpjInput(cnpjMask(evento.target.value));
                    }}
                    type="text"
                    name="cnpj"
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    value={cnpjMask(values.cnpj)} //exibe a formatação correta
                    onChange={inputChange} //formata o cnpj a cada numero digitado
                    required
                  />
                </InputPadrao>
              </div>

              {/* DIV PARA OS inputs  -----------3------------ */}
              <div
                style={{
                  // backgroundColor: "purple",
                  width: "65%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputPadrao>
                  <label>Endereço *:</label>
                  <input
                    onInput={(evento) => {
                      setRuaInput(evento.target.value);
                    }}
                    type="text"
                    text="Endereço *"
                    name="teste"
                    placeholder="Digite o endereço da ong"
                    required
                  />
                </InputPadrao>
                <InputMenorPadrao style={{ marginTop: "-1.5rem" }}>
                  <label>Numero *:</label>
                  <input
                    onInput={(evento) => {
                      setNumeroInput(evento.target.value);
                    }}
                    type="number"
                    text="Numero *"
                    name="teste"
                    placeholder="Numero da rua"
                    required
                  />
                </InputMenorPadrao>

                <InputMenorPadrao style={{ marginTop: "-1.5rem" }}>
                  <Input
                    onInput={(evento) => {
                      setBairroInput(evento.target.value);
                    }}
                    type="text"
                    text="Bairro *"
                    name="teste"
                    placeholder="Bairro da ong"
                    required
                  >
                    {" "}
                  </Input>
                </InputMenorPadrao>
              </div>
              {/* DIV PARA OS inputs  -----------3------------ */}
              <div
                style={{
                  // backgroundColor: "blueviolet",
                  width: "65%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputPadrao>
                  <label>Telefone da ong *:</label>

                  <input
                    onInput={(evento) => {
                      setTelefoneInput(evento.target.value);
                    }}
                    className="input1"
                    type="number"
                    text="Email"
                    name="telefone"
                    placeholder="(11) 11111-1111"
                    // value={telefoneMask(valuesTel.telefone)}
                    // onChange={inputChangeTel}
                    required
                  />
                </InputPadrao>
                <InputMenorPadrao>
                  <label>Estado *:</label>
                  <select
                    onInput={(evento) => {
                      setEstadoInput(evento.target.value);
                    }}
                    name="estado"
                    placeholder="Selecione seu estado"
                    className="small-select-input"
                  >
                    {estados.map((item) => (
                      <option key={item.index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </InputMenorPadrao>

                <InputMenorPadrao style={{ marginTop: "-1.5rem" }}>
                  <Input
                    type="text"
                    text="Cidade *"
                    name="teste"
                    placeholder="Selecione sua cidade"
                    onInput={(evento) => {
                      setCidadeInput(evento.target.value);
                    }}
                    required
                  ></Input>
                </InputMenorPadrao>
              </div>
              {/* DIV PARA OS inputs  -----------3------------ */}
              <div
                style={{
                  // backgroundColor: "pink",
                  width: "65%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputPadrao>
                  <label>Senha *:</label>
                  <input
                    onInput={(evento) => {
                      setSenhaInput(evento.target.value);
                    }}
                    type="password"
                    name="senha"
                    placeholder="Digite uma senha forte"
                    required
                  />
                </InputPadrao>
                <InputPadrao>
                  <Input
                    type="text"
                    text="Causa *"
                    name="teste"
                    placeholder="Resumo sobre a causa da ong"
                    required
                  ></Input>
                </InputPadrao>
              </div>
            </div>

            {/* DIV PARA OS botoes */}
            <div
              style={{
                // backgroundColor: "blue",
                width: "65%",
                height: "12%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <BtnPadrao>REGISTRAR CONTA</BtnPadrao>
              {exibeAlerta ? <Alerta /> : <></>}
              {exibeAlertaVermelho ? <AlertaVermelho /> : <></>}
            </div>
          </div>
          {/* <div className='gridOng input1'>
                       
                    </div>

                    <div className='gridOng input2'>
                     
                    </div>

                    <div className='gridOng input3'>
                      
                    </div>

                    <div className='gridOng input4'>
                        
                    </div>

                    <div className='gridOng input5'>
                       
                    </div>

                    <div className='gridOng input6Ong'>
                       
                    </div>

                    <div className='gridOng input7'>
                     
                    </div>

                    <div className='gridOng input8Ong'>
                       
                    </div>

                    <div className='gridOng input9'>
                      
                    </div>

                    <div className='gridOng input10'>
                     
                    </div>
                    <div className='btnCadastroOng'>
                     
                    </div>
                     */}
        </FormGrid>
      </ContainerPadraoForm>
    </div>
  );

  function Alerta() {
    return (
      <Alert severity={alertaTipo} sx={{ mt: 3 }}>
        {alerta}
      </Alert>
    );
  }

  function AlertaVermelho() {
    return (
      <Alert variant="filled" severity="error" sx={{ mt: 3 }}>
        {alerta}
      </Alert>
    );
  }
};

export default CadastroOng;

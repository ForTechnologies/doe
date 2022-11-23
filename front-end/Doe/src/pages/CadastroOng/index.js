import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style.js';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import rotaVoltar from '../../assets/Voltar.png'
import BtnPadrao from '../../components/botoes/style'
import { FormGrid, InputPadrao, InputMenorPadrao, TextoEntre } from '../../components/Forms/styleForms'
import estados from '../../utils/estados.js';
import { cnpjMask } from '../../utils/cnpjMask'



/* <Link to="/">retornar a página inicial</Link> */



const CadastroOng = () => {


    const [telefoneInput, setTelefoneInput] = useState("");
    const [cnpjInput, setCnpjInput] = useState("");
    const [estadoInput, setEstadoInput] = useState("");


    // constante e método responáveis pela máscara de formatação do cnpj
    // https://medium.com/reactbrasil/m%C3%A1scara-de-cnpj-com-react-regex-bafb58d2285e
    const [values, setValues] = useState({ cnpj: '' })
    const inputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }



    



    return (


        <div className='container'>
            <ContainerPadraoFoto>
                <div>
                    <img src={fotoContainerOng} alt="descricao" />
                </div>
            </ContainerPadraoFoto>

            <ContainerPadraoForm>
                <TextoEntre>
                    <div className='rotaVoltar'>
                        <Link to="/"><img src={rotaVoltar} alt="descricao" /></Link>
                    </div>

                    <div className='textEntreCadastroOng'>
                        <h1>Junte-se a nos!</h1>
                    </div>
                </TextoEntre>


                <FormGrid>
                    <div className='gridOng input1'>
                        <InputPadrao>
                            <label>Nome do dirigente *:</label>
                            <input
                                id="idNome"
                                type="text"
                                text="Nome do dirigente *"
                                name="teste"
                                placeholder="Digite o nome"
                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input2'>
                        <InputPadrao>
                            <label>Nome da ong *:</label>
                            <input
                                type="text"
                                text="NomeOng"
                                name="teste"
                                placeholder="Digite o nome da ong"

                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input3'>
                        <InputPadrao>
                            <label>Email principal *:</label>
                            <input
                                id="emailPrincipal"
                                type="text"
                                text=" *"
                                name="teste"
                                placeholder="Digite o email principal"
                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input4'>
                        <InputPadrao>
                            <label>Endereço *:</label>
                            <input
                                type="text"
                                text="Endereço *"
                                name="teste"
                                placeholder="Digite o endereço da ong"
                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input5'>
                        <InputPadrao>
                            <label>CNPJ da ong *:</label>
                            <input onInput={(evento) => { setCnpjInput(cnpjMask(evento.target.value)) }}
                                type="text"
                                name="cnpj"
                                placeholder='XX.XXX.XXX/XXXX-XX'
                                value={cnpjMask(values.cnpj)} //exibe a formatação correta
                                onChange={inputChange}//formata o cnpj a cada numero digitado
                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input6Ong'>
                        <InputMenorPadrao>
                            <label>Numero *:</label>
                            <input
                                type="number"
                                text="Numero *"
                                name="teste"
                                placeholder="Numero da rua"
                                required />
                        </InputMenorPadrao>

                        <InputMenorPadrao>
                            <Input
                                type="text"
                                text="Bairro *"
                                name="teste"
                                placeholder="Bairro da ong"
                                required> </Input>
                        </InputMenorPadrao>
                    </div>

                    <div className='gridOng input7'>
                        <InputPadrao>
                            <label>Telefone da ong *:</label>

                            <input onInput={(evento) => { setTelefoneInput(evento.target.value) }}
                                className="input1"
                                type="number"
                                text="Email"
                                name="telefone"
                                placeholder="(11) 11111-1111"
                                // value={telefoneMask(valuesTel.telefone)}
                                // onChange={inputChangeTel}
                                required />

                        </InputPadrao>
                    </div>

                    <div className='gridOng input8Ong'>
                        <InputMenorPadrao>
                            <label>Estado *:</label>
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
                            <Input
                                type="text"
                                text="Cidade *"
                                name="teste"
                                placeholder="Selecione sua cidade"
                                required>
                            </Input>
                        </InputMenorPadrao>
                    </div>

                    <div className='gridOng input9'>
                        <InputPadrao>
                            <label>Senha *:</label>
                            <input
                                type="password"
                                name="senha"
                                placeholder="Digite uma senha forte"
                                required />
                        </InputPadrao>
                    </div>

                    <div className='gridOng input10'>
                        <InputPadrao>
                            <Input type="text"
                                text="Causa *"
                                name="teste"
                                placeholder="Resumo sobre a causa da ong"
                                required>
                            </Input>
                        </InputPadrao>
                    </div>
                    <div className='btnCadastroOng'>
                        <BtnPadrao>
                            REGISTRAR CONTA
                        </BtnPadrao>
                    </div>
                </FormGrid>
            </ContainerPadraoForm>
        </div>

    );

}

export default CadastroOng;
import React from "react";
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style.js';
import fotoContainerOng from '../../assets/img-cadastroOng/fotoContainerOng.png'
import rotaVoltar from '../../assets/Voltar.png'
//import Input from '../../components/Forms/input.js';
import {BtnPadraoFuncao} from '../../components/botoes/index.js'
import { FormGrid, InputPadrao, InputMenorPadrao, TextoEntre } from '../../components/Forms/styleForms'
/* <Link to="/">retornar a página inicial</Link> */






const CadastroOng = () => {

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
                            <Input 
                            
                            type="text"
                                text="Nome do dirigente *"
                                name="teste"
                                placeholder="Digite o nome"
                                required > </Input>
                        </InputPadrao>
                    </div>

                    <div className='gridOng input2'>
                        <InputPadrao>
                            <Input
                             type="text"
                                text="Email de contato *"
                                name="teste"
                                placeholder="Digite o email principall"
                                required> </Input>
                        </InputPadrao>
                    </div>

                    <div className='gridOng input3'>
                        <InputPadrao>
                            <Input 
                             type="text"
                                text="Nome da ong *"
                                name="teste"
                                placeholder="Digite seu email"
                                required> </Input>
                        </InputPadrao>
                    </div>

                    <div className='gridOng input4'>
                        <InputPadrao>
                            <Input
                             type="text"
                                text="Endereço *"
                                name="teste"
                                placeholder="Digite o endereço da ong"
                                required> </Input>
                        </InputPadrao>
                    </div>

                    <div className='gridOng input5'>
                        <InputPadrao>
                            <Input 
                             type="text"
                                text="Senha *"
                                name="teste"
                                placeholder="Defina uma senha forte"
                                required > </Input>
                        </InputPadrao>
                    </div>

                    <div className='gridOng input6Ong'>
                        <InputMenorPadrao>
                            <Input 
                            type="text"
                                text="Numero *"
                                name="teste"
                                placeholder="Numero da rua"
                                required> </Input>
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
                            <Input 
                            className="input1" 
                            type="text"
                                text="Email"
                                name="CNPJ *"
                                placeholder="xx.xxx.xxx/xxxx-xx"  
                                required >
                                    
                                     </Input>

                        </InputPadrao>
                    </div>

                    <div className='gridOng input8Ong'>
                        <InputMenorPadrao>
                            <Input
                             type="text"
                                text="Estado *"
                                name="teste"
                                placeholder="Selecione sua UF"
                                required> </Input>
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
                            <Input
                            type="text"
                                text="Telefone *"
                                name="teste"
                                placeholder="Digite o telefone principal"
                                required>
                            </Input>
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
                        <BtnPadraoFuncao text='REGISTRAR CONTA'>
                        </BtnPadraoFuncao>
                    </div>
                </FormGrid>
            </ContainerPadraoForm>
        </div>

    );
    
    }

export default CadastroOng;
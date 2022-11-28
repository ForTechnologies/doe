import React from 'react'
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';

import { Link } from 'react-router-dom';


import { Header } from '../../components/Headeer/header';

import ContaConfigStyled from './telaConfigStyled';

import IconeFecharModal from '../../assets/fecharModal.png'


import ModalEdtEndereco from '../../components/pontos/ModalEdtEndereco'

import Mapa from "../../components/pontos/Mapa";
import Cards from '../../components/pontos/Cards';


function ContaOngTelaConfig({onOpen = () => {}}) {

    const [isModalEnderecoVisible, setModalEnderecoVisible] = React.useState(false);



    return (

        <>



            <Header></Header>
            <ContaOngEstrutura></ContaOngEstrutura>


            <ContaConfigStyled>

                <div className='containerTelaConfig blurColor'>


                    <div className='divCardContainer'>


                        <div className='TituloPrincipalConfig'>

                            <div className='titulo'>Alterar configuraçoes </div>
                            <div className='iconeFecharModal'>
                                <Link to="/PerfilOng"><img src={IconeFecharModal}></img></Link>
            
                            </div>
                        </div>




                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Foto de perfil</div>
                                <div  className='editarConfig'>Editar</div>
                                


                            </div>
                            <div className='conteudoConfig'>

                                <div className='centroPadrao'>
                                    <img src={IconeFecharModal}></img>
                                </div>



                            </div>
                        </div>



                        <div className='divisaoConfig'>
                        {isModalEnderecoVisible ? <ModalEdtEndereco onClose={() => setModalEnderecoVisible(false)} /> : null}
                            <div className='tituloConfig'>
                                <div>Foto capa</div>
                                <div className='editarConfig'>Editar</div>
                                <Mapa onOpen={() => setModalEnderecoVisible(true)} />
                                <Mapa onOpen={() => setModalEnderecoVisible(true)} />


                            </div>
                            <div className='conteudoConfig'>
                                <div className='centroPadrao'>
                                    <img src={IconeFecharModal}></img>
                                </div>

                            </div>
                        </div>



                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Biografia</div>
                                <div className='editarConfig'>Editar</div>

                            </div>
                            <div className='conteudoConfig'>

                                <div className='biografiaTexto'>

                                    <p>Nos destinado a arrecadação de agasalhos da ong
                                        @juntosNoInverno.  Nossa campanha tem como meta agasalhar
                                        mais de 100 moradores de rua localizados......</p>
                                </div>



                            </div>
                        </div>


                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Dados da entiedade</div>
                                <div className='editarConfig'>Editar</div>
                            </div>
                            <div className='conteudoConfig'>
                                <div className='dadosDaEntiedade'>


                                    <p>Projeto Formalizado: sim</p>
                                    <p>Razão Social: ASSOCIACAO COMUNITARIA ONG ROBERSOM CLEMENTE MONTE
                                    </p>
                                    <p>CNPJ: 36.410.601/0001-10
                                    </p>
                                    <p>Situação Cadastral: Ativa desde 04/02/2020
                                    </p>
                                    <p>Dirigente: Santos
                                    </p>
                                    <p>Endereço: R. Dr. Carlos de Rezende Enout, 268 - Parque Doroteia - 04475-490 - São Paulo - SP</p>



                                </div>


                            </div>
                        </div>


                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Transferencia bancaria</div>
                                <div className='editarConfig'>Editar</div>
                            </div>
                            <div className='conteudoConfig'>

                                <div className='dadosDaEntiedade'>


                                    <p>Banco: Cora Sociedade de Crédito Direto S.A. - 403
                                    </p>
                                    <p>Agência: 0001
                                    </p>
                                    <p>Conta Corrente: 1960273-2
                                    </p>
                                    <p>CNPJ: 36.410.601/0001-10
                                    </p>
                                    <p>Chave Pix: 36410601000110
                                    </p>
                                    <p>Beneficiário: ASSOCIACAO COMUNITARIA ONG ROBERSOM CLEMENTE MONTE
                                    </p>



                                </div>
                            </div>
                        </div>


                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Doacoes aceitas</div>
                                <div className='editarConfig'>Editar</div>
                            </div>
                            <div className='conteudoConfig'>
                                <div className='dadosDaEntiedade'></div>
                                <ul>
                                    <li>Alimentos</li>
                                    <li>Kits de higiene</li>
                                    <li>Dinheiro</li>
                                    <li>Roupas</li>


                                </ul>

                            </div>
                        </div>


                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Sobre</div>
                                <div className='editarConfig'>Editar</div></div>
                            <div className='conteudoConfig'>

                                <div className='divContTextoSobre'>
                                    <div className='tituloSobreOng'>Quem Somos
                                    </div>
                                    <div className='textoSobreOng'>
                                        A ONG RCM é uma organização sem fins lucrativos! Trabalhamos com as comunidades
                                        para identificar problemas e encontrar soluções. Desta forma você muda a vida de
                                        uma criança e de todas as pessoas ao seu redor.
                                    </div>
                                </div>


                                <div className='divContTextoSobre'>
                                    <div className='tituloSobreOng'>O Que Fazemos

                                    </div>
                                    <div className='textoSobreOng'>
                                        Nós da equipe ONG RCM trabalhamos incansavelmente para levar esperança
                                        de um futuro melhor para as famílias em estado de calamidade devido ao Covid-19!

                                    </div>
                                </div>

                                <div className='divContTextoSobre'>
                                    <div className='tituloSobreOng'>Como surgimos


                                    </div>
                                    <div className='textoSobreOng'>
                                        Surgimos com uma simples idéia,que o pouco para mim, pode ser
                                        muito para uma família carente! Somado à isso, iniciamos um trabalho
                                        maravilhoso com a intenção de fazer a diferença em nossa comunidade.

                                    </div>
                                </div>

                                <div className='divContTextoSobre'>
                                    <div className='tituloSobreOng'>Missão

                                    </div>
                                    <div className='textoSobreOng'>
                                        Simplesmente, mostrar para cada pessoa o que ela tem de direito como cidadão!

                                    </div>
                                </div>

                                <div className='divContTextoSobre'>
                                    <div className='tituloSobreOng'>Quem Somos
                                    </div>
                                    <div className='textoSobreOng'>
                                        As circunstâncias do dia à dia amendrontam as famílias que
                                        vivem em vulnerabilidade social, sobretudo com um trabalho
                                        como esse acreditamos que cada uma dessas pessoas, conquistará os
                                        seus direitos!
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/* <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Titulo</div>
                                <div className='editarConfig'>Editar</div>
                            </div>
                            <div className='conteudoConfig'>

                            

                            </div>
                        </div> */}


                    </div>








                </div>

            </ContaConfigStyled>

        </>

    )
}

export default ContaOngTelaConfig;
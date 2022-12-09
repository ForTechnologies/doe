import React, { useState, useEffect } from "react";

import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';

import { Link } from 'react-router-dom';


import { Header } from '../../components/Headeer/header';

import ContaConfigStyled from './telaConfigStyled';

import IconeFecharModal from '../../assets/fecharModal.png'

import PerfilOng from '../../assets/capaOng.webp'

import FotoCapaOng from '../../assets/fotoCapaOng.webp'




// import ModalEdtEndereco from '../../components/pontos/ModalEdtEndereco'

// import Mapa from "../../components/pontos/Mapa";
// import Cards from '../../components/pontos/Cards';


function ContaOngEditarDados() {


    // const [isModalEnderecoVisible, setModalEnderecoVisible] = React.useState(false);

    const [descricaoInput, setDescricaoInput] = useState("Comunidade destinada a ajudar pessoas em situacao de rua, somos os anjos da noite e passamos a madrugada determinados a confortar e alimentar moradores em vunerabilidade em sao paulo capital. Trazendo esperanca, alimento, agasalhos, itens de limpeza e tudo o que alcancamos para tornar o dia das pessoas em maior vulnerabilidade melhor! Estamos atuando desde 2006 e com sua ajuda, conseguimos ir alem e ajudar mais vidas!");
    
    const [editavel, setEditavel] = useState(false);
    





    //dados da entiedade
    
    const [projetoFormalizadoInput, setProjetoFormalizado] = useState("Nao");
    const [razaoSocialInput, setRazaoSocial] = useState("ASSOCIACAO COMUNITARIA ONG ROBERSOM CLEMENTE MONTE");
    const [CNPJInput, setCnpjInput] = useState("36.410.601/0001-10");
    const [dirigenteInput, setDirigente] = useState("Santos");
    const [enderecoInput, setEndereco] = useState("R. Dr. Carlos de Rezende Enout, 268 - Parque Doroteia - 04475-490 - São Paulo - SP");




    //dados da entiedade
    const [editavelDadosDaEntiedade, setEditavelDadosDaEntiedade] = useState(false);


    //dados de transferencia
    const [bancoInput, setBanco] = useState("Inter");
    const [agenciaInput, setagencia] = useState("001");
    const [beneficiarioInput, setBeneficiarioInput] = useState("ASSOCIACAO COMUNITARIA ONG ROBERSOM CLEMENTE MONTE");
    const [contaCorrentInput, setContaCorrente] = useState("1960273-2");
    const [chavePixInput, setChavePix] = useState("36410601000110");



    const [editavelTransferenciaBancaria, setEditavelTransferenciaBancaria] = useState(false);



    // function teste() {
    //     sessionStorage.getItem
    // }


    return (

        <>



            <Header></Header>
            <ContaOngEstrutura></ContaOngEstrutura>


            <ContaConfigStyled>

                <div className='containerTelaConfig blurColor'>


                    <div className='divCardContainer'>






                        <div className='TituloPrincipalConfig'>

                            <div className='tituloConfigPrinc'>Alterar configuraçoes </div>
                            <div className='iconeFecharModal'>
                                <Link to="/PerfilOng"><img src={IconeFecharModal}></img></Link>

                            </div>
                        </div>




                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Foto de perfil</div>
                                <div className='editarConfig'>Editar</div>



                            </div>
                            <div className='conteudoConfig'>

                                <div className='centroPadrao'>
                                    <img src={PerfilOng}></img>
                                </div>



                            </div>
                        </div>



                        <div className='divisaoConfig'>

                            <div className='tituloConfig'>
                                <div>Foto capa</div>
                                <div className='editarConfig'>Editar</div>
                            </div>
                            <div className='conteudoConfig'>
                                <div className='centroPadrao'>
                                    <img src={FotoCapaOng}></img>
                                </div>

                            </div>
                        </div>





                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Biografia</div>
                                <div className='editarConfig'
                                    onClick={() => setEditavel(!editavel)}
                                  >Editar</div>

                            </div>
                            <div className='conteudoConfig'>

                                <div className='biografiaTexto'>
                                    <textarea
                                        maxLength={250}
                                        className={editavel ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavel}
                                        defaultValue={descricaoInput}
                                        onChange={(e) => setDescricaoInput(e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>





                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Dados da entiedade</div>
                                <div className='editarConfig'
                                 onClick={() => setEditavelDadosDaEntiedade(!editavelDadosDaEntiedade)}
                                
                                >Editar</div>
                            </div>
                            <div className='conteudoConfig'>
                                <div className='dadosDaEntiedade'>


                                    <p>Projeto Formalizado:  
                                        <input
                                        className={editavelDadosDaEntiedade ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelDadosDaEntiedade}
                                        type="text"
                                        defaultValue={projetoFormalizadoInput}
                                        onChange={(e) => setProjetoFormalizado(e.target.value)} ></input>  
                                        </p>


                                    <p>Razão Social:
                                    <input
                                        className={editavelDadosDaEntiedade ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelDadosDaEntiedade}
                                        type="text"
                                        defaultValue={razaoSocialInput}
                                        onChange={(e) => setRazaoSocial(e.target.value)} ></input>  
                                        
                                    </p>
                                    <p>CNPJ: 36.410.601/0001-10
                                
                                    <input
                                        
                                        className={editavel ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavel}
                                        defaultValue={CNPJInput}
                                        onChange={(e) => setCnpjInput(e.target.value)}></input>
                                    </p>
                                    
                                    <p>Dirigente: Santos
                                    <input
                                        
                                        className={editavel ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavel}
                                        defaultValue={dirigenteInput}
                                        onChange={(e) => setDirigente(e.target.value)}></input>

                                    </p>
                                    <p>Endereço:

                                    <input
                                        
                                        className={editavel ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavel}
                                        defaultValue={enderecoInput}
                                        onChange={(e) => setEndereco(e.target.value)}></input>

                                    </p>
                                    <p>Situação Cadastral: Ativa desde 04/02/2020
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='divisaoConfig'>
                            <div className='tituloConfig'>
                                <div>Transferencia bancaria</div>
                                <div className='editarConfig'
                                 onClick={() => setEditavelTransferenciaBancaria(!editavelTransferenciaBancaria)}
                                >Editar</div>
                            </div>
                            <div className='conteudoConfig'>

                                <div className='dadosDaEntiedade'>


                                    <p>Banco: 
                                    <input
                                        className={editavelTransferenciaBancaria ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelTransferenciaBancaria}
                                        type="text"
                                        defaultValue={bancoInput}
                                        onChange={(e) => setBanco(e.target.value)} ></input>  

                                    </p>
                                    <p>Agência: 
                                    <input
                                        className={editavelTransferenciaBancaria ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelTransferenciaBancaria}
                                        type="text"
                                        defaultValue={agenciaInput}
                                        onChange={(e) => setagencia(e.target.value)} ></input>  


                                    </p>
                                    <p>Conta Corrente: 
                                    <input
                                        className={editavelTransferenciaBancaria ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelTransferenciaBancaria}
                                        type="text"
                                        defaultValue={contaCorrentInput}
                                        onChange={(e) => setContaCorrente(e.target.value)} ></input>  


                                    </p>
                                    <p>CNPJ: 36.410.601/0001-10
                                    <input
                                        
                                        className={editavel ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavel}
                                        defaultValue={CNPJInput}
                                        onChange={(e) => setCnpjInput(e.target.value)}></input>

                                    </p>
                                    <p>Chave Pix: 

                                    <input
                                        className={editavelTransferenciaBancaria ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelTransferenciaBancaria}
                                        type="text"
                                        defaultValue={chavePixInput}
                                        onChange={(e) => setChavePix(e.target.value)} ></input>  

                                    </p>
                                    <p>Beneficiário:
                                    <input
                                        className={editavelTransferenciaBancaria ? "input-music-enable" : "input-music-disabled"}
                                        disabled={!editavelTransferenciaBancaria}
                                        type="text"
                                        defaultValue={beneficiarioInput}
                                        onChange={(e) => setBeneficiarioInput(e.target.value)} ></input>  


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


export default ContaOngEditarDados;
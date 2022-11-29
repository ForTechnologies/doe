import React from 'react'
import './Objetivo.css'

export const Objetivo = () => {
    return (
        <div className='objetivoAll' id='objetivo'>
            <div className="objetivo">
                <div className="ong">
                    <h1 className="doador">Voce É Uma Ong Ou Um Doador? </h1>
                    <span className="nosso">
                        Nosso objetivo é unificar e facilitar o encontro de ongs e doadores, <br />
                        formando uma comunidade em prol de ajudar pessoas em situaçao <br />
                        de rua.
                    </span>
                </div>
                <div className="boxes">
                    <div className="boxesSub">
                        <div className="box">
                            <div className="boxSub">
                                <span className="geo">Sistema de geolocalizção</span>
                                <span className="analizar">Atraves do nosso mapa voce pode localizar as <br />
                                    ongs cadastradas em nossa plataforma mais perto <br />
                                    de onde voce esta!
                                </span>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="boxSub">
                                <span className="geo">Comunidade</span>
                                <span className="analizar">Crie uma comunidade para sua ong e receba <br />
                                    diversos membros interessados em ajuda-los! <br />
                                    proporcionando mais conexao
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="boxesSub">
                        <div className="box3">
                            <div className="boxSub">
                                <span className="geo">Publique as campanhas da sua <br />
                                    ong
                                </span>
                                <span className="analizar">sabe aquela arrecadaçao especifica dificil de <br />
                                    conseguir? aqui voce pode lançar todo tipo de <br />
                                    arrecadacao em forma de campanha!
                                </span>
                            </div>
                        </div>
                        <div className="box4">
                            <div className="boxSub">
                                <span className="geo">Encontre todos os detalhes <br />
                                    da ong
                                </span>
                                <span className="analizar">Para criar uma comunidade e ter acesso a mais <br />
                                    doadores, todas as ongs tem que disponibilizar <br />
                                    todas as informacoes que um doador precisa saber
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="boxesSub">
                        <div className="box5">
                            <div className="boxSub">
                                <span className="geo">Torne-se um voluntario</span>
                                <span className="analizar">Sempre quis achar uma ong para se voluntariar? <br />
                                    atraves do doe! voce tem contato com diversas <br />
                                    ongs e pode se voluntariar.
                                </span>
                            </div>
                        </div>
                        <div className="box6">
                            <div className="boxSub">
                                <span className="geo">Ajude pessoas, faça parte da <br />
                                    rede de apoio
                                </span>
                                <span className="analizar">Unidos em prol de ajudar o proximo, aqui voce <br />
                                    encontra pessoas com o mesmo proposito em <br />
                                    comun! sua ajuda faz diferença no mundo.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

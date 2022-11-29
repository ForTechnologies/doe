import React from 'react'
import './Problema.css'
import Moradores from '../../assets/img-home/moradores.png'
import Morador from '../../assets/img-home/morador2.png'
import Fundo from '../../assets/img-home/fundoPreto.png'

export const Problema = () => {
    return (
        <div className='problemaAll' id='problema'>
            <div className="problema">
                <div className="tituloProblema">
                    <span className="doeProblema">DOE!</span>
                    <h1 className="seja">Seja A Esperança Na Vida De Alguem </h1>
                </div>
                <div className="situacao">
                    <div className="aumentam">
                        <div className="rua">
                            <h2 className="subTexto">
                                Pessoas em situacao de rua só <br />
                                aumentam
                            </h2>
                            <span className="infoProblema">
                                Com uma taxa enorme de desemprego no Brasil de <br />
                                11,1%, Analfabetismo e inflação a pobreza segue <br />
                                aumentando, um indicativo disso é a pesquisa do IPEA <br />
                                que nos mostra que a quantidade de pessoas <br />
                                desabrigadas só aumentam, de acordo com os dados <br />
                                do CENSO SUAS, de setembro de 2012 até Março de <br />
                                2020 o aumento de pessoas em situação de rua foi de <br />
                                139%
                            </span>
                        </div>
                        <img src={Moradores} alt="" />
                    </div>
                    <div className="aumentam doacoes">
                        <img src={Morador} alt="" />
                        <div className="rua">
                            <h2 className="subTexto">
                                Pessoas em situaçao de rua precisam <br />
                                doaçoes
                            </h2>
                            <span className="infoProblema">
                                A vida nas ruas os expõe a constantes situações de <br />
                                violência física e psíquica, o morador de rua perde <br />
                                todos os direitos sociais e torna-se uma pessoa <br />
                                invisível para a sociedade, passando por varias <br />
                                dificuldades, como fome, higiene, falta de itens <br />
                                basicos e etc... podemos lutar contribuindo para uma <br />
                                sociedade mais justa e igualitária atraves da doaçao <br />
                                aos que necessitam.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preto">
                <div className="sabia">
                    <div className="voceInfo">
                        <h3 className="voce">Voce sabia?</h3>
                        <span className="existem">
                            <span className="subTexto">Existem  +815 mil ongs ativas no brasil. <br /></span>
                            Apesar do grande numero, ainda não é o suficiente por conta da <br />
                            maioria dessas organizações partirem de pessoas simples, sem muita <br />
                            renda e com o puro desejo de ajudar o próximo, muita das vezes as <br />
                            pessoas nem sabem da existencia dessas ongs por não ter alcance e <br />
                            divulgação  o suficiente, o que torna um grande desafio para a <br />
                            jornada.
                        </span>
                    </div>
                </div>
                <img src={Fundo} alt="" />
            </div>
        </div>
    )
}

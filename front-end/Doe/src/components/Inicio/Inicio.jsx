import React from 'react'
import './Inicio.css'
import Circulo from '../../assets/img-home/circulo.png'
import Home from '../../assets/img-home/home.png'
import Seta from '../../assets/img-home/seta.svg'
import SetaBranca from '../../assets/img-home/seta-branca.png'
import SetaBranca2 from '../../assets/img-home/seta-branca2.png'

export const Inicio = () => {
    return (
        <div className='inicioAll' id='home'>
            <div className="inicio">
                <div className="homeBorder">
                    <div className="home">
                        <div className="subs">
                            <img src={Circulo} alt="" className='circulo' />
                            <span className="sub">Voce pode mudar a vida de alguem</span>
                        </div>
                        <h1 className="titulo">Encontre pontos de <br />
                            doações, ajude pessoas</h1>
                        <span className="informacao">No Doe! voce encontra as ongs mais proximas do seu<br />
                            endereço. Venha fazer parte dessa grande rede de apoio <br />
                            e ajude pessoas em situação de rua
                        </span>
                        <div className="buttonsInicio">
                            <div className="comecar">
                                <span className="comeco">Começar</span>
                                <img src={Seta} alt="" className='seta'/>
                            </div>
                            <div className="saiba">
                                <img src={SetaBranca} alt="" /> 
                                <span className="mais">Saiba Mais</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Home} alt="" className='fundo' />
            </div>
        </div>
    )
}

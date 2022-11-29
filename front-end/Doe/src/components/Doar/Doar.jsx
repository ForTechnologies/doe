import React, { useState } from 'react'
import './Doar.css'
import User from '../../assets/img-home/user.png'
import Gps from '../../assets/img-home/gps.png'
import Heart from '../../assets/img-home/heart.png'
import Seta from '../../assets/img-home/seta.svg'
import SetaCima from '../../assets/img-home/seta-cima.png'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

export const Doar = () => {

    const navigate = useNavigate();

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className='doarAll' id='doar'>
            <div className="doar">
                <div className="doeDoar">
                    <h1 className='doeH1'>DOE<span className="esclamacao">!</span></h1>
                    <span className="plataforma">Na nossa plataforma voce encontra diversas ongs e <br />
                        camapanhas voltadas a ajudar pessoas em situaçao de rua, <br />
                        doar nunca foi tao facil!
                    </span>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="subCard">
                            <img src={User} alt="" />
                            <span className="titleCard">
                                Cadastra-se na <br />
                                nossa plataforma
                            </span>
                            <span className="infoCard">
                                No doe! voce demora poucos <br />
                                minutos para criar seu <br />
                                cadastro, como doador ou <br />
                                como ong.
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="subCard">
                            <img src={Gps} alt="" />
                            <span className="titleCard">
                                Procure ongs e <br />
                                campanhas
                            </span>
                            <span className="infoCard">
                                Voce pode encontrar varias <br />
                                ongs proximas de sua <br />
                                localizaçao.
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="subCard">
                            <img src={Heart} alt="" />
                            <span className="titleCard">
                                Realize doaçoes <br />
                                de diversos tipos
                            </span>
                            <span className="infoCard">
                                Encontre todas as <br />
                                informaçoes, campanhas e <br />
                                motivaçoes das ongs que <br />
                                queira doar, atraves do doe!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="setas">
                    <div className="buttonDoar" onClick={() => navigate("/cadastroDoador")}>
                        <span className="cadDoar">Cadastre-se agora</span>
                        <img src={Seta} alt="" />
                    </div>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}><img src={SetaCima} alt="" className='setaCima'/></Link>
                </div>
            </div>
        </div>
    )
}

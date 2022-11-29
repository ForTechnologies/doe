import React from 'react'
import './Footer.css'
import Fundo from '../../assets/img-home/fundo-cinza.png'
import Instagram from '../../assets/img-home/instagram.png'
import Facebook from '../../assets/img-home/facebook.png'
import Github from '../../assets/img-home/github.png'

export const Footer = () => {
    return (
        <div className='footerAll'>
            <div className="footer">
                <div className="direitos">
                    <div className="atendimento">
                        <div className="titleFooter">
                            <span className="titleFo">
                                Atendimento
                            </span>
                            <span className="infoFo">
                                Central de Relacionamento <br />
                                0800 275 6398
                            </span>
                        </div>
                    </div>
                    <div className="atendimento">
                        <div className="titleFooter">
                            <span className="titleFo">
                                Email de contato
                            </span>
                            <span className="infoFo">
                                exemple@gmail.com <br />
                                exemple@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="atendimento">
                        <div className="titleFooter">
                            <span className="titleFo">
                                Nos acompanhe
                            </span>
                            <div className="icones">
                                <img src={Instagram} alt="" />
                                <img src={Facebook} alt="" />
                                <img src={Github} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="autorais">
                    <span className="textAuto">
                        Todos direitos reservados ao @ Copytight 2022
                    </span>
                </div>
                <img src={Fundo} alt="" className='fundo' />
            </div>
        </div>
    )
}

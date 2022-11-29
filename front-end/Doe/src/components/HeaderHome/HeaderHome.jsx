import React, { useState } from 'react'
import './HeaderHome.css'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logoTipoDoe.png'

export const HeaderHome = () => {

    const navigate = useNavigate();

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)


    return (
        <div className='headerAll'>
            <div className="headerContainer">
                <div className="header">
                    <div className="headerHome">
                        <img src={Logo} alt="" />
                        <ul className='menuHome'>
                            <a className='list'><Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></a>
                            <a className='list'><Link to="sobre" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Sobre</Link></a>
                            <a className='list'><Link to="problema" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Problema</Link></a>
                            <a className='list'><Link to="objetivo" spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>Nosso objetivo</Link></a>
                            <a className='list'><Link to="doar" spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>Como doar</Link></a>
                        </ul>
                    </div>
                    <div className="buttonsHome">
                        <button className='entrar' onClick={() => navigate("/login")}>Entrar</button>
                        <button className='criar' onClick={() => navigate("/cadastroDoador")}>Criar conta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

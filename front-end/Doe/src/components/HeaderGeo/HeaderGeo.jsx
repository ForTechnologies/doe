import React, { useState } from 'react'
import './HeaderGeo.css'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logoTipoDoe.png'


export const HeaderGeo = () => {

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
                            <a className='list'><Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Mapa</Link></a>
                            <a className='list'><Link to="doar" spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>Ongs</Link></a>
                        </ul>
                    </div>
                    <div className="buttonsHome">
                        <button className='entrar' onClick={() => navigate("/login")}>Sair</button>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

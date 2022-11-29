import React from 'react'
import { Link } from 'react-scroll'
import './CardsGeo.css'
import Localizacao from '../../assets/localizacao.png';
import Telefone from '../../assets/telefone.png';
import Email from '../../assets/email.png';

export const CardsGeo = () => {
    return (
            <div>
                <div className="sobre">
                    <div>
                    </div>
                    <div className='ong'>
                        <h1 className="list"><Link  to="home" spy={true} smooth={true} offset={0} duration={500}>ONGs PRÓXIMAS DE VOCÊ</Link>
                        </h1>
                        </div>
                        </div>
                <div className="comentarios">
                    <div className="comentOne">
                        <div className="com">
                            <h2>ONG DOE ALIMENTOS</h2>
                            <div className="coment">
                               <img src={Localizacao} alt="" />
                               <span>Rua Tauí, 354 - Jardim Paulista, São Paulo - SP</span>
                        </div>
                        <div className="coment">
                               <img src={Telefone} alt="" />
                               <span>11 2459-8735</span>
                        </div>
                        <div className="coment">
                               <img src={Email} alt="" />
                               <span>ongdoealime@gmail.com</span>
                        </div>
                    </div>
                    <div className="comentTwo">
                        <div className="com">
                            <span className="coment">
                            <h2>ONG DOE ALIMENTOS</h2>
                            <div className="coment">
                               <img src={Localizacao} alt="" />
                               <span>Rua Tauí, 354 - Jardim Paulista, São Paulo - SP</span>
                        </div>
                        <div className="coment">
                               <img src={Telefone} alt="" />
                               <span>11 2459-8735</span>
                        </div>
                        <div className="coment">
                               <img src={Email} alt="" />
                               <span>ongdoealime@gmail.com</span>
                        </div> 
                            </span>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
         
    )
}

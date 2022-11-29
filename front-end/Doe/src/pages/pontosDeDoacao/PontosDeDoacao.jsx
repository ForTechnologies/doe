// import { Component } from "react";
// import React from "react";
// import Header from '../../components/header/Header.jsx';
// import Mapa from "../../components/pontos/Mapa";
// import Cards from '../../components/pontos/Cards';
// import ModalEdtEndereco from '../../components/pontos/ModalEdtEndereco'
// import ModalCardInfo from '../../components/pontos/ModalCardInfo'
// import '../../assets/styles/pontos.css';

// export default function PontosDeDoacao() {

//     const [isModalEnderecoVisible, setModalEnderecoVisible] = React.useState(false);
//     const [isModalCardVisible, setModalCardVisible] = React.useState(false);

//     return (
//         <div>
//             {isModalEnderecoVisible ? <ModalEdtEndereco onClose={() => setModalEnderecoVisible(false)} /> : null}
//             {isModalCardVisible ? <ModalCardInfo onClose={() => setModalCardVisible(true)} /> : null}

//             <Header isLogado={false}></Header>

//             <section className="pontos">
//                 <Mapa onOpen={() => setModalEnderecoVisible(true)} />
//                 <Cards onOpen={() => setModalCardVisible(true)}/>
//             </section>
//         </div>
//     )

// };
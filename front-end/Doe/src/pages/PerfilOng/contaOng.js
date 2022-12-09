import { Link, useParams } from 'react-router-dom';

// import CardCampanhasStyled from '../../components/Campanhas/style'

import CardCampanhasStyled from '../../components/Campanhas/style'

import Gato from '../../assets/fotoCapaOng.webp'


import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';

import api from "../../api";


import Header from '../../components/Headeer/header';


import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';


import foto3 from "../../assets/mocks/capa3.jpeg"
import foto4 from "../../assets/mocks/capa4.jpg"
import foto5 from "../../assets/mocks/capa5.jpg"
import foto6 from "../../assets/mocks/capa6.png"
import foto7 from "../../assets/mocks/capa7.jpeg"



function ContaOng(props) {

  //armazenar os dados dentro de um state com array com todos o sregistros da api
  
  
  // const [listaCampanhas, setListaCampanhas] = useState([]);

  // const [titulo, setTituloInput] = useState(props.titulo);
  // const [descricaoInput, setDescricaoInput] = useState(props.descricao);
  // const [imagemInput, setImagemInput] = useState(props.urlImagem);

  // const [editavel, setEditavel] = useState(false);

  const estilo = {
    backgroundImage: `${props.urlImagem})`
  };


  const [posts, setPosts] = useState([])

  for (let index = 0; index < 5; index++) {
    posts.push(index);

  }



  useEffect(() => {
    // so vai executar depois que o component foi renderizado
    api
      .get("/campanhas/1")
      .then((res) => {
        console.log(res)
        setPosts(res.data.reverse());
        //salvar lista
        localStorage.setItem('campanhas', JSON.stringify(res.data))

      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);


  function deletePost(id) {
    api.delete(`/campanhas/atualizarCampanha/${id}`)
    set(posts.filter(posts => posts.id !== id))
    console.log(id)
  }
   
  
  //carregar listta
  useEffect(() => {
    if(localStorage.getItem('campanhas') !== null ) {
        setPosts(JSON.parse(localStorage.getItem('campanhas')))
    }
  })


  return (
    <>

      <Header></Header>
      <ContaOngEstrutura></ContaOngEstrutura>

      <div className='divEspacoHeaderCampanha containerPaginaCampanha divEspacoHeaderCampanha'>
        <div className="container">
          {/* <div className="music-boxes">
            {posts.map((posts, index) => (
              // <CampanhaEditOng
              //   key={index}
              //   titulo={posts.titulo}
              //   descricao={posts.descricao}
              //   capa={posts.urlImagem}
              //   // id={posts.id}
              //   // funcaoDeletar={deletarCampanha}
              // />

              <CardCampanhasStyled>
        <div className='cardCampanha divEspacoCardCampanha' key={index}>

          <div className='divCapaCampanha'>
            <img src={posts.urlImagem} style={estilo}></img>
          </div>


          <div className='divInformacoesCampanha'>
            <div className='tituloCardCampanha'>
              
              <input
                disabled= "true"
                defaultValue={posts.titulo}
              ></input>
            
            </div>

            <div className='descricaoCardCampanha'>
              <textarea
               disabled= "true"
                maxLength={250}
                defaultValue={posts.descricao}

              />

            </div>
            <div className='divBotaoCardCampanha'>
            <Link to= {{ pathname: `/atualizarCampanha/${posts.id}`}} >
            <button
             className='botaoCardCampanha botaoAtualizarCampanha'>Atualizar</button>
            </Link>
              <button 
              className='botaoCardCampanha botaoExcluirCampanha'
               onClick={() => deletePost(posts.id)}
               > Excluir</button>
            </div>
          </div>
        </div>
      </CardCampanhasStyled>
            
           ))}
          </div> */}


<CardCampanhasStyled>


<div className='cardCampanha divEspacoCardCampanha'>
<div className='divCapaCampanha'>
  <img src={foto4}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha agasalho da noite</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno. Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p></div>
  {/* <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div> */}

<div className='divBotaoCardCampanha'>
            <Link to= {{ pathname: `/atualizarCampanha/${posts.id}`}} >
            <button
             className='botaoCardCampanha botaoAtualizarCampanha'>Atualizar</button>
            </Link>
              <button 
              className='botaoCardCampanha botaoExcluirCampanha'
               onClick={() => deletePost(posts.id)}
               > Excluir</button>
            </div>
            </div>
</div> 


<div className='cardCampanha divEspacoCardCampanha'>
<div className='divCapaCampanha'>
  <img src={foto3}></img>
</div>
<div className='divInformacoesCampanha'>
  <div className='tituloCardCampanha'>Campanha kits de higiene</div>
  <div className='descricaoCardCampanha'>
  <p>Campanha destinado a arrecadação de kits de higiene para a ong anjos da noite. Temos como meta arrecadar mais de 200 kits para pessoas em situacao de rua na grande sao paulo</p></div>
  {/* <div className='divBotaoCardCampanha'>
  <button className='botaoCardCampanha'>Doar</button>
  </div> */}

<div className='divBotaoCardCampanha'>
            <Link to= {{ pathname: `/atualizarCampanha/${posts.id}`}} >
            <button
             className='botaoCardCampanha botaoAtualizarCampanha'>Atualizar</button>
            </Link>
              <button 
              className='botaoCardCampanha botaoExcluirCampanha'
               onClick={() => deletePost(posts.id)}
               > Excluir</button>
            </div>
            </div>
</div> 



  
</CardCampanhasStyled>






        </div>

      </div>


    </>
  )
}

export default ContaOng;
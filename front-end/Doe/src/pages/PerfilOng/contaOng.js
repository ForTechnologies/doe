import { Link, useParams } from 'react-router-dom';

import CardCampanhasStyled from '../../components/Campanhas/style'


import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';

import api from "../../api";


import Header from '../../components/Headeer/header';


import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';


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

  // for (let index = 0; index < 5; index++) {
  //   posts.push(index);

  // }



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
      <div className='divEspacoHeaderCampanha'>


        <div className="container">

          <div className="music-boxes">

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


          </div>
        </div>

      </div>


    </>
  )
}

export default ContaOng;
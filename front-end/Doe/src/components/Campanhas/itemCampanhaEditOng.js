import React, { useState, useEffect } from "react";

import CardCampanhasStyled from './style'
import Gato from '../../assets/gato.webp'

import ItemMusica from "./criarCampanha";


import api from "../../api";



function CampanhaEditOng(props) {

  const meusItems = ['react', 'teste3', 'teste 4']



  const [tituloInput, setTituloInput] = useState("Teste");
  const [descricaoInput, setDescricaoInput] = useState(props.descricao);
  const [imagemInput, setImagemInput] = useState(props.urlImagem);

  // const [editavel, setEditavel] = useState(false);




  // console.log(tituloInput);
  // console.log(descricaoInput);
  // console.log(imagemInput)

  // function editar() {
  //   const musicaEditada = {
  //     titulo: tituloInput,
  //     descricao: descricaoInput,
  //     imagem: imagemInput
  //   };


  //   // /musica-box/{id}
  //   api
  //     .put(`/${props.id}`, musicaEditada)
  //     .then((res) => {
  //       alert("Musica Atualizada!");
  //       setEditavel(false);
  //     })
  //     .catch((erro) => {
  //       alert("Deu erro, se vira!");
  //       console.log(erro);
  //     });

  //   console.log(musicaEditada);
  // }


  return (


    <>


      <CardCampanhasStyled>


        <div className='cardCampanha divEspacoCardCampanha'>
          <div className='divCapaCampanha'>
            <img src={Gato}></img>
          </div>


          <div className='divInformacoesCampanha'>
            <div className='tituloCardCampanha'>
              <input
                type="text"
                defaultValue= "teste"
              ></input>
            </div>

            <div className='descricaoCardCampanha'>
              <textarea
                maxLength={250}
                defaultValue={descricaoInput} />
            </div>
            <div className='divBotaoCardCampanha'>
              <button
                className='botaoCardCampanha botaoAtualizarCampanha'
              >Atualizar</button>
              <button className='botaoCardCampanha botaoExcluirCampanha'>Excluir</button>
            </div>
          </div>
        </div>


      </CardCampanhasStyled>




    </>
  )
}

export default CampanhaEditOng;
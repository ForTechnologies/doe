import React from 'react'
import CardCampanhasStyled from './style';
import Gato from '../../assets/gato.webp'

import api from '../../api';

import { useNavigate } from "react-router-dom";

import CriarCampanhaStyled from './criarCampanhaStyled';
import { registerStyles } from '@emotion/utils';

import {useForm} from 'react-hook-form';
import { AxiosHeaders } from 'axios';



export const CriarCampanha = () => {

    // const navigate = useNavigate();


    // function cadastrar(event) {



      
      //   event.preventDefault();
    
      //   const novaCampanha = {
      //     titulo: event.target.nome.value,
      //     descricao: event.target.descricao.value,
      //     imagem: event.target.imagem.value
      //   };


    
      //   api
      //     .post(`/`, novaCampanha)
      //     .then((resposta) => {
      //       alert("Funcionou");
      //       // navigate("/PerfiOng");
      //       console.log(novaCampanha)
      //     })
      //     .catch((error) => {
      //       alert("Deu erro");
      //       console.log(novaCampanha)
      //       // navigate("/PerfiOng");
      //     });
      // }



      const { register, handleSubmit, formState: { erros } } = useForm();
       


    //  const addPost = data = console.log(data)


     const addPost = data => api.post(`/campanhas`, data)
      .then(() => {
          console.log("deu tudo certo")
          console.log(data)

          // navigate("/");

      } )
      .catch(() => {
        console.log("Deu tudo erado")
        console.log(data)
      })


    


  return (
    

  <>

  <CriarCampanhaStyled>
  
  

  <div className="adicionarCampanhas">
          <div className="formularioAdicionarCampanha">
            <h1>Adicionar campanha</h1>
            <br />
            <form onSubmit={handleSubmit(addPost)}>
            <label>
                {" "}
               Capa da campanha (url): <br />
                <input name="imagem" type="text" {...register("imagem")}/>
              </label>
              <label>
                Titulo: <br />
                <input name="titulo" type="text" {...register("titulo")}/>
              </label>
              <label>
                Descricao: <br />
                <textarea name="descricao" type="text" {...register("descricao")}/>
              </label>
              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>

  
 </CriarCampanhaStyled>
  
  </>

  );
}



export default CriarCampanha;
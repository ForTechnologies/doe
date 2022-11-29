import Header from '../../components/Headeer/header';
import { Link, useParams } from 'react-router-dom';
import {useEffect} from 'react';
import api from '../../api';

// import { useNavigate } from "react-router-dom";

import CriarCampanhaStyled from '../../components/Campanhas/criarCampanhaStyled';

import {useForm} from 'react-hook-form';



export const ContaAtualizarCampanha = () => {

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

     const { id } = useParams()

      const { register, handleSubmit, formState: { erros }, reset } = useForm();
       


    //  const addPost = data = console.log(data)





      useEffect(() => {
      api
      .get("/campanhas/1")
      .then ((response) =>  {
        //reset é responsavel por passar os dados pro input
        reset(response.data)
        localStorage.setItem('campanhas', JSON.stringify(response.data))
      } )
      
      }, [])


      const addPost = data => api.put(`/campanhas/${id}`, data)
      .then(() => {
          console.log("deu tudo certo")
          console.log(data)
          localStorage.setItem('campanhas', JSON.stringify(data))


          // navigate("/");

      } )
      .catch(() => {
        console.log("Deu tudo erado")
        console.log(data)
      })


      

  return (
    

  <>
  <Header></Header>

  <CriarCampanhaStyled>
  
  <div className='containerAtualizarCampanha divEspacoHeader'> 
  <div className="adicionarCampanhas">
          <div className="formularioAdicionarCampanha">
            <h1>Atualizar campanha</h1>
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
              <Link to="/PerfilOng">
              <button  className="btn-voltar" type="submit">
               Voltar
              </button></Link>
              
            </form>
          </div>
          <div className="img-lateral">
            <img src='' alt="" />
          </div>
        </div>
  
        </div>
  



  
 </CriarCampanhaStyled>
  
  </>

  );
}



export default  ContaAtualizarCampanha;
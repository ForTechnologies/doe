// mport React, { useState, useEffect } from "react";

// import CardCampanhasStyled from './style'
// import Gato from '../../assets/gato.webp'

// import ItemMusica from "./criarCampanha";


// import api from "../../api";



// function CampanhaEditOng(props) {

//   const meusItems = ['react', 'teste3', 'teste 4']



//   const [tituloInput, setTituloInput] = useState(props.titulo);
//   const [descricaoInput, setDescricaoInput] = useState(props.descricao);
//   const [imagemInput, setImagemInput] = useState(props.urlImagem);

//   const [editavel, setEditavel] = useState(false);


   

//   console.log(tituloInput);
//   console.log(descricaoInput);
//   console.log(imagemInput)

//   function editar() {
//     const musicaEditada = {
//       titulo: tituloInput,
//       descricao: descricaoInput,
//       imagem: imagemInput
//     };


//     // /musica-box/{id}
//     api
//       .put(`/${props.id}`, musicaEditada)
//       .then((res) => {
//         alert("Musica Atualizada!");
//         setEditavel(false);
//       })
//       .catch((erro) => {
//         alert("Deu erro, se vira!");
//         console.log(erro);
//       });

//     console.log(musicaEditada);
//   }


//   return (


//     <>


//       <CardCampanhasStyled>


//         <div className='cardCampanha divEspacoCardCampanha'>

//           <div className='divCapaCampanha'>
//             <img src={imagemInput}></img>
//           </div>


//           <div className='divInformacoesCampanha'>
//             <div className='tituloCardCampanha'>
//             <strong
//                 className={editavel ? "strong-music-enable" : "strong-music-disabled"}
//                 disabled={!editavel}
//                >Titulo da campanha: </strong>
//               <input
//                 className={editavel ? "input-music-enable" : "input-music-disabled"}
//                 disabled={!editavel}
//                 type="text"
//                 defaultValue={tituloInput}
//                 onChange={(e) => setTituloInput(e.target.value)}
//               ></input>
//             </div>

//             <div className='descricaoCardCampanha'>
//             <strong
//                 className={editavel ? "strong-music-enable" : "strong-music-disabled"}
//                 disabled={!editavel}
//                >Descricao da campanha: </strong>
//               <textarea
//               maxLength={250}
//                 className={editavel ? "input-music-enable" : "input-music-disabled"}
//                 disabled={!editavel}
//                 defaultValue={descricaoInput}
//                 onChange={(e) => setDescricaoInput(e.target.value)}

//               />


            
//               {/* <p>Campanha destinado a arrecadação de agasalhos da ong @juntosNoInverno.
//                  Nossa campanha tem como meta agasalhar mais de 100 moradores de rua localizados......
//                  Campanha destinado a arrecadação de agasalhos.  Nossa campanha...</p> */}

//             </div>


//             <div className="inputAtualizarCapa">
//               <strong
//                 className={editavel ? "strong-music-enable" : "strong-music-disabled"}
//                 disabled={!editavel}
//                >Imagem da capa: </strong>
//               <input
//                 className={editavel ? "input-music-enable" : "input-music-disabled"}
//                 disabled={!editavel}
//                 type="text"
//                 defaultValue={imagemInput}
//                 onChange={(e) => setImagemInput(e.target.value)}

//               >

//               </input>
//             </div>



//             <div className='divBotaoCardCampanha'>
//               <button
//                 onClick={() => setEditavel(!editavel)}
                 
//                 className='botaoCardCampanha botaoAtualizarCampanha'
//                 // onClick={editar}
//                 >Atualizar</button>
//               <button className='botaoCardCampanha botaoExcluirCampanha'>Excluir</button>

//             </div>


//           </div>
//         </div>


//       </CardCampanhasStyled>




//     </>
//   )
// }

// export default CampanhaEditOng;
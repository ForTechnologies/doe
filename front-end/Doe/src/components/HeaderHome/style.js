
import "../../styles/login.css";
import styled from 'styled-components';



export const HeaderStyle = styled.div`

//box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
  
     
    .botoesHeader {
      margin
    }

    .palavrasHeader .marcado{
      border: 3px solid #FFA501;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 86px;
      height: 0px;
      left: 339px;
      top: 65px;
    }


    .palavrasHeader{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 19px;
      
      position: absolute;
      width: 683px;
      height: 32px;
      left: 347px;
      top: 30px;
    }


     .containerHeader {
      flex-direction: column;
     height: 12vh;
     width: 100%;
     position: absolute;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     background-color: #FFFFFF;
     box-shadow: 0px 0px 4px black;
     z-index: 200;
     left: 0px;
     top: 0px;
  }

     }


    
     
     div {
        
        text-decoration: none;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      
          }


          .logoTipoDoe {
            height: 50px;
            width: 100px;
            margin-left: 15%;
           

          }



          input {
            width: 300px;
            height: 40px;
            background-color: #D9D9D9;
            border-radius: 10px;
            border: 1px solid grey;
            font-size: 15px;
            padding-left: 110px;
          }


          .iconeBusca {
            width: 20px;
            height: 20px;
            position: relative;
            top: 0px;
            left: 195px;
          }


          .notificacaoIcone {
            width: 25px;
            
          }


          .divHeaderLogo {
             
              justify-content: flex-start;
          }









    .navBarVertical {
    overflow: auto;
    position: fixed;
    width: 18%;
    height: 100vh;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 4px 0px gray;
    display: inline-block;
    justify-content: center;
    align-items: center;
    content: max;

}

.fotoComunidadeNavBarVertical {
  background-color: #FFFFFF;
  margin-top: 130px;
}



.fotoComunidadeNavBarVertical img {
       
         width: 120px;
         height: 120px;
         background-color: aliceblue;
         border-radius: 70px;
         //transform: translate(30%, -100%);


    }

    .divTextFotoPerfil {
      width: 100%;
      height: 60px;
      font-weight: bold;
    }


    .divListaPaginas {
      height: 22%;
      width: 100%;
      display: flex;


    }


    .divListaPaginas ul {
      height: 50px;
      width: 80%;
      display: inline-block;
      margin-left: 10%;

    }


    .divListaPaginas li{
      width: 100%;
      height: 40px;
      display: flex;
  

    }

    .divListaPaginas a {
      width: 90%;
      height: auto;
      display: flex;
      align-items: center;
      border-bottom: 1px solid grey;

    }



    .divBotaoNavBar {
      width: 100%;
      height: 250px;
    }

    .buttonNavBar {
      height: 40px;
    width: 120px;
    background-color: #FFA501;
    border: 0;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 200;
    cursor: pointer;


    }

















         
`

// const Header = (props) => {


//     return (

//        <div>teste</div>
//     );
// };


export default HeaderStyle;



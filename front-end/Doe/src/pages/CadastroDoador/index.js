import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Forms/input.js';
import rotaVoltar from '../../assets/Voltar.png'
import { ContainerPadraoForm, ContainerPadraoFoto } from '../../components/Containers/style.js';
import fotoContainerDoador from '../../assets/img-cadastroDoador/containerFotoDoador.png'
//import Input from '../../components/Forms/input.js';
import BtnPadraoFuncao from '../../components/botoes/index.js'
import { FormGrid, InputPadrao, InputMenorPadrao, TextoEntre } from '../../components/Forms/styleForms'





/* <Link to="/">retornar a página inicial</Link> */


const cadastroDoador = () => {





  return (


    <div className='container'>
      <ContainerPadraoFoto>
        <div>
          <img src={fotoContainerDoador} alt="descricao" />
        </div>
      </ContainerPadraoFoto>

      <ContainerPadraoForm>
        <TextoEntre>
        <div className='rotaVoltar'>
                        <Link to="/"><img src={rotaVoltar} alt="descricao" /></Link>
                    </div>
          <div className='textEntreCadastroDoador'>
            <h1>Junte-se a nós!</h1>
          </div>
        </TextoEntre>
        <FormGrid>
        
          <div className='gridDoador input1'>
            <InputPadrao>
              <Input type="text"
                text="Nome *"
                name="teste"
                placeholder="Digite seu nome"> </Input>
            </InputPadrao>
          </div>

          <div className='gridDoador input2'>
            <InputMenorPadrao>
              <Input type="text"
                text="CEP *"
                name="teste"
                placeholder="Digite seu CEP"> </Input>
            </InputMenorPadrao>
            <InputMenorPadrao>
              <Input type="text"
                text="Nascimento *"
                name="teste"
                placeholder="DD/MM/AAAA"> </Input>
            </InputMenorPadrao>
          </div>

          <div className='gridDoador input4'>
            <InputPadrao>
              <Input className="input1" type="text"
                text="Email *"
                name="teste"
                placeholder="Digite seu email"> </Input>
            </InputPadrao>
          </div>

          <div className='gridDoador input5'>
            <InputMenorPadrao>
              <Input type="text"
                text="Estado *"
                name="teste"
                placeholder="Selecione seu UF"> </Input>
            </InputMenorPadrao>
            <InputMenorPadrao>
              <Input type="text"
                text="Cidade *"
                name="teste"
                placeholder="Escolha sua cidade">
              </Input>
            </InputMenorPadrao>
          </div>

          <div className='gridDoador input7'>
            <InputPadrao>
              <Input type="text"
                text="Senha *"
                name="teste"
                placeholder="Defina uma senha forte">
              </Input>
            </InputPadrao>
          </div>

          <div className='gridDoador input8'>
            <InputPadrao>
              <Input type="text"
                text="Endereço *"
                name="teste"
                placeholder="Digite seu endereço completo">
              </Input>
            </InputPadrao>
          </div>
          <div className='btnCadastroOng'>
            <BtnPadraoFuncao text='REGISTRAR CONTA'>
            </BtnPadraoFuncao>
            <p>Tem uma ong? <Link to="/cadastroOng" ><span>Cadastre-se aqui</span></Link></p>
          </div>
         
        </FormGrid>
      </ContainerPadraoForm>
    </div>

   

  );
}

export default cadastroDoador;
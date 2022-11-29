import React, { useState } from 'react'
import '../FormularioDoacao/FormularioDoacao.css'

export const FormularioDoacao = () => {
    return (
        <div>
            <h1 className='texto'>QUERO DOAR UM BEM MATERIAL</h1>
            <div>
                <div>
                    <h2 className='subtexto'>DADOS DA DOAÇÃO</h2>
                </div>
                <div>
                    <span className='msg'>O que será doado? </span>
                    <input className='inpt' type="text" placeholder='  Escreva em detalhes' />
                </div>
                <div>
                    <span className='msg2'>Retirar no Local? </span>
                    <input className='inpt2' type="text" placeholder='  Sim' />
                </div>
                <div>
                    <span className='msg3'>Endereço completo </span>
                    <input className='inpt3' type="text" placeholder='  Digite seu endereço' />
                </div>
                <div>
                    <span className='msg4'>Ponto de referência: </span>
                    <input className='inpt4' type="text" placeholder='  Digite seu ponto de referencia' />
                </div>

                <button className='botao'>Enviar</button>
            </div>
        </div>
    )
}
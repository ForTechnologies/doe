import React, { useState } from 'react'
import '../FormularioDoacao/FormularioDoacao.css'

export const FormularioDoacao = () => {
    return (
        <div>
            <h1>QUERO DOAR UM BEM MATERIAL</h1>
            <div>
                <div>
                    <h2>DADOS DA DOAÇÃO</h2>
                </div>
                <div>
                    <span>O que será doado? </span>
                    <input type="text" placeholder='Escreva em detalhes' />
                </div>
                <div>
                    <span>Retirar no Local? </span>
                    <input type="text" placeholder='Sim' />
                </div>
                <div>
                    <span>Endereço completo </span>
                    <input type="text" placeholder='Digite seu endereço' />
                </div>
                <div>
                    <span>Ponto de referência: </span>
                    <input type="text" placeholder='Digite seu ponto de referencia' />
                </div>

                <button>Enviar</button>
            </div>
        </div>
    )
}
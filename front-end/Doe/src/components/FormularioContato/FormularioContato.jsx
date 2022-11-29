import React, { useState } from 'react'
import '../FormularioContato/FormularioContato.css'

export const FormularioContato= () => {
    return (
        <div>
            <h1>QUERO OUTRO TIPO DE CONTATO</h1>
            <div>
                <div>
                    <h2>DADOS DA MENSAGEM</h2>
                </div>
                <div>
                    <span>Assunto:</span>
                    <input type="text" placeholder='Escreva em detalhes'/>
                </div>
                <div>
                    <span>Mensagem:</span>
                    <input type="text" placeholder='Escreva em detalhes' />
                </div>
               

                <button>Enviar</button>
            </div>
        </div>
    )
}
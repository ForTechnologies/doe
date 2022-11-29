import React, { useState } from 'react'
import '../FormularioContato/FormularioContato.css'

export const FormularioContato= () => {
    return (
        <div>
            <h1 className='titulo'>QUERO OUTRO TIPO DE CONTATO</h1>
            <div>
                <div>
                    <h2 className='subtitulo'>DADOS DA MENSAGEM</h2>
                </div>
                <div>
                    <span className='mensagem'>Assunto:</span>
                    <input className='ipt' type="text" placeholder='  Escreva em detalhes'/>
                </div>
                <div>
                    <span className='mensagem2'>Mensagem:</span>
                    <input className='ipt2' type="text" placeholder='  Escreva em detalhes' />
                </div>
               

                <button className='botaoEnv'>Enviar</button>
            </div>
        </div>
    )
}
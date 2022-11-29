import React, { useState } from 'react'
import '../FormularioVoluntario/FormularioVoluntario.css'

export const FormularioVoluntario= () => {
    return (
        <div>
            <h1 className='titulo'>QUERO ME VOLUNTARIAR</h1>
            <div>
                <div>
                    <h2 className='subtitulo'>DADOS DO TRABALHO VOLUNTARIO</h2>
                </div>
                <div>
                    <span className='message'>Data de nascimento</span>
                    <input className='input' type="text" placeholder='  dd/mm/aaaa' />
                </div>
                <div>
                    <span className='message2'>Disponível para trabalho presencial</span>
                    <input className='input2' type="text" placeholder='  Sim' />
                </div>
                <div>
                    <span className='message3'>Horas semanais de disponibilidade</span>
                    <input className='input3' type="text" placeholder='  Exemplo: 30h' />
                </div>
                <div>
                    <span className='message4'>Descreva suas experiências anteriores</span>
                    <input className='input4' type="text" placeholder='  Escreva em detalhes' />
                </div>
                <div>
                    <span className='message5'>Informações adicionais</span>
                    <input className='input5' type="text" placeholder='  Escreva em detalhes' />
                </div>

                <button className='botao'>Enviar</button>
            </div>
        </div>
    )
}
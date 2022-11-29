import React, { useState } from 'react'
import '../FormularioVoluntario/FormularioVoluntario.css'

export const FormularioVoluntario= () => {
    return (
        <div>
            <h1>QUERO ME VOLUNTARIAR</h1>
            <div>
                <div>
                    <h2>DADOS DO TRABALHO VOLUNTARIO</h2>
                </div>
                <div>
                    <span>Data de nascimento</span>
                    <input type="text" placeholder='dd/mm/aaaa' />
                </div>
                <div>
                    <span>Disponível para trabalho presencial</span>
                    <input type="text" placeholder='Sim' />
                </div>
                <div>
                    <span>Horas semanais de disponibilidade</span>
                    <input type="text" placeholder='Exemplo: 30h' />
                </div>
                <div>
                    <span>Descreva suas experiências anteriores</span>
                    <input type="text" placeholder='Escreva em detalhes' />
                </div>
                <div>
                    <span>Informações adicionais (opcional)</span>
                    <input type="text" placeholder='Escreva em detalhes' />
                </div>

                <button>Enviar</button>
            </div>
        </div>
    )
}
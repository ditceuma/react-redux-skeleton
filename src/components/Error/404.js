import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../shared/rotas';

const Erro404 = () => (
    <div className="Er">
        <h1>Página não encontrada! Clique  
            <Link to={HOME}>aqui </Link> para ir ao início
        </h1>
    </div>
)

export default Erro404
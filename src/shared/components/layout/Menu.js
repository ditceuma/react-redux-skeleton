import React from 'react';
import { Link } from 'react-router-dom'
import {  Menu, Button, Icon, Dropdown, Responsive } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import { DISCIPLINA_CATEGORIAS, DISCIPLINA_ATIVIDADES } from '../../rotas';

const urls = [
    {name:'Disciplinas', url:'', itens:[
        {name:'Criar Categorias', url:'DISCIPLINA_CATEGORIAS'},
        {name:'Configurar Atividades', url:'DISCIPLINA_ATIVIDADES'}
    ]}
]

export default class MenuCustom extends React.Component{
    
    _renderDropItens =(itens)=>{ 
        if(itens.length === 0) return null
        return(
            itens.map((item, key) => (
                <Dropdown.Item key={key}>
                    <span className="text">
                        <Link to={`${item.url}`}>{item.name}</Link>
                    </span>
                </Dropdown.Item>
            ))
        )
    }

    render(){
        return(
            <Responsive as={Menu} inverted>
                { 
                    urls.map((url, key) => (
                        <Dropdown item text={url.name} simple key={key}>
                            <Dropdown.Menu>
                                {this._renderDropItens(url.itens)}
                            </Dropdown.Menu>
                        </Dropdown>
                        )
                    )
                }
                <Menu.Menu position='right'>
                <Menu.Item name='signup'>
                    Usuário Master
                </Menu.Item>

                <Menu.Item name='help'>
                    Banco: Graduação
                </Menu.Item>
                <Menu.Item name='help'>
                    <Button icon labelPosition="right">
                        Sair
                        <Icon name="sign out" />
                    </Button>
                </Menu.Item>
                </Menu.Menu>
            </Responsive>
        )
    }
}

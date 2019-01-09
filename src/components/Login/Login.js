import React, { Component } from 'react'
import { Segment, Form, Select, Grid, Divider, Header, Icon, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './Login.css'

class Login extends Component {

    state = {
        empresa:'',
        banco:'',
        matricula:'',
        senha:''
    }

    handleChange = (e, { name, value}) => {
        this.setState({ [name]: value})        
    }

    handleSubmit = () => {
        this.props.history.replace('/home')
        
    }

    render(){
        
        const { matricula, senha } = this.state
        const empresas = [
            {key: 'ceuma', text: 'CEUMA', value: 'ceuma'}
        ]
        const bancos = [
            {key: '0', text: 'Graduação EAD', value: '0'},
            {key: '3', text: 'Graduação Presencial', value: '3'}
        ]

        return (
            <div className="box-login">
            <Segment placeholder>
                <Grid stackable>
                    <Grid.Column>
                        <Form>
                            <Divider horizontal>
                                <Header as='h4'>
                                    <Icon name='book' />
                                    Autenticação de Usuário
                                </Header>
                            </Divider>

                            <Form.Field
                                control={Select}
                                options={empresas}
                                placeholder="Empresa"
                                label={{children: 'Empresa', htmlFor: 'form-select-control-gender'}}
                                search
                                searchInput={{ id: 'form-select-control-gender'}}
                                onChange={this.handleChange}
                                name="empresa"
                            />

                            <Form.Field 
                                control={Select}
                                options={bancos}
                                placeholder="Banco"
                                label={{children: 'Banco', htmlFor: 'form-select-control-banco'}}
                                search
                                searchInput={{ id: 'form-select-control-banco'}}
                                onChange={this.handleChange}
                                name="banco"
                            />

                            <Form.Input icon="user" iconPosition="left" label="Matrícula" placeholder='Matrícula' name='matricula' value={matricula} onChange={this.handleChange}/>
                            <Form.Input icon="lock" iconPosition="left" label="Senha" placeholder='Senha' name='senha' value={senha} onChange={this.handleChange} type="password"/>
                            
                            <Button icon labelPosition='right' onClick={this.handleSubmit} positive>
                                Entrar
                                <Icon name="right arrow"/>
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
        )
    }   
}
export default Login
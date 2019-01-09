import React from 'react'
import { Form, Button, Select } from 'semantic-ui-react';
import Combo from './Combo';

const ano = [
    { key: 2016, text: 2016, value: 2016 },
    { key: 2017, text: 2017, value: 2017 },
    { key: 2018, text: 2018, value: 2018 }]
const campus = [
    { key: 0, text: 'Renascença', value: 'Renascença' },
    { key: 1, text: 'Anil', value: 'Anil' },
    { key: 2, text: 'Deodoro', value: 'Deodoro' }]
const curso = [
    { key: 0, text: 'Computação', value: 'Computação' },
    { key: 1, text: 'Biologia', value: 'Biologia' },]
const turma = [
    { key: 0, text: '540101', value: '540101' },
    { key: 1, text: '52361', value: '52361' }]

const renderSelect = (label, params) => <Form.Field control={Select} label={label} options={params} placeholder={label} />


const ComboGroup = ({params}) => (
    <Form>
        <Form.Group>
            {
                params.map((value, key) => <Combo key={key} label={value}/>) 
            }
            {renderSelect('Ano', ano)}
            {renderSelect('Campus', campus)}
            {renderSelect('Curso', curso)}
            {renderSelect('Turma', turma)}
        </Form.Group>
        <Button content="Limpar" icon="remove"/>
    </Form>
)

export default ComboGroup
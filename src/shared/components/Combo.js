import React from 'react'
import { Form, Select } from 'semantic-ui-react';

const Combo = ({params, label}) => 
    <Form.Field control={Select} label={label} options={params} placeholder={label} />

export default Combo
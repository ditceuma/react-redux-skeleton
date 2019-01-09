import React from 'react'
import { Step, Icon } from 'semantic-ui-react';

 const StepItem = ({ active, title, description}) => (
    <Step completed active={active}>
        <Icon name='truck' />
        <Step.Content>
            <Step.Title>{title}</Step.Title>
            <Step.Description>{description}</Step.Description>
        </Step.Content>
    </Step>
)
export default StepItem
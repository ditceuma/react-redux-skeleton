import React from 'react'
import { Grid, Segment, Label } from "semantic-ui-react";
import '../../../App.css'

const Footer = () => (
    <Segment className="footer">
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <Label as="h3"
                        content="NTI - Núcleo de Tecnologia da Informação | (98) 3214-4141/4175 | 27/12/18 16:02:22" />
                </Grid.Column>
                <Grid.Column>
                    <Label content="NOME DO SISTEMA" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default Footer
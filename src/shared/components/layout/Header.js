import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Header, Segment } from "semantic-ui-react";
import '../../../App.css'
import MenuCustom from './Menu'
import { HOME } from '../../rotas';

const imgLogo = (logo) => <Image src={logo} className="logo" />

const HeaderCustom = () => (
    <React.Fragment>
        <Segment className="header-h1">
            <Grid className="container-h">
                <Grid.Column width={12} floated='right' className="header">
                    <Link to={HOME}>
                        <Header as='h2' color="black" 
                            image="logo.png" 
                            content="SISTEMA" />
                    </Link>
                </Grid.Column>

                <Grid.Column width={4} floated='left'>
                    <Image.Group>
                        {imgLogo('logo')}
                    </Image.Group>
                </Grid.Column>
            </Grid>
        </Segment>

        <MenuCustom />

    </React.Fragment>
)

export default HeaderCustom
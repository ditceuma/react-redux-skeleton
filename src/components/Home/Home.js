import React from 'react';
import { Container, Segment, Card, Image, Item, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import HeaderTitle from '../../shared/components/layout/HeaderTitle';

const urls = [
    { header: 'Criar Categorias', description: '', img: 'courses.png', link: '' },
    { header: 'Configurar Atividades', description: '', img: 'atividade.png', link: '' }
]

const links = [
    { title: 'Qualquer mensagem aqui' }
]

const Home = () => {
    const card = urls.map((url, key) => (
        <Card key={key}>
            <Link to={`${url.link}`}>
                <Card.Content header={url.header} />
            </Link>
            <Card.Content>
                <Link to={`${url.link}`}>
                    <Image src={`/assets/imgs/${url.img}`} alt={url.header} className="image-home" />
                </Link>
            </Card.Content>
        </Card>
    ))

    const linkRender = links.map((link, key) => (
        <Item key={key}>
            <Icon name="arrow alternate circle right" color="grey" />
            <Item.Content content={link.title} />
        </Item>
    ))

    return (
        <Container>
            <HeaderTitle title="Página Principal, Seja Bem Vindo ao ESQUELETO." />
            <Segment textAlign="center">
                <Card.Group itemsPerRow={4}>
                    {card}
                </Card.Group>
            </Segment>
            <Segment>
                <Item.Group link>
                    {linkRender}
                </Item.Group>
            </Segment>
        </Container>
    );
}

export default Home;

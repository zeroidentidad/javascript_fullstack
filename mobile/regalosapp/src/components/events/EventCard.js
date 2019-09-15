import React from 'react';
import { withTheme, Card, Title, Paragraph, Button } from 'react-native-paper';
import styles from '../../stylesheets/login.stylesheet'

const EventCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{props.event.title}</Title>
                <Paragraph>Fecha: {props.event.date.slice(0, props.event.date.length - 5)}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Editar</Button>
            </Card.Actions>
        </Card>
    )
}

export default withTheme(EventCard)

import React, { Component } from 'react';

// Material
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// Estilos
import './Jugador.css';

class Jugador extends Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardMedia
                        className="media"
                        image={this.props.foto}
                        title="Felinos"
                    />
                    <CardContent>
                        <Typography variant="subheading" component="h2" align="center" color="primary">
                            {this.props.nombre}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Jugador;

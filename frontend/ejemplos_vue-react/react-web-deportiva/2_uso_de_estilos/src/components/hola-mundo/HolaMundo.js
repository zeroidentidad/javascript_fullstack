import React from 'react';
import Button from 'material-ui/Button';

import './HolaMundo.css';


class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <h2 >Hola {this.props.nombre} </h2>
                <p> {this.props.edad}  </p>

                <Button variant="fab" color="secondary"> + </Button>

                <p className={this.props.tipo} > Vestibulum lorem quam, facilisis a imperdiet nec, interdum venenatis tortor. Etiam condimentum ligula sit amet fringilla consequat. Praesent ultrices, augue non imperdiet pellentesque, purus nunc malesuada augue, aliquam commodo felis libero id arcu. Donec ex lorem, pellentesque ac maximus ut, ultricies vitae mi. Donec egestas odio vitae sapien facilisis feugiat. Suspendisse potenti. Sed volutpat congue lacinia. Donec quis rhoncus felis, id aliquam elit. Cras scelerisque, quam ut rhoncus bibendum, dolor ipsum sollicitudin ipsum, id luctus lorem neque a lacus. Aenean tristique erat et mauris cursus malesuada. </p>
            </div>
        )
    }
}

export default HolaMundo;
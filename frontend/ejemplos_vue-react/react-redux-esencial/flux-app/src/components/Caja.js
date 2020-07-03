import React, {Component} from 'react';
import './Caja.css';

import ColorAppStore from '../stores/ColorAppStore';

class Caja extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: ColorAppStore.getActiveColor(),
        }
    }

    componentDidMount() {
        ColorAppStore.on('storeUpdated', this.updateColor);
    }

    componentWillUnmount() {
        ColorAppStore.removeListener('storeUpdated', this.updateColor);
    }

    updateColor = () => {
        this.setState({
            color: ColorAppStore.getActiveColor(),
        })
    }

    render() {
        return (
            <div className="Caja">
                <div className='color-container' style={{backgroundColor: this.state.color}}></div>
            </div>
        );
    }

}

export default Caja;

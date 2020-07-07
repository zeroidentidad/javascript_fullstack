import React, {Component} from 'react';
import './Item.css';
import estrellas from '../../images/estrellas.png';

class Item extends Component {

    constructor(props) {
        super(props);

        this.goDetail = this.goDetail.bind(this);
        this.onError = this.onError.bind(this);

        this.state = {
            url: estrellas
        }
    }

    componentDidMount() {
        this.setState({ url: this.props.data.url });
    }

    goDetail() {
        this.props.goDetail(this.props.data);
    }

    onError() {
        this.setState({ url: estrellas });
    }

    render(){
        return (
            <li className='item' onClick={this.goDetail}>
                <img alt="Imagen NASA" src={ this.state.url } onError={this.onError}  />
                { this.props.data.title }
            </li>
        );
    }

}

export default Item;
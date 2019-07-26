import React, { Component } from 'react'
import { StyleSheet, ListView } from 'react-native';
import Comments from '../vistas/comments';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = { dataSource: ds };
    }

    componentDidMount() {
        this.actualizarDataSource(this.props.comentarios)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.comentarios !== this.props.comentarios) {
            this.actualizarDataSource(newProps.comentarios)
        }
    }

    actualizarDataSource = datos => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(datos)
        })
    }

    render() {

        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={(comentario) => {
                    return (
                        <Comments text={comentario.text}></Comments>
                    )
                }
                }
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10
    }
});

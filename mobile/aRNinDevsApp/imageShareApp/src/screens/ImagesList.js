import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';
import { Icon } from 'native-base';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import ActivityIndicator from '../components/ActivityIndicator';

class ImagesList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='list' style={{ fontSize: 40, color: tintColor }} />
        ),
        drawerLabel: 'Todas las Imagenes'
    };

    UNSAFE_componentWillMount() {
        this.props.fetchImages();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!this.props.addingImage && nextProps.addingImage) {
            this.scrollable.scrollTo({ y: 0 });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onMenuButtonPress={() => this.props.navigation.navigate('DrawerOpen')} onCameraButtonPress={() => this.props.navigation.navigate('Camera')} />
                <ScrollView ref={(scrollable) => {
                    this.scrollable = scrollable;
                }}>
                    {this.props.addingImage && <ActivityIndicator message='Agregando imagen' />}
                    <Gallery imageList={this.props.images} loading={this.props.fetchingImages} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => { return { images: state.imagesReducer.images, addingImage: state.imagesReducer.addingImage, fetchingImages: state.imagesReducer.fetchingImages } }
const mapStateActionsToProps = (dispatch) => { return bindActionCreators(Actions, dispatch) }

export default connect(mapStateToProps, mapStateActionsToProps)(ImagesList);
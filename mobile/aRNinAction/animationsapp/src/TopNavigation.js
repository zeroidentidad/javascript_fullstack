import React from "react";
import Menu, { MenuItem } from "react-native-material-menu";
import { Image, TouchableOpacity } from "react-native";

export default class TopNavigation extends React.Component {

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Menu
                ref={(ref) => this._menu = ref}
                button={
                <TouchableOpacity onPress={() => this._menu.show()} style={{ paddingHorizontal: 16, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./assets/menu_ic.png')} style={{ width: 20, height: 20, alignSelf: 'center' }} resizeMode='contain' />
                </TouchableOpacity>
                }
            >
                <MenuItem onPress={() => this.hideMenu()} textStyle={{ color: '#000', fontSize: 16 }}>◀️</MenuItem>
                <MenuItem onPress={() => navigate('Input')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Input</MenuItem>
                <MenuItem onPress={() => navigate('Loop')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Loop</MenuItem>
                <MenuItem onPress={() => navigate('Parallel')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Parallel</MenuItem>
                <MenuItem onPress={() => navigate('Sequence')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Sequence</MenuItem>
                <MenuItem onPress={() => navigate('Stagger')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Stagger</MenuItem>
                <MenuItem onPress={() => navigate('Timing')} textStyle={{ color: '#000', fontSize: 16 }}>Animated Timing</MenuItem>
            </Menu>
        )
    }

}
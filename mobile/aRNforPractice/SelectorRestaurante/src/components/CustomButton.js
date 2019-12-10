import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

/**
 * Definir un componente de botón personalizado
 */
class CustomButton extends Component {

  render() {

    const {
      text, onPress, buttonStyle, textStyle, width, disabled
    } = this.props;

    return (
      <TouchableOpacity
        style={ [
          { padding : 10, height : 60, borderRadius : 8, margin : 10,
            width : width,
            backgroundColor :
              disabled != null && disabled === "true" ? "#e0e0e0" : "#303656",
          },
          buttonStyle
        ] }
        onPress={
          () => { if (disabled == null || disabled === "false") { onPress() } }
        }
      >
        <Text style={ [
          { fontSize : 20, fontWeight : "bold", color : "#ffffff",
            textAlign : "center", paddingTop : 8
          },
          textStyle
        ] } >
          {text}
        </Text>
      </TouchableOpacity>
    );

  }

}

/**
 * Defina las propiedades que admitirá este componente.
 */
CustomButton.propTypes = {
  text : PropTypes.string.isRequired,
  onPress : PropTypes.func.isRequired,
  buttonStyle : PropTypes.object,
  textStyle : PropTypes.object,
  width : PropTypes.string,
  disabled : PropTypes.string
};


export default CustomButton;

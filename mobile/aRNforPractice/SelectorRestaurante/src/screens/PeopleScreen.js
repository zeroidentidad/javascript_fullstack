import React from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import {
  Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform, ScrollView,
  StyleSheet, Text, View, StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Root, Toast } from "native-base";

/**
 * #############################################################################
 * Estilos.
 * #############################################################################
 */
const styles = StyleSheet.create({
  listScreenContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    /* Branch on platform type for different styling. */
    ...Platform.select({
      ios : {
        paddingTop : StatusBar.currentHeight
      },
      android : { }
    })
  },
  personList : {
    width : "94%"
  },
  personContainer : {
    flexDirection : "row",
    marginTop : 4,
    marginBottom : 4,
    borderColor : "#e0e0e0",
    borderBottomWidth : 2,
    alignItems : "center"
  },
  personName : {
    flex : 1
  },
  addScreenContainer : {
    marginTop : StatusBar.currentHeight
  },
  addScreenInnerContainer : {
    flex : 1,
    alignItems : "center",
    paddingTop : 20,
    width : "100%"
  },
  addScreenFormContainer : {
    width : "96%"
  },
  fieldLabel : {
    marginLeft : 10
  },
  pickerContainer : {
    ...Platform.select({
      ios : { },
      android : {
        borderRadius : 8,
        borderColor : "#c0c0c0",
        borderWidth : 2,
        width : "96%",
        marginLeft : 10,
        marginBottom : 20,
        marginTop : 4
      }
    })
  },
  picker : {
    ...Platform.select({
      ios : {
        width : "96%",
        borderRadius : 8,
        borderColor : "#c0c0c0",
        borderWidth : 2,
        marginLeft : 10,
        marginBottom : 20,
        marginTop : 4
      },
      android : { }
    })
  },
  addScreenButtonsContainer : {
    flexDirection : "row",
    justifyContent : "center"
  }
});

/**
 * #############################################################################
 * Pantalla ListScreen.
 * #############################################################################
 */
class ListScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      listData: []
    };

  }

  render() { return (

    <Root>
      <View style={styles.listScreenContainer}>
        { /* ########## Botón agregar persona ########## */ }
        <CustomButton
          text="Agregar persona"
          width="94%"
          onPress={ () => { this.props.navigation.navigate("AddScreen"); } }
        />
        { /* ########## Lista personas ########## */ }
        <FlatList
          style={styles.personList}
          data={this.state.listData}
          renderItem={ ({item}) =>
            <View style={styles.personContainer}>
              <Text style={styles.personName}>
                {item.firstName} {item.lastName} ({item.relationship})
              </Text>
              <CustomButton
                text="Eliminar"
                onPress={ () => {
                  Alert.alert("Confirmar",
                    "Estás seguro de que deseas eliminar a esta persona?",
                    [
                      { text : "Si",
                        onPress : () => {
                          // Sacar los datos del almacenamiento.
                          AsyncStorage.getItem("people",
                            function(inError, inPeople) {
                              if (inPeople === null) {
                                inPeople = [];
                              } else {
                                inPeople = JSON.parse(inPeople);
                              }
                              // Encuentrar para eliminar y splice.
                              for (let i = 0; i < inPeople.length; i++) {
                                const person = inPeople[i];
                                if (person.key === item.key) {
                                  inPeople.splice(i, 1);
                                  break;
                                }
                              }
                              // Almacenar datos actualizados en el almacenamiento.
                              AsyncStorage.setItem("people",
                                JSON.stringify(inPeople), function() {
                                  // Establecer un nuevo estado para actualizar la lista.
                                  this.setState({ listData : inPeople });
                                  // Mostrar mensaje toast para confirmar la eliminación.
                                  Toast.show({
                                    text : "Persona eliminada",
                                    position : "bottom",
                                    type : "danger",
                                    duration : 2000
                                  });
                                }.bind(this)
                              );
                            }.bind(this)
                          );
                        }
                      },
                      { text : "No" },
                      { text : "Cancelar", style : "cancel" }
                    ],
                    { cancelable : true }
                  )
                } }
              />
            </View>
          }
        />
      </View>
    </Root>

  ); }

  /**
   * Ejecutar después de que se monte el componente.
   */
  componentDidMount() {

    // Bloquear el botón de retroceso de hardware en Android.
    BackHandler.addEventListener(
      "hardwareBackPress", () => { return true; }
    );

    // Get lista de personas
    AsyncStorage.getItem("people",
      function(inError, inPeople) {
        if (inPeople === null) {
          inPeople = [];
        } else {
          inPeople = JSON.parse(inPeople);
        }
        this.setState({ listData : inPeople });
      }.bind(this)
    );

  };


} /* Fin ListScreen. */


/**
 * #############################################################################
 * Pantalla AddScreen.
 * #############################################################################
 */
class AddScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      firstName : "",
      lastName : "",
      relationship : "",
      key : `p_${new Date().getTime()}`
    };

  }

  render() { return (

    <Root>
      <ScrollView style={styles.addScreenContainer}>
        <View style={styles.addScreenInnerContainer}>
          <View style={styles.addScreenFormContainer}>
            { /* ########## Nombre ########## */ }
            <CustomTextInput
              label="Nombre"
              maxLength={20}
              stateHolder={this}
              stateFieldName="firstName"
            />
            { /* ########## Apellido ########## */ }
            <CustomTextInput
              label="Apellido"
              maxLength={20}
              stateHolder={this}
              stateFieldName="lastName"
            />
            { /* ########## Relación ########## */ }
            <Text style={styles.fieldLabel}>Relación</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                prompt="Relacion"
                selectedValue={this.state.relationship}
                onValueChange={
                  (inItemValue) => this.setState({ relationship : inItemValue })
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Yo" value="Yo" />
                <Picker.Item label="Familia" value="Familia" />
                <Picker.Item label="Amigo" value="Amigo" />
                <Picker.Item label="Conocido" value="Conocido" />
                <Picker.Item label="Otro" value="Otro" />
              </Picker>
            </View>
          </View>
          { /* ########## Botones ########## */ }
          <View style={styles.addScreenButtonsContainer}>
            <CustomButton
              text="Cancelar"
              width="44%"
              onPress={
                () => { this.props.navigation.navigate("ListScreen"); }
              }
            />
            <CustomButton
              text="Guardar"
              width="44%"
              onPress={ () => {
                AsyncStorage.getItem("people",
                  function(inError, inPeople) {
                    if (inPeople === null) {
                      inPeople = [];
                    } else {
                      inPeople = JSON.parse(inPeople);
                    }
                    inPeople.push(this.state);
                    AsyncStorage.setItem("people",
                      JSON.stringify(inPeople), function() {
                        this.props.navigation.navigate("ListScreen");
                      }.bind(this)
                    );
                  }.bind(this)
                );
              } }
            />
          </View>
        </View>
      </ScrollView>
    </Root>

  ); }

} /* Fin AddScreen. */


/**
 * #############################################################################
 * Definir la pantalla en sí misma.
 * #############################################################################
 */
const PeopleScreen = StackNavigator(
  /* ----------  Routes. ----------  */
  {
    ListScreen : { screen : ListScreen },
    AddScreen : { screen : AddScreen }
  },
  /* ----------  Options. ----------  */
  {
    headerMode : "none",
    initialRouteName : "ListScreen"
  }
); /* Fin StackNavigator. */


// Export component.
exports.PeopleScreen = PeopleScreen;

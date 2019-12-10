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
    /* Se ramifica en el tipo de plataforma para diferentes estilos. */
    ...Platform.select({
      ios : {
        paddingTop : StatusBar.currentHeight
      },
      android : { }
    })
  },
  restaurantList : {
    width : "94%"
  },
  restaurantContainer : {
    flexDirection : "row",
    marginTop : 4,
    marginBottom : 4,
    borderColor : "#e0e0e0",
    borderBottomWidth : 2,
    alignItems : "center"
  },
  restaurantName : {
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
        width : "96%",
        borderRadius : 8,
        borderColor : "#c0c0c0",
        borderWidth : 2,
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
 * List screen.
 * #############################################################################
 */
class ListScreen extends React.Component {


  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      listData : []
    };

  }

  render() { return (

    <Root>
      <View style={styles.listScreenContainer}>
        { /* ########## Add button ########## */ }
        <CustomButton
          text="Agregar Restaurante"
          width="94%"
          onPress={ () => { this.props.navigation.navigate("AddScreen"); } }
        />
        { /* ########## Restaurant list ########## */ }
        <FlatList
          style={styles.restaurantList}
          data={this.state.listData}
          renderItem={ ({item}) =>
            <View style={styles.restaurantContainer}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <CustomButton
                text="Eliminar"
                onPress={ () => {
                  Alert.alert(
                    "Por favor confirmar",
                    "Seguro que quieres eliminar este restaurante?",
                    [
                      { text : "Si", onPress: () => {
                        // Sacar datos del almacenamiento.
                        AsyncStorage.getItem("restaurants",
                          function(inError, inRestaurants) {
                            if (inRestaurants === null) {
                              inRestaurants = [];
                            } else {
                              inRestaurants = JSON.parse(inRestaurants);
                            }
                            // Encontrar para hacer delete y splice.
                            for (let i = 0; i < inRestaurants.length; i++) {
                              const restaurant = inRestaurants[i];
                              if (restaurant.key === item.key) {
                                inRestaurants.splice(i, 1);
                                break;
                              }
                            }
                            // Almacenar datos actualizados en el almacenamiento.
                            AsyncStorage.setItem("restaurants",
                              JSON.stringify(inRestaurants), function() {
                                // Set nuevo estado para actualizar la lista.
                                this.setState({ listData : inRestaurants });
                                // Mostrar mensaje de toast para confirmar la eliminación.
                                Toast.show({
                                  text: "Restaurante eliminado",
                                  position : "bottom",
                                  type : "danger",
                                  duration : 2000
                                });
                              }.bind(this)
                            );
                          }.bind(this)
                        );
                      } },
                      { text : "No" },
                      { text : "Cancelar", style : "cancel" }
                    ],
                    { cancelable : true }
                  )
              } } />
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

    // Get lista de restaurantes.
    AsyncStorage.getItem("restaurants",
      function(inError, inRestaurants) {
        if (inRestaurants === null) {
          inRestaurants = [];
        } else {
          inRestaurants = JSON.parse(inRestaurants);
        }
        this.setState({ listData : inRestaurants });
      }.bind(this)
    );

  };


} /* Fin ListScreen. */


/**
 * #############################################################################
 * Add screen.
 * #############################################################################
 */
class AddScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      name : "",
      cuisine : "",
      price : "",
      rating : "",
      phone : "",
      address : "",
      webSite : "",
      delivery : "",
      key : `r_${new Date().getTime()}`
    };

  }

  render() { return (

    <ScrollView style={styles.addScreenContainer}>
      <View style={styles.addScreenInnerContainer}>
        <View style={styles.addScreenFormContainer}>
          { /* ########## Nombre ########## */ }
          <CustomTextInput
            label="Nombre"
            maxLength={20}
            stateHolder={this}
            stateFieldName="name"
          />
          { /* ########## Cocina ########## */ }
          <Text style={styles.fieldLabel}>Cocina</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              prompt="Cocina"
              selectedValue={this.state.cuisine}
              onValueChange={
                (inItemValue) => this.setState({ cuisine : inItemValue })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Alemana" value="Alemana" />              
              <Picker.Item label="Americana" value="Americana" />
              <Picker.Item label="BBQ" value="BBQ" />
              <Picker.Item label="Brasileña" value="Brasilena" />
              <Picker.Item label="Británica" value="Britanica" />
              <Picker.Item label="China" value="China" />
              <Picker.Item label="Cubana" value="Cubana" />
              <Picker.Item label="Escocesa" value="Escocesa" />
              <Picker.Item label="Española" value="Espanola" />                            
              <Picker.Item label="Francesa" value="Francesa" />
              <Picker.Item label="Hawaiana" value="Hawaiana" />
              <Picker.Item label="Italiana" value="Italiana" />
              <Picker.Item label="Japonesa" value="Japonesa" />
              <Picker.Item label="Mariscos" value="Mariscos" />              
              <Picker.Item label="Mexicana" value="Mexicana" />
              <Picker.Item label="Peruana" value="Peruana" />
              <Picker.Item label="Salvadoreña" value="Salvadorena" />
              <Picker.Item label="Steak House" value="Steak House" />
              <Picker.Item label="Sushi" value="Sushi" />
              <Picker.Item label="Otra" value="Otra" />
            </Picker>
          </View>
          { /* ########## Precio ########## */ }
          <Text style={styles.fieldLabel}>Precio</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.price}
              prompt="Precio"
              onValueChange={
                (inItemValue) => this.setState({ price : inItemValue })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          { /* ########## Clasificación ########## */ }
          <Text style={styles.fieldLabel}>Clasificación</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.rating}
              prompt="Clasificacion"
              onValueChange={
                (inItemValue) => this.setState({ rating : inItemValue })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          { /* ########## Teléfono ########## */ }
          <CustomTextInput
            label="Núm. teléfono"
            maxLength={20}
            stateHolder={this}
            stateFieldName="phone"
          />
          { /* ########## Dirección ########## */ }
          <CustomTextInput
            label="Direccion"
            maxLength={20}
            stateHolder={this}
            stateFieldName="address"
          />
          { /* ########## Sitio web ########## */ }
          <CustomTextInput
            label="Sitio web"
            maxLength={20}
            stateHolder={this}
            stateFieldName="webSite"
          />
          { /* ########## Entrega ########## */ }
          <Text style={styles.fieldLabel}>Entrega?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              prompt="Entrega?"
              selectedValue={this.state.delivery}
              onValueChange={
                (inItemValue) => this.setState({ delivery : inItemValue })
              }
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Si" value="Si" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>
        { /* ########## Buttons ########## */ }
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
              AsyncStorage.getItem("restaurants",
                function(inError, inRestaurants) {
                  if (inRestaurants === null) {
                    inRestaurants = [];
                  } else {
                    inRestaurants = JSON.parse(inRestaurants);
                  }
                  inRestaurants.push(this.state);
                  AsyncStorage.setItem("restaurants",
                    JSON.stringify(inRestaurants), function() {
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

  ); }


} /* Fin AddScreen. */


/**
 * #############################################################################
 * Definir la pantalla en sí mismas.
 * #############################################################################
 */
const RestaurantsScreen = StackNavigator(
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
exports.RestaurantsScreen = RestaurantsScreen;

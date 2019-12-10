import React from "react";
import CustomButton from "../components/CustomButton";
import {
  Alert, AsyncStorage, BackHandler, Button, FlatList, Image, Modal, Picker,
  Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import { CheckBox } from "native-base";

/**
 * La lista de personas que participan.
 */
let participants = null;

/**
 * La lista de restaurantes FILTRADOS entre los que elegirá la aplicación.
 */
let filteredRestaurants = null;

/**
 * El restaurante que finalmente se elige.
 */
let chosenRestaurant = {};

/**
 * Función auxiliar para obtener un número aleatorio en un rango definido.
 */
const getRandom = (inMin, inMax) => {
  inMin = Math.ceil(inMin);
  inMax = Math.floor(inMax);
  return Math.floor(Math.random() * (inMax - inMin + 1)) + inMin;
};

/**
 * #############################################################################
 * Estilos.
 * #############################################################################
 */
const styles = StyleSheet.create({
  decisionTimeScreenContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
  decisionTimeScreenTouchable : {
    alignItems : "center",
    justifyContent : "center"
  },
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
  whosGoingHeadline : {
    fontSize : 30,
    marginTop : 20,
    marginBottom : 20
  },
  whosGoingItemTouchable : {
    flexDirection : "row",
    marginTop : 10,
    marginBottom : 10
  },
  whosGoingCheckbox : {
    marginRight : 20
  },
  whosGoingName : {
    flex : 1
  },
  preFiltersContainer : {
    marginTop : StatusBar.currentHeight
  },
  preFiltersInnerContainer : {
    flex : 1,
    alignItems : "center",
    paddingTop : 20,
    width : "100%"
  },
  preFiltersScreenFormContainer : {
    width : "96%"
  },
  preFiltersHeadlineContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
  preFiltersHeadline : {
    fontSize : 30,
    marginTop : 20,
    marginBottom : 20
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
  selectedContainer: {
    flex : 1,
    justifyContent : "center"
  },
  selectedInnerContainer: {
    alignItems : "center"
  },
  selectedName : {
    fontSize : 32
  },
  selectedDetails : {
    paddingTop : 80,
    paddingBottom : 80,
    alignItems : "center"
  },
  selectedDetailsLine : {
    fontSize : 18
  },
  vetoContainer: {
    flex : 1,
    justifyContent : "center"
  },
  vetoContainerInner: {
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center"
  },
  vetoHeadlineContainer : {
    paddingBottom : 40
  },
  vetoHeadline : {
    fontSize : 32,
    fontWeight : "bold"
  },
  vetoScrollViewContainer : {
    height : "50%"
  },
  vetoParticipantContainer : {
    paddingTop : 20,
    paddingBottom : 20
  },
  vetoParticipantName : {
    fontSize : 24
  },
  vetoButtonContainer : {
    width : "100%",
    alignItems : "center",
    paddingTop : 40
  },
  choiceScreenHeadline : {
    fontSize : 30,
    marginTop : 20,
    marginBottom : 20
  },
  choiceScreenListContainer : {
    width : "94%"
  },
  choiceScreenListItem : {
    flexDirection : "row",
    marginTop : 4,
    marginBottom : 4,
    borderColor : "#e0e0e0",
    borderBottomWidth : 2,
    alignItems : "center"
  },
  choiceScreenListItemName : {
    flex : 1
  },
  postChoiceScreenContainer : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center",
  },
  postChoiceHeadline : {
    fontSize : 32,
    paddingBottom : 80
  },
  postChoiceDetailsContainer : {
    borderWidth : 2,
    borderColor : "#000000",
    padding : 10,
    width : "96%"
  },
  postChoiceDetailsRowContainer : {
    flexDirection : "row",
    justifyContent : "flex-start",
    alignItems : "flex-start",
    alignContent : "flex-start"
  },
  postChoiceDetailsLabel : {
    width : 70,
    fontWeight : "bold",
    color : "#ff0000"
  },
  postChoiceDetailsValue : {
    width : 300
  }
});

/**
 * #############################################################################
 * Pantalla Decision Time.
 * #############################################################################
 */
class DecisionTimeScreen extends React.Component {

  render() { return (

    <View style={styles.decisionTimeScreenContainer}>
      <TouchableOpacity style={styles.decisionTimeScreenTouchable}
        onPress={ () => {
          // Asegurarse de que haya gente.
          AsyncStorage.getItem("people",
            function(inError, inPeople) {
              if (inPeople === null) {
                inPeople = [ ];
              } else {
                inPeople = JSON.parse(inPeople);
              }
              if (inPeople.length === 0) {
                Alert.alert(
                  "Advertencia",
                  "No has agregado personas.",
                  [ { text : "OK" } ],
                  { cancelable : false }
                );
              } else {
                // Ok, hay gente, ahora asegurarse de que haya restaurantes.
                AsyncStorage.getItem("restaurants",
                  function(inError, inRestaurants) {
                    if (inRestaurants === null) {
                      inRestaurants = [ ];
                    } else {
                      inRestaurants = JSON.parse(inRestaurants);
                    }
                    if (inRestaurants.length === 0) {
                      Alert.alert(
                        "Advertencia",
                        "No has agregado ningún restaurante.",
                        [ { text : "OK" } ],
                        { cancelable : false }
                      );
                    } else {
                      this.props.navigation.navigate("WhosGoingScreen");
                    }
                  }.bind(this)
                );
              }
            }.bind(this)
          );
        } }
      >
        <Image source={ require("../images/its-decision-time.png") } />
        <Text style={{paddingTop:20}}>(click en la imagen)</Text>
      </TouchableOpacity>
    </View>

  ); }


} /* Fin DecisionTimeScreen. */


/**
 * #############################################################################
 * Pantalla Who's Going.
 * #############################################################################
 */
class WhosGoingScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      people : [ ],
      selected : { }
    };

  }

  render() { return (

    <View style={styles.listScreenContainer}>

      <Text style={styles.whosGoingHeadline}>Quiénes van?</Text>

      { /* ########## Lista de quienes van ########## */ }
      <FlatList
        style={{width : "94%"}}
        data={this.state.people}
        renderItem={ ({item}) =>
          <TouchableOpacity
            style={styles.whosGoingItemTouchable}
            onPress={
              function() {
                // Alternar seleccionado en la persona y actualizar la lista de
                // personas seleccionadas en el estado.
                const selected = this.state.selected;
                selected[item.key] = !selected[item.key];
                this.setState({ selected : selected });
              }.bind(this)
            }
          >
            <CheckBox
              style={styles.whosGoingCheckbox}
              checked={this.state.selected[item.key]}
              onPress={
                function() {
                  // Alternar seleccionado en la persona y actualizar la lista de
                  // personas seleccionadas en el estado.
                  const selected = this.state.selected;
                  selected[item.key] = !selected[item.key];
                  this.setState({ selected : selected });
                }.bind(this)
              } />
            <Text style={styles.whosGoingName}>
              {item.firstName} {item.lastName} ({item.relationship})
            </Text>
          </TouchableOpacity>
        }
      />

      { /* ########## Botón siguiente paso ########## */ }
      <CustomButton
        text="Siguiente"
        width="94%"
        onPress={ () => {
          // Construir lista de personas que van a la siguiente pantalla.
          participants = [ ];
          for (const person of this.state.people) {
            if (this.state.selected[person.key]) {
              // Copia el objeto person.
              const participant = Object.assign({}, person);
              participant.vetoed = "no";
              participants.push(participant);
            }
          }
          if (participants.length === 0) {
            Alert.alert(
              "Que sucede?",
              "No seleccionaste a nadie para ir. Intentarlo de nuevo?",
              [ { text : "OK" } ],
              { cancelable : false }
            );
          } else {
            this.props.navigation.navigate("PreFiltersScreen");
          }
        } }
      />
    </View>

  ); }

  /**
   * Ejecutar después de que se monte el componente.
   */
  componentDidMount() {

    // Bloquear el botón de retroceso de hardware en Android.
    BackHandler.addEventListener(
      "hardwareBackPress", () => { return true; }
    );

    // Get lista de personas.
    AsyncStorage.getItem("people",
      function(inError, inPeople) {
        if (inPeople === null) {
          inPeople = [ ];
        } else {
          inPeople = JSON.parse(inPeople);
        }
        // Construye un objeto marcado por el ID de cada persona que nos dice si esa
        // persona es seleccionada o no.
        const selected = { };
        for (const person of inPeople) {
          selected[person.key] = false;
        }
        this.setState({
          people : inPeople,
          selected : selected
        });
      }.bind(this)
    );

  };


} /* End WhosGoingScreen. */


/**
 * #############################################################################
 * Pantalla Pre-filters.
 * #############################################################################
 */
class PreFiltersScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

    this.state = {
      cuisine : "",
      price : "",
      rating : "",
      delivery : ""
    };

  } 
  
  render() { return (

    <ScrollView style={styles.preFiltersContainer}>
      <View style={styles.preFiltersInnerContainer}>
        <View style={styles.preFiltersScreenFormContainer}>

          <View style={styles.preFiltersHeadlineContainer}>
            <Text style={styles.preFiltersHeadline}>Pre-filtros</Text>
          </View>

          { /* ########## Cosina ########## */ }
          <Text style={styles.fieldLabel}>Cosina</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.cuisine}
              prompt="Cosina"
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
          <Text style={styles.fieldLabel}>Precio &lt;=</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.price}
              prompt="Precio <="
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
          <Text style={styles.fieldLabel}>Clasificación &gt;=</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.rating}
              prompt="Clasificacion >="
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

          { /* ########## Botón siguiente paso ########## */ }
          <CustomButton
            text="Siguiente"
            width="94%"
            onPress={ () => {
              // Get todos los restaurantes de LocalStorage.
              AsyncStorage.getItem("restaurants",
                function(inError, inRestaurants) {
                  if (inRestaurants === null) {
                    inRestaurants = [];
                  } else {
                    inRestaurants = JSON.parse(inRestaurants);
                  }
                  // Ahora filtrar en función de los criterios seleccionados, si los hay.
                  filteredRestaurants = [];
                  for (const restaurant of inRestaurants) {
                    let passTests = true;
                    // Filtrar en cocina.
                    if (this.state.cuisine !== ""
                    ) {
                      if (Object.keys(this.state.cuisine).length > 0) {
                        if (restaurant.cuisine !== this.state.cuisine) {
                          passTests = false;
                        }
                      }
                    }
                    // Filtrar en precio.
                    if (this.state.price !== "") {
                      if (restaurant.price > this.state.price) {
                        passTests = false;
                      }
                    }
                    // Filtrar on clasificacion.
                    if (this.state.rating !== "") {
                      if (restaurant.rating < this.state.rating) {
                        passTests = false;
                      }
                    }
                    // Filtrar en entrega.
                    if (this.state.delivery !== "") {
                      if (restaurant.delivery !== this.state.delivery) {
                        passTests = false;
                      }
                    }
                    // caso donde no hay criterios seleccionados.
                    if (this.state.cuisine.length === 0 &&
                      this.state.price === "" && this.state.rating === "" &&
                      this.state.delivery === ""
                    ) {
                      passTests = true;
                    }
                    // Sí, este cumple con los criterios, agregar.
                    if (passTests) {
                      filteredRestaurants.push(restaurant);
                    }
                  }
                  // Si no hubo coincidencias, no se puede continuar.
                  if (filteredRestaurants.length === 0) {
                    Alert.alert(
                      "Bueno, no parece fácil.",
                      "Ninguno de los restaurantes elegidos cumple con estos criterios. Reajustar."
                      [ { text : "OK" } ],
                      { cancelable : false }
                    );
                  } else {
                    // Tenemos al menos uno, ir a pantalla Siguiente.
                    this.props.navigation.navigate("ChoiceScreen");
                  }
                }.bind(this)
              );
            } }
          />
        </View>
      </View>
    </ScrollView>

  ); }


} /* Fin PreFiltersScreen. */

/**
 * #############################################################################
 * Pantalla Choice.
 * #############################################################################
 */
class ChoiceScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

      this.state = {
        participantsList : participants,
        participantsListRefresh : false,
        selectedVisible : false,
        vetoVisible : false,
        vetoDisabled : false,
        vetoText : "Veto"
      };

  }

  render() { return (

    <View style={styles.listScreenContainer}>

      { /* ########## Modal seleccionada ########## */ }
      <Modal
        presentationStyle={"formSheet"}
        visible={this.state.selectedVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <View style={styles.selectedContainer}>
          <View style={styles.selectedInnerContainer}>
            <Text style={styles.selectedName}>{chosenRestaurant.name}</Text>
            <View style={styles.selectedDetails}>
              <Text style={styles.selectedDetailsLine}>
                Estrellas {"\u2605".repeat(chosenRestaurant.rating)}
              </Text>
              <Text style={styles.selectedDetailsLine}>
                Restaurante cosina {chosenRestaurant.cuisine}
              </Text>
              <Text style={styles.selectedDetailsLine}>
                Con calificación de precio {"$".repeat(chosenRestaurant.price)}
              </Text>
              <Text style={styles.selectedDetailsLine}>
                que {chosenRestaurant.delivery === "Si" ? "HACE" : "NO HACE"} entregas.
              </Text>
            </View>
            <CustomButton
              text="Aceptar"
              width="94%"
              onPress={ () => {
                this.setState({ selectedVisible : false, vetoVisible : false });
                this.props.navigation.navigate("PostChoiceScreen");
              } }
            />
            <CustomButton
              text={this.state.vetoText}
              width="94%"
              disabled={this.state.vetoDisabled ? "true" : "false"}
              onPress={ () => {
                this.setState({ selectedVisible : false, vetoVisible : true });
              } }
            />
          </View>
        </View>
      </Modal>

      { /* ########## Modal Veto ########## */ }
      <Modal
        presentationStyle={"formSheet"}
        visible={this.state.vetoVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <View style={styles.vetoContainer}>
          <View style={styles.vetoContainerInner}>
            <Text style={styles.vetoHeadline}>Quién está vetando?</Text>
            <ScrollView style={styles.vetoScrollViewContainer}>
              { participants.map((inValue) => {
                  if (inValue.vetoed === "no") {
                    return <TouchableOpacity key={inValue.key}
                      style={ styles.vetoParticipantContainer }
                      onPress={ () => {
                        // Marcar el vetador como vetado.
                        for (const participant of participants) {
                          if (participant.key === inValue.key) {
                            participant.vetoed = "si";
                            break;
                          }
                        }
                        // Asegúrate de que haya al menos una persona que
                        // puede vetar, de lo contrario deshabilita el botón Veto.
                        let vetoStillAvailable = false;
                        let buttonLabel = "No quedan vetos";
                        for (const participant of participants) {
                          if (participant.vetoed === "no") {
                            vetoStillAvailable = true;
                            buttonLabel = "Veto";
                            break;
                          }
                        }
                        // Eliminar el restaurante vetado.
                        for (let i = 0; i < filteredRestaurants.length; i++) {
                          if (filteredRestaurants[i].key === chosenRestaurant.key) {
                            filteredRestaurants.splice(i, 1);
                            break;
                          }
                        }
                        // Update state.
                        this.setState({
                          selectedVisible : false,
                          vetoVisible : false,
                          vetoText : buttonLabel,
                          vetoDisabled : !vetoStillAvailable,
                          participantsListRefresh : !this.state.participantsListRefresh
                        });
                        // Si solo queda un restaurante entonces
                        // esa es la elección.
                        if (filteredRestaurants.length === 1) {
                          this.props.navigation.navigate("PostChoiceScreen");
                        }
                      } }
                    >
                      <Text style={styles.vetoParticipantName}>
                        {inValue.firstName + " " + inValue.lastName}
                      </Text>
                    </TouchableOpacity>;
                  }
                })
              }
            </ScrollView>
            <View style={styles.vetoButtonContainer}>
              <CustomButton
                text="No importa"
                width="94%"
                onPress={ () => {
                  this.setState({
                    selectedVisible : true, vetoVisible : false
                  });
                } }
              />
            </View>
          </View>
        </View>
      </Modal>

      { /* ########## pantalla Elección principal. ########## */ }
      <Text style={styles.choiceScreenHeadline}>Pantalla de elección</Text>
      <FlatList
        style={styles.choiceScreenListContainer}
        data={this.state.participantsList}
        extraData={this.state.participantsListRefresh}
        renderItem={ ({item}) =>
          <View style={styles.choiceScreenListItem}>
            <Text style={styles.choiceScreenListItemName}>
              {item.firstName} {item.lastName} ({item.relationship})
            </Text>
            <Text>Vetado: {item.vetoed}</Text>
          </View>
        }
      />
      <CustomButton
        text="Elegir al azar"
        width="94%"
        onPress={ () => {
          // Elige uno al azar.
          const selectedNumber = getRandom(0, filteredRestaurants.length - 1);
          // Get el descriptor del restaurante.
          chosenRestaurant = filteredRestaurants[selectedNumber];
          // Mostrar el modal seleccionado
          this.setState({ selectedVisible : true });
        } }
      />

    </View>

  ); }


} /* Fin ChoiceScreen. */

/**
 * #############################################################################
 * Pantalla Post-choice.
 * #############################################################################
 */
class PostChoiceScreen extends React.Component {

  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

  }

  render() { return (

    <View style={styles.postChoiceScreenContainer}>

      <View>
        <Text style={styles.postChoiceHeadline}>Disfrute de su comida!</Text>
      </View>

      <View style={styles.postChoiceDetailsContainer}>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Nombre:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.name}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Cosina:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.cuisine}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Precio:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {"$".repeat(chosenRestaurant.price)}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Clasificación:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {"\u2605".repeat(chosenRestaurant.rating)}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Teléfono</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.phone}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Dirección:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.address}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Sitio web:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.webSite}
          </Text>
        </View>

        <View style={styles.postChoiceDetailsRowContainer}>
          <Text style={styles.postChoiceDetailsLabel}>Entrega:</Text>
          <Text style={styles.postChoiceDetailsValue}>
            {chosenRestaurant.delivery}
          </Text>
        </View>

      </View>

      <View style={{ paddingTop:80}}>
      <Button
        title="Todo listo"
        onPress={ () => this.props.navigation.navigate("DecisionTimeScreen") }
      />
      </View>

    </View>

  ); }


} /* Fin PostChoiceScreen. */


/**
 * #############################################################################
 * Definir la pantalla en sí misma.
 * #############################################################################
 */
const DecisionScreen = StackNavigator(

  /* ----------  Routes. ----------  */
  {
    DecisionTimeScreen : { screen : DecisionTimeScreen },
    WhosGoingScreen : { screen : WhosGoingScreen },
    PreFiltersScreen : { screen : PreFiltersScreen },
    ChoiceScreen : { screen : ChoiceScreen },
    PostChoiceScreen : { screen : PostChoiceScreen }
  },
  /* ----------  Options. ----------  */
  {
    headerMode : "none"
  }
); /* Fin StackNavigator. */


// Export component.
exports.DecisionScreen = DecisionScreen;

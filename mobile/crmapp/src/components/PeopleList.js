import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import { connect } from "react-redux";
import PersonaItem from "./PersonaItem";

class PeopleList extends Component {

  componentWillMount(){
    const datasrc = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.dataSource = datasrc.cloneWithRows(this.props.personas)
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <ListView
        enableEmptySections={true}
        dataSource = {this.dataSource}
        renderRow = {(rowData) => <PersonaItem personas={rowData} />}
        >
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingLeft: 15,
    width: 400
  }
});

const mapStateToProps = state => {
  return { personas: state.personas }
}

export default connect(mapStateToProps)(PeopleList)
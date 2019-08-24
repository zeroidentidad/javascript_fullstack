import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { TextInput, StyleSheet } from 'react-native';

export default class SearchBar extends React.Component {
    
    static propTypes = {
        searchPostres: PropTypes.func.isRequired
    };

    state = {
        searchTerm: '',
    };

    debouncedSearchPostres = debounce(this.props.searchPostres, 300);

    handleChange = (searchTerm) => {
        this.setState({ searchTerm }, () => {
            this.debouncedSearchPostres(this.state.searchTerm);
        });
    };

    render() {
        return (
            <TextInput
                placeholder="Buscar..."
                style={styles.input}
                onChangeText={this.handleChange}
            />
        );
    }
}

const styles = StyleSheet.create({
  input: {
      height: 50,
      marginHorizontal: 12,
      fontSize: 24,
      marginHorizontal: 12
  }  
})
 
import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'

class Specieworld extends React.Component {

  state = {
    data: {},
    loading: true
  }
  
  componentDidMount() {
    if (!this.props.url) return
    const url = this.props.url.replace(/^http:\/\//i, 'https://')
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json, loading: false })
      })
      .catch((err) => console.log('err:', err))
  }

  render() {

    const { data } = this.state

    return (
      <View style={styles.container}>
        {
          this.state.loading ? (
            <ActivityIndicator color='#ffe81f' />
          ) : (
            <View style={styles.HomeworldInfoContainer}>
              <TextContainer label="Nombre" info={data.name} />
              <TextContainer label="Altura" info={data.height+" cm"} />
              <TextContainer label="Peso" info={data.mass+" kg"} />
              <TextContainer label="Género" info={data.gender} />
              <TextContainer label="Color ojos" info={data.eye_color} />
              <TextContainer label="Color piel" info={data.skin_color} />
              <Text style={styles.closeButton} onPress={this.props.closeModal}>
                Cerrar modal
              </Text>
            </View>
          )
        }
      </View>
    )

  }
}

const TextContainer = ({ label, info }) => <Text style={styles.text}>{label}: {info}</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20
  },
  HomeworldInfoContainer: {
    padding: 20
  },
  text: {
    color: '#ffe81f',
    alignSelf: 'center',
    fontSize: 18
  },
  closeButton: {
    paddingTop: 20,
    color: 'white',
    fontSize: 14,
    alignSelf: 'center'
  }
})

export default Specieworld
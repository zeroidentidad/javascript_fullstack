 
import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native'

class Filmworld extends React.Component {

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
            <ScrollView style={{flex:1}}>
            <View style={styles.HomeworldInfoContainer}>
              <TextContainer label="Titulo" info={data.title} />
              <TextContainer label="Episodio" info={data.episode_id} />
              <TextContainer label="Cantidad personajes" info={data.characters.length} />
              <TextContainer label="Apertura" info={"\n"+data.opening_crawl} />
              <Text style={styles.closeButton} onPress={this.props.closeModal}>
                Cerrar modal
              </Text>
            </View>
            </ScrollView>
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

export default Filmworld
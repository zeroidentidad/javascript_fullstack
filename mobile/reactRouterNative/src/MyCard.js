import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Link } from 'react-router-native';

const MyCard = (props) => {
  return (
    <View>
      <Link to={`/card/${props.card.id}`}>
        <Card
          title={props.card.name}
          image={require('./images/background.jpg')}>
          <Text style={{marginBottom: 10}}>
            Elemento Card de React Native Elements utilizado en este ejemplo de React Router Native. Genial!
          </Text>
          <Button
            icon={{name: 'done'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='TOCAME' />
        </Card>
        </Link>
      </View>
  );
}
 
export default MyCard;

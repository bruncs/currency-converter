import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image source={require('./images/background.png')} >
      <Text>Teste</Text>
    </Image>
    <Text>Currency Converter</Text>
  </View>
);

export default Logo;

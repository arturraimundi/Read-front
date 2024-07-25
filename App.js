import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('./assets/images/splash.gif');

export default function WelcomeScreen() {


  return (
    <View style={styles.container}>
      <Text>Bem vindo ao 'app name!'</Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    padding: 80,
  },
  image: {
    width: 100,
    height: 100,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
  useEffect(() => {
   setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.Text animation="zoomInDown" style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
        Notes📒
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});

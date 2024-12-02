import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxContainer = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'red' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Menempatkan kotak secara horizontal
    justifyContent: 'space-between', // Menjaga kotak berada di sisi kiri dan kanan
    width: '100%',
    paddingHorizontal: 20, // Padding untuk memastikan kotak tidak terlalu menempel ke sisi layar
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default BoxContainer;

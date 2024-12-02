import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenterText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>anggita wahyudinip_223510804</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default CenterText;

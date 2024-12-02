import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CenterText from './src/components/CenterText'; // Import komponen CenterText
import BoxContainer from './src/components/BoxContainer'; // Import komponen BoxContainer

const App = () => {
  // State untuk mengontrol visibilitas teks dan kotak
  const [showText, setShowText] = useState(true); // Default: tampilkan teks
  const [showBoxes, setShowBoxes] = useState(true); // Default: tampilkan kotak

  return (
    <View style={styles.container}>
      {/* Menampilkan Teks di Tengah Layar */}
      {showText && <CenterText />}
      
      {/* Menampilkan Kotak di Kiri dan Kanan Layar */}
      {showBoxes && <BoxContainer />}

      {/* Tombol di bawah untuk mengontrol tampilan kotak dan teks */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Tampilkan Kotak Saja"
            onPress={() => {
              setShowText(false); // Sembunyikan teks
              setShowBoxes(true); // Tampilkan kotak
            }}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Tampilkan Teks Saja"
            onPress={() => {
              setShowText(true); // Tampilkan teks
              setShowBoxes(false); // Sembunyikan kotak
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Posisikan konten di tengah secara vertikal
    alignItems: 'center', // Posisikan konten di tengah secara horizontal
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    gap: 20, // Jarak antar elemen
  },
  buttonContainer: {
    flexDirection: 'row', // Atur tombol agar sejajar secara horizontal
    justifyContent: 'space-evenly', // Jarak antar tombol merata
    width: '80%', // Sesuaikan lebar tombol
    marginTop: 20, // Beri jarak antara tombol dan komponen atas
  },
  buttonWrapper: {
    width: '45%', // Lebar tombol agar seimbang di kedua sisi
  },
});

export default App;

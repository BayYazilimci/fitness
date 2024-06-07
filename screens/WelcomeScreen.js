import React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native'; 

const WelcomeScreen = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.yalispor.com.tr/minio-url/blog/spor-sonrasi-vucuttaki-degisimler_5e3a5f09b2212.jpg' }}
        style={styles.backgroundImage}
      >
        <Text style={styles.welcomeText}>Welcome NUR Fitness</Text>
        <Button title="Uygun İle spor zamanı" onPress={() => navigation.navigate('Home')} />
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#177CD1',
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text, SafeAreaView, StyleSheet } from 'react-native';

const RestScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(10);
  let timer;

  const startTime = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();

    // Cleanup function
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/ed/cc/e7/edcce7483c9c1890ba5289a7fdc52fe0.gif",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Nefes Molası!</Text>
      <Text style={styles.timer}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 420,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
  },
  timer: {
    fontSize: 60,
    fontWeight: '900',
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
  },
});

export default RestScreen;

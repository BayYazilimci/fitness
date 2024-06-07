import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { FitnessItems } from '../Context';

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const { completed, setCompleted, calories, setCalories, minutes, setMinutes, workout, setWorkout } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: current?.image }} />
      <Text style={styles.exerciseName}>{current?.name}</Text>
      <Text style={styles.sets}>x{current?.sets}</Text>

      {index + 1 >= exercise.length ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Tamamlandı</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current?.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Tamamlandı</Text>
        </TouchableOpacity>
      )}

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={styles.navButton}
        >
          <Text style={styles.navButtonText}>ÖNCEKİ HARAKET</Text>
        </TouchableOpacity>

        {index + 1 >= exercise.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>SONRAKI HARAKET</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>SONRAKI HARAKET</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: "80%",
    height: 400,
    borderRadius: 20,
  },
  exerciseName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
  sets: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#198f51',
    marginTop: 50,
    borderRadius: 30,
    padding: 10,
    width: "90%",
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 25,
  },
  navButton: {
    borderRadius: 30,
    padding: 10,
    width: "42%",
    alignItems: 'center',
  },
  navButtonText: {
    color: '#3f3d3d',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FitScreen;

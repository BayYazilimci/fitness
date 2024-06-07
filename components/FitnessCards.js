import React, { useMemo } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fitness from '../data/fitness';

const FitnessCards = () => {
  const navigation = useNavigation();
  const FitnessData = useMemo(() => fitness, []);

  return (
    <View style={styles.container}>
      {FitnessData.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Workout', {
            image: item.image, 
            exercises: item.exercises,
            id: item.id
          })}
          style={styles.card}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 20,
    top: 20,
  },
});

export default FitnessCards;

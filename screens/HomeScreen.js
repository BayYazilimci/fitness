import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);

  const Card = ({ value, label }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{value}</Text>
      <Text style={styles.cardLabel}>{label}</Text>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ayşe NUR Fitness</Text>
        <View style={styles.cardsRow}>
          <Card value={calories.toFixed(2)} label="Kalori" />
          <Card value={workout} label="ANTRENMANLAR" />
          <Card value={minutes} label="DAKİKALAR" />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323', // Arka plan rengini burada değiştirin
  },
  header: {
    backgroundColor: '#025d93',
    paddingTop: 80,
    paddingHorizontal: 20,
    height: 160,
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#232323',
    width: '32%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#025d93',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  cardLabel: {
    color: 'white',
  },
});

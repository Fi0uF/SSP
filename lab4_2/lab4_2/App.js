import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const pages = [
    {
      id: '1',
      title: 'Get the best prices',
      description: 'Add the destinations you like to your Favorites. Yandex.Flights will notify you when prices change.',
      buttonText: 'Got it, thanks',
    },
    {
      id: '2',
      title: 'Stay informed',
      description: 'Yandex.Flights will inform you via push notifications if your flight is delayed or cancelled.',
      buttonText: 'Got it, thanks',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.page}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title={item.buttonText} color="#FFC107" onPress={() => alert('Button Pressed')} />
    </View>
  );

  return (
    <FlatList
      data={pages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
    textAlign: 'center',
  },
});
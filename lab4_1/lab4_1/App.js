import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Увеличенный текст */}
      <Text style={styles.largeText}>
        Unlike the more generic <Text style={styles.bold}>ScrollView</Text>, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data. Unlike the more generic <Text style={styles.bold}>ScrollView</Text>, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data. Unlike the more generic <Text style={styles.bold}>ScrollView</Text>, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data.
      </Text>

      {/* Кнопка */}
      <Text style={styles.text}>
        Adjust the color in a way that looks standard on each platform. On iOS, the <Text style={styles.bold}>color</Text> prop controls the color of the text. On Android, the <Text style={styles.bold}>color</Text> adjusts the background color of the button.
      </Text>
      <Button title="PRESS ME" color="black" onPress={() => alert('Button Pressed')} />

      {/* Заголовок "List Views" */}
      <Text style={styles.heading}>List Views</Text>
      <Text style={styles.text}>
        Many of the following components provide wrappers for commonly used Android classes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 20,
    textAlign: 'justify', // Выравнивание текста по ширине
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

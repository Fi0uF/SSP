import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const BookHighlight = () => {
  return (
    <View style={styles.container}>
      {/* Верхняя область с заголовком */}
      <View style={styles.header}>
        <Text style={styles.headerText}>5 книжных новинок октября</Text>
      </View>

      {/* Средняя область с книгой */}
      <View style={styles.middle}>
        <Text style={styles.bookTitle}>«Кадиш.com» Натан Ингландер.</Text>
        <Text style={styles.publisher}>Издательство «Книжники»</Text>
      </View>

      {/* Нижняя область с описанием */}
      <View style={styles.footer}>
        <Text style={styles.description}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, 
          репортаж британской журналистки о будущем человечества, дебютный роман Оушена 
          Вуонга и журналистское расследование о создании «Моссада». В нашей подборке 
          рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы 
          появиться на ваших полках.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '15%', // 15% высоты экрана
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    height: '25%', // 25% высоты экрана
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%', // Учитываем отступы для текста
  },
  footer: {
    height: '60%', // 60% высоты экрана
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%', // Учитываем отступы для текста
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  publisher: {
    fontSize: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20, // Для улучшения читаемости текста
  },
});

export default BookHighlight;
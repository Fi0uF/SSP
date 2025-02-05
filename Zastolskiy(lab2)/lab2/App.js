import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ArticleCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Журнал Bright</Text>
      <TouchableOpacity>
        <Text style={styles.newsLink}>Новости</Text>
      </TouchableOpacity>
      <Image 
        source={require('/assets/picture.jpg')} 
  style={styles.image}
      />
      <Text style={styles.title}>5 бюджетных направлений для отдыха в 2025 году</Text>
      <Text style={styles.description}>
        Путешествия в последнее время стали очень затратным мероприятием. Горящих туров почти не осталось, стоимость перелетов и отелей выросла иногда кратно. Однако пока еще на карте мира остались места, где можно отдохнуть достаточно бюджетно. Свой топ из 5 таких направлений для россиян составил travel-эксперт, самый известный турагент России, владелец турагентства Тариел Гажиенко.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  newsLink: {
    color: '#007bff',
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default ArticleCard;

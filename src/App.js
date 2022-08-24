/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import NewsBanner from './components/NewsBanner';

import news_data from './news_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news ={item} />;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>News</Text>
        <FlatList ListHeaderComponent={() => (
          <NewsBanner />
        )}
          keyExtractor={item => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ecff1',

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 40,
  }
})

export default App;

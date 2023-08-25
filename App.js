import React, { useState, useEffect } from "react";
import moment from "moment";
import { Card, Button } from "react-native-elements";
import { Linking, ActivityIndicator, StyleSheet, Text, View, Image,FlatList } from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=50ea272430754ec49a5cd25a9877fc27"
    );
    const jsonData = await response.json();
    setArticles(jsonData.articles);
    setLoading(false);
  };

  const onPress = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={loading} />
      </View>
    );
  }

  const renderArticleItem = ({ item }) => {
    return (
      <Card title={item.title} image={{ uri: item.urlToImage }}>
        <View style={styles.row}>
          <Text style={styles.label}>Source</Text>
          <Text style={styles.info}>{item.source.name}</Text>
        </View>
        <Text style={{ marginBottom: 10 }}>{item.content}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Published</Text>
          <Text style={styles.info}>
            {moment(item.publishedAt).format("LLL")}
          </Text>
        </View>
        <Button onPress={() => onPress(item.url)} title="Read more" backgroundColor="#03A9F4" />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>News Updates</Text>
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "600",
    padding: 5,
    backgroundColor: "#930302",
    color: "#f6f6f6",
    width: "95%",
    textAlign: "center",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
  },
  label: {
    fontSize: 24,
    color: "black",
    marginRight: 10,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "grey",
  },
});






//------------------Weateher-----------
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Weather from './Weather'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const App = () => {
//   return (
//  <SafeAreaView style={styles.container}>
//       <Weather/>
//  </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   // container:{
//   //   flex:1,
//   //   backgroundColor:"#8cb3e3",
//   //   alignContent:"center",
//   //   justifyContent:"center",

//   // }
// })












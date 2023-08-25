// import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
// import React, { useEffect } from "react";
// import { Card, Button, Icon } from "react-native-elements";
// import moment from "moment";
// import { FlatList } from "react-native";

// const renderArticleItem = ({ item }) => {
//   return (
//     <Card title={item.title} image={{ uri: item.urlToImage }}>
//       <View style={styles.row}>
//         <Text style={styles.label}>Source</Text>
//         <Text style={styles.info}>{item.source.name}</Text>
//       </View>
//       <Text style={{ marginBottom: 10 }}>{item.content}</Text>
//       <View style={styles.row}>
//         <Text style={styles.label}>Published</Text>
//         <Text style={styles.info}>
//           {moment(item.publishedAt).format('LLL')}
//         </Text>
//       </View>
//       <Button icon={<Icon />} title="Read more" backgroundColor="#03A9F4" />
//     </Card>
//   );
// };

// const News = () => {
//   const [loading, setLoading] = React.useState(true);
//   const [articles, setArticles] = React.useState([]);
//   const [pageNumber, setPageNumber] = React.useState(1);

//   const getNews = async () => {
//     const response = await fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&apikey=50ea272430754ec49a5cd25a9877fc27=${pageNumber}"
//     );
//     const jsonData = await response.json();
//     setArticles(articles.concat(jsonData.articles));
//     setPageNumber(pageNumber + 1);
//     setLoading(false);
//     //console.log("jsonData", jsonData);
//   };
//   useEffect(() => {
//     getNews();
//   }, []);

//   if (loading) {
//     return (
//       <View>
//         <ActivityIndicator size={"large"} loading={loading} />
//       </View>
//     );
//   }

//   return (
//     <View>
//       <View style={styles.container}>
//         <View style={styles.row}>
//           <Text style={styles.label}>Articles Read</Text>
//           <Text style={styles.info}>{articles.length}</Text>
//         </View>
//       </View>
//       <FlatList
//         data={articles}
//         renderItem={renderArticleItem}
//         keyExtractor={(item) => item.title}
//       />
//     </View>
//   );
// };

// export default News;

// const styles = StyleSheet.create({
//   header: {
//     height: 30,
//     width: "100%",
//     backgroundColor: "pink",
//   },
//   row: {
//     flexDirection: "row",
//   },
//   label: {
//     fontSize: 16,
//     color: "black",
//     marginRight: 10,
//     fontWeight: "bold",
//   },
//   info: {
//     fontSize: 16,
//     color: "grey",
//   },
// });

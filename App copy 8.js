import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native'
import React, {useEffect,useState} from 'react'

const App = () => {

  const [isLoading, setLoading] = useState();
  const [data, setData] = useState();
  const getDataNews = async () => {
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23");
      const news = await response.json();
      setData(news.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataNews();
  }, []);

  const _renderItem = ({item}) => {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1,flexDirection:'row',margin:5}}>
          <Image resizeMode='cover' source={{uri: item.urlToImage}} style={{flex:1,width:'100%',height:'100%'}}/>
          <View style={{width:200,margin:5}}>
            <Text style={{fontSize:14,marginBottom:5,color:'blue'}}>{item.title}</Text>
            <Text style={{fontSize:10}}>{item.source.name}</Text>
            <Text style={{fontSize:10,color:'red'}}>Publish: {item.publishedAt}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff"/>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.title}
          renderItem={_renderItem}
        />
      )}
    </View>
  )
}

export default App

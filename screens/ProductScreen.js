import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //getData() for get data from backend
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //alert(JSON.stringify(res.data.data))
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>เกิดข้อผิดผลาด ไม่สามารถติดต่อกับ Server ได้</Text>
      </View>
    );
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  /* //จะทำงานเมื่อคลิกเมนู Product
  useEffect(() => {
    //call function get data()
    getData();
  }, []); //[]ใช้สำหรับดึงข้อมูลแค่รอบเดียวตอนเข้าใช้ component */

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#F4511e" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity style ={styles.addButtonStyle} onPress ={()=>{navigation.navigate('Detail', {id : item.id, title : item.title})}}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
              <Image
                resizeMethod="cover"
                style={styles.thumbnail}
                source={{ uri: item.picture }}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorViewComponent={ItemSeparatorView}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },

  dataContainer: {
    flex: 1,
  },

  thumbnail: {
    width: 70,
    height: 70,
  },

  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },

  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },

  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },

  addButtonStyle: {
    width: "100%",
    marginBottom: 15,
  },
});

export default ProductScreen;

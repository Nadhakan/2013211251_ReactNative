import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import react from "react";

const DetailScreen = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //getData() for get data from backend
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://api.codingthailand.com/api/course/' + id
      );
      //alert(JSON.stringify(res.data.data))
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  react.useLayoutEffect(() => {
    navigation.setOptions({
      //title : 'รายละเอียดสินค้า'//set แบบ static
      title: title //set แบบ dynamic
    });
  }, [navigation, title]);

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  if (loading === true) {
    return (
      <View style={{ alignItems: 'center', alignContent: 'center', height: '100%' }}>
        <ActivityIndicator color="#F4511e" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData(id);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Text style={styles.thumbnail}>{index + 1}</Text>
          <View style={styles.dataContainer}>
            <View style={styles.dataContent}>
              <Text style={styles.title}>{item.ch_title}</Text>
              <Text note numberOfLines={1}>{item.ch_dateadd}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
        <FlatList
          data={detail}
          keyExtractor={(item, index) => item.ch_id.toString()}
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
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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

export default DetailScreen;

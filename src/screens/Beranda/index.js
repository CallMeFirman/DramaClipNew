import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import {AddSquare} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import {BlogList, CategoryList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {formatNumber} from '../../utils/formatNumber';
import firestore from '@react-native-firebase/firestore';

const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 1);
  const verticalData = BlogList.slice(1, 5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        {/* <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall style={styles.card2} item={item} key={index} />
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Beranda() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setBlogData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DramaClip</Text>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate("Tambah")}
        >
          <AddSquare color={colors.white()} variant="Linear" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <ListBlog />
          <View style={styles.listCard}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => <ItemSmall style={styles.card2} item={item} key={index} />)
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  header: {
    backgroundColor: colors.blue(0.7),
    paddingHorizontal: 24,
    elevation : 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraLight'],
    color: colors.white(),
  },
  listCategory: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation : 2,
    color: colors.blue(),
  },
  listBlog: {
    paddingVertical: 2,
    gap: 5,
  },
  card2: {
    width: '50%',
  },
  listCard: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 20,
    display : 'flex',
    justifyContent: 'left',
    flexDirection:'row',
    flexWrap: 'wrap'
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
  },
});
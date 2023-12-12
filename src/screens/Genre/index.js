import {StyleSheet, Text, View, ScrollView, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import   {ListHorizontal} from '../../components'; 
import { fontType, colors } from '../../theme';

const data = [
  {id: 1, label: 'Action'},
  {id: 2, label: 'Comedy'},
  {id: 3, label: 'Fantasy'},
  {id: 4, label: 'Horor'},
  {id: 5, label: 'Romance'},
];
const Genre = () => {
  const recentBlog = BlogList.slice(5, 6);
  const recentBlog1 = BlogList.slice(6, 7);
  const recentBlog2 = BlogList.slice(7, 8);
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {transform: [{translateY: recentY}]}]}>
        <Text style={styles.title}>Daftar Genre</Text>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 40}}>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog} />
        </View>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog1} />
        </View>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog2} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};
export default Genre;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
header: {
    backgroundColor: colors.blue(),
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.white(0.5),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(0.5),
    lineHeight: 18,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraLight'],
    color: colors.white(),
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  container:{
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,
  },
});
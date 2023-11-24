import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ListHorizontal} from '../../components'; 
import {SearchNormal1} from 'iconsax-react-native';
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.black()} variant="Linear" />
          <Text style={styles.placeholder}>Masukkan Genre</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog} />
        </View>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog1} />
        </View>
        <View style={styles.listBlog}>
            <ListHorizontal data={recentBlog2} />
        </View>
      </ScrollView>
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
    backgroundColor: colors.white(),
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
    paddingVertical: 20,
    gap: 10,
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
});
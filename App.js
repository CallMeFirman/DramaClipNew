import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Notification, Element3, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

//ori an===========
const ListBlog = () => {
    return (
      <ScrollView>
        <View style={styles.listBlog}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{gap: 1}}>
            <View style={{...itemHorizontal.cardItem, marginLeft: 1}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://radarlampung.disway.id/upload/41d276020812ec6463db3b40d263414a.jpeg',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Nonton Drama Series Asia Terpopuler 2023
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://cdn1.productnation.co/optimized/1024w/stg/sites/5/5cc2e14450c57.webp',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Exploring the World of Electric Cars
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://lh3.googleusercontent.com/p/AF1QipNeZQQMdyUjF3MmW_2te7gPB-aW7XqIE6KgtE7_=w1080-h608-p-no-v0',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Exploring the World of Electric Cars
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={itemHorizontal.cardItem}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://scontent.fcgk3-1.fna.fbcdn.net/v/t31.18172-8/22135508_10155803585632276_4777760961314243366_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFcrxCa9sENhnsgQhSiq-RjUg37MLFrhy1SDfswsWuHLQEVSheevlMBvarVJYy-7K8NNklEE7yoG9DqkwuLnVG_&_nc_ohc=rk0DzghPdOcAX-xT4R7&_nc_ht=scontent.fcgk3-1.fna&oh=00_AfDvCtLhVafa56euatuE2-usjwmTfTY7Rl9dHd9-ahyBUQ&oe=6552E379',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Baking 101: Mastering the Art of Baking
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
              <ImageBackground
                style={itemHorizontal.cardImage}
                resizeMode="cover"
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: 'https://areioutdoorgear.co.id/wp-content/uploads/2023/02/Banner-kategori_Outdoor-pack.jpg',
                }}>
                <View style={itemHorizontal.cardContent}>
                  <View style={itemHorizontal.cardInfo}>
                    <Text style={itemHorizontal.cardTitle}>
                      Rediscovering Vinyl: The Resurgence of Analog
                    </Text>
                    <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>


          <View style={itemVertical.listCard}>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://cdns.klimg.com/kapanlagi.com/p/mv5bmtk2mdnjnzetzjuyzc00nzjjlwi3zjatmje2nddmmzg5yzljxkeyxkfqcgdeqxvymti4ntc5odc5._v1_fmjpg_ux1000_.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Cina</Text>
                    <Text style={itemVertical.cardTitle}>
                      Si Ganteng & Si Cantik
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://cdn.idntimes.com/content-images/community/2022/06/image-2172081a92a3e84b6996f0abb650008a.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Thailand</Text>
                    <Text style={itemVertical.cardTitle}>
                      Drama Swadikap
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://media.suara.com/pictures/970x544/2022/06/01/70852-drama-korea-tentang-cinta-beda-dunia-hancinema.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Korea</Text>
                    <Text style={itemVertical.cardTitle}>
                      Goblin & Si Pawang Goblin
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://cdn0-production-images-kly.akamaized.net/mUDNThRWP_H71VShBARA6PDOJsc=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4442556/original/030335600_1685093339-Crush.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama China</Text>
                    <Text style={itemVertical.cardTitle}>Drama Percintaan 2 Manusia</Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/09/04/3656970508.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Korea</Text>
                    <Text style={itemVertical.cardTitle}>
                      Si Tentara & Si Dokter
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://live.firstmedia.com/files/images/article/2022/02/Suka%20Drama%20Romantis,%20Ini%203%20Rekomendasi%20Drama%20Thailand%20Untukmu.jpg',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Thailand</Text>
                    <Text style={itemVertical.cardTitle}>
                      Drama Percintaan 2 muda - mudi
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
            <View style={itemVertical.cardItem}>
              <Image
                style={itemVertical.cardImage}
                source={{
                  uri: 'https://o-cdn-cas.sirclocdn.com/parenting/images/Mengejar_Surga.width-800.format-webp.webp',
                }}
              />
              <View style={itemVertical.cardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{gap: 5, width: '80%'}}>
                    <Text style={itemVertical.cardCategory}>Drama Indonesia</Text>
                    <Text style={itemVertical.cardTitle}>
                      Mengejar Surga
                    </Text>
                  </View>
                </View>
                <View style={itemVertical.cardInfo}>
                  <Clock
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>Jul 25, 2023</Text>
                  <Message
                    size={10}
                    variant="Linear"
                    color={colors.grey(0.6)}
                  />
                  <Text style={itemVertical.cardText}>89</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
    
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DramaClip1</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <ListBlog />
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 24}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Popular
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Genre</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Tahun</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Recommend</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Ftv</Text>
          </View>
          <View style={{...category.item, marginRight: 24}}>
            <Text style={category.title}>Horor</Text>
          </View>
        </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 390,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  }, 
});
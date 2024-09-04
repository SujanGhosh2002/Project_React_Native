// import React, {useState} from 'react';
// import {
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import ImageView from 'react-native-image-viewing';
// import Header from '../components/Header';

// interface ImageData {
//   id: string;
//   source: any;
// }

// const Gallery: React.FC = () => {
//   const [images, setImages] = useState<ImageData[]>([
//     {id: `image_${Date.now()}_1`, source: require('../assets/gmail.png')},
//     {id: `image_${Date.now()}_2`, source: require('../assets/facebook.png')},
//     {id: `image_${Date.now()}_3`, source: require('../assets/twitter.png')},
//     {id: `image_${Date.now()}_4`, source: require('../assets/instagram.png')},
//     {id: `image_${Date.now()}_4`, source: require('../assets/abc.png')},
//     {id: `image_${Date.now()}_5`, source: require('../assets/bbb.png')},
//   ]);

//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const renderItem = ({item, index}: {item: ImageData; index: number}) => (
//     <TouchableOpacity
//       onPress={() => {
//         setSelectedImageIndex(index);
//         setIsVisible(true);
//       }}>
//       <Image source={item.source} style={styles.imageThumbnail} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Header />
//       <FlatList
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={3}
//       />
//       <ImageView
//         images={images.map(img => img.source)}
//         imageIndex={selectedImageIndex}
//         visible={isVisible}
//         onRequestClose={() => setIsVisible(false)}
//       />
//     </View>
//   );
// };
// const deviceWidth = Dimensions.get('window').width;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//   },
//   imageThumbnail: {
//     width: deviceWidth / 3,
//     height: 'auto',
//     resizeMode: 'contain',
//     aspectRatio: 1,
//   },
// });

// export default Gallery;

import React, {useEffect, useState} from 'react';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import {requestPermission} from '../components/Parmition';
import {fetchImages} from '../components/FetchImage';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const permissionGranted = await requestPermission();
      if (permissionGranted) {
        const galleryImages = await fetchImages();
        setImages(galleryImages);
      }
    };
    loadImages();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 100,
  },
});

export default Gallery;

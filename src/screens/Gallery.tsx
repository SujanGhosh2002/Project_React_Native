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

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import {hasAndroidPermission} from '../components/Parmition';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {
  addFavorite,
  removeFavorite,
} from '../Redux/features/favorite/favoriteSlice';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([] as any);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useAppDispatch();
  const favorite = useAppSelector(state => state.favorite as string[]);
  console.log(favorite);

  useEffect(() => {
    const loadImages = async () => {
      const permissionGranted = await hasAndroidPermission();
      if (permissionGranted) {
        CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        })
          .then(r => {
            setImages(
              r.edges.map(p => {
                return p.node;
              }),
            );
            console.log(
              r.edges.map(p => {
                return p.node.id;
              }),
            );
          })
          .catch(err => {
            //Error Loading Images
          });
      }
    };
    loadImages();
  }, []);

  const handleFavoriteToggle = (id: string, isFavorite: boolean) => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  const renderItem = ({item, index}: any) => {
    const isFavorite = favorite.some(image => image === item.id);

    console.log(isFavorite);
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          setSelectedImageIndex(index);
          setIsVisible(true);
        }}>
        <Image source={{uri: item.image.uri}} style={styles.image} />
        <TouchableOpacity
          style={styles.favorite}
          onPress={() => handleFavoriteToggle(item.id, isFavorite)}>
          <Icon
            style={styles.love}
            name="favorite"
            size={30}
            color={isFavorite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        numColumns={3}
      />
      <ImageView
        images={images.map((img: {image: any; uri: string}) => ({
          uri: img.image.uri,
        }))}
        imageIndex={selectedImageIndex}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: 'auto',
    height: 130,
  },
  favorite: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  love: {
    padding: 5,
  },
});

export default Gallery;

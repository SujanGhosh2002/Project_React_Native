import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {hasAndroidPermission} from '../components/Parmition';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ImageView from 'react-native-image-viewing';

const Favorite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([] as any);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dispatch = useAppDispatch();
  const favorite = useAppSelector(state => state.favorite as string[]);

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
          })
          .catch(err => {
            //Error Loading Images
          });
      }
    };
    loadImages();
  }, []);

  const renderItem = ({item, index}: any) => {
    const isFavorite = favorite.some(image => image === item.id);
    return isFavorite ? (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          setSelectedImageIndex(index);
          setIsVisible(true);
        }}>
        <Image source={{uri: item.image.uri}} style={styles.image} />
      </TouchableOpacity>
    ) : null;
  };

  return (
    <>
      <Header />
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

export default Favorite;

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

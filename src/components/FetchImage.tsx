import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export const fetchImages = async () => {
  try {
    const photos = await CameraRoll.getPhotos({
      first: 50, // Number of photos to load
      assetType: 'Photos',
    });
    return photos.edges.map((edge: {node: {image: any}}) => edge.node.image);
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

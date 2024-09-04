import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
  return (
    <View>
      <View style={styles.allLine}>
        <View style={styles.line}></View>
        <Text style={styles.or}> OR </Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.allIcon}>
        <View style={styles.icon}>
          <Image style={styles.image} source={require('../assets/gmail.png')} />
        </View>
        <View style={styles.icon}>
          <Image
            style={styles.image}
            source={require('../assets/facebook.png')}
          />
        </View>
        <View style={styles.icon}>
          <Image
            style={styles.image}
            source={require('../assets/twitter.png')}
          />
        </View>
        <View style={styles.icon}>
          <Image
            style={styles.image}
            source={require('../assets/instagram.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  allLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  line: {
    width: '40%',
    height: 2,
    backgroundColor: 'gray',
  },
  or: {},
  allIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 18,
    left: 5,
  },
});

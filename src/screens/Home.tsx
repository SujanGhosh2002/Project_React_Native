import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  TouchableHighlight,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import tw from 'twrnc';
import CountAll from '../components/CountAll';
import ButtonAll from '../components/ButtonAll';

const Home = () => {
  const [more, setMore] = useState(false);
  const profile = [
    {
      id: 1,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh.png'),
      date: Date.now(),
      relationType: 'Follow',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 2,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_2.png'),
      date: Date.now(),
      relationType: 'Connect',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 3,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_3.jpg'),
      date: Date.now(),
      relationType: 'Follow',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 4,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_4.jpeg'),
      date: Date.now(),
      relationType: 'Connect',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 5,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_5.png'),
      date: Date.now(),
      relationType: 'Follow',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 6,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_6.jpg'),
      date: Date.now(),
      relationType: 'Connect',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 7,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/Sujan_Ghosh_7.jpg'),
      date: Date.now(),
      relationType: 'Follow',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
    {
      id: 8,
      name: 'Sujan Ghosh',
      pujaTitle: 'Durgapuja | Kalipuja',
      source: require('../assets/my.jpg'),
      date: Date.now(),
      relationType: 'Connect',
      postDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur quod culpa, provident labore dolorum? In maiores, molestiae ab optio vel, dicta molestias tempora, exercitationem id soluta mollitia maxime nam voluptates enim voluptate nostrum velit error magnam. Corporis vitae temporibus, nemo laborum sit corrupti, quas commodi rem tempore, quae harum facere iure iste quam ut! Non incidunt sit quo? Cum aut eum, officia ex, inventore incidunt optio itaque totam repellendus adipisci suscipit, magni exercitationem aliquid. Expedita, quam reiciendis tempora cupiditate cumque soluta, vel doloribus harum porro quas blanditiis sequi voluptatum recusandae libero magnam voluptates. Ducimus tempore illo hic rem possimus.',
    },
  ];
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <TouchableOpacity style={styles.profile}>
          <View style={styles.profileImagePart}>
            <Image source={item.source} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextPart}>
            <Text style={styles.profileName}>{item.name}</Text>
            <Text style={styles.profileAim}>{item.pujaTitle}</Text>
            <Text>Date</Text>
          </View>
          <TouchableOpacity style={styles.relationButton}>
            <Text style={styles.relationButtonText}>{item.relationType}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.postDescription}>
            {more
              ? item.postDescription
              : `${item.postDescription.substring(0, 100)}...`}
            <TouchableOpacity
              onPress={() => {
                setMore(!more);
              }}>
              <Text style={styles.readMoreLess}>
                {more ? 'Less More' : 'Read More'}
              </Text>
            </TouchableOpacity>
          </Text>
          <Image source={item.source} style={styles.postImage} />
        </TouchableOpacity>
        <CountAll />
        <ButtonAll />
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <Header />
      <View>
        <FlatList
          data={profile}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    marginBottom: 50,
    flex: 1,
  },
  profile: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImagePart: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileTextPart: {
    marginHorizontal: 10,
  },
  profileName: {
    fontSize: 20,
    color: '#000',
  },
  profileAim: {
    fontSize: 15,
  },
  postDate: {},
  relationButton: {
    position: 'absolute',
    right: 0,
    margin: 10,
  },
  relationButtonText: {
    color: '#0073b1',
  },
  postDescription: {
    paddingHorizontal: 10,
  },
  readMoreLess: {
    marginLeft: 3,
    color: 'blue',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
});

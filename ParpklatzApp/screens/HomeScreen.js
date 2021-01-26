import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import FadeInImage from "../components/FadeInImage";


export default class HomeScreen extends React.Component {


  json_function = () => {
    fetch('https://api.parking-pilot.com/parkinglots/current-state?api_key=t42YiLO_aHIi3ZdTnKDIVGsgSbvy-MBKgWer9zoZS3c=')
    .then(response => response.json())
    .then( data =>{
      var json_fragment = data[0].not_installed;
      Alert.alert('Json Text' , json_fragment.toString())
    })
    .catch(error =>  console.log(error))
  }

 

  render() {
    const { navigate } = this.props.navigation;
    return <View>
      <ImageBackground source={require('../assets/images/Bamberg__2.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.getStartedContainer}>      
        <FadeInImage
          source={
            require('../assets/images/EBB_Logo.png')
          }
          style={styles.welcomeImage}
        />
          <Button 
              title="Fahrt beginnen"
              onPress={() => navigate('Maps')}
            />
        </View>
      </ImageBackground>
    </View>
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: Platform.OS == "ios" ? 24 : 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  getStartedContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    color: 'black',
    lineHeight: 40,
    textAlign: 'center',
  },
  bA: {
    fontSize: 40,
    color: 'red',
    lineHeight: 40,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    opacity: 0.95,
  }
});

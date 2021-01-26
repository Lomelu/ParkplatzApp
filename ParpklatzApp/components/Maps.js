import React, { useRef, useState } from 'react';
import MapView, { Polygon, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { getLocation } from '../services/LocationService';
import RBSheet from "react-native-raw-bottom-sheet";
import RegionPolygon from './RegionPolys';
import Bottomsheet from './Bottomsheet';
import Timer from './Timer';


export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.openSheet = this.openSheet.bind(this);

    this.state = {
      selectedRegionId: null,
      selectedSpace: 'robot-dev',
      startNavigation: false,
      count: 0
    }
  }

  renderContent() {
    return (<View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
    )
  };

  showbanner() {
    const slectedRegion = this.state.selectedRegionId + 1;
    if (this.state.selectedRegionId == null) {
      return (<View style={styles.tabBarInfoContainer} >
        <Text>Wählen Sie eine Abfuhrregion durch klicken auf die Karte aus </Text>
      </View>)
    } else {
      if (!this.state.startNavigation) {
        return (<View style={styles.tabBarInfoContainer} >
          <Text>Ausgewählte Region: {slectedRegion} </Text>
          <Button title="Fahrt beginnen" onPress={() => this.startJourney()} />
        </View>)
      } else {
        return (<View style={styles.tabBarInfoContainer} >
          <Timer startingNavigation={this.state.startNavigation} ref={child => { this.child = child }} {...this.props} />
          <Button title="Fahrt beenden" style={styles.button} onPress={() => this.endJourney()} />
        </View>)
      }
    }
  }

  startJourney() {
    this.setState({ startNavigation: true });
    console.log('z' + this.state.startNavigation);
  }

  getData(val) {
    this.setState({ selectedRegionId: val });
    console.log(val);
  }

  openSheet(name) {
    this.bottomsh.setingState(name);
    this.bottomsh.open();
  }


  endJourney() {
    this.setState({ startNavigation: false });
    this.child.resetTimer();
  }

  render() {
    return (

      <View style={styles.container}>

        <MapView style={styles.mapStyle}
          region={{
            latitude: 49.890232,
            longitude: 10.898131,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
          }}
          showsUserLocation={true}
          followsUserLocation={true}>

          <RegionPolygon updateIndex={this.getData}
            showImage={this.openSheet}
            startingNavigation={this.state.startNavigation}
          />


        </MapView>

        <Bottomsheet ref={bottomsh => { this.bottomsh = bottomsh }} navigation={this.props.navigation} />
        {this.showbanner()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 20,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    marginTop: 10,
    justifyContent: 'space-between',
  }
});


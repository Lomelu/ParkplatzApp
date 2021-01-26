import React from 'react';
import MapView, { Polygon, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import DummyJson from '../data/RegionPolygons.json'
import * as Geolib from 'geolib';
import ParkSpaces from '../data/ParkingSpaces.json'

export default class RegionPolygon extends React.Component {

  constructor() {
    super();
  }

  state = {

    selectedRegionId: null,
    chosenRegionId: 0
  }

  getColorByIndex(index) {

    if (this.state.selectedRegionId === index) {
      return 'rgba(255,0,0,.5)'
    } else {
      return 'rgba( ' + (5 + 7 * index) + ',' + (60 + 7 * index)  + ', ' + (150 + 12 * index) + ',.5)';
    }
  }

  setRegion(index) {
    const polygon = DummyJson.data[index].coordinates;
    console.log(polygon);
    const pointIn = { latitude: 49.8894, longitude: 10.87805 };
    let result = Geolib.isPointInPolygon(pointIn, polygon);
    console.log(result);

  }
  onPolygonPress(index) {
    console.log('pressed' + index)
    this.setRegion(index);
    this.state.selectedRegionId = index;
    this.state.chosenRegionId = index;
    this.props.updateIndex(index);
    this.forceUpdate();
  }

  onMarkerPress(name) {
    this.forceUpdate();
    this.props.showImage(name);
  }

  showMarker(lat, long) {

    if (this.state.selectedRegionId == null) {
      return 0.8
    } else {
      const polygon = DummyJson.data[this.state.selectedRegionId].coordinates;
      const Pointtest = { latitude: lat, longitude: long };
      if (Geolib.isPointInPolygon(Pointtest, polygon)) {
        return 1.0
      } else {
        return 0.3
      }
    }
  }

  render() {

    return (<>
      {DummyJson.data.map(({ coordinates }, index) => !this.props.startingNavigation && (
        <Polygon
          key={`polygon-${index}`}
          coordinates={coordinates}
          strokeWidth={1}
          fillColor={this.getColorByIndex(index)}
          onPress={() => this.onPolygonPress(index)}
          tappable
        />
      ))}
      {
        ParkSpaces.data.map(({ parkspace }, index) => this.state.selectedRegionId != null && Geolib.isPointInPolygon({
          latitude: parkspace.latitude,
          longitude: parkspace.longitude
        }, DummyJson.data[this.state.chosenRegionId].coordinates) && (
            <Marker
              key={`Marker-${index}`}
              coordinate={{ latitude: parkspace.latitude, longitude: parkspace.longitude }}
              opacity={this.showMarker(parkspace.latitude, parkspace.longitude)}
              pinColor={parkspace.occupied ? 'green' : 'red'}
              onPress={() => this.onMarkerPress(parkspace.name)}
            />
          ))}
    </>
    );
  }

}
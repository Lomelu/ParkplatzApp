import { interpolateBlues } from 'd3';
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TestGraphs, {testGraphs } from '../components/TestGraphs'




export default class Graphs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      chosenName: null,
    };
  }


  componentDidMount() {
    fetch('https://api.parking-pilot.com/parkinglots?api_key=GVWQozJ0Bmmpg2u71yuhXaorJnyCxEZr_nDNihTAzRM%3D')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
  }

  renderItem = ({ item }) => {
    const backgroundColor =  "white";
    
    const Item = ({ item , onPress, style}) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    ); 
    return (
   
      <Item
        item={item}
        onPress={() => this.props.navigation.navigate('UsageGraphs',  {titelName: item.name }) }
        style={{ backgroundColor }}
      />
    );
  };

  showGraphs(name) {
    this.setState({chosenName: name});
  }

  render() {
    
    const { data, isLoading } = this.state;

    return ( <>
        { this.state.chosenName === null && <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
          />
        )}
      </View> }
      { this.state.chosenName != null &&  <TestGraphs/> }
</>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'blue',
  },
});
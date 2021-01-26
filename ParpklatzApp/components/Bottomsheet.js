import React, { useRef } from "react";
import { View, Button, Text, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Kaimsgasse from '../svgs/Kaimsgasse';
import Teufelsgraben from '../svgs/Teufelsgraben';
import Gasfabrikstrasse from '../svgs/Gasfabrikstrasse';

export default class Bottomsheet extends React.Component {

  constructor(props) {
    super(props);

    this.setState = this.setState.bind(this);
  }
  state = {
    selectedSpace: 'robot-dev'
  }

  open() {
    this.RBSheet.open()
  }

  setingState(name) {
    this.setState({ selectedSpace: name });
  }


  getSvg() {
    switch (this.state.selectedSpace) {
      case 'Teufelsgraben':
        return Teufelsgraben
      case 'Kaimsgasse':
        return Kaimsgasse
      case 'Gasfabrikstrasse':
        return Gasfabrikstrasse
      default:
        return <Text> Bild noch nicht vorhanden </Text>
    }
  }

  render() {
   let Foo = this.getSvg()
   const { navigate } = this.props.navigation;
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={350}

        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
         <Button 
              title="Zur Analyse"
              onPress={() => this.props.navigation.navigate('UsageGraphs',  {titelName: this.state.selectedSpace }) }
            />
     <Foo/>
      </RBSheet>
    );

  }
}
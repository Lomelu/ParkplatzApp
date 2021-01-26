import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View,  Button, StyleSheet } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import TimeLine from '../components/Timeline'


// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#add8e6",
    backgroundGradientTo: "#4aabc8",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0,2 , 2, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }
]



const data = {
  labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'],

  datasets: [{
    data: [
      50,
      100,
      0,
      86,
      34,
    
    ],
    color: (opacity = 1) => `rgba(134, , 244, ${opacity})` // optional
  }]
}


export default class App extends React.Component {
  constructor(props) {
    super(props);

this.state = {
      titleName: props.route.params.titelName,
}

}


  renderTabBar() {
    return <StatusBar hidden/>
  }
  render() {
    const { navigate } = this.props.navigation;
    const width = Dimensions.get('window').width
    const height = 220
    return (
      <View >
         <View style={styles.tabBarInfoContainer} >
         <Button 
              title="Zurück zur Übersicht"
              onPress={() => navigate('Analytics')}
            />
      </View>
      <View style={styles.mainContainer}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 17
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
           
            <Text style={labelStyle}>{ this.state.titleName.substr(this.state.titleName.indexOf(" ") + 17) }</Text>
            <Text style={styles.infoText}>Durchschnittliche Belegung über die Woche</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                yAxisSuffix="%"
                chartConfig={chartConfig}
                style={graphStyle}
              />
              <Text style={styles.infoText}>Aktuelle Belegeungszeiten der letzte Woche</Text>
              <TimeLine/>
            </ScrollView>
          )
        })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    top:70 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent:'space-between',
    elevation: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 15,
  },
  infoText: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    paddingVertical: 12,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
   marginTop: 10,
   justifyContent:'space-between',
  }
})
import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, View } from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [

  {
    backgroundColor: '#99ccff',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#99ccff.',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
]


const data = {
  labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'],
  datasets: [{
    data: [
      50,
      100,
      24,
      86,
      23,
    
    ],
    color: (opacity = 1) => `rgba(134, 150, 244, ${opacity})` // optional
  }
    ]
}


export default class TestGraphs extends React.Component {
  render() {
    const width = Dimensions.get('window').width
    const height = 220
    return (
      <View >
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
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
              <Text style={labelStyle}>Gasfabrikstrasse</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            </ScrollView>
          )
        })}
      </View>
    )
  }
}
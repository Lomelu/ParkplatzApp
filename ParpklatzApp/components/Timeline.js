import React, { Component } from 'react'
import { View } from 'react-native'
import GanttChart from 'react-native-gantt-chart'

class Test extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tasks:  [ {
        "occupied" : false,
        "start" : 1598911200,
        "end" : 1599224454
      }, {
        "occupied" : true,
        "start" : 1599224454,
        "end" : 1599224486
      }, {
        "occupied" : true,
        "start" : 1599224486,
        "end" : 1599240383
      }, {
        "occupied" : false,
        "start" : 1599240383,
        "end" : 1599471712
      }, {
        "occupied" : true,
        "start" : 1599471712,
        "end" : 1599471754
      }, {
        "occupied" : true,
        "start" : 1599471754,
        "end" : 1599471780
      }, {
        "occupied" : false,
        "start" : 1599471780,
        "end" : 1599471780
      }, {
        "occupied" : true,
        "start" : 1599471780,
        "end" : 1599516000
      } ],
    test: {
      "630" : [ {
        "occupied" : false,
        "start" : 1599429600,
        "end" : 1599471712
      }, {
        "occupied" : true,
        "start" : 1599471712,
        "end" : 1599471754
      }, {
        "occupied" : true,
        "start" : 1599471754,
        "end" : 1599471780
      }, {
        "occupied" : false,
        "start" : 1599471780,
        "end" : 1599471780
      }, {
        "occupied" : true,
        "start" : 1599471780,
        "end" : 1599807799
      }, {
        "occupied" : false,
        "start" : 1599807799,
        "end" : 1599861600
      } ],
      "631" : [ {
        "occupied" : false,
        "start" : 1599429600,
        "end" : 1599473232
      }, {
        "occupied" : true,
        "start" : 1599473232,
        "end" : 1599473320
      }, {
        "occupied" : false,
        "start" : 1599473320,
        "end" : 1599806749
      }, {
        "occupied" : true,
        "start" : 1599806749,
        "end" : 1599807371
      }, {
        "occupied" : false,
        "start" : 1599807371,
        "end" : 1599807620
      }, {
        "occupied" : true,
        "start" : 1599807620,
        "end" : 1599807681
      }, {
        "occupied" : false,
        "start" : 1599807681,
        "end" : 1599856819
      }, {
        "occupied" : true,
        "start" : 1599856819,
        "end" : 1599856836
      }, {
        "occupied" : true,
        "start" : 1599856836,
        "end" : 1599861600
      } ],
      "632" : [ {
        "occupied" : false,
        "start" : 1599429600,
        "end" : 1599462292
      }, {
        "occupied" : true,
        "start" : 1599462292,
        "end" : 1599462318
      }, {
        "occupied" : true,
        "start" : 1599462318,
        "end" : 1599500440
      }, {
        "occupied" : false,
        "start" : 1599500440,
        "end" : 1599861600
      } ]
    }


    }
  }

  
  render() {
    return (
      <View>
        <GanttChart 
          data={this.state.tasks}
          numberOfTicks={6}
          onPressTask={task => alert(  task.occupied ? 'Zu dieser Zeit belgegt' : 'Zu dieser zeit frei')}
          gridMin={1598911200*1000}
          gridMax={1599516000*1000 }
          colors={{
            barColorPrimary: '#0c2461',
            barColorSecondary: '#4a69bd',
            textColor: '#fff',
            backgroundColor: '#d3d3d3'
          }}
          />
          </View>
    )

  }
}

export default Test
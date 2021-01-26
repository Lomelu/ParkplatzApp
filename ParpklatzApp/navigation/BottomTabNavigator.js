import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Button, Alert } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';
import HelpScreen from '../screens/HelpScreen';
import UsageGraphsScreen from '../screens/UsageGraphsSceern'
import AnalyticsScreen from '../screens/AnalyticsScreen';
import { createStackNavigator  } from '@react-navigation/stack';
import HelpWindow from '../components/HelpWindow'




const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const Stack = createStackNavigator();

function AnalyticsScreenNavigator() {
  return (<Stack.Navigator     
    initialRouteName="Analytics"
>
            <Stack.Screen name="Analytics" component={AnalyticsScreen}/>
            <Stack.Screen  name="UsageGraphs" component={UsageGraphsScreen}/>
  </Stack.Navigator>)
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
navigation.setOptions( {headerTitle: getHeaderTitle(route) , headerRight: () => (
    getHelper(route) ), headerBackTitle: 'zuruck' }   );




  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          title: 'Kartenansicht',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={AnalyticsScreenNavigator}
        navigationOptions={{
          headerBackTitle: 'some label'
        }}
        options={{
          title: 'Analyse',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-stats" />,
        }}
      />
    <BottomTab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Hilfe',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help" />,
        }}
      />
 
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Parkplatz App Müllentsorgung Bamberg';
    case 'Maps':
      return 'Kartenansicht';
      case 'Analytics':
      return 'Auswertung und Daten';
      case 'Help':
        return 'Helpdesk';
  }
}
function getHelper(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  switch (routeName) {
    case 'Home':
      return null;
    case 'Maps':
      return   <HelpWindow filterFaqKeys={["1", "2", "3", "4", "5"]}/>
      case 'Analytics':
      return <HelpWindow filterFaqKeys={["6", "7"]}/>;
      case 'Help':
        return null;
  }
} 


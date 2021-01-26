import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
import FAQList from "../components/FAQList";



export default class HelpDesk extends React.Component {

  render() {
    return <SafeAreaView>
      <ScrollView stickyHeaderIndices={[0]} alwaysBounceVertical={true}>
        <View style={styles.getStartedText}>
          <Text>Hier finden Sie eine Übersicht über häufig gestellte Fragen und passende Antworten.</Text>
        </View>
        <FAQList />
      </ScrollView>
    </SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 15,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FAQList from './FAQList';
import ClosableModal from './Modals';

export default class Help extends React.Component {
    state = {
        modalVisible: false
    };

    showModal() {
        this.setState({ modalVisible: true });
    }

    render() {
        return <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="help" style={styles.helpIcon} onPress={() => { this.showModal(); }} />
            <ClosableModal
                visible={this.state.modalVisible}
                animation={"slide"}
                actionText={"Hilfe schließen"}
                title={"Hilfe"}
                onClose={() => { this.setState({modalVisible: false })}}
            >
                <FAQList filterKeys={this.props.filterFaqKeys} />
            </ClosableModal>
        </View>;
    }
}

const styles = {
    helpIcon: { fontSize: 25, marginRight: 0, height: 40, width: 40, lineHeight: 40 }
};
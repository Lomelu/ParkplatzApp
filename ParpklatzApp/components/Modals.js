import React from 'react';
import { ScrollView, Text, Button, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ClosableModal extends React.Component {
    render() {
        let {title, onAction, children, actionText, onClose, ...rest} = this.props;
        return <Modal {...rest}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <TouchableOpacity style={styles.closeIconContainer} onPress={() => {
                    onClose();
                }}>
                    <MaterialCommunityIcons name="close" style={styles.closeIcon} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 16, lineHeight: 44 }}>{title}</Text>
                {children}
                <View style={{ marginTop: 20 }}>
                    <Button
                        title={actionText}
                        onPress={() => {
                            onAction && onAction();
                            onClose();
                        }} />
                </View>
            </ScrollView>
        </Modal>
    }
}

const styles = StyleSheet.create({
    closeIconContainer: { position: 'absolute', top: 30, right: 0, lineHeight: 40, zIndex: 100 },
    closeIcon: { fontSize: 30, height: 40, width: 40 },
    scrollViewContainer: { paddingTop: 22, paddingBottom: 44, alignItems: "center", width: '100%', position: 'relative' }
});

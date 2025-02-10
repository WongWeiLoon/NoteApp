import React from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Props = {
    isVisible: boolean;
    textContent: string;
    onClose: () => void;
}

const NoteModal = ({ isVisible, textContent, onClose }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={onClose}>
          <View style={styles.centeredView}>
            <LinearGradient 
                style={styles.modalView}
                colors={['#C724E1', '#4E22CC']}
            >
              <Text style={styles.modalText}>{textContent}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onClose}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NoteModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: 150,
        width: 300,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#F13A76',
        width: 90,
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'PingFang SC',
        color: '#FFFFFF',
    },
    modalText: {
        fontSize: 18,
        fontFamily: 'PingFang SC',
        color: '#FFFFFF',
        marginBottom: 15,
        textAlign: 'center',
        padding: 10,
    },
});
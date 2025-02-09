import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';

type Props = {
    label: string;
    style?: ViewStyle,
    onPress: () => void,
}

const BottomBar = ({ label, style, onPress }: Props) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <Text style={styles.buttonText}> {label} </Text>
        </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
    mainContainer: {
        height: 100,
        position: 'absolute',
        width: '100%',
        backgroundColor: '#1C0B37',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        paddingHorizontal: 16,
        // paddingVertical: 8,
        minWidth: 90,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#F13A76',
        width: '55%',
        paddingVertical: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'PingFang SC',
        color: 'white',
        fontWeight: '600',
    },
});
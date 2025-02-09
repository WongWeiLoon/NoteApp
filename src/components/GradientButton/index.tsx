import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

type Props = {
    label: string,
    style?: ViewStyle,
    onPress: () => void;
}

const GradientButton = ({ label, style, onPress}: Props) => {
  return (
    <LinearGradient
        colors={['#F94695', '#F13A76']}  // Linear gradient colors
        style={[styles.button, style]}
      >
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Text style={styles.buttonText}> {label} </Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    touchable: {
        paddingHorizontal: 16,
        // paddingVertical: 8,
        minWidth: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'PingFang SC',
        color: 'white',
        fontWeight: '600',
    },
});
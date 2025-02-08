import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import LinearGradient from 'react-native-linear-gradient'; 

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
}

const GradientBackground = ({children, style}: Props) => {
  return (
    <LinearGradient
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']} // Gradient colors
        style={[styles.gradient, style]}
        start={{ x: 0, y: 0 }} // Start point (top-left)
        end={{ x: 1, y: 1 }} // End point (bottom-right)
    >
        { children }
    </LinearGradient>
  )
}

export default GradientBackground;

const styles = StyleSheet.create({
    gradient: {
        flex: 1, // Full-screen gradient
    },
})
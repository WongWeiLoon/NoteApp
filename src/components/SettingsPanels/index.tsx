import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ArrowRight from "../../assets/images/ArrowRight.svg";

type Props = {
    icons: JSX.Element,
    panelTitle: string,
    onPress: () => void;
}

const SettingsPanel = ({ icons, panelTitle, onPress}: Props) => {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
        <View style={styles.panelBox}>
            {icons}
            <Text style={styles.textStyle}> {panelTitle} </Text>
        </View>

        <ArrowRight height={18} width={18} />
    </Pressable>
  );
};

export default SettingsPanel;

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    panelBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingLeft: 20,
        opacity: 0.9,
    },
});

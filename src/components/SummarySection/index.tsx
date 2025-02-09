import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import GradientButton from '../../components/GradientButton';

type Props = {
    icon: JSX.Element,
    title: string,
    recordsNumber: number,
}

const SummarySection = ({ icon, title, recordsNumber }: Props) => {
  return (
    <>
        <View style={styles.mainContainer}>
            <View style={styles.titleSection}>
                {icon}
                {/* <Avatar1 height={50} width={50} /> */}
                <Text style={styles.titleStyle}> {title} </Text>
            </View>

            <GradientButton 
                label="Details"
                onPress={() => Alert.alert('Go to Details!')}
            />
        </View>

        <View style={styles.recordContainer}>
            <Text style={styles.recordTextStyle}>{`This topic has a total of ${recordsNumber} records.`}</Text>
        </View>
    </>
  );
};

export default SummarySection;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 15,
        marginTop: 10,
    },
    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: 'PingFang SC',
        fontSize: 18,
        color: '#FFFFFF',
        paddingStart: 5,
    },
    recordContainer: {
        padding: 20,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 0.3,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    recordTextStyle: {
        color: '#FFFFFF',
        fontFamily: 'PingFang SC',
        fontSize: 16,
        opacity: 0.7,
    },
});

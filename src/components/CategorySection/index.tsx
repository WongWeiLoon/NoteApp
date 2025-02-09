import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    icon: JSX.Element;
    title: string;
    content?: string;
}

import ArrowRight from "../../assets/images/ArrowRight.svg"

const CategorySection = ({ icon, title, content }: Props) => {
  return (
    <View style={styles.mainContainer}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        {icon}
        <Text style={styles.titleStyle}> {title} </Text>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.contentTextStyle}>Overview of basic computer networking knowledge</Text>
        <ArrowRight height={18} width={18} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTextStyle}>How to calculate float multiplicationand division in JavaScript?</Text>
        <ArrowRight height={18} width={18} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentTextStyle}>Maintain sufficient daily water intake</Text>
        <ArrowRight height={18} width={18} />
      </View>
    </View>
  )
}

export default CategorySection;

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    titleStyle: {
        color: '#FFFFFF',
        paddingStart: 5,
        fontSize: 18,
    },
    contentContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentTextStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        width: '90%'
    },
})
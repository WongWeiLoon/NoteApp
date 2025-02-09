import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import GradientBackground from '../../components/GradientBg';
import SummarySection from '../../components/SummarySection';

import { Category, SummaryCategory } from '../../shared/utils/constants';

import Avatar1 from '../../assets/Avatar1.svg';
import Avatar2 from '../../assets/Avatar2.svg';
import Avatar3 from '../../assets/Avatar3.svg';

const Summary = () => {
  return (
    <GradientBackground>
      <SafeAreaView>
        {/* Summary Header and Robot image */}
        <View style={styles.mainContainer}>
          <Text style={styles.summaryTextStyle}>Summary</Text>

          <Image 
            source={require('../../assets/Robot.png')}
            style={styles.image}
          />
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <SummarySection 
            title={Category.WORK_AND_STUDY}
            recordsNumber={50}
            icon={<Avatar1 height={50} width={50} />}
          />

          <SummarySection 
            title={SummaryCategory.HOME_LIFE}
            recordsNumber={12}
            icon={<Avatar2 height={50} width={50} />}
          />

          <SummarySection 
            title={Category.HEALTH_WELLNESS}
            recordsNumber={30}
            icon={<Avatar3 height={50} width={50} />}
          />
        </View>
      </SafeAreaView>
    </GradientBackground>
  )
}

export default Summary;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryTextStyle: {
    fontSize: 30,
    color: '#FFFFFF',
    paddingStart: 20,
    paddingTop: 40,
  },
  image: {
    position: 'absolute',
    right: 15,
    top: -75,
    width: 270,
    height: 280,
    resizeMode: 'contain',
  },
  summaryContainer: {
    marginTop: 80,
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 25,
    height: '100%',
    padding: 20,
  },
});

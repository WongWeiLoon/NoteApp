import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import GradientBackground from '../../components/GradientBg';
import SummarySection from '../../components/SummarySection';

import { Category, SummaryCategory } from '../../shared/utils/constants';

import Avatar1 from '../../assets/images/Avatar1.svg';
import Avatar2 from '../../assets/images/Avatar2.svg';
import Avatar3 from '../../assets/images/Avatar3.svg';

import { getNotes } from '../../shared/utils/asyncStorageUtils';
import { useFocusEffect } from '@react-navigation/native';

type dataProps = {
  id: number,
  category: string,
  content: string,
  createdAt: any,
}

type recordsObjType = {
  workStudyRecord: number;
  lifeRecord: number;
  healthRecord: number;
}

const countRecordsByCategory = (data: dataProps[]) => {
  let workStudyRecord = 0;
  let lifeRecord = 0;
  let healthRecord = 0;

  data.forEach(item => {
    switch (item.category) {
      case Category.WORK_AND_STUDY:
        workStudyRecord += 1;
        break;
      case Category.LIFE:
        lifeRecord += 1;
        break;
      case Category.HEALTH_WELLNESS:
        healthRecord += 1;
        break;
      default:
        break;
    }
  });

  return {
    workStudyRecord,
    lifeRecord,
    healthRecord,
  };
};

const Summary = () => {
  const [recordsObj, setRecordObj] = useState<recordsObjType>({
    workStudyRecord: 0,
    lifeRecord: 0,
    healthRecord: 0,
  });

  useFocusEffect(
      React.useCallback(() => {
        const getRecordsObj = async () => {
          const allNotes = await getNotes();
          const obj = countRecordsByCategory(allNotes);
          setRecordObj(obj);
        };
        getRecordsObj();
      }, [])
  );

  return (
    <GradientBackground>
      <SafeAreaView>
        {/* Summary Header and Robot image */}
        <View style={styles.mainContainer}>
          <Text style={styles.summaryTextStyle}>Summary</Text>

          <Image 
            source={require('../../assets/images/Robot.png')}
            style={styles.image}
          />
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <SummarySection 
            title={Category.WORK_AND_STUDY}
            recordsNumber={recordsObj.workStudyRecord}
            icon={<Avatar1 height={50} width={50} />}
          />

          <SummarySection 
            title={SummaryCategory.HOME_LIFE}
            recordsNumber={recordsObj.lifeRecord}
            icon={<Avatar2 height={50} width={50} />}
          />

          <SummarySection 
            title={Category.HEALTH_WELLNESS}
            recordsNumber={recordsObj.healthRecord}
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
    fontFamily: 'PingFang SC',
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

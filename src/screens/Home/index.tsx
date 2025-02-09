import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

import GradientBackground from '../../components/GradientBg';

import ClocksSvg from "../../assets/Clocks.svg"
import WorkStudySvg from "../../assets/WorkStudy.svg";
import LifeSvg from "../../assets/Life.svg";
import HealthWellnessSvg from "../../assets/HealthWellness.svg";

import CategorySection from '../../components/CategorySection';
import { Category } from '../../shared/utils/constants';

const Home = () => {
  return (
    <GradientBackground>
        <ScrollView style={styles.mainContainer}>
            <View style={styles.noteContainer}>
                <ClocksSvg width={14} height={15} />
                <Text style={styles.noteStyle}>Recently created notes</Text>
            </View>

            <CategorySection
                icon={<WorkStudySvg height={20} width={20} />}
                title={Category.WORK_AND_STUDY}
            />

            <CategorySection
                icon={<LifeSvg height={20} width={20} />}
                title={Category.LIFE}
            />

            <CategorySection
                icon={<HealthWellnessSvg height={20} width={20} />}
                title={Category.HEALTH_WELLNESS}
            />
        </ScrollView>
    </GradientBackground>
  )
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 25,
    },
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    noteStyle: {
        fontSize: 16,
        color: '#FFFFFF',
        paddingStart: 5,
    },
})
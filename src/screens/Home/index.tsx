import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';

import GradientBackground from '../../components/GradientBg';

import ClocksSvg from "../../assets/images/Clocks.svg"
import WorkStudySvg from "../../assets/images/WorkStudy.svg";
import LifeSvg from "../../assets/images/Life.svg";
import HealthWellnessSvg from "../../assets/images/HealthWellness.svg";

import CategorySection from '../../components/CategorySection';
import { Category } from '../../shared/utils/constants';

import { getNotes } from '../../shared/utils/asyncStorageUtils';
import { useFocusEffect } from '@react-navigation/native';

// Group notes by category
const groupNotesByCategory = (notes) => {
    return notes.reduce((acc, note) => {
      if (acc[note.category]) {
        acc[note.category].push(note);
      } else {
        acc[note.category] = [note];
      }
      return acc;
    }, {});
};

// Mapping for category icons
const categoryIcons = {
    [Category.WORK_AND_STUDY]: <WorkStudySvg height={20} width={20} />,
    [Category.LIFE]: <LifeSvg height={20} width={20} />,
    [Category.HEALTH_WELLNESS]: <HealthWellnessSvg height={20} width={20} />,
};

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isEmptyNote, setEmptyNote] = useState(true);

  // Fetch notes when the screen is loaded
  useFocusEffect(
    React.useCallback(() => {
      const fetchNotes = async () => {
        const allNotes = await getNotes();
        setNotes(allNotes);
        setEmptyNote(!allNotes || allNotes.length === 0);
      };
      fetchNotes();
    }, []) // Empty dependency array ensures this runs on focus and not every render
  );

  // Group the notes by category
  const groupedNotes = groupNotesByCategory(notes);
  const categories = Object.keys(groupedNotes);

  return (
    <GradientBackground>
        <ScrollView style={styles.mainContainer}>
            {
                !isEmptyNote ? (
                    <>
                      <View style={styles.noteContainer}>
                        <ClocksSvg width={14} height={15} />
                        <Text style={styles.noteStyle}>Recently created notes</Text>
                      </View>

                      {
                        categories.map((category: string, index: number) => (
                            <CategorySection
                                key={index}
                                categoryKey={category}
                                icon={categoryIcons[category]}
                                title={category}
                                notes={groupedNotes[category]} // Pass the grouped notes for this category
                            />
                        ))
                      }
                    </>
                ) : (
                    <View style={styles.emptyNoteBox}>
                        <Text style={styles.emptyTextStyle}>
                            No notes yet. Create a new note to get started.
                        </Text>
                    </View>
                )
            }
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
        fontFamily: 'PingFang SC',
        color: '#FFFFFF',
        paddingStart: 5,
    },
    emptyNoteBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyTextStyle: {
        fontSize: 18,
        fontFamily: 'PingFang SC',
        color: '#FFFFFF',
    },
})
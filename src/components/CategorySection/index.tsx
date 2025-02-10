import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
    categoryKey: string;
    icon: JSX.Element;
    title: string;
    notes: { id: number; category: string; content: string; createdAt: string }[];
}

import ArrowRight from '../../assets/images/ArrowRight.svg';

const CategorySection = ({ categoryKey, icon, title, notes }: Props) => {
  // Sort notes by createdAt in descending order and take the first 3
  const sortedNotes = notes
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <View style={styles.mainContainer}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        {icon}
        <Text style={styles.titleStyle}> {title} </Text>
      </View>

      {/* Content */}
      {sortedNotes.map(note => (
        <View key={note.id} style={styles.contentContainer}>
          <Text style={styles.contentTextStyle}>
            {/* first 20 chars only */}
            {note.content.slice(0, 20)}{note.content.length > 20 ? '...' : ''}
          </Text>
          <ArrowRight height={18} width={18} />
        </View>
      ))}
    </View>
  );
};

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
        fontFamily: 'PingFang SC',
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
        fontFamily: 'PingFang SC',
        fontSize: 16,
        width: '90%',
    },
});

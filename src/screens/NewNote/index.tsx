import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

import GradientBackground from '../../components/GradientBg';
import DropdownSvg from "../../assets/images/Dropdown.svg";

const categoriesOptions = [
    'Work and Study',
    'Life',
    'Health and Well-being',
];

const NewNote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [noteContent, setNoteContent] = useState('');

  return (
    <GradientBackground>
        <View style={styles.mainContainer}>
            {/* Dropdown list */}
            <View style={styles.dropdownContainer}>
                <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => setIsOpen(!isOpen)}
                >
                    <Text style={styles.dropdownButtonText}>
                        {selectedCategory || 'Choose a category'}
                    </Text>

                    <DropdownSvg width={24} height={24} />
                </TouchableOpacity>

                {isOpen && (
                <View style={styles.dropdownList}>
                    {categoriesOptions.map((category: string, index: number) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.dropdownItem}
                        onPress={() => {
                        setSelectedCategory(category)
                        setIsOpen(false)
                        }}
                    >
                        <Text style={styles.dropdownItemText}>{category}</Text>
                    </TouchableOpacity>
                    ))}
                </View>
                )}
            </View>

            {/* Textarea */}
            <View style={styles.textareaContainer}>
                <TextInput
                style={styles.textarea}
                placeholder="Please input note content"
                placeholderTextColor="#6B7280"
                multiline
                maxLength={200}
                value={noteContent}
                onChangeText={setNoteContent}
                />
                <Text style={styles.characterCount}>
                    {noteContent.length}/200
                </Text>
            </View>
        </View>
    </GradientBackground>
  )
}

export default NewNote;

const styles = StyleSheet.create({
    mainContainer: {
        margin: 20,
    },
    dropdownContainer: {
        position: 'relative',
        paddingTop: 40,
        marginBottom: 15,
    },
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 25,
        backgroundColor: 'transparent',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#374151',
    },
    dropdownButtonText: {
        color: '#FFFFFF',
        fontFamily: 'PingFang SC',
        fontSize: 18,
    },
    dropdownList: {
        position: 'absolute',
        marginTop: 45,
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#1F2937',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#374151',
        zIndex: 1000,
    },
    dropdownItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#374151',
    },
    dropdownItemText: {
        color: '#FFFFFF',
        fontFamily: 'PingFang SC',
        fontSize: 18,
    },
    textareaContainer: {
        position: 'relative',
    },
    textarea: {
        borderRadius: 18,
        padding: 20,
        color: '#FFFFFF',
        fontFamily: 'PingFang SC',
        fontSize: 18,
        height: 260,
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#374151',
    },
    characterCount: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: '#6B7280',
        fontFamily: 'PingFang SC',
        fontSize: 16,
    },
})
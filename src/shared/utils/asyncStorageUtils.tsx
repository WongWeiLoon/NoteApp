import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get all notes stored in AsyncStorage
const getNotes = async () => {
  try {
    const storedNotes = await AsyncStorage.getItem('@notes');
    if (storedNotes !== null) {
      return JSON.parse(storedNotes);
    }
    return [];
  } catch (error) {
    console.error('Error getting notes:', error);
    return [];
  }
};

// Function to save a new note
const saveNewNote = async (note) => {
  try {
    const notes = await getNotes(); // Get existing notes
    notes.push(note); // Add the new note
    await AsyncStorage.setItem('@notes', JSON.stringify(notes)); // Save updated notes
  } catch (error) {
    console.error('Error saving new note:', error);
  }
};

// Function to edit an existing note
const editNote = async (id, updatedNote) => {
  try {
    const notes = await getNotes(); // Get all notes
    const noteIndex = notes.findIndex(note => note.id === id); // Find the note by ID
    if (noteIndex !== -1) {
      notes[noteIndex] = { ...notes[noteIndex], ...updatedNote }; // Update note content
      await AsyncStorage.setItem('@notes', JSON.stringify(notes)); // Save updated notes
    } else {
      console.log('Note not found');
    }
  } catch (error) {
    console.error('Error editing note:', error);
  }
};

// Function to delete all notes
const deleteAllNotes = async () => {
  try {
    await AsyncStorage.removeItem('@notes');
  } catch (error) {
    console.error('Error deleting all notes:', error);
  }
};

export { getNotes, saveNewNote, editNote, deleteAllNotes };

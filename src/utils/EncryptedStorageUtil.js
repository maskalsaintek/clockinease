import EncryptedStorage from 'react-native-encrypted-storage';

async function saveData(key, data) {
  try {
    const jsonString = JSON.stringify(data);
    await EncryptedStorage.setItem(key, jsonString);
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Failed to save data:', error);
    throw error;
  }
}

async function loadData(key) {
  try {
    const jsonString = await EncryptedStorage.getItem(key);
    if (jsonString !== null) {
      return JSON.parse(jsonString);
    }
    return null;
  } catch (error) {
    console.error('Failed to load data:', error);
    throw error;
  }
}

async function deleteData(key) {
  try {
    await EncryptedStorage.removeItem(key);
    console.log('Data removed successfully!');
  } catch (error) {
    console.error('Failed to remove data:', error);
    throw error;
  }
}

export {saveData, loadData, deleteData};

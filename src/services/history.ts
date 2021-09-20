/* eslint-disable no-array-constructor */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entry, Convert } from '../types/Entry';

const LIMIT = 7;

export const getHistory = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue !== null) {
      const entries = Convert.toEntry(jsonValue);
      console.log('Inside Gethistory', entries);
      return { success: true, data: entries };
    } else {
      return { success: true, data: new Array<Entry>() };
    }
  } catch (error) {
    console.log('Error getting stored data', error);
    return { success: false, data: new Array<Entry>() };
  }
};

export const addEntry = async (id: number, type: string, description: string) => {
  const entry: Entry = {
    id: id,
    type: type,
    description: description,
  };

  const { success, data } = await getHistory();
  let history = [];

  if (success) {
    if (data.length > 0) {
      history = data.filter((element) => element.id !== entry.id || element.type !== entry.type);
      history.push(entry);
      if (history.length > LIMIT) {
        history.shift();
      }
    } else {
      history.push(entry);
    }
  } else {
    history.push(entry);
  }

  try {
    await AsyncStorage.setItem('@storage_Key', Convert.entryToJson(history));
  } catch (error) {
    console.log('Error storing data', error);
  }
  console.log('Inside AddEntry ', history);
};

export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
    console.log('History cleared');
  } catch (error) {
    console.log('Error clearing history ', error);
  }
};

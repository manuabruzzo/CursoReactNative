import { useEffect, useState } from 'react';
import { Character } from '../../../types/Character';
import { getAllCharacters, getCharacterBySearch } from '../../../services';

function useCharactersData(refreshFlag: boolean, param: string) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getCharacterData = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getAllCharacters();
      if (success) {
        setCharacters(data);
      } else {
        setErrorOcurred(true);
      }
    } catch (error) {
      console.log('Error getting characters on CharacterListScreen', error);
      setErrorOcurred(true);
    } finally {
      setLoading(false);
    }
  };

  const getCharacterSearch = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getCharacterBySearch(param);
      if (success) {
        setCharacters(data);
      } else {
        setErrorOcurred(true);
      }
    } catch (error) {
      console.log('Error getting characters on CharacterListScreen', error);
      setErrorOcurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterSearch();
  }, [param]);

  useEffect(() => {
    getCharacterData();
  }, [refreshFlag]);

  return { characters, loading, errorOcurred };
}

export default useCharactersData;

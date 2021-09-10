import { useEffect, useState } from 'react';
import { Character } from '../../../types/Character';
import { getAllCharacters } from '../../../services';

function useCharactersData(refreshFlag: boolean) {
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

  useEffect(() => {
    getCharacterData();
  }, [refreshFlag]);

  return { characters, loading, errorOcurred };
}

export default useCharactersData;

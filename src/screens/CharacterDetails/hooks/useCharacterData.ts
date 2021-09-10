import { useEffect, useState } from 'react';
import { Character, Convert } from '../../../types/Character';
import { getCharacterById } from '../../../services';

function useCharacterData(refreshFlag: boolean, id: number) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getCharacterData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getCharacterById(id);
      if (success) {
        setCharacter(Convert.toCharacter(JSON.stringify(data))[0]);
      } else {
        setErrorOcurred(true);
      }
    } catch (error) {
      console.log(`Error getting character with id ${id} in CharacterDetailsScreen`, error);
      setErrorOcurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, [refreshFlag]);

  return { character, loading, errorOcurred };
}

export default useCharacterData;

import { useEffect, useState } from 'react';
import { Book, Convert } from '../../../types/Book';
import { getBookById } from '../../../services';

function useBookData(refreshFlag: boolean, id: number) {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getBookData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(Convert.toBook(JSON.stringify(data))[0]);
      } else {
        setErrorOcurred(true);
      }
    } catch (error) {
      console.log(`Error getting book with id ${id} in BookDetailsScreen`, error);
      setErrorOcurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookData();
  }, [refreshFlag]);

  return { book, loading, errorOcurred };
}

export default useBookData;

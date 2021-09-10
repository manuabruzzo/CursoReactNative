import { useEffect, useState } from 'react';
import { Book } from '../../../types/Book';
import { getAllBooks } from '../../../services';

function useBooksData(refreshFlag: boolean) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getBookData = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        setErrorOcurred(true);
        // Alert.alert('Error getting books from Book List Screen');
      }
    } catch (error) {
      console.log('Error getting books on BookListScreen', error);
      setErrorOcurred(true);
      // Alert.alert('Error getting books from Book List Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookData();
  }, [refreshFlag]);

  return { books, loading, errorOcurred };
}

export default useBooksData;

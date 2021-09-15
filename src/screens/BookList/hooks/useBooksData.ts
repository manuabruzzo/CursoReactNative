import { useEffect, useState } from 'react';
import { Book, Convert } from '../../../types/Book';
import { getAllBooks, getBookBySearch } from '../../../services';

function useBooksData(refreshFlag: boolean, param: string) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getBookData = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        // setBooks(data);
        setBooks(Convert.toBook(JSON.stringify(data)));
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

  const getBookSearch = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getBookBySearch(param);
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
    getBookSearch();
  }, [param]);

  useEffect(() => {
    getBookData();
  }, [refreshFlag]);

  return { books, loading, errorOcurred };
}

export default useBooksData;

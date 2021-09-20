import { useEffect, useState } from 'react';
import { Entry } from '../../../types/Entry';
import { getHistory, clearHistory } from '../../../services';

function useHistory(refreshFlag: boolean, clearFlag: boolean) {
  const [history, setHistory] = useState<Entry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOcurred, setErrorOcurred] = useState<boolean>(false);

  const getHistoryData = async () => {
    setLoading(true);
    setErrorOcurred(false);
    try {
      const { success, data } = await getHistory();
      if (success) {
        setHistory(data);
      } else {
        setErrorOcurred(true);
      }
    } catch (error) {
      console.log('Error getting history on History screen ', error);
      setErrorOcurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistoryData();
  }, [refreshFlag]);

  useEffect(() => {
    clearHistory();
  }, [clearFlag]);

  return { history, loading, errorOcurred };
}

export default useHistory;

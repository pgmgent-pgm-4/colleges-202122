import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data === null) {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if(!response.ok) {
            throw Error(response.statusText);
          }
          const data = await response.json();
          setData(data);
        }
        catch(error) {
          setError(error);
        }
        finally {
          setIsLoading(false);
        }
      }
      fetchData();
    }
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
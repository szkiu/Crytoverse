import { useState, useEffect } from 'react';
import { getUrlCoins } from "../services/getCoins";

export const useURLCoins = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ coins, setCoins ] = useState();

  useEffect(() => {
    setIsLoading(true);
    const response = getUrlCoins();
    response.then((res) => {
      setCoins(res);
      setIsLoading(false);
    });
  }, []);

  return { coins, isLoading }
}
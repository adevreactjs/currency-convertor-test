import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Currency } from '../types/types';

export const useFetchCurrency = () => {
  const [data, setData] = useState<Currency[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
          .then(response =>
            setData(
              response.data
            ),
          )
          .then(() => setLoading(true));
      } catch (error: any) {
        setError(error);
      }
    })();
  }, []);

  return { data, error, loading };
};

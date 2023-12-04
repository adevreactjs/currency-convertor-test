import React, { useEffect, useState } from 'react';
import cls from './index.module.scss';
import Header from './components/header/Header';
import { useFetchCurrency } from './hooks/useFetchCurrency';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';
import { calculateCurrencyFrom } from './helpers/calculateCurrencyFrom';
import { calculateCurrencyTo } from './helpers/calculateCurrencyTo';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const { data, loading } = useFetchCurrency();

  const calculateParams = {
    fromCurrency,
    toCurrency,
    setToPrice,
    setFromPrice,
    data,
  };

  useEffect(() => {
    if (loading) {
      onChangeFromPrice(fromPrice);
    }
  }, [fromCurrency]);

  useEffect(() => {
    if (loading) {
      onChangeToPrice(toPrice);
    }
  }, [toCurrency]);

  const onChangeFromPrice = (value: number) => {
    calculateCurrencyFrom(calculateParams, value);
  };

  const onChangeToPrice = (value: number) => {
    calculateCurrencyTo(calculateParams, value);
  };

  return (
    <div className={cls.main}>
      <div className={cls.container}>
        <Header data={data} isLoading={loading} />
        <div className={cls.converter}>
          <CurrencyConverter
            value={fromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangeValue={onChangeFromPrice}
          />
          <CurrencyConverter
            value={toPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangeValue={onChangeToPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

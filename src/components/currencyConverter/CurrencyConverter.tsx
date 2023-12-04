import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import cls from './index.module.scss';

interface CurrencyConverterProps {
  currency: string;
  onChangeCurrency: Dispatch<SetStateAction<string>>;
  value: number;
  onChangeValue: (value: number) => void;
}

const CurrencyConverter: FC<CurrencyConverterProps> = ({
  currency,
  onChangeCurrency,
  value,
  onChangeValue,
}) => {
  const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP'];

  return (
    <div className={cls.currency}>
      <select value={currency} onChange={e => onChangeCurrency(e.target.value)}>
        {defaultCurrencies.map(el => (
          <option key={el}>{el}</option>
        ))}
      </select>
      <div className={cls.currencyField}>
        <input
          type='number'
          min={0}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;

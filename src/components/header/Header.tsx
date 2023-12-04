import React, { FC } from 'react';
import cls from './index.module.scss';
import { Currency } from '../../types/types';

interface HeaderProps {
  data: Currency[];
  isLoading: boolean;
}

const Header: FC<HeaderProps> = ({ data, isLoading }) => {
  const filterCurrency = (currency: string) => {
    const currencyValue = data.filter(el => el.cc === currency);
    return currencyValue[0].rate;
  };

  return (
    <header className={cls.header}>
      <ul className={cls.currencyValue}>
        <li>USD: {isLoading && `${filterCurrency('USD').toFixed(2)}`} грн</li>
        <li>EUR: {isLoading && `${filterCurrency('EUR').toFixed(2)}`} грн</li>
      </ul>
    </header>
  );
};

export default Header;

import { Dispatch, SetStateAction } from 'react';

export interface Currency {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
}
export interface CalculateParams {
  fromCurrency: string;
  toCurrency: string;
  setToPrice: Dispatch<SetStateAction<number>>;
  setFromPrice: Dispatch<SetStateAction<number>>;
  data: Currency[];
}

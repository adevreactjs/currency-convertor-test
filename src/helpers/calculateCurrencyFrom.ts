import { CalculateParams } from '../types/types';
import { calculateRate } from './calculateRate';

export const calculateCurrencyFrom = (calculateParams: CalculateParams, value: number) => {
  if (calculateParams.fromCurrency === 'UAH' && calculateParams.toCurrency === 'UAH') {
    calculateParams.setToPrice(value);
    calculateParams.setFromPrice(value);
    return;
  }
  if (calculateParams.fromCurrency === 'UAH') {
    const rate = calculateRate(calculateParams, calculateParams.toCurrency);
    const result = value / rate[0].rate;
    calculateParams.setToPrice(result);
    calculateParams.setFromPrice(value);
  } else if (calculateParams.toCurrency === 'UAH') {
    const rate = calculateRate(calculateParams, calculateParams.fromCurrency);
    const resultTo = value * rate[0].rate;
    calculateParams.setToPrice(resultTo);
    calculateParams.setFromPrice(value);
  } else {
    const rate = calculateRate(calculateParams, calculateParams.fromCurrency);
    const rateTo = calculateRate(calculateParams, calculateParams.toCurrency);
    const price = value * rate[0].rate;
    const result = price / rateTo[0].rate;
    calculateParams.setToPrice(result);
    calculateParams.setFromPrice(value);
  }
};

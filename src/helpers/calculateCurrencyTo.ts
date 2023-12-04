import { CalculateParams } from '../types/types';
import { calculateRate } from './calculateRate';

export const calculateCurrencyTo = (calculateParams: CalculateParams, value: number) => {
  if (calculateParams.fromCurrency === 'UAH' && calculateParams.toCurrency === 'UAH') {
    calculateParams.setToPrice(value);
    calculateParams.setFromPrice(value);
    return;
  }
  if (calculateParams.toCurrency === 'UAH') {
    const rate = calculateRate(calculateParams, calculateParams.fromCurrency);
    const result = value / rate[0].rate;
    calculateParams.setToPrice(value);
    calculateParams.setFromPrice(result);
  } else if (calculateParams.fromCurrency === 'UAH') {
    const rate = calculateRate(calculateParams, calculateParams.toCurrency);
    const resultFrom = value * rate[0].rate;
    calculateParams.setToPrice(value);
    calculateParams.setFromPrice(resultFrom);
  } else {
    const rate = calculateRate(calculateParams, calculateParams.fromCurrency);
    const rateTo = calculateRate(calculateParams, calculateParams.toCurrency);
    const price = rate[0].rate / rateTo[0].rate;
    const result = price * value;
    calculateParams.setToPrice(value);
    calculateParams.setFromPrice(result);
  }
};

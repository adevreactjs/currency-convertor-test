import { CalculateParams } from '../types/types';

export const calculateRate = (calculateParams: CalculateParams, currency: string) => {
  const rate = calculateParams.data.filter(el => {
    return el.cc === currency;
  });
  return rate;
};

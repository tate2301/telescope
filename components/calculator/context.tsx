import { createContext, ReactNode, useState } from 'react';
import { variables } from './types';

const initialState: variables = {
  payment_provider: 'stripe',
  payment_provider_fixed_fee: 0.3,
  payment_provider_percentage_fee: 0.029,
  tax_rate: 0,
  current_mrr: 0,
  churn_rate: 0,
  base_price: 0,
  customers_per_month: 0,
  annual_gross_revenue: 0,
  annual_net_revenue: 0,
  mrr_after_one_year: 0,
};

export const CalculatorContext = createContext<variables>({
  ...initialState,
});

export default function CalculatorContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state] = useState<variables>({
    ...initialState,
  });

  // const performUpdate = useCallback(() => {}, []);

  return (
    <CalculatorContext.Provider value={{ ...state }}>
      {children}
    </CalculatorContext.Provider>
  );
}

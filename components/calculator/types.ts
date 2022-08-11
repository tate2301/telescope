import { ReactNode } from 'react';

export type variables = {
  payment_provider: 'stripe' | 'paypal' | 'paddle';
  payment_provider_fixed_fee: number;
  payment_provider_percentage_fee: number;
  tax_rate: number;
  current_mrr: number;
  churn_rate: number;
  base_price: number;
  customers_per_month: number;
  annual_gross_revenue: number;
  annual_net_revenue: number;
  mrr_after_one_year: number;
};

export type calculated_values = {
  annual_net_revenue: number;
  total_tx_cost: number;
  total_tax: number;
  revenue_churn: number;
  mrr_after_one_year: number;
  annual_gross_revenue: number;
};

export type ReactChildrenProps = {
  children: ReactNode;
};

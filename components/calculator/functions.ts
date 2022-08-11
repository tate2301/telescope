import { variables, calculated_values } from './types';

export const evaluateAllvariables = (
  variables: variables,
): calculated_values => {
  const provider_fixed_cost_constant = 7020;
  const revenue_churn = variables.churn_rate * 12;

  variables.mrr_after_one_year =
    12 * +variables.current_mrr +
    variables.base_price * variables.customers_per_month * 12;

  variables.annual_gross_revenue =
    (1 - variables.churn_rate) * variables.annual_net_revenue;

  const total_tx_cost =
    variables.annual_gross_revenue * variables.payment_provider_percentage_fee +
    +variables.payment_provider_fixed_fee * provider_fixed_cost_constant;

  const total_tax =
    variables.tax_rate * (variables.annual_gross_revenue - total_tx_cost);

  const annual_net_revenue =
    variables.annual_gross_revenue - total_tx_cost - total_tax;

  return {
    annual_net_revenue,
    total_tx_cost,
    total_tax,
    revenue_churn,
    mrr_after_one_year: variables.mrr_after_one_year,
    annual_gross_revenue: variables.annual_gross_revenue,
  };
};

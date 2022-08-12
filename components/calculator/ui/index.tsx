import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { evaluateAllvariables } from '../functions';
import { calculated_values, variables } from '../types';
import PaymentProviderSelector from './PaymentProviderSelector';

export default function CalculatorBaseUI() {
  const [state, setState] = useState<variables>({
    payment_provider: 'stripe',
    payment_provider_fixed_fee: 0.3,
    payment_provider_percentage_fee: 0.029,
    tax_rate: 20,
    current_mrr: 0,
    churn_rate: 0,
    base_price: 0,
    customers_per_month: 0,
    annual_gross_revenue: 0,
    annual_net_revenue: 0,
    mrr_after_one_year: 0,
  });

  const [results, setResults] = useState<calculated_values>({
    annual_net_revenue: 0,
    total_tx_cost: 0,
    total_tax: 0,
    revenue_churn: 0,
    mrr_after_one_year: 0,
    annual_gross_revenue: 0,
  });

  useEffect(() => {
    const evaluated_results = evaluateAllvariables(state);
    setResults(evaluated_results);
  }, [state]);

  const updateValue = (key: keyof variables, value: any) => {
    if (Object.keys(state).includes(key)) {
      setState({
        ...state,
        [key]: Number(value),
      });
    } else {
      alert(`${key} is not a valid key`);
    }
  };

  const updatePaymentProviderInfo = (value: {
    payment_provider: 'stripe' | 'paypal' | 'paddle';
    payment_provider_fixed_fee: number;
    payment_provider_percentage_fee: number;
  }) => {
    setState({
      ...state,
      ...value,
    });
  };

  const onChange = (
    e: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  ) => {
    let { name, value } = e.target as unknown as {
      name: keyof variables;
      value: any;
    };
    if (!value) value = 0;
    updateValue(name as keyof variables, value);
  };

  const onSingleFieldChange = (e: any) => {
    let { name, value } = e.target as unknown as {
      name: keyof variables;
      value: any;
    };
    if (!value) value = 0;
    updateValue(name as keyof variables, value);
  };

  return (
    // @ts-ignore
    <form onChange={onChange} className="flex flex-col w-full">
      <h2 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white lg:text-4xl">
        Pricing Model
      </h2>
      <div className="grid grid-cols-2 gap-8 py-4 mb-4 border-b dark:border-gray-700">
        <div className="block col-span-2 gap-2 md:col-span-1">
          <label
            htmlFor="base_price"
            className="block text-sm font-medium text-gray-700 dark:text-gray-50"
          >
            Price
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                  $
                </span>
              </div>
              <input
                name="base_price"
                type="number"
                step="0.01"
                className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
                placeholder="0.00"
                aria-describedby="base_price"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span
                  className="text-gray-500 dark:text-gray-400 sm:text-sm"
                  id="price-currency"
                >
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 gap-2 md:col-span-1">
          <label
            htmlFor="customers_per_month"
            className="block text-sm font-medium text-gray-700 dark:text-gray-50"
          >
            Customers/month
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <input
                name="customers_per_month"
                type="number"
                step="1"
                className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
                placeholder="0"
                aria-describedby="customers_per_month"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span
                  className="text-gray-500 dark:text-gray-400 sm:text-sm"
                  id="price-currency"
                >
                  Users
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="current_mrr"
          className="block text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Current MRR
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                $
              </span>
            </div>
            <input
              name="current_mrr"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="current_mrr"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span
                className="text-gray-500 dark:text-gray-400 sm:text-sm"
                id="price-currency"
              >
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="churn_rate"
          className="block text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Churn Rate
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                %
              </span>
            </div>
            <input
              id="churn_rate"
              name="churn_rate"
              type="number"
              step="0.01"
              disabled
              className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="churn_rate"
            />
          </div>
        </div>
      </div>
      <div className="py-4">
        <PaymentProviderSelector
          updatePaymentProviderInfo={updatePaymentProviderInfo}
        />
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="payment_provider_percentage_fee"
          className="block text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Percentage Fee
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                %
              </span>
            </div>
            <input
              id="payment_provider_percentage_fee"
              name="payment_provider_percentage_fee"
              type="number"
              step="0.01"
              onChange={onSingleFieldChange}
              value={state.payment_provider_percentage_fee}
              className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="payment_provider_percentage_fee"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="payment_provider_fixed_fee"
          className="block text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Fixed Fee
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                $
              </span>
            </div>
            <input
              id="payment_provider_fixed_fee"
              name="payment_provider_fixed_fee"
              type="number"
              onChange={onSingleFieldChange}
              value={state.payment_provider_fixed_fee}
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="payment_provider_fixed_fee"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span
                className="text-gray-500 dark:text-gray-400 sm:text-sm"
                id="price-currency"
              >
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="tax_rate"
          className="block text-sm font-medium text-gray-700 dark:text-gray-50"
        >
          Tax Rate
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                %
              </span>
            </div>
            <input
              id="tax_rate"
              name="tax_rate"
              type="number"
              step="0.01"
              value={20}
              onChange={onSingleFieldChange}
              className="block w-full pr-12 border-gray-300 rounded-md dark:bg-slate-900 dark:border-gray-600 dark:focus:ring-indigo-400 focus:ring-indigo-500 dark:focus:border-indigo-400 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="tax_rate"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <p>MRR after a year</p>
        <p className="text-right md:w-1/2">
          {Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(results.mrr_after_one_year ?? 0))}
        </p>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <p>Revenue Churn</p>
        <p className="text-right text-red-500 dark:text-red-400 md:w-1/2">
          {' '}
          -
          {Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(Math.abs(Number(results.revenue_churn ?? 0)))}
        </p>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <p>Annual Gross Revenue</p>
        <p className="text-right md:w-1/2">
          {Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(results.annual_gross_revenue ?? 0))}
        </p>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 mt-4 border-t md:items-center md:flex-row">
        <p>Transaction Fees</p>
        <p className="text-right text-red-500 dark:text-red-400 md:w-1/2">
          -
          {Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(Math.abs(Number(results.total_tx_cost ?? 0)))}
        </p>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <p>Tax</p>
        <p className="text-right text-red-500 dark:text-red-400 md:w-1/2">
          -
          {Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'USD',
          }).format(Math.abs(Number(results.total_tax ?? 0)))}
        </p>
      </div>
      <div className="fixed bottom-0 left-0 flex flex-col justify-between w-screen gap-4 p-3 py-4 mt-4 font-medium text-white bg-indigo-600 shadow-sm md:items-center md:flex-row">
        <div className="container flex items-center justify-between max-w-3xl px-6 mx-auto">
          <p>Annual Net Revenue</p>
          <p className="text-right md:w-1/2">
            {Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(results.annual_net_revenue ?? 0))}
          </p>
        </div>
      </div>
    </form>
  );
}

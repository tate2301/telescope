export default function CalculatorBaseUI() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="mb-4 text-2xl font-medium text-gray-900 lg:text-4xl">
        Pricing Model
      </h2>
      <div className="grid grid-cols-2 gap-8 py-4 mb-4 border-b">
        <div className="block col-span-2 gap-2 md:col-span-1">
          <label
            htmlFor="base_price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                name="base_price"
                type="number"
                step="0.01"
                className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                placeholder="0.00"
                aria-describedby="base_price"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 gap-2 md:col-span-1">
          <label
            htmlFor="customers_per_month"
            className="block text-sm font-medium text-gray-700"
          >
            Customers/month
          </label>
          <div className="mt-1">
            <div className="relative rounded-md shadow-sm">
              <input
                name="customers_per_month"
                type="number"
                step="1"
                className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
                placeholder="0"
                aria-describedby="customers_per_month"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="price-currency">
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
          className="block text-sm font-medium text-gray-700"
        >
          Current MRR
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              name="current_mrr"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="current_mrr"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="churn_rate"
          className="block text-sm font-medium text-gray-700"
        >
          Churn Rate
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
            <input
              id="churn_rate"
              name="churn_rate"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="churn_rate"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="payment_provider_percentage_fee"
          className="block text-sm font-medium text-gray-700"
        >
          Percentage Fee
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
            <input
              id="payment_provider_percentage_fee"
              name="payment_provider_percentage_fee"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="payment_provider_percentage_fee"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="payment_provider_fixed_fee"
          className="block text-sm font-medium text-gray-700"
        >
          Fixed Fee
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="payment_provider_fixed_fee"
              name="payment_provider_fixed_fee"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="payment_provider_fixed_fee"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-4 py-4 md:items-center md:flex-row">
        <label
          htmlFor="tax_rate"
          className="block text-sm font-medium text-gray-700"
        >
          Tax Rate
        </label>
        <div className="md:w-1/2">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
            <input
              id="tax_rate"
              name="tax_rate"
              type="number"
              step="0.01"
              className="block w-full pr-12 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
              placeholder="0.00"
              aria-describedby="tax_rate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

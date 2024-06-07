/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const providers = [
  {
    id: 'stripe',
    title: 'Stripe',
    description: '$0.3 Fixed Fee\n2.9% Percentage Fee',
    params: {
      fixed: 0.3,
      percentage: 2.9,
    },
    value: {
      payment_provider: 'stripe',
      payment_provider_fixed_fee: 0.3,
      payment_provider_percentage_fee: 2.9,
    },
  },
  {
    id: 'paypal',
    title: 'PayPal',
    description: '$0.3 Fixed Fee\n2.9% Percentage Fee',
    params: {
      fixed: 0.3,
      percentage: 2.9,
    },
    value: {
      payment_provider: 'paypal',
      payment_provider_fixed_fee: 0.3,
      payment_provider_percentage_fee: 2.9,
    },
  },
  {
    id: 'paddle',
    title: 'Paddle',
    description: '$0.5 Fixed Fee\n5% Percentage Fee',
    params: {
      fixed: 0.5,
      percentage: 5,
    },
    value: {
      payment_provider: 'paddle',
      payment_provider_fixed_fee: 0.5,
      payment_provider_percentage_fee: 5,
    },
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PaymentProviderSelector({
  updatePaymentProviderInfo,
}: {
  updatePaymentProviderInfo: (value: {
    payment_provider: 'stripe' | 'paypal' | 'paddle';
    payment_provider_fixed_fee: number;
    payment_provider_percentage_fee: number;
  }) => void;
}) {
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);
  const initial = providers[0];
  useEffect(() => {
    updatePaymentProviderInfo({
      ...initial.value,
      payment_provider: initial.value.payment_provider as
        | 'stripe'
        | 'paypal'
        | 'paddle',
    });
  }, [initial]);

  const updateInfo = (e: any) => {
    setSelectedProvider(e);
    updatePaymentProviderInfo(e.value);
  };

  return (
    <RadioGroup value={selectedProvider} onChange={updateInfo}>
      <RadioGroup.Label className="text-base font-semibold text-gray-900">
        Payments processor
      </RadioGroup.Label>

      <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {providers.map((paymentProvider) => (
          <RadioGroup.Option
            key={paymentProvider.id}
            value={paymentProvider}
            className={({ checked, active }) =>
              classNames(
                active
                  ? 'dark:border-orange-500 outline outline-orange-500 dark:outline-orange-500 bg-white'
                  : '',
                'relative bg-white/50 dark:bg-slate-900 rounded-lg p-4 flex cursor-pointer transition-all ring-0',
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="label"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                    >
                      {paymentProvider.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-300"
                    >
                      Fixed Fee: {paymentProvider.params.fixed}USD
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-300"
                    >
                      Percentage Fee: {paymentProvider.params.percentage}%
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? 'invisible' : '',
                    'h-5 w-5 text-orange-600',
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-orange-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none',
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

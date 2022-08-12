import CalculatorContextProvider from './context';
import { ReactChildrenProps } from './types';
import CalculatorBaseUI from './ui';

export default function Calculator() {
  return (
    <CalculatorWrapper>
      <CalculatorConsumer />
    </CalculatorWrapper>
  );
}

const CalculatorWrapper = ({ children }: ReactChildrenProps) => {
  return <CalculatorContextProvider>{children}</CalculatorContextProvider>;
};

const CalculatorConsumer = () => {
  return (
    <div className="w-full p-4 rounded-md">
      <CalculatorBaseUI />
    </div>
  );
};

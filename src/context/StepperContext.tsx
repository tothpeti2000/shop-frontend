import { createContext, FC, useContext, useState } from "react";

const useStepperContextValue = () => {
  const [stepIdx, setStepIdx] = useState(0);

  const stepNext = () => setStepIdx((currentIdx) => currentIdx + 1);
  const stepBack = () => setStepIdx((currentIdx) => currentIdx - 1);

  return {
    stepIdx,
    stepNext,
    stepBack,
  };
};

const StepperContext = createContext(
  {} as ReturnType<typeof useStepperContextValue>
);

const StepperProvider: FC = ({ children }) => {
  return (
    <StepperContext.Provider value={useStepperContextValue()}>
      {children}
    </StepperContext.Provider>
  );
};

const useStepperContext = () => useContext(StepperContext);

export { StepperProvider, useStepperContext };

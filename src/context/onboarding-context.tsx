import React, { createContext, useContext, useState, useEffect } from 'react';

interface OnboardingContextType {
  isCompleted: boolean;
  setCompleted: (val: boolean) => void;
  isLoaded: boolean;
}

const OnboardingContext = createContext<OnboardingContextType>({
  isCompleted: false,
  setCompleted: () => {},
  isLoaded: false,
});

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = globalThis.localStorage?.getItem('onboarding-completed');
    if (saved === 'true') {
      setIsCompleted(true);
    }
    setIsLoaded(true);
  }, []);

  const setCompleted = (val: boolean) => {
    setIsCompleted(val);
    globalThis.localStorage?.setItem('onboarding-completed', val ? 'true' : 'false');
  };

  return (
    <OnboardingContext.Provider value={{ isCompleted, setCompleted, isLoaded }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);

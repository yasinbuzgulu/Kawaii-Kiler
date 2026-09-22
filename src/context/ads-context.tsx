import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdsContextType {
  isPremium: boolean;
  setPremium: (val: boolean) => void;
}

const AdsContext = createContext<AdsContextType>({
  isPremium: false,
  setPremium: () => {},
});

export const AdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const saved = globalThis.localStorage?.getItem('is-premium');
    if (saved === 'true') {
      setIsPremium(true);
    }
  }, []);

  const setPremium = (val: boolean) => {
    setIsPremium(val);
    globalThis.localStorage?.setItem('is-premium', val ? 'true' : 'false');
  };

  return (
    <AdsContext.Provider value={{ isPremium, setPremium }}>
      {children}
    </AdsContext.Provider>
  );
};

export const usePurchases = () => useContext(AdsContext);

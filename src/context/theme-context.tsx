import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'system',
  isDark: false,
  setMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const nativeScheme = useNativeColorScheme();
  const [mode, setModeState] = useState<ThemeMode>('system');

  useEffect(() => {
    const saved = globalThis.localStorage?.getItem('theme-mode');
    if (saved) setModeState(saved as ThemeMode);
  }, []);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    globalThis.localStorage?.setItem('theme-mode', newMode);
  };

  const isDark = mode === 'system' ? nativeScheme === 'dark' : mode === 'dark';

  return (
    <ThemeContext.Provider value={{ mode, isDark, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

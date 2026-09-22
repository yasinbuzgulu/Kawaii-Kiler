import "expo-sqlite/localStorage/install";
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/theme-context';
import { OnboardingProvider } from '../context/onboarding-context';
import { AdsProvider } from '../context/ads-context';
import '../lib/i18n';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <OnboardingProvider>
        <AdsProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="paywall" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </AdsProvider>
      </OnboardingProvider>
    </ThemeProvider>
  );
}

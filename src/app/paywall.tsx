import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ThemedText } from '../components/ui/themed-text';
import { ThemedView } from '../components/ui/themed-view';
import { usePurchases } from '../context/ads-context';

export default function PaywallScreen() {
  const { t } = useTranslation();
  const { setPremium } = usePurchases();
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const subscriptionOptions = [
    {
      id: 'weekly',
      title: t('paywall.weekly'),
      price: '$4.99/week',
    },
    {
      id: 'yearly',
      title: t('paywall.yearly'),
      price: '$129.99/year',
      badge: '50% OFF',
    },
  ];

  const handleContinue = () => {
    if (selectedPlan) {
      setPremium(true);
    }
    router.replace('/(tabs)');
  };

  const handleSkip = () => {
    router.replace('/(tabs)');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{t('paywall.title')}</ThemedText>
        <ThemedText style={styles.subtitle}>{t('paywall.subtitle')}</ThemedText>
      </View>

      <View style={styles.optionsContainer}>
        {subscriptionOptions.map((opt) => (
          <TouchableOpacity 
            key={opt.id} 
            style={[styles.option, selectedPlan === opt.id && styles.optionSelected]}
            onPress={() => setSelectedPlan(opt.id)}
          >
            {opt.badge && (
              <View style={styles.badge}>
                <ThemedText style={styles.badgeText}>{opt.badge}</ThemedText>
              </View>
            )}
            <ThemedText style={styles.optionTitle}>{opt.title}</ThemedText>
            <ThemedText style={styles.optionPrice}>{opt.price}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <ThemedText style={styles.buttonText}>{t('paywall.continue')}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <ThemedText style={styles.skipText}>{t('paywall.skip')}</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  header: { marginTop: 48, alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 16, textAlign: 'center', opacity: 0.7 },
  optionsContainer: { gap: 16 },
  option: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 16,
    padding: 20,
    position: 'relative',
  },
  optionSelected: {
    borderColor: '#FF6B6B',
    backgroundColor: 'rgba(255,107,107,0.1)',
  },
  badge: {
    position: 'absolute',
    top: -12,
    right: 24,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  optionTitle: { fontSize: 18, fontWeight: '600' },
  optionPrice: { fontSize: 16, opacity: 0.7, marginTop: 4 },
  footer: { marginBottom: 24 },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  skipButton: { alignItems: 'center', padding: 8 },
  skipText: { opacity: 0.6, fontSize: 16 },
});

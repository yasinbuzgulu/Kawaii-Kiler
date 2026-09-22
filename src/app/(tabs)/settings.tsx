import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';
import { ThemedText } from '../../components/ui/themed-text';
import { ThemedView } from '../../components/ui/themed-view';
import { useThemeContext } from '../../context/theme-context';
import { useOnboarding } from '../../context/onboarding-context';
import { usePurchases } from '../../context/ads-context';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { mode, setMode } = useThemeContext();
  const { setCompleted } = useOnboarding();
  const { isPremium } = usePurchases();

  const handleResetOnboarding = () => {
    setCompleted(false);
    router.replace('/onboarding');
  };

  const handleRemoveAds = () => {
    router.push('/paywall');
  };
  
  const toggleTheme = () => {
    const nextMode = mode === 'light' ? 'dark' : (mode === 'dark' ? 'system' : 'light');
    setMode(nextMode);
  };
  
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>{t('settings.title')}</ThemedText>
          
          <View style={styles.list}>
            <TouchableOpacity style={styles.item} onPress={toggleLanguage}>
              <ThemedText style={styles.itemText}>{t('settings.language')} ({i18n.language})</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item} onPress={toggleTheme}>
              <ThemedText style={styles.itemText}>{t('settings.theme')} ({t(`theme.${mode}`)})</ThemedText>
            </TouchableOpacity>

            {!isPremium && (
              <TouchableOpacity style={styles.item} onPress={handleRemoveAds}>
                <ThemedText style={[styles.itemText, { color: '#FF6B6B' }]}>{t('settings.removeAds')}</ThemedText>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.item} onPress={handleResetOnboarding}>
              <ThemedText style={styles.itemText}>{t('settings.resetOnboarding')}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  list: { gap: 16 },
  item: { paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(150,150,150,0.2)' },
  itemText: { fontSize: 18 }
});

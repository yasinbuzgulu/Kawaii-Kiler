import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemedText } from '../../components/ui/themed-text';
import { ThemedView } from '../../components/ui/themed-view';

export default function HistoryScreen() {
  const { t } = useTranslation();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>{t('history.title')}</ThemedText>
          <View style={styles.emptyContainer}>
            <ThemedText style={styles.emptyText}>{t('history.empty')}</ThemedText>
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
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { opacity: 0.5, fontSize: 16 }
});

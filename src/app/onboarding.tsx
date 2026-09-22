import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ThemedText } from '../components/ui/themed-text';
import { useOnboarding } from '../context/onboarding-context';

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const { setCompleted } = useOnboarding();
  
  // Dummy video for onboarding
  const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const handleComplete = async () => {
    setCompleted(true);
    router.replace('/paywall');
  };

  return (
    <View style={styles.container}>
      <VideoView style={styles.video} player={player} allowsFullscreen={false} allowsPictureInPicture={false} />
      <View style={styles.overlay}>
        <View style={styles.content}>
          <ThemedText style={styles.title}>{t('onboarding.title')}</ThemedText>
          <ThemedText style={styles.subtitle}>{t('onboarding.subtitle')}</ThemedText>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleComplete}>
          <ThemedText style={styles.buttonText}>{t('onboarding.continue')}</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 24,
    paddingBottom: 48,
  },
  content: {
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#eee',
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

import { Redirect } from 'expo-router';
import { useOnboarding } from '../context/onboarding-context';
import { View, ActivityIndicator } from 'react-native';
import { usePurchases } from '../context/ads-context';

export default function Index() {
  const { isLoaded, isCompleted } = useOnboarding();
  
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  
  if (!isCompleted) {
    return <Redirect href="/onboarding" />;
  }
  
  return <Redirect href="/(tabs)" />;
}

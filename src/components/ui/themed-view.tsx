import { View, ViewProps } from 'react-native';
import { useColorScheme } from '../../hooks/use-color-scheme';

export function ThemedView(props: ViewProps) {
  const { style, ...otherProps } = props;
  const theme = useColorScheme();
  const backgroundColor = theme === 'dark' ? '#151718' : '#fff';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

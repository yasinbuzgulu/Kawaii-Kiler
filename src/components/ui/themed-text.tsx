import { Text, TextProps } from 'react-native';
import { useColorScheme } from '../../hooks/use-color-scheme';

export function ThemedText(props: TextProps) {
  const { style, ...otherProps } = props;
  const theme = useColorScheme();
  const color = theme === 'dark' ? '#ECEDEE' : '#11181C';

  return <Text style={[{ color }, style]} {...otherProps} />;
}

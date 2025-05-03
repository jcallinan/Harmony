// F:\Github\Harmony\components\ThemedText.tsx
import { Text, TextProps, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type ThemedTextType = 'default' | 'defaultSemiBold' | 'title' | 'subtitle';

interface ThemedTextProps extends TextProps {
  type?: ThemedTextType;
}

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const theme = useColorScheme() ?? 'light';

  const textStyles = StyleSheet.create({
    default: {
      fontSize: 16,
      color: theme === 'light' ? Colors.light.text : Colors.dark.text,
    },
    defaultSemiBold: {
      fontSize: 16,
      fontWeight: '600',
      color: theme === 'light' ? Colors.light.text : Colors.dark.text,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'light' ? Colors.light.text : Colors.dark.text,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '500',
      color: theme === 'light' ? Colors.light.text : Colors.dark.text,
    },
  });

  return (
    <Text
      style={[textStyles[type], style]}
      {...props}
    />
  );
}
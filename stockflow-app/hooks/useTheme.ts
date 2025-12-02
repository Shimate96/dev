import { useColorScheme as useSystemColorScheme } from 'react-native';
import { Colors } from '../constants/theme';

export const useColorScheme = () => {
  return useSystemColorScheme() || 'light';
};

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return Colors[colorScheme as keyof typeof Colors] || Colors.light;
};

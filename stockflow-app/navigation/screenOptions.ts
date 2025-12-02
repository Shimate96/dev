import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const defaultStackOptions: NativeStackNavigationOptions = {
  headerShown: true,
};

export const modalStackOptions: NativeStackNavigationOptions = {
  presentation: 'modal',
  headerShown: false,
};

export default defaultStackOptions;

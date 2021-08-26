import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ModalParamsType } from './modals/type';
import { FunctionalModalParamsType } from './functionalModal/type';
import { ScreenParamsType } from './screens/type';

type ModalCompile = ModalParamsType & FunctionalModalParamsType;

type OptionType = {
  component: React.ComponentType<any>;
  initialParams?: { statusBarStyle: 'bgDark' | 'bgWhite' | 'bgBlue' };
  options?: Record<string, any>;
};

export type ConfigsType<T extends Record<string, any>> = { [K in keyof T]: OptionType };

export type ModalProps<T extends keyof ModalCompile> = {
  route: RouteProp<ModalCompile, T>;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<ScreenParamsType>,
    NativeStackNavigationProp<ModalCompile, T>
  >;
};

export type ScreenProps<T extends keyof ScreenParamsType> = {
  route: RouteProp<ScreenParamsType, T>;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<ScreenParamsType, T>,
    NativeStackNavigationProp<ModalCompile>
  >;
};

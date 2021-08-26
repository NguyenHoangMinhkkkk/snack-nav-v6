import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MyTabBar from './MyTabBar';

import tabConfig from './tabs';
// import loginConfig from './login';
import screenConfig from './screens';
import modalsConfig from './modals';
import functionalModalConfig from './functionalModal';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 255)',
  },
};

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

function configToStack(config: any, Navigator: any) {
  return Object.keys(config).map(stackConfigKey => {
    const { component, ...res } = config[stackConfigKey] || {};
    return <Navigator.Screen {...res} key={stackConfigKey} name={stackConfigKey} component={component} />;
  });
}

function TabStackNavigator() {
  //
  return (
    <TabStack.Navigator
      screenOptions={{ header: () => null }}
      //
      tabBar={props => <MyTabBar {...props} />}
    >
      {configToStack(tabConfig, TabStack)}
    </TabStack.Navigator>
  );
}

function ScreenGroup() {
  return <Stack.Group>{configToStack(screenConfig, Stack)}</Stack.Group>;
}

function ModalGroup() {
  return <Stack.Group screenOptions={{ presentation: 'modal' }}>{configToStack(modalsConfig, Stack)}</Stack.Group>;
}

function FunctionalModalGroup() {
  // custom
  return (
    <Stack.Group
      screenOptions={{
        presentation: 'transparentModal',
        headerShown: false,
      }}
    >
      <Stack.Screen name="alertModal" component={functionalModalConfig.alertModal.component} />
    </Stack.Group>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabStackNavigator} options={{ header: () => null }} />
      {ScreenGroup()}
      {ModalGroup()}
      {FunctionalModalGroup()}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="mainStack" component={StackNavigator} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

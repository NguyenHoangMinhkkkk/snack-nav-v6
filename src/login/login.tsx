import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: any;
};

function Login(props: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="setLogin"
        onPress={() => {
          props.route.params.setLogin(true);
        }}
      />
    </View>
  );
}

export default Login;

import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

function HomeTab(props: Props) {
  console.log(props.navigation);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeTab</Text>
      <Button title="Login Screen" onPress={() => {}} />
      <Button
        title="AlertModal"
        onPress={() => {
          props.navigation.navigate('alertModal');
        }}
      />
    </View>
  );
}

export default HomeTab;

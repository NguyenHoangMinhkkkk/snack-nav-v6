import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: any;
};

function ProfileTab(props: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileTab</Text>
      <Button title="Go to modal A" onPress={() => props.navigation.navigate('modalA', { params: 'ModalA param' })} />
    </View>
  );
}

export default ProfileTab;

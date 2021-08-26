import * as React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '../navigationType';

type Props = ScreenProps<'profileScreen'>;

function ProfileScreen(props: Props) {
  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

export default ProfileScreen;

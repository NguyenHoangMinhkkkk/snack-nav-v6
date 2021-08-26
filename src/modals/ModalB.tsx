import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ModalProps } from '../navigationType';

type Props = ModalProps<'modalB'>;

function ModalB(props: Props) {
  return (
    <View style={styles.container}>
      <Text>ModalB</Text>
      <Text>{JSON.stringify(props.route?.params?.modalB_param).toString()}</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModalB;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ModalProps } from '../navigationType';

type Props = ModalProps<'modalA'>;

function ModalA(props: Props) {
  return (
    <View style={styles.container}>
      <Text>ModalA</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModalA;

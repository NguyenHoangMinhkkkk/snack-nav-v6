import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ModalProps } from '../navigationType';

type Props = ModalProps<'alertModal'>;

export default function AlertModal(props: Props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', backgroundColor: 'green' }}>Alert Modal :D</Text>
      <Button title="Goback" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

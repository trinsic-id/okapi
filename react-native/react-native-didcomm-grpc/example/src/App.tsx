import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DIDComm, PackRequest } from 'react-native-didcomm-grpc';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    //DidcommGrpc.multiply(7, 7).then(setResult);
    // DidcommGrpc.generateKey([]).then((response) => {
    //   setResult(JSON.stringify(response));
    // });
    DIDComm.pack(new PackRequest())
      .then((response) => {
        setResult(JSON.stringify(response));
      })
      .catch((err) => {
        setResult('Error' + JSON.stringify(err));
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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

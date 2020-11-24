import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  DIDKey,
  // BasicMessage,
  GenerateKeyRequest,
  // DIDComm,
  // DIDKey,
  KeyType,
} from 'react-native-didcomm-grpc';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    let request = new GenerateKeyRequest();
    request.setKeyType(KeyType.ED25519);

    DIDKey.generate(request)
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

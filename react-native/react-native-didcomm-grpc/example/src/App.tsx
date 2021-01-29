import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DIDKey, GenerateKeyRequest, Crv } from 'react-native-didcomm-grpc';

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    let request = new GenerateKeyRequest();
    request.setKeyType(Crv.SECP256K1);

    DIDKey.generate(request)
      .then((response) => {
        setResult(JSON.stringify(response.toObject()));
      })
      .catch((err) => {
        setResult('Error' + JSON.stringify(err));
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Generated Key:</Text>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
});

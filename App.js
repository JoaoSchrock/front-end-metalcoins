import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import Form from './src/components/form/index'
import Title from './src/components/title/index'

export default function App() {
  return (
    <>
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Title />

          <View style={styles.container}>
          <Form />

          <TouchableOpacity>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 25
  },
  containerLogo: {
    flex: 1,
    padding: 50,
  },
  background: {
    flex: 1
  }
});

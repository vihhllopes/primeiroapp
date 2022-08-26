import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Image, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <Image source={require('../primerioappp/assets/mamaativa.png')} />
       <Button style={styles.button}
  
                // Some properties given to Button
                title="Entrar"
                onPress={() => Alert.alert(
                    'Aplicativo em Construção!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9098E0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
   padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  }
});


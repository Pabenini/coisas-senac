import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3949AB"
      }}
    >
      <Image 
      style={{ width: 200,
        height: 200,
        borderRadius: 200}}
      source={require('../assets/images/C2.png')} 
      />

      <Text
        style={{ fontWeight: "bold", marginTop: 20, fontSize: 20, color: "#ffffff"}}
      >
        Aprenda C agora</Text>
      
      <Link href="/products" style={styles.button} asChild>
        <TouchableOpacity>

          <Text style={styles.buttonText}>
            Entrar
          </Text>

        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#273494',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
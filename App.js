import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.Text}>Jose Guadalupe Castillo</Text> */}
      <StatusBar style="auto" />
      <Text style={styles.Text}>
      </Text>
      <Text>
        <Text style={styles.Text}>
        <b>Jose Gpe Castillo Sanchez</b> <br/>
           <b style={styles.Text}>               190607</b>
        </Text>
        <StatusBar style="auto" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // backgroundImage: URL(),
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:100,
  },

  Text: {
    color: "#fff",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    height: "55%",
    borderRadius: "50%",
    backgroundColor: "red",
    marginBottom:-200,
    
  },

  texto1:{
    marginBottom:500
  }
});

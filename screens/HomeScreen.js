import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useLoginContext } from "../contexts/LoginContext";

export const HomeScreen = () => {
  const { user } = useLoginContext();
  return (
    <View style={styles.container}>
      <Text>Hello, {user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

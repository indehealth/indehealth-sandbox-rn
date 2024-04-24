import { StatusBar, StyleSheet, Text, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <StatusBar style="auto" />
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

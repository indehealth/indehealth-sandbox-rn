import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useLoginContext } from "../contexts/LoginContext";

export const LoginScreen = () => {
  const { setUser } = useLoginContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const login = () => {
    if (password === "password") {
      setUser(username);
      navigation.navigate("Home");
    } else {
      Alert.alert("Incorrect password");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          textContentType="username"
          placeholder="Enter the username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          placeholder="Enter the password"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={login}>
          <Text style={styles.buttonTitle}>Login</Text>
        </Pressable>
      </View>
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
  formContainer: {
    minWidth: 150,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: "left",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "stretch",
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "stretch",
  },
  buttonTitle: {
    alignSelf: "stretch",
    textAlign: "center",
  },
});

import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginContextProvider } from "./contexts/LoginContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LoginContextProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </LoginContextProvider>
    </NavigationContainer>
  );
}

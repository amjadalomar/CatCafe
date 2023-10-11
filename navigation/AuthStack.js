import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";

import Colors from "../utils/Colors";

const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;

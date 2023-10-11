import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Order from "../screens/order/Order";
import Profile from "../screens/user/Profile";

import Colors from "../utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator({ navigation }) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.purple,
        tabBarInactiveTintColor: Colors.lightpurple,
        tabBarStyle: {
          backgroundColor: Colors.skin,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={32} color={Colors.pastelred} />
            ) : (
              <Ionicons name="home-outline" size={32} color={Colors.white} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="cafe" size={35} color={Colors.pastelred} />
            ) : (
              <Ionicons name="cafe-outline" size={35} color={Colors.white} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="person-circle-sharp"
                size={35}
                color={Colors.pastelred}
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={35}
                color={Colors.white}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

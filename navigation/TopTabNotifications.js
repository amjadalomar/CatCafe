import { SafeAreaView, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Colors from "../constants/colors";
import AllNotificationsScreen from "../screens/notifications/AllNotificationsScreen";
import EventNotificationsScreen from "../screens/notifications/EventNotificationsScreen";
import Title from "../components/ui/Title";

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigatorNotifs() {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Notifications</Title>

      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.primary500,
          },
          tabBarLabelStyle: {
            color: "#2A0800",
            fontWeight: "400",
            fontSize: 14,
          },
        }}
      >
        <TopTab.Screen
          name="AllNotifications"
          component={AllNotificationsScreen}
          options={{
            title: "All",
            tabBarIndicatorStyle: {
              position: "absolute",
              backgroundColor: Colors.accentLilac,
              height: 3,
              width: 33,
              borderRadius: 30,
              marginBottom: 10,
              left: 81,
            },
          }}
        />
        <TopTab.Screen
          name="EventNotifications"
          component={EventNotificationsScreen}
          options={{
            title: "Events",
            tabBarIndicatorStyle: {
              position: "absolute",
              backgroundColor: Colors.accentLilac,
              height: 3,
              width: 60,
              borderRadius: 30,
              marginBottom: 10,
              left: 68,
            },
          }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}

export default TopTabNavigatorNotifs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});

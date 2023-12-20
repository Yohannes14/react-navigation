import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import Notification from "../screens/tabScreens/Notification";
import Setting from "../screens/tabScreens/Setting";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === "HomeStackGroup") {
                    iconName = focused ? "home" : "home-outline";
                }
                if (route.name === "Settings") {
                    iconName = focused ? "settings" : "ios-settings-sharp";
                }
                if (route.name === "Notifications") {
                    iconName = focused ? "ios-notifications" : "notifications-off";
                }
                return <Ionicons name={iconName} size={size} color={color} />

            },
            tabBarActiveTintColor: "#1DA1F2",
            tabBarInactiveTintColor: "gray",
        })}>
            <Tab.Screen name="HomeStackGroup" component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: "@JD"
                }} />
            <Tab.Screen name="Notifications" component={Notification} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

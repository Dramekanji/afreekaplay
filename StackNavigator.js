import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import LibraryScreen from "./screens/LibraryScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import ArtistSelectionScreen from "./screens/ArtistSelectionScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000814",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabelStyle: "white",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="#966fdc" />
            ) : (
              <Ionicons name="home-outline" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          tabBarLabel: "Playlist",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabelStyle: "white",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="playlist" size={24} color="#966fdc" />
            ) : (
              <SimpleLineIcons name="playlist" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Libary"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Libary",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabelStyle: "white",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="library-music" size={24} color="#966fdc" />
            ) : (
              <MaterialIcons name="library-music" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabelStyle: "white",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="search" size={24} color="#966fdc" />
            ) : (
              <Feather name="search" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Artist Selection"
          component={ArtistSelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

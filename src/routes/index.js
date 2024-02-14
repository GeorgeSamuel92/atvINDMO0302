import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import Home from "./src/pages/Home";
import StackRoutes from "../pages/Home";
import Cursos from "../pages/Cursos";
import Contato from "../pages/Contato";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
          },

          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackRoutes}
          options={{
            title: "Tela Inicial",
            headerTintColor: "red",  

            headerStyle: {
              backgroundColor: "green",
            },

            tabBarIcon: ({ color = "red", size }) => {
              return (
                <FontAwesome name="home" color={"red"} size={size}>
                  {" "}
                </FontAwesome>
              );
            },
          }}
        />

        <Tab.Screen
          name="Cursos"
          component={Cursos}
          options={{
            title: "Cursos",
            headerTintColor: "#fff",

            headerStyle: {
              backgroundColor: "green",
            },

            tabBarIcon: ({ color = "red", size }) => {
              return (
                <FontAwesome name="book" color={"red"} size={size}>
                  {" "}
                </FontAwesome>
              );
            },
          }}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            title: "Contato",
            headerTintColor: "#fff",

            tabBarIcon: ({ color = "red", size }) => {
              return (
                <FontAwesome name="info-circle" color={"red"} size={size}>
                  {" "}
                </FontAwesome>
              );
            },
          }}
        />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

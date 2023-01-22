import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import { COLORS } from "../constants";

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => {
  return (
    <PlaceStack.Navigator
      initialRouteName="Mis direcciones"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? "#B22222" : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : "#B22222",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <PlaceStack.Screen
        name="Mis direcciones"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Mis direcciones",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Nuevo")}>
              <Ionicons
                name="md-add"
                color={
                  Platform.OS === "android" ? "white" : COLORS.MAROON
                }
                size={23}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <PlaceStack.Screen
        name="Detalle"
        component={PlaceDetailScreen}
        options={{ title: "Detalle dirección" }}
      />
      <PlaceStack.Screen
        name="Nuevo"
        component={NewPlaceScreen}
        options={{ title: "Nueva dirección" }}
      />
      <PlaceStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Mapa" }}
      />
    </PlaceStack.Navigator>
  );
};

export default PlaceNavigator;
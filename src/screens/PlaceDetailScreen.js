import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import { COLORS } from "../constants";

const PlaceDetailScreen = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.places.places.find((item) => item.id === placeId)
  );

  useEffect(() => {
    console.log(place);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{place.address}</Text>
      </View>
      <Image source={{ uri: place.image }} style={styles.image} />
      <View style={styles.location}>
        <MapPreview
          style={styles.map}
          location={{ lat: place.lat, lng: place.lng }}
        >
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 200,
    width: "90%",
    padding: 20,
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,
  },
  address: {
    color: "#A52A2A",
    textAlign: "center",
    height: 20,
  },
  map: {
    height: 250,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 15,
  },
});

export default PlaceDetailScreen;

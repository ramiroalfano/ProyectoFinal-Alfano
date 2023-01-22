import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";
import { COLORS } from "../constants";

const BreadDetailsScreen = () => {
  const bread = useSelector((state) => state.breads.selected);

  useEffect(() => {
    console.log(bread);
  }, []);

  const dispatch = useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(bread));

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>{bread.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" color={"#A52A2A"} onPress={handlerAddItemCart} />
        </View>
      </View>
    </View>
  );
};

export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 35,
  },
  button: {
    marginTop: 15,
  },
});

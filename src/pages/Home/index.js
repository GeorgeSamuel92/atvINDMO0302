import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/logo-senai.png")}
        style={styles.image}
      ></Image>

      <View style={styles.container02}>
      <Text>George S. F. Ratier</Text>
        <Text>Escola SENAI Celso Charuri</Text>
        <Text>Técnico em Desenvolvimento de Sistemas</Text>
        <Text>INDMO - Interface para Dispositivos Móveis</Text>
      </View>

      <View style={styles.footer}>
        <Text>Sumaré, 30/01/2024</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container02: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    gap: 5,
    width: "100%",
  },

  footer: {
    alignItems: 'center',
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingBottom: 30
  },

  image: {
    width: 300,
    height: 100,
    marginBottom: 20,
  }


});

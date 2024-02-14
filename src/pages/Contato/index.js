import {
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  Alert,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Contato() {
  return (
    <SafeAreaView style={[styles.androidSafeArea]}>
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.container}>

          <Image source={require("../../assets/logo-senai.png")}
        style={styles.image}>
        </Image>


            <Text style={styles.titulo}>Envie sua mensagem para mais detalhes.</Text>

            <Text style={styles.labelInput}>Nome completo:</Text>
            <TextInput
              placeholder="informe seu nome"
              style={styles.input}
            ></TextInput>

            <Text style={styles.labelInput}>Email para contato:</Text>
            <TextInput
              placeholder="informe seu email"
              style={styles.input}
            ></TextInput>

            <Text style={styles.labelInput}>Escreva sua menssagem:</Text>
            <TextInput
              placeholder="informe sua mensagem"
              style={styles.input2}
            ></TextInput>
          </View>

          <Button
            style={styles.button}
            title="Enviar"
            color="red"
            onPress={() => Alert.alert("Sua mensagem foi enviado com sucesso!")}
          ></Button>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 25,
  },

  button: {
    width: 800,
    padding: 5,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  input2: {
    width: 300,
    height: 300,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    textAlignVertical: "top",
  },

  labelInput: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
    color: "red",
    textAlign: "left",
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
    color: "black",
    textAlign: "center",
  },

  image: {
    width: 300,
    height: 100,
  }
});

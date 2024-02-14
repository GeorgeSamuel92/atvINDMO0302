import {
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  Image,
  Alert,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {
  const navigation = useNavigation();

  function navegaDetalhes() {
    navigation.navigate('Detalhes');
  }
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        {/* Inico do primeiro bloco de informações */}
        <View>
          <View style={styles.espaco}></View>

          <Text style={styles.titulo}>Tecnico em Mecânico de Usinagem</Text>

          <Image
            source={require("../../img/img01.jpg")}
            style={styles.image}
          ></Image>

          <View style={styles.espaco}></View>


            <Button title="Abrir página Detalhes" onPress={navegaDetalhes} />

            <View style={styles.espaco}></View>
            <View style={styles.separador}></View>
          </View>
        {/* Fim do primeiro bloco de informações */}

        {/* Inico do segundo bloco de informações */}
        <View>
          <View style={styles.espaco}></View>

          <Text style={styles.titulo}>Curso de Eletricista Instalador</Text>

          <Image
            source={require("../../img/img02.jpg")}
            style={styles.image}
          ></Image>

          <View style={styles.espaco}></View>

          <Text style={styles.subTitulo}>RESUMO: </Text>

          <Text>
            No curso Eletricista Instalador o aluno irá aprender interpretar
            circuitos e diagramas elétricos, planta baixa de instalações
            elétricas prediais e a montagem de infraestrutura básica para
            instalação elétrica predial. Ao final do curso, poderá elaborar
            croquis, executar e conferir instalações elétricas prediais, de
            acordo com normas técnicas, ambientais, de qualidade e de segurança
            e saúde no trabalho.
          </Text>

          <View style={styles.espaco}></View>

          <Text style={styles.subTitulo}>REQUISITOS:</Text>
          <Text>
            O aluno deverá, no início do curso, ter no mínimo 14 anos e no
            máximo idade que lhe permita concluir o curso antes de completar 24
            anos. O aluno deverá ter concluído o Nível Fundamental.
          </Text>

          <View>
            <View style={styles.espaco}></View>

            <Button
              title="Clique aqui e se inscreva!"
              color="red"
              onPress={() =>
                Alert.alert("Você será redirecionado para o site em instantes.")
              }
            ></Button>

            <View style={styles.espaco}></View>
            <View style={styles.separador}></View>
          </View>
        </View>
        {/* Fim do segundo bloco de informações */}

        {/* Inico do terceiro bloco de informações */}
        <View>
          <View style={styles.espaco}></View>

          <Text style={styles.titulo}>Curso de Manutenção Automotiva </Text>

          <Image
            source={require("../../img/img03.jpg")}
            style={styles.image}
          ></Image>

          <View style={styles.espaco}></View>

          <Text style={styles.subTitulo}>RESUMO: </Text>

          <Text>
            Habilitar profissionais para realizar a manutenção e a inspeção de
            sistemas automotivos, participar da gestão de recursos utilizados
            nos processos produtivos e de manutenção e participar do processo
            produtivo de veículos automotores, seguindo as normas técnicas,
            ambientais, de qualidade, de saúde e segurança no trabalho e
            especificações do fabricante.
          </Text>

          <View style={styles.espaco}></View>

          <Text style={styles.subTitulo}>REQUISITOS:</Text>
          <Text>
            O aluno deverá, no início do curso, ter no mínimo 14 anos e no
            máximo idade que lhe permita concluir o curso antes de completar 24
            anos. O aluno deverá ter concluído o Nível Fundamental.
          </Text>

          <View>
            <View style={styles.espaco}></View>

            <Button
              title="Clique aqui e se inscreva!"
              color="red"
              onPress={() =>
                Alert.alert("Você será redirecionado para o site em instantes.")
              }
            ></Button>

            <View style={styles.espaco}></View>
            <View style={styles.separador}></View>
          </View>
        </View>
        {/* Fim do terceiro bloco de informações */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  separador: {
    width: "100%",
    backgroundColor: "black",
    height: 1,
    marginTop: 5,
  },

  espaco: {
    width: "100%",
    height: 10,
    marginTop: 5,
  },

  button: {
    width: 600,
    padding: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    margin: 20,
  },

  titulo: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },

  subTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    gap: 10,
    color: "red",
  },
});

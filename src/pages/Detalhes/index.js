import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhes() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.espaco}></View>
      <Text style={styles.subTitulo}>RESUMO: </Text>

      <Text>
        O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo
        proporcionar qualificação profissional na execução de atividades
        relacionadas à usinagem de peças em materiais ferrosos e não ferrosos,
        seguindo normas e procedimentos técnicos, de manutenção, segurança, meio
        ambiente e qualidade.
      </Text>

      <View style={styles.espaco}></View>

      <Text style={styles.subTitulo}>REQUISITOS:</Text>
      <Text>
        O aluno deverá, no início do curso, ter no mínimo 14 anos e no máximo
        idade que lhe permita concluir o curso antes de completar 24 anos. O
        aluno deverá ter concluído o Nível Fundamental.
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

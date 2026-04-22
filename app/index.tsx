import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome</ThemedText>
      <ThemedText type="subtitle" style={styles.muted}>
        Edita <ThemedText type="defaultSemiBold">app/index.tsx</ThemedText> para
        empezar.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 24,
  },
  muted: {
    marginTop: 4,
    textAlign: "center",
    opacity: 0.8,
  },
});

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5C6BC0",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início"}} />
      <Stack.Screen name="Csingle/[id]" options={{ title: "Linguagem"}} />
      <Stack.Screen name="products" options={{ title: "Linguagens de Programação"}} />
    </Stack>
  );
}

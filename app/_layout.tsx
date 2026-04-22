import { allRoutes } from "@/constants/Routes";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
       <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor  },
          headerStyle: { backgroundColor },
        }}
       >
          <Stack.Screen name="index" options={{ title: "" }} />

          {allRoutes.map((route) => (
            <Stack.Screen 
              key={route.name}
              name={route.name}
              options={{ title: route.title }}
            />
          ))}
       </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

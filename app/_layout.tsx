import ThemedText from "@/components/shared/ThemedText";
import ThemedView from "@/components/shared/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView safe margin>
          <ThemedText 
            // type="link"
            className=" text-light-text text-2xl  dark:text-dark-text"
          >
            Hola mundo
          </ThemedText>

        </ThemedView>
        {/* <Stack /> */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

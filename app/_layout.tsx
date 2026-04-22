import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="bg-light-background dark:bg-dark-background ">
        <Text 
          className=" mt-10 text-light-text text-2xl  dark:text-dark-text"
        >
            Hola mundo
        </Text>

      </View>
      {/* <Stack /> */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

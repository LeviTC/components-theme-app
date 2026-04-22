import { useEffect, useState } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";

/**
 * En web, evitamos un mismatch de hidratación devolviendo "light" hasta el primer paint.
 */
export function useColorScheme() {
  const [isHydrated, setIsHydrated] = useState(false);
  const colorScheme = useRNColorScheme();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated) {
    return colorScheme;
  }

  return "light";
}

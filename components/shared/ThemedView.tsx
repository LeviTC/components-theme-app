import { useThemeColor } from '@/hooks/useThemeColor';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps extends ViewProps {
  className?: string;
  safe?: boolean;
  margin? : boolean;
}

const ThemedView = ({
  className,
  safe = false,
  margin = false,
  style,
  children,
  ...props
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();


  return (
    <View 
      style={[
        { 
          backgroundColor: backgroundColor,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        }, 
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}

export default ThemedView
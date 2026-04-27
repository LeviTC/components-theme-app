import { useThemeColor } from '@/hooks/useThemeColor';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface ThemedSwitchProps{
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const ThemedSwitch = ({ text, value, className, onValueChange }: ThemedSwitchProps) => {
  const switchActivecolor = useThemeColor({}, "primary");

  const isAndroid = Platform.OS === "android";

  return (
    <Pressable
      className={`flex-row items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >

      {text ? (
        <ThemedText type='h2' >{text}</ThemedText>
      ) : <View />}

      <Switch 
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActivecolor : ""}
        // ios_backgroundColor={""}
        // trackColor={{
        //   false: "red",
        //   true: switchActivecolor,
        // }}
      />
    </Pressable>
  )
}

export default ThemedSwitch
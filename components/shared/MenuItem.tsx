import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import ThemedText from './ThemedText';

interface MenuItemProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  isfirst?: boolean;
  islast?: boolean;
}

const MenuItem = ({
  title,
  icon,
  name,
  isfirst = false,
  islast = false,
}: MenuItemProps) => {
  const router = useRouter();
  const primaryColor = useThemeColor({}, 'primary');

  
  return (
    <Pressable 
      onPress={() => router.push(name?.replace("/index", "") as Href)}
      className='bg-white dark:bg-black/15  px-5 py-2'
      style={{
        ...(isfirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }),
        ...(islast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }),
      }}
    >
      <View className='flex-row items-center gap-5'>
        <Ionicons name={icon} size={30} color={primaryColor} />
        <ThemedText type='h2'>{title}</ThemedText>
      </View>
    </Pressable>
  )
}

export default MenuItem
import { View, ViewProps } from 'react-native';

const ThemedCard = ({ className, ...props }: ViewProps) => {
  return (
    <View 
      className={`bg-white dark:bg-black/10 rounded-xl p-2 drop-shadow shadow-black/5 ${className}`}
      {...props}
    />
  )
}

export default ThemedCard
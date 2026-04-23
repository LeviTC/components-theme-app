import { Pressable, PressableProps, Text } from 'react-native';

interface ThemedButtonProps extends PressableProps {
  className?: string;
  children: string;
}

const ThemedButton = ({className, children, ...props}: ThemedButtonProps) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-3 active:opacity-80 ${className}`}
      {...props}
    >
      <Text className="text-white text 2xl">{children}</Text>
    </Pressable>
  )
}

export default ThemedButton
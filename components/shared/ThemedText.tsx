import { Text, TextProps } from 'react-native';

type TextType= "normal" | "h1" | "h2" | "semi-bold" | "bold" | "link";

interface ThemedTextProps extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({
  className,
  type = "normal",
  ...props
}: ThemedTextProps) => {

  const textSize = {
    "normal": "text-base",
    "h1": "text-3xl",
    "h2": "text-xl",
    "semi-bold": "text-semibold",
    "bold": "text-bold",
    "link": "underline text-blue-500 dark:text-blue-400",
  };

  return (
    <Text 
      className={`text-light-text dark:text-dark-text ${textSize[type]} ${className}`}
      {...props}
    />
  )
}

export default ThemedText
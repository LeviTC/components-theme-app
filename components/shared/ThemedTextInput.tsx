import { TextInput, TextInputProps } from 'react-native';

const ThemedTextInput = ({ className,...props }: TextInputProps) => {

  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white ${className}`}
      placeholderTextColor='grey'
      {...props} 
    />
  )
}

export default ThemedTextInput
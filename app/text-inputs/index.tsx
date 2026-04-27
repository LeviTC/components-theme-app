import ThemedCard from '@/components/shared/ThemedCard';
import ThemedText from '@/components/shared/ThemedText';
import ThemedTextInput from '@/components/shared/ThemedTextInput';
import ThemedView from '@/components/shared/ThemedView';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';


const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });


  const handleChange = (name: keyof typeof form, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <KeyboardAwareScrollView
      automaticallyAdjustContentInsets
      automaticallyAdjustKeyboardInsets
      automaticallyAdjustsScrollIndicatorInsets

    >
      <ScrollView>
        <ThemedView margin>

          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Name'
              autoCorrect={false}
              autoCapitalize='words'
              // autoComplete='username'
              onChangeText={(text) => handleChange("name", text)}
            />

            <ThemedTextInput
              placeholder='Email'
              keyboardType='email-address'
              autoComplete='email'
              onChangeText={(text) => handleChange("email", text)}
            />

            <ThemedTextInput
              placeholder='Phone'
              keyboardType='phone-pad'
              onChangeText={(text) => handleChange("phone", text)}
            />
          </ThemedCard>


          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText className="my-2">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedTextInput
            placeholder='Phone'
            keyboardType='phone-pad'
            onChangeText={(text) => handleChange("phone", text)}
          />

        </ThemedView>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
export default TextInputsScreen;

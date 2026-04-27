import ThemedButton from '@/components/shared/ThemedButton';
import ThemedView from '@/components/shared/ThemedView';
import { Alert } from 'react-native';

const AlertsScreen = () => {

  const createTwoButtonAlert = () => {
    Alert.alert("titulo", "mensaje", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      }
    ]);
  }


  const createThreeButtonAlert = () => {
    Alert.alert("titulo 2", "mensaje 2", [
      {
        text: " Ask me later",
        onPress: () => console.log("Ask me later Pressed"),
        style: "default",
      },
      {
        text: "Delete",
        onPress: () => console.log("Delete Pressed"),
        style: "destructive",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      }
    ])
  }


  return (
    <ThemedView margin className='flex flex-1 justify-around items-center'>
      <ThemedButton className='mb-10' onPress={createTwoButtonAlert}>Two Button Alert</ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert}>Three Button Alert</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;

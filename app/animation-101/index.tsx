import ThemedButton from '@/components/shared/ThemedButton';
import { useAnimation } from '@/hooks/useAnimation';
import { Animated, Easing, View } from 'react-native';

const Animation101Screen = () => {
  const { 
    animatedOpacity, 
    animatedMovement, 
    startFade, 
    startMoving 
  } = useAnimation();

  

  return (
    <View className='flex-1 items-center justify-center'>

      <Animated.View 
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl h-[150] w-[150]'
        style={{ opacity: animatedOpacity, transform: [{ translateY: animatedMovement }] }}
      />

      <ThemedButton 
        className="my-5"
        onPress={() => {
          startFade({
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          });
          startMoving({
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce,
          });
        }}
      >
        Fade In
      </ThemedButton>

      <ThemedButton 
        className="my-5"
        onPress={() => {
          startFade({
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            onComplete: () => {
              animatedMovement.resetAnimation();
            },
          });
        }}
      >
        Fade Out
      </ThemedButton>
    </View>
  );
};
export default Animation101Screen;

import { useRef } from "react";
import { Animated, Easing } from "react-native";

interface AnimationConfig extends Animated.TimingAnimationConfig {
  onComplete?: () => void;
}

interface MovingConfig extends AnimationConfig {
  initialValue: number;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedMovement = useRef(new Animated.Value(-100)).current;

  const startFade = ({onComplete, ...props}: AnimationConfig) => {
    Animated.timing(animatedOpacity, {...props,})
    .start(() => onComplete?.());
  };


  const startMoving = ({onComplete, initialValue = -100, ...props}: MovingConfig) => {
    animatedMovement.setValue(initialValue);
    Animated.timing(animatedMovement, {
      easing: Easing.linear,
      ...props,
    }).start(() => onComplete?.());
  }

  return {
    // Values
    animatedOpacity,
    animatedMovement,

    // Methods
    startFade,
    startMoving,
  }
}

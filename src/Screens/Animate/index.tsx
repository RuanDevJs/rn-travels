import { Text } from "react-native"
import { GestureDetector, GestureHandlerRootView, Gesture } from "react-native-gesture-handler"
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"

export default function Animate() {
  const translateY = useSharedValue(0);

  const gestureHandler = Gesture.Pan()
  .onChange((event) => {
    console.warn('Ruan')
    translateY.value = event.translationY;
  });

  const rAnimated = useAnimatedStyle(() => {
    return {
      transform: [ 
        { translateY: translateY.value }
      ]
    }
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GestureDetector gesture={gestureHandler}>
          <Animated.Text style={rAnimated}>Ruan Vitor</Animated.Text>
        </GestureDetector>
      </Animated.View>
    </GestureHandlerRootView>
  )
}
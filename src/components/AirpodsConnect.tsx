import { DIFinalWidth, DIWidth } from 'helpers/constants';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import images from 'resources/images';

const AirpodsConnect = () => {
  const airpodsValue = useSharedValue(0);
  const airpodsTextContainerValue = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const width = interpolate(airpodsValue.value, [0, 1], [DIWidth, DIFinalWidth]);
    const height = interpolate(airpodsValue.value, [0, 1], [40, 95]);

    return {
      width,
      height,
      borderRadius: height / 2,
    };
  });

  const airpodsConnectTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(airpodsTextContainerValue.value, [0, 1], [0, 1]);

    return {
      opacity,
      width: airpodsTextContainerValue.value === 0 ? 0 : 140,
    };
  });

  const startTimingAnimation = () => {
    const isActiveAirpods = airpodsValue.value === 1;
    const isActiveAirpodsText = airpodsTextContainerValue.value === 1;

    airpodsValue.value = withSpring(isActiveAirpods ? 0 : 1, {
      damping: isActiveAirpods ? 12 : 10,
    });

    airpodsTextContainerValue.value = withTiming(isActiveAirpodsText ? 0 : 1, {
      duration: isActiveAirpodsText ? 100 : 800,
    });
  };

  const imageItemStyle = useAnimatedStyle(() => {
    const width = interpolate(airpodsValue.value, [0, 1], [28, 52]);

    return {
      width,
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTimingAnimation();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Pressable onPress={startTimingAnimation}>
      <Animated.View style={[styles.container, containerStyle]}>
        <Animated.Image
          source={images.airpods}
          style={[styles.imageItem, imageItemStyle]}
          resizeMode="contain"
        />
        <Animated.View style={[styles.airpodTextContainer, airpodsConnectTextStyle]}>
          <Text style={styles.airpodFirstLineText}>Connected</Text>
          <Text style={styles.airpodSecondLineText}>Burhan&apos;s Airpods Pro</Text>
        </Animated.View>
        <Animated.Image
          source={images.progress}
          style={[styles.imageItem, imageItemStyle]}
          resizeMode="contain"
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: DIWidth,
    borderRadius: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  imageItem: {
    width: 16,
  },
  airpodTextContainer: { flex: 1, marginHorizontal: 16 },
  airpodFirstLineText: {
    color: '#7B7B7D',
    fontSize: 16,
  },
  airpodSecondLineText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AirpodsConnect;

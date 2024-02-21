import React, {FC} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './Splash.styles';
import {SplashScreenProps} from './SplashModel';

const SplashScreen: FC<SplashScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animations/splash/splash-animation.json')}
        autoPlay
        loop={false}
        speed={0.5}
        style={{flex: 1}}
        onAnimationFinish={() => navigation.replace('LoginScreen')}
      />
    </View>
  );
};

export default SplashScreen;

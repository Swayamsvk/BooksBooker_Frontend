import React, {FC, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {InputField, Typography} from '../../components';
import {ColorCodes} from '../../ColorCodes';
import {LoginScreenContext} from './cms';
import {LoginScreenProps} from './LoginModel';
import {styles} from './Login.styles';
import {Card} from './components';
import {Button} from 'books-booker-button';

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/login/login-background.png')}
        style={styles.imageBackground}>
        <Card>
          <View style={styles.headerTextContainer}>
            <Typography
              fontFamily="Inter"
              fontSize={24}
              fontColor={ColorCodes.primary}
              fontWeight={700}>
              {LoginScreenContext.login}
            </Typography>
          </View>
          <View style={styles.contentContainer}>
            <InputField
              value={email}
              onChangeText={val => setEmail(val)}
              placeholder={LoginScreenContext.email}
            />
            <InputField
              value={password}
              onChangeText={val => setPassword(val)}
              placeholder={LoginScreenContext.password}
              extraStyles={[styles.inputExtraStyle, {marginTop: 12}]}
            />
            <View style={styles.signUpRedirect}>
              <Typography
                fontFamily="Inter"
                fontSize={14}
                fontColor={ColorCodes.primary}
                fontWeight={500}>
                {LoginScreenContext.want_to}
                <Typography
                  onPress={() => navigation.navigate('SignupScreen')}
                  fontFamily="Inter"
                  fontSize={14}
                  fontColor={ColorCodes.tartiary}
                  fontWeight={500}>
                  {' '}
                  {LoginScreenContext.sign_up}?
                </Typography>
              </Typography>
            </View>
            <Button
              text={LoginScreenContext.login}
              onPress={() => navigation.navigate('Dashboard')}
              extraStyles={[styles.inputExtraStyle, {marginTop: 12}]}
            />
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

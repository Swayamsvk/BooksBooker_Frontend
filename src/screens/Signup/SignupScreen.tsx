import React, {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import {InputField, Typography} from '../../components';
import {SignUpScreenContext} from './cms';
import {ColorCodes} from '../../ColorCodes';
import {styles} from './Signup.styles';
import {SignupScreenProps} from './SignupModel';
import {Formik} from 'formik';
import {Card} from './components';
import {Button} from 'books-booker-button';

const SignupScreen: FC<SignupScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/sign-up/signup-background.png')}
        style={styles.imageBackground}>
        <Card>
          <View style={styles.headerTextContainer}>
            <Typography
              fontFamily="Inter"
              fontSize={24}
              fontColor={ColorCodes.primary}
              fontWeight={700}>
              {SignUpScreenContext.sign_up}
            </Typography>
          </View>
          <Formik
            initialValues={{
              full_name: '',
              email: '',
              author_reader: '',
              password: '',
              confirm_password: '',
            }}
            onSubmit={val => {
              console.log('====================================');
              console.log('THIS IS SUBMIT', val);
              console.log('====================================');
            }}>
            {({handleChange, values, handleSubmit}) => (
              <View style={styles.contentContainer}>
                <InputField
                  value={values.full_name}
                  placeholder={SignUpScreenContext.full_name}
                  onChangeText={handleChange('full_name')}
                />
                <InputField
                  value={values.email}
                  placeholder={SignUpScreenContext.email}
                  onChangeText={handleChange('email')}
                  extraStyles={styles.inputExtraStyle}
                />
                <InputField
                  value={values.author_reader}
                  placeholder={SignUpScreenContext.author_reader}
                  onChangeText={handleChange('author_reader')}
                  extraStyles={styles.inputExtraStyle}
                />
                <InputField
                  value={values.password}
                  placeholder={SignUpScreenContext.password}
                  onChangeText={handleChange('password')}
                  extraStyles={styles.inputExtraStyle}
                />
                <InputField
                  value={values.confirm_password}
                  placeholder={SignUpScreenContext.confirm_password}
                  onChangeText={handleChange('confirm_password')}
                  extraStyles={styles.inputExtraStyle}
                />
                <View style={styles.loginRedirect}>
                  <Typography
                    fontFamily="Inter"
                    fontSize={14}
                    fontColor={ColorCodes.primary}
                    fontWeight={500}>
                    {SignUpScreenContext.want_to}
                    <Typography
                      onPress={() => navigation.navigate('LoginScreen')}
                      fontFamily="Inter"
                      fontSize={14}
                      fontColor={ColorCodes.tartiary}
                      fontWeight={500}>
                      {' '}
                      {SignUpScreenContext.login}?
                    </Typography>
                  </Typography>
                </View>
                <Button
                  text={SignUpScreenContext.sign_up}
                  onPress={handleSubmit}
                  extraStyles={[styles.inputExtraStyle, {borderRadius: 20}]}
                />
              </View>
            )}
          </Formik>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

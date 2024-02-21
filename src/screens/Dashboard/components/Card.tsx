import React, {FC} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {ColorCodes} from '../../../ColorCodes';
import {Typography} from '../../../components';
import {CardProps} from '../DashboardModel';

const Card: FC<CardProps> = ({image, name, extraStyle, scale, description}) => {
  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.leftBorder} />
      <View style={styles.subContainer}>
        <Image
          source={require('../../../assets/images/dashboard/book.png')}
          style={{width: 50, height: 50}}
        />
        <View style={styles.descriptionContainer}>
          <Typography
            fontFamily="Inter"
            fontSize={20}
            fontColor={ColorCodes.primary}
            fontWeight={700}>
            {name}
          </Typography>
          <Typography
            extraStyle={styles.descriptionMargin}
            fontFamily="Inter"
            fontSize={15}
            fontColor={ColorCodes.secondary}
            fontWeight={500}>
            {description}
          </Typography>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: ColorCodes.white,
    flexDirection: 'row',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust the opacity as needed
    shadowRadius: 5, // Adjust the radius as needed
    elevation: 5, // This is for Android
  },
  leftBorder: {
    height: '100%',
    width: 5,
    backgroundColor: ColorCodes.tartiary,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  subContainer: {
    margin: 12,
    flexDirection: 'row',
  },
  descriptionContainer: {
    marginLeft: 20,
  },
  descriptionMargin: {
    marginTop: 5,
  },
});

export {Card};

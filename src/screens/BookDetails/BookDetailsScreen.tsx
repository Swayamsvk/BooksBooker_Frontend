import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {InputField, Separator, Typography} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ColorCodes} from '../../ColorCodes';
import {styles} from './BookDetails.styles';
import {BookDetailsContext} from './cms';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {FlatList} from 'react-native-gesture-handler';
import {BookDetailsType} from './BookDetailsModel';

const BookDetailsScreen = () => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [review, setReview] = useState<string>('');
  const reviews = useSelector(
    (state: RootState) => state.reviewsReducer.reviews,
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: BookDetailsType;
    index: number;
  }) => {
    return (
      <View style={styles.reviewTextAlignment}>
        <Typography
          fontFamily="Inter"
          fontSize={12}
          fontColor={ColorCodes.tartiary}
          fontWeight={500}>
          {item.name} :
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize={12}
          fontColor={ColorCodes.primary}
          fontWeight={500}>
          {` ${item.description}`}
        </Typography>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="user" size={25} color={ColorCodes.tartiary} />
        <Icon name="cart-plus" size={25} color={ColorCodes.tartiary} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/dashboard/book.png')}
          style={{width: 300, height: 300}}
        />
      </View>
      <View style={styles.writeReview}>
        <InputField
          multiline={true}
          numberOfLines={4}
          placeholder={BookDetailsContext.write_review}
          onChangeText={val => setReview(val)}
          value={review}
        />
      </View>
      <Separator />
      <View style={styles.reviewSection}>
        <FlatList
          data={reviews}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default BookDetailsScreen;

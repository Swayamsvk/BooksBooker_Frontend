import React, {FC, useRef} from 'react';
import {Animated, FlatList, View} from 'react-native';
import {Typography} from '../../components';
import {styles} from './Dashboard.styles';
import {useSelector} from 'react-redux';
import {Card} from './components';
import {BookListType, DashboardProps} from './DashboardModel';
import {RootState} from '../../store';

const Dashboard: FC<DashboardProps> = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const bookList = useSelector(
    (state: RootState) => state.bookListReducer.bookList,
  );
  const ITEM_SIZE = 100 + 3;
  const renderItem = ({item, index}: {item: BookListType; index: number}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * index + 2];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Card
        scale={scale}
        name={item.name}
        description={item.description}
        image={null}
        onPress={() => navigation.navigate('BookDetailsScreen')}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={bookList}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default Dashboard;

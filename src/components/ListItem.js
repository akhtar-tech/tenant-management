import React from 'react';
import { TouchableHighlight, Image, View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { theme } from '../config';
import Text from './Text';
import Icon from './Icon';

const ListItem = ({ image, IconComponent, title, subTitle, onPress, rightActions }) => {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={theme.colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            {subTitle && <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>}
          </View>
          <Icon
            name="chevron-right"
            size={20}
            color={theme.colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: theme.colors.medium,
  },
  title: {
    fontWeight: '600',
  },
});

export default ListItem;
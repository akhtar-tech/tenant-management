import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

import Badge from './Badge';
import Divider from './Divider';
import { getBadgeVariant } from '../libs';

const HouseDetailHeader = (props) => {
  const { image, totalRooms, remainingRooms } = props;

  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Badge
          label="Total rooms"
          badgeCount={totalRooms}
        />
        <Divider variant="vertical" />
        <Badge
          label="Left rooms"
          badgeCount={remainingRooms}
          variant={getBadgeVariant(totalRooms, remainingRooms)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HouseDetailHeader;
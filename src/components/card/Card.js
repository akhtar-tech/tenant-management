import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import UpDownIcon from '../UpDownIcon';
import Badge from '../Badge';
import { getBadgeVariant } from '../../libs';

const Card = ({ title, title2, title3, value2, value3, additionalDetail, image, toggleMoreDetailIcon, onPress, showMoreDetail }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { height: showMoreDetail ? 300 : 200 }]}
    >
      <View style={{ height: 50 }}>
        <Text style={{ margin: 12, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image}
        />
        <View style={styles.textContainer}>
          <Badge
            label={title2}
            badgeCount={value2}
          />
          <Badge
            label={title3}
            variant={getBadgeVariant(value2, value3)}
            badgeCount={value3}
          />
        </View>
      </View>
      {showMoreDetail && (
        <View style={{ margin: 10 }}>
          <Text>{additionalDetail.address}</Text>
        </View>
      )}
      <UpDownIcon variant={showMoreDetail ? 'up' : 'down'} onPress={toggleMoreDetailIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d4d4d4',
    borderRadius: 15,
    margin: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: '70%',
    borderRadius: 15,
  },
  textContainer: {
    width: '30%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Card;
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Card } from '../components';
import { routes } from '../config';
import { houses } from '../mockData';

const HouseListingScreen = ({ navigation }) => {
  const [showMoreDetail, setShowMoreDetail] = useState(null);

  const handleIconPress = (id) => {
    if (showMoreDetail && showMoreDetail === id) {
      return setShowMoreDetail(null);
    }

    return setShowMoreDetail(id);
  }

  return (
    <FlatList
      data={houses}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { id, name, image, address, totalRooms, remainingRooms } }) => (
        <Card
          onPress={() => navigation.navigate(routes.HOUSE_DETAIL, { houseId: id, houseName: name })}
          title={name}
          image={image}
          title2="Total rooms"
          value2={totalRooms}
          title3="Left rooms"
          value3={remainingRooms}
          additionalDetail={{ address }}
          showMoreDetail={showMoreDetail === id}
          toggleMoreDetailIcon={() => handleIconPress(id)}
        />
      )}
    />
  );
};

export default HouseListingScreen;
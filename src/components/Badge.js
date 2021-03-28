import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Badge as BadgeRNE } from 'react-native-elements'

const Badge = ({ label, badgeCount, variant = 'primary' }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <BadgeRNE
        status={variant}
        value={badgeCount}
        textStyle={{ fontSize: 18 }}
        badgeStyle={{ paddingVertical: 15, paddingHorizontal: 5, borderRadius: 30, }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Badge;
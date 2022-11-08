

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from './Icon';
import {sizes, spacing} from '../constants/theme';

//--Icons--//
const Hamburger = require("../assets/icons/Menu.png");
const Notification = require("../assets/icons/Notification.png");

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[container, {marginTop: insets.top + 20}]}>
      <Icon icon={Hamburger} onPress={() => {}} />
      <Text style={titleStyle}>{title}</Text>
      <Icon icon={Notification} onPress={() => {}} />
    </View>
  );
};


const container = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: spacing.l,
 
}
const titleStyle = {
  fontSize: sizes.h3,
  fontWeight: 'bold',
}

export default MainHeader;
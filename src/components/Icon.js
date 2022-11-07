import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Icon = ({onPress, icon, size = 32, style}) => {

  const image = (
    <Image
      source={icon}
      style={[{ width: size, height: size, resizeMode:"cover"}, style]} 
    />
  );

  if(onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>
  }
  return image;
}

export default Icon


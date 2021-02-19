import React from 'react';
import { View, Text } from 'react-native';
import {css} from './styles'

export default function Dot(props) {
 return (
   <View style={[css.container, {backgroundColor: props.color}]} >
       
   </View>
  );
}
import React from 'react';
import { View, Text } from 'react-native';
import {css} from './styles'

export default function SizeButton(props) {
 return (
   <View style={[css.container, {backgroundColor: props.bgColor || '#fff'}]}>
       <Text style={[css.text, {color: props.color || '#c9c'}]} >{props.children}</Text>
   </View>
  );
}
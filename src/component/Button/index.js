import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {css} from './styles';

export default function Button() {
 return (
   <View style={css.container} >
       <TouchableOpacity style={css.buttonContainer} >
           <Text style={css.textButtom} >COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}
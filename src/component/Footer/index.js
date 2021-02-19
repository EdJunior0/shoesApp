import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Shoes from '../Shoes';
import {css} from './styles';

export default function Footer() {
 return (
   <View>
       <Text style={css.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/1.png')} cost='R$199,90' >
                        Nike Air Max 90
                    </Shoes> 
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/3.png')} cost='R$299,00' >
                        Nike Mawerick
                    </Shoes> 
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/4.png')} cost='R$399,00' >
                        Nike Air Force 1
                    </Shoes> 
                </View>
            </ScrollView>
       </View>
   </View>
  );
}
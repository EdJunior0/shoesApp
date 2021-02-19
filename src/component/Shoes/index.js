import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {css} from './styles'

// import { Container } from './styles';

export default function Shoes(props){

    function filterDesc(desc){
        if(desc.length < 27){
            return desc
        }

        return `${desc.substring(0, 23)}...`;
    }

    return(
        <TouchableOpacity style={css.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={css.shoesImg}
            />

            <Text style={css.shoesText}>
                {filterDesc(props.children)}</Text>
            <View opacity={0.4}>
                <Text style={css.shoesText}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}
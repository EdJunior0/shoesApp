import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import {css} from './styles';
import Shoes from '../../component/Shoes'
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={css.container}>
            <View style={css.header}>
                <Image
                source={require('../../assets/banner.png')}
                style={css.image}
                />
                <View style={css.textContainer}>
                    <Text style={css.textHeader}>TÊNIS</Text>
                    <Text style={[css.textHeader, {color: '#CECECF'}]}>•</Text>
                    <Text style={[css.textHeader, {color: '#CECECF'}]}>MASCULINO</Text>
                    <TouchableOpacity style={css.buttonFilter}>
                        <MaterialIcons 
                        name='filter-list'
                        size={24}
                        color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={css.line}/>

            <ScrollView>
                <Text style={[css.textHeader, {marginTop: 4}]}>LANÇAMENTOS</Text>

                <View style={css.viewLanc}>
                    <Shoes img={require('../../assets/1.png')} cost='R$199,00' onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max 90
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost='R$250,00' onClick={() => navigation.navigate('Detail')}>
                        Nike Air Jordan 4
                    </Shoes>
                </View>

                <View style={css.viewLanc}>
                    <Shoes img={require('../../assets/3.png')} cost='R$299,00'>
                        Nike Mawerick
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost='R$399,00'>
                        Nike Air Force 1
                    </Shoes>
                </View>

                <View style={css.viewLanc}>
                    <Shoes img={require('../../assets/5.png')} cost='R$399,00'>
                        Nike Air Force Botinha
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost='R$199,00'>
                        Nike Asics
                    </Shoes>
                </View>
                

            </ScrollView>
        </View>
    );
}
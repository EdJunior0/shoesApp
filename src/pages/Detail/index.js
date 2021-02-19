import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {css} from './styles';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

// import { Container } from './styles';

export default function Detail({navigation}){

    navigation.setOptions({
        headerTitle: 'Nike Air Jordan 4'
    })

    return(
        <ScrollView style={css.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={css.image}
                resizeMode='cover'
            />

            <View>
                <View>
                    <Text style={[css.title, {marginTop: 5}]} >R$289,00</Text>
                </View>
                <View opacity={0.4} >
                    <Text style={[css.title, {fontSize: 30}]} >Nike Air Jordan 4</Text>
                </View>

                <View style={css.dotContainer}>
                    <Dot color='#2379f4' />
                    <Dot color='#fb6e53' />
                    <Dot color='#ddd' />
                    <Dot color='#000' />
                </View>

                <View style={{flexDirection: 'row', width: '100%'}} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <SizeButton bgColor='#17181a' color='#fff' >40</SizeButton>
                        <SizeButton>39</SizeButton>
                        <SizeButton>38</SizeButton>
                        <SizeButton>37</SizeButton>
                    </ScrollView>
                </View>

                <View style={css.textContent}>
                    <Text style={css.textTitle}>Nike Air Jordan 4</Text>
                    <Text style={css.textContent}>A marca Jordan se une mais uma vez ao famoso clube de futebol Paris Saint-Germain. Dessa vez, a adorada silhueta do Air Jordan 4 foi desenvolvida para o futebol.</Text>
                    <Text style={css.textList} >
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={css.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button/>

                <View style={css.line} />

                <Footer />

            </View>
        </ScrollView>
    );
}
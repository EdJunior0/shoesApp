import {StyleSheet} from 'react-native'

const css = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    textHeader: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    buttonFilter: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center'   
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 3
    },
    viewLanc:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    viewElement: {
        width: 70,
        height: 70,
        backgroundColor: 'red'
    },
});

export {css};
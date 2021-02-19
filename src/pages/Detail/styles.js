import {StyleSheet} from 'react-native'

const css = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        fontSize: 24,
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        lineHeight: 25,
        marginVertical: '2%'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25
    },
    line: {
        borderWidth: 2,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    },
});

export {css};
import { StyleSheet } from 'react-native';
import store from '../../redux/store';;
import mainStyles from '../mainStyles';

const state = store.getState();

const styles = StyleSheet.create({
    Selections: {
        width: '100%',
        height: mainStyles.SelectionsHeight,
        backgroundColor: mainStyles.NavbarBackgroundColor,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 35,
        paddingTop: 20
        // borderColor: '#8E8E8E',
        // borderWidth: 2,
        // borderRadius: 10
        // color: '#8E8E8E'
    },
    
    icons: {
        width: 60,
        height: 50,
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 30,
        // borderWidth: 1,
        // borderColor: '#000',
        color: mainStyles.IconsColor
    },
    icons_3: {
        width: 60,
        height: 50,
        paddingTop: 14,
        paddingLeft: 15,
        fontSize: 25,
        // borderWidth: 1,
        // borderColor: '#000',
        color: mainStyles.IconsColor
    },
    press: {
        width: 60,
        height: 50,
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 30,
        color: state.interface.night ? '#fff' : '#000'
    },
    press_3 : {
        width: 60,
        height: 50,
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 25,
        color: state.interface.night ? '#fff' : '#000'
    },

    text: {
        color: '#fff'
    }
})

export default styles;
import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const styles = StyleSheet.create({
	BottomTab: {
		width: '100%',
        backgroundColor: mainStyles.NavbarBackgroundColor,
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left: 0
	},

	Selections: {
        width: '80%',
        left: "0%",
        // bottom: 0,
        position: "relative",
        // height: mainStyles.SelectionsHeight,
        backgroundColor: mainStyles.NavbarBackgroundColor,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#8E8E8E',
        borderWidth: 2,
        // borderRadius: 10
        // color: '#8E8E8E'
    },

    icon: {
        width: 60,
        height: 50,
        paddingTop: 14,
        // paddingLeft: 15,
        fontSize: 25,
        borderWidth: 1,
        borderColor: '#000',
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
});

export default styles;
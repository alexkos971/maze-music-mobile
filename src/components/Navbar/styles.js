import { StyleSheet, Platform } from 'react-native';
import mainStyles from '../mainStyles';

const styles = StyleSheet.create({
    Navbar: {
        width: '100%',
        height: mainStyles.NavHeight,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        backgroundColor: mainStyles.NavbarBackgroundColor,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'space-between',
        top: 0,

        // borderBottomColor: '#ececec',
        // borderBottomWidth: 2
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,
    },
    dir: {
        color: mainStyles.NavbarTextColor,
        fontSize: 30,
        fontFamily: mainStyles.FontFamily,
        paddingLeft: 20,
        paddingTop: (Platform.OS == 'ios') ? 40 : 0,
        fontWeight: 'bold'
    },

    profile_wrap: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 0,

        height: mainStyles.NavHeight - 34,
        paddingHorizontal: 20,
        top: (Platform.OS == 'ios') ? 40: '25%',
    },
    profile_name: {
        fontSize: 20,
        fontFamily: mainStyles.FontFamily,
        position: "relative",
        marginEnd: 5
    },
    chevron: {
        fontSize: 20,
        // width: mainStyles.NavHeight / 2,
        // height: mainStyles.NavHeight / 2,
        position: 'relative'
    }
})

export default styles;
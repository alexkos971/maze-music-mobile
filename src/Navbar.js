import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ title, mainStyles, setNight, night }) => {

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
            // borderBottomWidth: 0.7
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
            paddingTop: 15,
            fontWeight: 'bold'
        },
        mode: {
            fontSize: 20,
            color: mainStyles.IconsColor,
            width: mainStyles.NavHeight / 2,
            height: mainStyles.NavHeight / 2,
            position: 'absolute',
            right: 5,
            bottom: 10,
            alignItems: 'center',
            paddingTop: 10,
            paddingLeft: 10,
            color: mainStyles.Mode
            // borderWidth: 1,
            // borderColor: '#000',
        }
    })

    return (
        <View style={styles.Navbar}>
            <Text style={styles.dir}>{title}</Text>
            <Icon name={!night ? 'ios-moon' : 'ios-sunny'} style={styles.mode} onPress={() => setNight(!night)}/>
        </View>
    )
}

export default Navbar;
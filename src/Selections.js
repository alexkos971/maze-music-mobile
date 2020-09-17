import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome5';
// import Home from '../assets/icons/home-solid.svg';


const Selections = ({ setPage, page, mainStyles, night }) => {

    const styles = StyleSheet.create({
        Selections: {
            width: '92%',
            height: mainStyles.SelectionsHeight,
            backgroundColor: mainStyles.NavbarBackgroundColor,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 10,
            // borderColor: '#8E8E8E',
            // borderWidth: .7,
            borderRadius: 10
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
            paddingTop: 10,
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
            color: night ? '#fff' : '#000'
        },
        press_3 : {
            width: 60,
            height: 50,
            paddingTop: 10,
            paddingLeft: 15,
            fontSize: 25,
            color: night ? '#fff' : '#000'
        },

        text: {
            color: '#fff'
        }
    });

    const icons = [
        {
            name: 'home',
            id: 1
        },
        {
            name: 'magnifying-glass',
            id: 2
        },
        {
            name: 'stream',
            id: 3
        }];

    const onPressItem = (id) => {
        setPage(id);
    }

    return (
        <View style={styles.Selections}>
            {icons.map( item => {
                return (
                    <TouchableHighlight key={item.id}>
                        {item.id === 3 ? <IconFA name={'stream'} style={item.id === page ? styles.press_3 : styles.icons_3 } onPress={() => onPressItem(item.id)}/>
                        : <Icon 
                            name={item.name} 
                            style={item.id === page ? styles.press : styles.icons } 
                            onPress={() => onPressItem(item.id)}/>}
                    </TouchableHighlight>
                );
            })}
        </View>
    )
}

export default Selections;
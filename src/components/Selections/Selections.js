import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { changeDir } from '../../redux/actions';

import Icon from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
// import Home from '../assets/icons/home-solid.svg';

const Selections = ({ dispatch, page }) => {

    const icons = [
        {
            name: 'Home',
            icon: 'home',
            id: 1,
        },
        {
            name: 'Search',
            icon: 'magnifying-glass',
            id: 2
        },
        {
            name: "Library",
            icon: 'stream',
            id: 3
        }];

    return (
        <View style={styles.Selections}>
            {icons.map( item => {
                return (
                    <TouchableOpacity key={item.id} onPress={() => dispatch(changeDir(item.name))}>
                        {item.id === 3 ? 
                        <IconFA 
                            name={'stream'} 
                            style={item.name === page ? styles.press_3 : styles.icons_3 }/>
                        : <Icon 
                            name={item.icon} 
                            style={item.name === page ? styles.press : styles.icons }/>}
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        page: state.directory.dir
    }
}

export default connect(mapStateToProps)(Selections);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setHeader, changeMode } from '../../redux/actions';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Navbar = ({ dispatch, title, header, night }) => {
    return (
        <View style={styles.Navbar}>
            <Text style={styles.dir} onPress={() => dispatch(changeMode(!night))}>{title}</Text>


            <TouchableOpacity style={styles.profile_wrap}  onPress={() => {
                dispatch(setHeader(!header))}}>
                    
                <Text style={styles.profile_name}>Alex Kos</Text>

                <Icon
                    name={`chevron-${header ? 'up' : 'down'}`} 
                    style={styles.chevron}/>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.directory.dir,
        header: state.interface.header,
        night: state.interface.night
    }
}

export default connect(mapStateToProps)(Navbar);
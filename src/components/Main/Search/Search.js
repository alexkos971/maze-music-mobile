import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

const Search = ({ songs }) => {

    const searchSong = (val) => {
        alert(val);
    }

    return (
        <View>
           <Text>Search Page</Text>
           <TextInput placeholder="Type something..." onEndEditing={(event) => searchSong(event.target.value)}/>
        </View>
    )
}

export default Search;
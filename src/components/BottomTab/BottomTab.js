import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { PanGestureHandler, State } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import { changeDir } from "../../redux/actions";


import Icon from "react-native-vector-icons/Entypo";
// import SvgUri from 'react-native-svg-uri';
import Home from "../../../assets/icons/home.svg"

import FullPlayer from "./FullPlayer/FullPlayer";
import Player from "./Player/Player";

import styles from "./styles.js";

const BottomTab = ({ dispatch, page }) => {
	const [full, setFull] = useState(false);

	const { height } = Dimensions.get("window");
	const { Value } = Animated;

	const TranslationY = new Animated(0);
	const velocityY = new Animated(0);
	// const state = new Animated(full)

	const gestureHandler = onGestureEvent({
		TranslationY,
		State, 
		velocityY
	})

	return (
		<View>

			<PanGestureHandler>
				<Animated.View>
					<Player style={{
						opacity: full ? 1 : 0
					}}/>
				</Animated.View>
			</PanGestureHandler>

			<FullPlayer style={{
				opacity: full ? 0 : 1
			}}/>

			<View style={styles.Selections}>
				<TouchableOpacity onPress={() => dispatch(changeDir("Home"))}>
				<Text>sdf</Text>
                        {/*<SvgUri svgXmlData={Home} style={'Home' === page ? styles.press : styles.icon }/>*/}
                </TouchableOpacity>
			
                <TouchableOpacity onPress={() => dispatch(changeDir("Search"))}>
                        <Icon name={"home"} style={'Search' === page ? styles.press : styles.icon }/>
                </TouchableOpacity>
			
				<TouchableOpacity onPress={() => dispatch(changeDir("Library"))}>
                        <Icon name={"home"} style={"Library" === page ? styles.press : styles.icon }/>
                </TouchableOpacity>
			
			</View>
		</View>
	);
}

const mapStateToProps = (state) => {
    return {
        artists: state.artists.recomendArtists,
        songs: state.songs.recomendSongs,
        song: state.songs.nowSong,
        page: state.directory.dir
    }
}

export default connect(mapStateToProps)(BottomTab);
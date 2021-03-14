import TrackPlayer from 'react-native-track-player';

export default async function trackPlayerServices () {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    TrackPlayer.addEventListener('playback-state', (state) => {
        console.log(state)
    })
}
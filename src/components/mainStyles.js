import store from '../redux/store';

const state = store.getState();

const mainStyles = {
    NavHeight: 90,
    SelectionsHeight: 70,
    MainBackgroundColor: state.interface.night ? '#292929' : '#FFF',
    NavbarBackgroundColor: state.interface.night ? '#151515' : '#fff',
    PlayerBackground: state.interface.night ? "#151515" : "#F4F6F8",
    IconsColor: "#8E8E8E",
    FontFamily: 'dmsans-bold',
    TextColor: state.interface.night ? '#8E8E8E' : '#000',
    TextPlayerColor: '#8E8E8E',
    TitleColor: state.interface.night ? '#fff' : '#454545',
    TextPinkColor: '#2BA6A2',
    // FontSizeReg: 'DMSans-Regular',
    // FontSizeBold: 'sans-serif',
    NavbarTextColor: state.interface.night ? '#8E8E8E' : '#000',
    Mode: state.interface.night ? '#fff': '#000'
}

export default mainStyles;
import { StyleSheet } from 'react-native';
import mainStyles from '../components/mainStyles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: mainStyles.MainBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26,
      // paddingBottom: 140 /* Player + Selections */
    },
    main: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: mainStyles.MainBackgroundColor,
      top: mainStyles.NavHeight,
      paddingLeft: 5
    },
    page: {
      width: '100%',
      height: '100%',
      paddingBottom: 140
    },
  })

  export default styles;
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    productContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    
    title: {
      fontSize: 40,
      fontWeight: '600',
      color: '#EAE8E5',
      textShadowColor: '#545352',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
    },
    
    subtitle: {
      fontSize: 16,
      color: '#EAE8E5',
      textShadowColor: '#545352',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
    },
    
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      position: 'absolute',
    
    },

    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',

    }

});

export default styles;
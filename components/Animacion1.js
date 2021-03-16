import React, { useState, useEffect} from 'react';
import { Text,  StyleSheet, Animated } from 'react-native';

const Animacion1 = () => {

    const [ animacion ] = useState(  new Animated.Value(0)  );
    
    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, // Valor a que llega
                duration: 500, // medio segundo
                useNativeDriver: true, // Add this line
            }
        ).start();
    }, []);

    return ( 
        <>
        <Animated.View
        style= {{
            opacity: animacion
        }}
        >
          <Text style={styles.textAnimacion} >Animacion1</Text>
        </Animated.View>
	    </>
    ); 
}

const styles = StyleSheet.create({
    textAnimacion: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 30
    }
  });
  

export default Animacion1
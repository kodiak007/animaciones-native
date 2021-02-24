import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';

const Animacion2 = () => {

    const [animacion] = useState( new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 50, //valor al que debe de llegar
                duration: 4000, //cantidad de tiempo para llegar
                useNativeDriver: true
            }
        ).start(); //iniciar la animacion
    }, [])

    return ( 
        <Animated.View
            style={[
                styles.caja,{
                    scaleX: animacion,
                    scaleY: animacion
                }
            ]}
        >
        </Animated.View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion2;
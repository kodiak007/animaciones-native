import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, Animated, View} from 'react-native';

const Animacion1 = () => {

    const [animacion] = useState( new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, //valor al que debe de llegar
                duration: 500, //cantidad de tiempo para llegar
                useNativeDriver: true
            }
        ).start(); //iniciar la animacion
    }, [])

    return ( 
        <Animated.View
            style={{
                opacity: animacion
            }}
        >
            <Text style={styles.texto} >Animacion 1</Text>
        </Animated.View>
     );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30,
        textAlign: 'center',
    }
})
 
export default Animacion1;
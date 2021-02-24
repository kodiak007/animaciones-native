
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';

const App = () => {
  return (
    <>
      <View style={styles.contenido} >
        <Animacion3 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido:{
    marginTop: 100,
  }
});

export default App;

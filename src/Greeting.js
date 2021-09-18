import React from "react";
import {
    Text, 
    View,
    StyleSheet
} from 'react-native';

const Greeting = (props) => {
    const { nome } = props;

    return (
        <View style={styles.container}>
            {nome.includes('Guilherme') ?
                <Text style={styles.texto}>Meu nome é {nome}</Text>
            : null}
            <Text style={styles.texto}>Pós-Graduação é no Desomplica!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        textAlign: 'center'
    },
    container: {
        flex: 3,
        justifyContent: 'center'
    }
});

export default Greeting;
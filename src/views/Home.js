import React from 'react'
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native'

export default function Home(props) {
    const { navigation } = props

    const [num, SetNum] = React.useState('');
    const [valor, Setvalor] = React.useState('');
    const [Consumo, SetConsumo] = React.useState('');
    
    const calcular = () => {
        var consu = num / valor
        var valores = {
            cons: consu,
        }
        
        navigation.navigate("Media", valores)
    }
    
        
    return (
        <View>
            <TextInput
        style={styles.input}
        onChangeText={SetNum}
        value={num}
        placeholder="Digite a Quantidade de KM:"
        keyboardType="numeric"
      />

        <TextInput
            style={styles.input}
            onChangeText={Setvalor}
            value={valor}
            placeholder="Digite a Quantidade de Litros Consumidos:"
            keyboardType="numeric"
      />
        <Button
        title="Calcule"
        onPress={calcular}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 20,
      },
      botao:{
        height: 40,
        padding: 20,
      },
      
})

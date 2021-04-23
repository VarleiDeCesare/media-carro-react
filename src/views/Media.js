import React, { useLayoutEffect } from 'react';
import { Text, View, } from 'react-native'

export default function Media(props) {
    
    const { navigation } = props
    const val = props.route.params

    const [Nota, SetNota] = React.useState('');

    var autonomia = val.cons
    const calcularNota = () => {
        if (autonomia > 12){
            SetNota('A')
        }
        else if(autonomia > 10 && autonomia <= 12){
            SetNota('B')
        }
        else if(autonomia > 8 && autonomia <= 10){
            SetNota('C')
        }
        else if(autonomia > 4 && autonomia <= 8){
            SetNota('D')
        }
        else{
            SetNota('E')
        }
    }
    useLayoutEffect(() => {
        calcularNota()
      }, [])
    return (
        <View>
            <Text>Consumo: {autonomia}</Text>
            <Text>Nota: {Nota}</Text>
        </View>
    )
}

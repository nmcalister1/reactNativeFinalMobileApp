import * as React from 'react'
import { Text, View} from 'react-native';

export function About({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 15}}>About Screen</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Version: <Text style={{fontWeight: 'normal'}}>1.0</Text></Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Author: <Text style={{fontWeight: 'normal'}}>Noah McAlister</Text></Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Last Updated: <Text style={{fontWeight: 'normal'}}>October 4, 2023</Text></Text>
        </View>
    )
}
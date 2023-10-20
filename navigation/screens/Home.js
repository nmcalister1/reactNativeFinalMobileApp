import * as React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native';

export function Home({navigation}){
    const [image, setImage] = React.useState({uri: 'https://picsum.photos/200'})
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => alert("This is the Home Screen!")} style={{ fontSize: 26, fontWeight: "bold"}}>Home Screen</Text>
            <Image style={styles.logo} source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo : {
        width: 200, 
        height: 200,
    }
})
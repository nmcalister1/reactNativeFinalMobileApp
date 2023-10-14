import * as React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native';

export function SwitchComponent({isSubscribed, setIsSubscribed}){
    return (
        <View style={styles.switchContainer}>
            <Text style={styles.label}>Subscribe to the Newsletter</Text>
            <Switch value={isSubscribed} onValueChange={() => setIsSubscribed((previousState) => !previousState)} trackColor={{ false: "#767577", true: "lightblue"}} thumbColor={"#f4f3f4"} />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
      fontSize: 16, 
      marginBottom: 5, 
      fontWeight: "bold"
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10
    },
  });
  
  
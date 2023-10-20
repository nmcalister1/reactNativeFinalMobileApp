import * as React from 'react'
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SwitchComponent } from '../../SwitchComponent';
import Animated, { BounceIn, BounceOut, useSharedValue, withSpring } from 'react-native-reanimated';

export function RegisterUser({navigation}){
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [bio, setBio] = React.useState("")
    const [errors, setErrors] = React.useState({})
    const [success, setSuccess] = React.useState(false)
    const [isSubscribed, setIsSubscribed] = React.useState(false)

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const phoneRegex = /^(?:\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/

    const validateForm = () => {
        let formErrors = {}

        if (!username) formErrors.username = "Username is required"
        
        if (!email){
          formErrors.email = "Email is required"
        } else if (!emailRegex.test(email)){
          formErrors.email = "Must be a valid email"
        }
        if (!phone){
          formErrors.phone = "Phone Number is required"
        } else if (!phoneRegex.test(phone)){
          formErrors.phone = "Must be a valid phone number"
        }
        if (!password) formErrors.password = "Password is required"
        if (!confirmPassword){
          formErrors.confirmPassword = "Confirm Password is required"
        } else if (password != confirmPassword){
          formErrors.confirmPassword = "Passwords must match"
        }

        setErrors(formErrors)

        return Object.keys(formErrors).length === 0
    }

    const backgroundColor = useSharedValue("f5f5f5")

    function handleSubmit(){
        if(validateForm()){
        console.log("Submitted", username, email, phone, password, confirmPassword, bio)
        setSuccess(true)
        setUsername("")
        setEmail("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        setBio("")
        setErrors({})
        backgroundColor.value = 'green'
        } else {
        setSuccess(false)
        }
    }
    
    
    return (
          <ScrollView style={{backgroundColor: "#D3D3D3"}}>
          <Animated.View style={{flex: 1, backgroundColor}} entering={BounceIn} exiting={BounceOut} >
          <KeyboardAvoidingView style={styles.container}>
          
              <Text style={{ fontSize: 26, fontWeight: "bold", marginVertical: 10 }}>Register User Form</Text>
              <View style={styles.form}>
            
              <Text style={styles.label}>Full Name</Text>
              <TextInput placeholder='John Doe' style={styles.input} value={username} onChangeText={setUsername} />
              {
                  errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
              }
  
              <Text style={styles.label}>Email</Text>
              <TextInput placeholder='email@example.com' style={styles.input} value={email} onChangeText={setEmail} />
              {
                  errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null
              }
  
              <Text style={styles.label}>Phone Number</Text>
              <TextInput placeholder='777-777-7777' style={styles.input} value={phone} onChangeText={setPhone} />
              {
                  errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null
              }
  
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setPassword} />
              {
                  errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
              }
  
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput style={styles.input} placeholder='Confirm your password' secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
              {
                  errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null
              }
  
              <Text style={styles.label}>Bio</Text>
              <TextInput style={[styles.input, styles.multilineText]} placeholder='Optional: Enter fun bio info here' secureTextEntry value={bio} onChangeText={setBio} multiline />
              
              <SwitchComponent isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} />
  
              <Button title='Login' onPress={handleSubmit} color="#DD4124" />
              {
                  success ? <Text style={styles.success}>Successful Register!</Text> : null
              }
              <Text></Text>
              <Text></Text>
              <Text></Text>
    
              </View>
              
          </KeyboardAvoidingView>
          </Animated.View>
        </ScrollView>
        
     
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingBottom: 15
    },
    form: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4, 
      elevation: 5,
    },
    label: {
      fontSize: 16, 
      marginBottom: 5, 
      fontWeight: "bold"
    },
    input: {
      height: 40, 
      borderColor: "#ddd",
      borderWidth: 1, 
      marginBottom: 15, 
      padding: 10, 
      borderRadius: 5,
    },
    errorText: {
      color: "red",
      marginBottom: 10
    },
    success: {
      fontSize: 30, 
      fontWeight: "bold",
      color: "green",
      marginTop: 20
    },
    multilineText: {
      minHeight: 100,
      textAlignVertical: "top"
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10
    },
  });
  
  
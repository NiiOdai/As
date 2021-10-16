import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Login = (navigation) => {
    return (

      <View style={styles.container}>
     
  <Image
  style={{
    width: 151,
    height: 151,
   borderTopLeftRadius: 20,
   borderBottomLeftRadius: 20,
   borderTopRightRadius: 20,
   borderBottomRightRadius: 20,
   transform:[{rotate:'45deg'}],
   marginBottom:50,
  }}
  source={{
    uri:
      'https://images.unsplash.com/photo-1481988535861-271139e06469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80'  }}
/>
  <Text style={styles.red}>Welcome to</Text>
        <Text style={styles.red}>Power Bike Shop</Text>
     
        <TouchableOpacity style={styles.button}
        onPress= {() =>{
         navigation.navigate("Home")
        }}
        > 
        
        <AntDesign name="google" size={24} color="black" />
           
            <Text style={{marginLeft:10}}>Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button1}>
      <AntDesign name="apple1" size={24} color="white"/> 
       <Text style = {styles.white}>Login with Apple</Text>
       </TouchableOpacity>
       <TouchableOpacity>
       <Text style={{marginTop:10, color:'grey'}}>Not a member? <Text style={{color:'orange',fontWeight:'700'}} >Sign Up</Text></Text>
       </TouchableOpacity>
       
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
  flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  red: {
    color: 'black',
    fontSize:25,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    // alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius:10,
    paddingHorizontal: 60,
    marginBottom: 10,
    marginTop:5,
    marginTop:20,
  },
   button1: {
     flexDirection:'row',
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius:10,
    paddingHorizontal:60,
    
   
  },
  white:{
      color:'white',
      marginTop:10,
      marginLeft: 10
  },
});

export default Login;
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

const Home = () => {
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
        <Text style={[styles.red, styles.bigBlue]}>Power Bike Shop</Text>
     
        <TouchableOpacity style={styles.button}>
            <Text>Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}> 
       <Text style = {styles.white}>Login with Apple</Text>
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
  bigBlue: {
    color: 'black',    
    fontSize: 30,
  },
  red: {
    color: 'black',
    fontSize:25,
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius:10,
    paddingHorizontal: 60,
  },
   button1: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius:10,
    paddingHorizontal: 60,
    color:'white',
  },
  white:{
      color:'white',
      marginTop:'10',
  }
});

export default Home;
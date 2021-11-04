import React from 'react';
import { View, ScrollView, SafeAreaView, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";
import {useState} from 'react'

export default function Cart({navigation}) {
 
  const[count,setCount] = useState(0);
    return <SafeAreaView  style={{ backgroundColor: 'white', flex: 1, }}>
       <View
              style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop:40,
              }}
          >
             
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft:10 }}>
              
              <TouchableOpacity
        onPress= {() =>{
         navigation.navigate("Home")
        }}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                  </TouchableOpacity>      
                 
             
       

              <Text style={{paddingLeft:140, fontSize:20}}>Cart List</Text>
              </View>
          </View>
        
        <ScrollView style={{ backgroundColor: 'white', flex: 1, marginLeft: 30, marginRight: 30 }}>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1481988535861-271139e06469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80' }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20 }}>Pinarello Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Mountain Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>17000</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text 
                         onPress={() => {
                            setCount(count - 1)
                        }}
                          style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>{count}</Text>
                        <Text onPress={() => {
                            setCount(count + 1)
                        }}
                        style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1481988535861-271139e06469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80'  }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: '900' }}>Brompton Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Road Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>17000</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>1</Text>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>

            <View style={{ paddingTop: 20, display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRadius: 20 }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1481988535861-271139e06469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80'  }}
                        style={{ height: 100, width: 100, borderRadius: 20 }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginTop: 5, marginRight: 20 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 20 }}>Pinarello Bike</Text>
                    <Text style={{ paddingBottom: 10, color: 'grey' }}>Urban Bike</Text>
                    <Text>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ fontWeight: 'bold' }}>1,250</Text>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                        <AntDesign name="delete" size={15} color="orange" style={{ marginLeft: 40 }} />
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20 }}>
                    <Text 
                           
                            style={{                       
                            height: 20,
                            width: 20,
                            backgroundColor: 'black',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                        }}>-</Text>
                        <Text>1</Text>
                        <Text style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'orange',
                            borderRadius: 500,
                            color: 'white',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: 5,
                            marginLeft: 5
                        }}>+</Text>
                    </View>
                </View>

            </View>




            <View style ={{ marginTop: 30, 
                backgroundColor: '#e3e3e3',
                 padding: 20,
                 borderRadius: 20,
                 paddingBottom: 20,
                 paddingTop: 20
                 }}>
                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20}}>
                    <Text style={{color:'grey',fontSize:20}}>
                        Subtotal
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange',fontSize:20}}>$</Text>
                        <Text style={{ fontWeight: 'bold' ,fontSize:20}}>3,400.00</Text>
                    </Text>
                </View>

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between', paddingBottom: 20}}>
                    <Text style={{color:'grey',fontSize:20}}>
                        Shipping fee
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange',fontSize:20 }}>$</Text>
                        <Text style={{ fontWeight: 'bold',fontSize:20}}>100.00</Text>
                    </Text>
                </View>

                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        
                    }}
                />

                <View style={{display:'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style = {{fontWeight: 'bold',fontSize:20}}>
                        Total
                    </Text>
                    <Text>
                        <Text style={{ color: 'orange',fontSize:20 }}>$</Text>
                        <Text style={{ fontWeight: 'bold',fontSize:20 }}>3,500</Text>
                    </Text>                  
                </View>
            </View>
            <TouchableOpacity>
        <View style ={{marginTop: 20,alignItems:'center',margin:30,
                backgroundColor: 'orange',borderRadius: 10,paddingBottom: 15,paddingTop: 15,paddingHorizontal:2,justifyContent:'center'} }>
            <Text style={{color:'white',fontSize:20,alignItems:"center"}}>Proceed to Checkout</Text></View>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>

}
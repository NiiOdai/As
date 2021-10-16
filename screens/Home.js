import React from "react";
// import { View ,Text,Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";
import { View, Text, Span, Button, Image, Pressable } from 'react-native';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}) {
    const powerbikes = [
        { id: 1, price: 1000, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 2, price: 1000, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 3, price: 1000, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 4, price: 1000, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }, 
        { id: 5, price: 1000, img: 'https://unsplash.com/photos/yjAFnkLtKY0/download?force=true&w=640' }
    ];
  return (  
      
      <View  style={{backgroundColor: "white"}}>
        <View
          style={{
           
            
              paddingTop: 55,
              paddingHorizontal: 20,
          }}
      >
          <View
              style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
              }}
          >
              <Ionicons name="ios-menu-outline" size={24} color="black" />
              <FontAwesome name="motorcycle" size={24} color="black" />
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <AntDesign name="search1" size={20} color="black" style={{ paddingRight: 15 }} />
                 <TouchableOpacity
                  onPress= {() =>{
                    navigation.navigate("Cart")
                   }}>
                  <Ionicons name="notifications-outline" size={20} color="black" style={{ paddingRight: 10 }} />
                  </TouchableOpacity>
              </View>
          </View>
          </View>
         <Text style={{ fontSize: 15 ,flexDirection:'row', marginTop:15}}>
                    The World's
                
                <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold'}}> Best Bike</Text>  </Text>
                <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold', fontSize:20 }}>Categories</Text>
                <ScrollView horizontal={true}>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10,paddingHorizontal:30, borderRadius: 5, marginRight: 15 }}>
                    <Text> All </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10,paddingHorizontal:30, borderRadius: 5, marginRight: 15 }}>
                    <Text> RoadBike </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10,paddingHorizontal:30, borderRadius: 5, marginRight: 15 }}>
                    <Text> Mountain </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5,paddingHorizontal:20, marginRight: 15 }}>
                    <Text> UrbanMotor </Text>
                </TouchableOpacity>
               
            </ScrollView>
            <SafeAreaView style={{ backgroundColor: 'white',height:1000}}>
            </SafeAreaView>
    
      </View>
      
      
     
     

  );
}
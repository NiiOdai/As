import React from "react";
// import { View ,Text,Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign,MaterialIcons} from "@expo/vector-icons";
import { View, Text, Span, Button, Image, Pressable,StyleSheet } from 'react-native';
import { ScrollView,TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}) {

  return (  
      
      <><View style={{ backgroundColor: "white"}}>
          <View
              style={{
                  paddingTop: 55,
                  paddingHorizontal: 20                  
              }}>
              <View
                  style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                  }}>
                  <Ionicons name="ios-menu-outline" size={24} color="black" />
                  <TouchableOpacity
                          onPress={() => {
                              navigation.navigate("Login");
                          } }>
                  <FontAwesome name="motorcycle" size={24} color="black" /></TouchableOpacity>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <AntDesign name="search1" size={20} color="black" style={{ paddingRight: 15 }} />
                      <TouchableOpacity
                          onPress={() => {
                              navigation.navigate("Cart");
                          } }>
                          <Ionicons name="notifications-outline" size={20} color="black" style={{ paddingRight: 10 }} />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          <Text style={{ fontSize: 15, flexDirection: 'row', marginTop: 15,marginLeft:20}}>
              The World's                
              <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold',marginRight:20 }}> Best Bike</Text>  </Text>
          <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: 'bold', fontSize: 20,marginLeft:20 }}>Categories</Text>
          <ScrollView horizontal={true}>
              <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, paddingHorizontal: 30, borderRadius: 5, marginRight: 15 }}>
                  <Text> All </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, paddingHorizontal: 30, borderRadius: 5, marginRight: 15 }}>
                  <Text> RoadBike </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, paddingHorizontal: 30, borderRadius: 5, marginRight: 15 }}>
                  <Text> Mountain </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#e3e3e3', padding: 10, borderRadius: 5, paddingHorizontal: 20, marginRight: 15 }}>
                  <Text> UrbanMotor </Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
      <ScrollView vertical={true}>
      <View style ={styles.main}>
      <View style={styles.carting}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
                </TouchableOpacity>
                <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
            </View>
      <View style={styles.box}>
      
      <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
            
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
             </TouchableOpacity>
             <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
      </View>
      </View>
      
      <View style={styles.carting}>
        <View style={styles.box}>
            <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
             </TouchableOpacity>
             <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
        </View>
      
        <View style={styles.box}>
            <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
            </TouchableOpacity>
            <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
        </View>      
      </View>
      <View style={styles.carting}>
        <View style={styles.box}>
            <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
             </TouchableOpacity>
             <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
        </View>
      
        <View style={styles.box}>
            <TouchableOpacity onPress={() => {navigation.navigate("Cart");} }>
                     <View style={{marginLeft:140,marginTop:3}}>
                            <MaterialIcons name="favorite-border" size={24} color="black"/>
                     </View>
            </TouchableOpacity>
            <Image style={{height:200,width:185,alignItems:'center'}}
                    source={require('../assets/bike.png')}
                />
        </View>      
      </View>
</View></ScrollView>
</>
                         
                     
      
      
      
     
     

  );
}

const styles = StyleSheet.create({
carting:{
        height:90,
        marginBottom:180,      
        flexDirection:'row',
        justifyContent:'space-around',   
    },
    box:{
        height:250,
        width:185,
        backgroundColor:"#e3e3e3",
        margin:10,
        borderRadius:10
        
    },
    main:{
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        paddingTop:4
    }
})
  
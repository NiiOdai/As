import React from 'react'
import {View, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const Home = () => {
    return(
        <View style={{marginTop:50}}>
            <Ionicons name="menu" size={34} color="black"  />
            <Text>The world's <Text style={{color:'orange'}}>Best Bike</Text></Text>
        </View>
    )
}
export default Home;
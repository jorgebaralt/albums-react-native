//import library to help create a compornent
import React from 'react';
import {Text,AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create a component
const App = ()=>{
    return(
        <View style={{flex:1}}>
            <Header headerText="Albums"/>
            <AlbumList/>
        </View>
    )
};
//render that component to the device
AppRegistry.registerComponent('albums',()=>App);
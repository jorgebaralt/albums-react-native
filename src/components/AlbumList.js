import React, {Component} from 'react'
import {View,Text,ListView, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    //set state first empty
    state = {albums: [] };

    //fill the state from api, before rendering
    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response)=>this.setState({albums: response.data}));
    }

    renderAlbums(){
        const {albums} = this.state;
        return albums.map((album)=>{
            return (
                <View key={album.title}>
                    <AlbumDetail album={album} />
                </View>)
        });
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    };
}

export default AlbumList;
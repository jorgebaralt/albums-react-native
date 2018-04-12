import React from 'react'
import { Text, View,Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail= ({album})=>{
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: album.thumbnail_image}} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri : album.image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(album.url) }>
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    )
};

const styles={
    thumbnailStyle:{
        height:50,
        width:50
    },
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null

    }

};
export default AlbumDetail;
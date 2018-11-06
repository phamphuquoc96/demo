import React from 'react';
import {View,Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//create component
const AlbumDetail = ({ album_from_albumlist }) => {
    const { title, artist,  thumbnail_image, image} = album_from_albumlist;
    const { headerContentStyle,
        thumbnailStyle ,
        thumbnailContainerStyle,
        imageStyle,
        headerTextStyle} = styles;
return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    style = {thumbnailStyle}
                    source={{ uri:  thumbnail_image}} />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image
                style={imageStyle}
            source = {{uri: image}}
            />
        </CardSection>
        <CardSection>
            <Button onPress ={() => console.log(title)}/>
        </CardSection>
    </Card>
);
};

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginRight:10
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        height:300,
        widget:null,
        flex:1

    }
}

//Export
export default AlbumDetail;

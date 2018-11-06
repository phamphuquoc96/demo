import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//create componenet

const Button = ({onPress}) => {
    const {buttonStyle,textStyle} = styles;
    return(
        <TouchableOpacity
            onPress = {onPress}
        style={buttonStyle}>
            <Text
            style={textStyle}>Play This Song</Text>
        </TouchableOpacity>
    );
};

const styles={
    textStyle:{
      alignSelf:'center',
      color:'#007aff',
      fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderColor:'#007aff',
        borderRadius:5,
        borderWidth:1,
        marginRight:5,
        marginLeft:5
    }
}

//export
export default Button;
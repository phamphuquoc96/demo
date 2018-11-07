import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumsDetail';
import Spinner from './Spinner';

//create component
class AlbumList extends Component {

    //
    state = { albums: [],  loading:false};

    componentWillMount(){
        this.setState({loading:true});
        console.log('componentWillMount in albumlist');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data,loading:false}));
    };


    renderAlbums(){
        if(this.state.loading){
                return <Spinner size={'large'}/>;
        }

       return this.state.albums.map(album_atList_renderAlbum => <AlbumDetail key={album_atList_renderAlbum.title}  album_from_albumlist= {album_atList_renderAlbum}/>);
    }
   render(){
       console.log(this.state);
       return (
           <ScrollView>
               <View>
                   {this.renderAlbums()}
               </View>
           </ScrollView>
       );
   };
};

//return

export default AlbumList;
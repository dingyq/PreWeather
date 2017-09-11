/**
 * Created by yongqiang on 2017/6/18.
 */

import NetWork from '../common/network';
import ServiceUrl from '../common/serviceurl'
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';



var ForRightScene = React.createClass({
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#FFF1E8'}]}>
                <Text>You came here from the "right" button!</Text>
            </View>
        );
    }
});

export default class DDFilmDetailModule extends Component {
    state = {
        id: this.props.filmId,
        title: '',
        originalTitle: '',
        aka: [],
        images: {},
        year: '',
        countries: [],
        genres: [],
        casts: [],
        directors: [],
        summary: '',
        rating: {},
        ratingsCount: '',
        wishCount: '',
        collectCount: '',
        commentsCount: '',
        ratingsCount: '',
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        NetWork.getMovieDetail(this.props.filmId, (data)=>{
                console.log(data);
                this.setState({
                    id: data['id'],
                    title: data['title'],
                    originalTitle: data['original_title'],
                    aka: data['aka'],
                    images: data['images'],
                    year: data['year'],
                    countries: data['countries'],
                    genres: data['genres'],
                    casts: data['casts'],
                    directors: data['directors'],
                    summary: data['summary'],
                    rating: data['rating'],
                    ratingsCount: data['ratings_count'],
                    wishCount: data['wish_count'],
                    collectCount: data['collect_count'],
                    commentsCount: data['comments_count'],
                    ratingsCount: data['ratings_count'],
                });
            },
            (err)=>{

            });
    }

    componentDidUpdate() {
        // alert(this.props.filmId)
    }

    render() {
        var akaStr = '';
        for (var key in this.state.aka) {
            akaStr += (this.state.aka[key] + '、');
        }
        akaStr = akaStr.substring(0, akaStr.length - 1);

        var countriesStr = '';
        for (var key in this.state.countries) {
            countriesStr += (this.state.countries[key] + '、');
        }
        countriesStr = countriesStr.substring(0, countriesStr.length - 1);

        var genresStr = '';
        for (var key in this.state.genres) {
            genresStr += (this.state.genres[key] + '、');
        }
        genresStr = genresStr.substring(0, genresStr.length - 1);

        var directorsStr ='';
        for (var key in this.state.directors) {
            directorsStr += (this.state.directors[key].name + '、');
        }
        directorsStr = directorsStr.substring(0, directorsStr.length - 1);

        var castsStr = '';
        for (var key in this.state.casts) {
            castsStr += (this.state.casts[key].name + '、');
        }
        castsStr = castsStr.substring(0, castsStr.length - 1);

        return (
            <ScrollView style={{flex: 1}}>
                <View style={{flexDirection:'row', alignItems: 'flex-start'}}>
                    <Image source={{uri: this.state.images.small}} style={{marginLeft:10, marginTop:5, width: 65, height: 100}}/>
                    <View style={{marginLeft:10, marginTop:5, flexDirection:'column', alignItems: 'flex-start'}}>
                        <View style={{flexDirection:'row', alignItems: 'flex-start'}}>
                            <Text style={{color:'#FF0000'}}>{this.state.rating.average}分</Text>
                            <Text style={{marginLeft:15}}>{this.state.ratingsCount}人评分</Text>
                        </View>
                        <Text style={{marginTop:5}}>原名：{this.state.originalTitle}</Text>
                        <View style={{marginTop:5, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Text style={{}}>{countriesStr}</Text>
                            <Text style={{marginLeft: 5}}>({this.state.year}年)</Text>
                        </View>

                        <Text style={{marginTop:5}}>{genresStr}</Text>
                        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                            <Text style={{marginTop:5}}>别名：</Text>
                            <Text style={{marginTop:5, width:230}}>{akaStr}</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                            <Text style={{marginTop:5}}>导演：</Text>
                            <Text style={{marginTop:5, width:230}}>{directorsStr}</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                            <Text style={{marginTop:5}}>主演：</Text>
                            <Text style={{marginTop:5, width:230}}>{castsStr}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{marginLeft: 5, marginRight: 5}}>{this.state.summary}</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{marginLeft: 5}}>导演：</Text>
                    <View style={{marginLeft: 5, marginRight: 5, marginTop: 5, flexDirection: 'row', justifyContent:'space-around'}}>
                        {this.state.directors.map((item, index) => {
                            return (<View key={index} style={{ alignItems: 'center'}}>
                                <Image source={{uri: item.avatars.small}} style={{width: 70, height: 100}}/>
                                <Text style={{fontSize: 12}}>{item.name}</Text>
                            </View>)
                        })}
                    </View>
                </View>

                <View style={{marginTop: 10}}>
                    <Text style={{marginLeft: 5}}>主演：</Text>
                    <ScrollView style={{marginLeft: 5, marginRight: 5, marginTop: 5}}
                        horizontal={true}
                    >
                        {this.state.casts.map((item, index) => {
                            return (<View key={index} style={{marginRight: 5, alignItems: 'center'}}>
                                <Image source={{uri: item.avatars.small}} style={{width: 70, height: 100}}/>
                                <Text style={{fontSize: 12}}>{item.name}</Text>
                            </View>)
                        })}
                    </ScrollView>
                </View>


                {/*<Text>{this.props.filmId}</Text>*/}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    movieTop250: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        // backgroundColor: '#FF0000'
    },

    movieItem: {
        // backgroundColor: '#FFFF00',
    },

    borderLine: {
        marginTop:10,
        height: 1,
        backgroundColor: '#F0F0F0',
    }
});
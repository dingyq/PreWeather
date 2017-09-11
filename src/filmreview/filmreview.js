/**
 * Created by yongqiang on 2017/6/17.
 */


import NetWork from '../common/network';
import DDFilmDetailModule from './filmdetailmodule'
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

export default class DDFilmReview extends Component {

    static defaultProps = {
        title: 'MovieTop250',
        refreshing: false,
        loading: false,
        startIndex:0,
        pageCount:20,
        movieList: [],
    }

    state = {
        title: 'MovieTop250',
        refreshing: false,
        loading: false,
        startIndex:0,
        nextStartIndex:0,
        movieList: [],
        loadOver: false,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._makeRemoteRequest();
    }

    render() {
        return (
            <View style={[styles.movieTop250, {flex: 1}]}>
                {/*<View style={[styles.movieTop250]}>*/}
                    <FlatList
                        style={{}}
                        // horizontal={true}
                        data={this.state.movieList}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderMovieItem}

                        ItemSeparatorComponent={this._renderSeparator}
                        // ListHeaderComponent={this._renderHeader}
                        // onRefresh={this._handleRefresh}
                        // refreshing={this.state.refreshing}
                        ListFooterComponent={this._renderFooter}
                        onEndReached={this._handleLoadMore}
                        onEndReachedThreshold={2}
                    />
                {/*</View>*/}

            </View>
        )
    }

    _keyExtractor = (item, index) => (item.id);

    _renderMovieItem = ({item}) => (
        <MovieDetailItem
            style={styles.movieItem}
            id={item.id}
            onPressItem={this._onPressMovieItem}
            images={item.images}
            title={item.title}
            originalTitle={item.original_title}
            rating={item.rating}
            year={item.year}
            genres={item.genres}
            directors={item.directors}
            casts={item.casts}
        />
    );

    _onPressMovieItem = (id: string) => {
        var title = '';
        for (var key in this.state.movieList) {
            if (this.state.movieList[key].id == id) {
                title = this.state.movieList[key].title;
                break;
            }
        }
        this.props.navigator.push({
            title: title,
            component: DDFilmDetailModule,
            // leftButtonTitle: 'Custom Left',
            onLeftButtonPress: () => this.props.navigator.pop(),
            // rightButtonIcon: require('image!NavBarButtonPlus'),
            passProps: {
                filmId: id,
            }
        })
        console.log('_onPressMovieItem')
    }

    _renderSeparator = () => {
        return (
            <View style={{height: 1, backgroundColor: "#CED0CE"}} />
        );
    }

    _renderHeader = () => {
        return <View style={{height: 30, backgroundColor: '#FFFF00'}}/>;
    }

    _renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: "#CED0CE"}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    _handleRefresh = () => {
        if (this.state.refreshing) {
            return;
        }
        console.log("_handleRefresh ");
        this.setState({
                startIndex: 0,
                refreshing: true
            }, () => {
                this._makeRemoteRequest();
            }
        );
    }

    _handleLoadMore = () => {
        if (this.state.loadOver) {
            return;
        }
        if (this.state.loading) {
            return;
        }
        this.setState({
                startIndex: this.state.nextStartIndex,
            }, () => {
                this._makeRemoteRequest();
            }
        );
    }

    _makeRemoteRequest = () => {
        if (this.state.loadOver) {
            return;
        }
        if (this.state.loading) {
            return;
        }
        this.setState({ loading: true });
        NetWork.getMovieTop250({start:this.state.startIndex, count:this.props.pageCount}, (data)=>{
            this.setState({
                refreshing: false,
                loading: false,
                startIndex:data['start'],
                nextStartIndex:data['start']+data['count'],
                movieList:(this.state.startIndex === 0 ? data['subjects'] : [...this.state.movieList, ...data['subjects']]),
            });
            this.setState({
                loadOver:data['total']<this.state.nextStartIndex,
            });
        }, (err)=>{
            this.setState({loading: false });
            alert(err);
        })
    }
}

class MovieDetailItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    }

    render() {
        var genresStr = '';
        for (var key in this.props.genres) {
            genresStr += (this.props.genres[key] + '、');
        }
        genresStr = genresStr.substring(0, genresStr.length - 1);

        var directorsStr ='';
        for (var key in this.props.directors) {
            directorsStr += (this.props.directors[key].name + '、');
        }
        directorsStr = directorsStr.substring(0, directorsStr.length - 1);

        var castsStr = '';
        for (var key in this.props.casts) {
            castsStr += (this.props.casts[key].name + '、');
        }
        castsStr = castsStr.substring(0, castsStr.length - 1);

        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={[this.props.style, {marginBottom:10}]}>
                    <Text style={{marginLeft:10, marginTop:10}}>{this.props.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: "flex-start"}}>
                        <Image source={{uri: this.props.images.small}} style={{marginLeft:10, marginTop:5, width: 65, height: 100}}/>
                        <View style={{marginLeft:10}}>
                            <Text style={{marginTop:5}}>原名：{this.props.originalTitle}</Text>
                            <Text style={{marginTop:5}}>评分：{this.props.rating.average}</Text>
                            <Text style={{marginTop:5}}>年份：{this.props.year}</Text>
                            <Text style={{marginTop:5}}>类型：{genresStr}</Text>
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
                </View>
            </TouchableOpacity>)
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
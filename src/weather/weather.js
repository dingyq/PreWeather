/**
 * Created by yongqiang on 2017/5/22.
 */

import NetWork from './../common/network';
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default class DDWeather extends Component {

    static defaultProps = {
        title: 'DDWeather',
        currentWeather: 'test',
        todayWeather: '',
        futureWeather: '',
        data: ''
    }

    state = {
        title: 'DDWeather',
        currentWeather: 'test',
        todayWeather: '',
        futureWeather: '',
        data: ''
    }

    // getInitialState() {
    //
    // }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // NetWork.getBook({count: 10, q: '三体'}, (data) => {
        //     console.log(data);
        //     this.setState({
        //         data: data
        //     });
        // }, (err) => {
        //     alert(err);
        // });

        NetWork.getWeather({'cityname': '深圳'}, (data) => {
            console.log(data);
            if (data['error_code'] == 0) {
                this.setState({
                    currentWeather: data['result']['sk'],
                    todayWeather: data['result']['today'],
                    futureWeather: data['result']['future'],
                });
            }
        }, (err) => {
            alert(err);
        })
    }

    render() {
        return (
            <View>
                <View style={styles.currentWeatherView}>
                    <View>
                        <Text style={[styles.tempText, {backgroundColor: '#00FFFF'}]}>{this.state.currentWeather['temp']}</Text>
                    </View>
                    <View style={{height:40, backgroundColor:'#00FF00', flexDirection: 'row', alignItems: 'center'}}>
                        <CurrentWeatherDetailView source={require('./../../res/images/icon_1.png')} title={this.state.currentWeather['wind_direction']}/>
                        <CurrentWeatherDetailView title={this.state.currentWeather['wind_strength']}/>
                        <CurrentWeatherDetailView title={this.state.currentWeather['humidity']}/>
                    </View>
                    {/*<Text>{this.state.currentWeather['temp']}</Text>*/}
                    {/*<Text>{this.state.currentWeather['wind_direction']}</Text>*/}
                    {/*<Text>{this.state.currentWeather['wind_strength']}</Text>*/}
                    {/*<Text>{this.state.currentWeather['humidity']}</Text>*/}
                    {/*<Text>{this.state.currentWeather['time']}</Text>*/}
                </View>
            </View>
        )
    }

    componentDidMount() {

    }

    componentWillUpdate() {
        console.log('componentWillUpdate' + this.state.todayWeather);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate' + this.state.futureWeather);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount' + this.state.futureWeather);
    }

    shouldComponentUpdate() {
        return true;
    }
}

const styles = StyleSheet.create({
    currentWeatherView: {
        // flex: 1,
        // height: 100,
        // justifyContent: 'flex-start',
        backgroundColor: '#FF0000',
        // alignItems: 'flex-start',
    },

    tempText: {
        fontSize:100,
    },

    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    navigationBar: {
        marginTop: 20,
        height:44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
});

class CurrentWeatherDetailView extends Component {

    render() {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image soure={require('./../../res/images/icon_1@2x.png')} style={{width: 30, height: 30}}></Image>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}
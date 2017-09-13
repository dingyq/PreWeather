/**
 * Created by yongqiang on 2017/5/22.
 */

import NetWork from './../common/network';
import NativeMyCustomView from './customview'

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    NativeModules,
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
        currentWeather: {},
        todayWeather: {},
        futureWeather: [],
        data: '',
        testNum: '3',
    }

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
        // NativeModules.TestPerson.squareMe(this.state.testNum, (num, num1) => {
        //    alert(num+num1)
        // })

        NetWork.getWeather({'cityname': '深圳'}, (data) => {
            console.log(data);
            if (data['error_code'] == 0) {
                var futureDataArr = this._handleFutureData(data['result']['future']);
                this.setState({
                    currentWeather: data['result']['sk'],
                    todayWeather: data['result']['today'],
                    futureWeather: futureDataArr,
                });
            }
        }, (err) => {
            alert(err);
        })
    }

    render() {
        return (
            <View style={styles.scene}>
                <View style={styles.currentWeatherView}>
                    <Text style={styles.temperatureText}>{this.state.currentWeather['temp']}º</Text>
                    <View style={{flexDirection:'row', alignItems:'stretch', justifyContent:'flex-start',}}>
                        <CurrentWeatherDetailItem source={require('./../../res/images/weather_wind.png')} title={this.state.currentWeather['wind_direction'] + ' ' +this.state.currentWeather['wind_strength']}/>
                        <CurrentWeatherDetailItem source={require('./../../res/images/weather_humidity.png')} title={'湿度 ' + this.state.currentWeather['humidity']}/>
                        {/*<Text style={{marginLeft:10}}>{this.state.currentWeather['time']}</Text>*/}
                    </View>
                </View>
                <View style={[styles.futureWeatherView]}>
                    <FlatList
                        style={{flex:1, marginTop:10}}
                        horizontal={true}
                        data={this.state.futureWeather}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderFutureWeatherItem}
                    />
                </View>

            </View>
        )
    }

    componentDidMount() {

    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate() {
        return true;
    }

    _handleFutureData = (dataObj) => {
        var arrayObj = new Array();
        for (var key in dataObj) {
            var weatherInfo = dataObj[key];
            weatherInfo['id'] = key;
            arrayObj.push(weatherInfo);
        }
        return arrayObj;
    }

    _keyExtractor = (item, index) => (item.id);

    _renderFutureWeatherItem = ({item}) => (
        <FutureWeatherDetailItem
            style={styles.futureItem}
            id={item.id}
            onPressItem={this._onPressFutureWeatherItem}
            // selected={!!this.state.selected.get(item.id)}
            week={item.week}
            date={item.date}
            weather={item.weather}
            temperature={item.temperature}
            wind={item.wind}
        />
    );

    _onPressFutureWeatherItem = (id: string) => {
        alert(id)
        console.log('_onPressFutureWeatherItem')
    }

}

const CurrentWeatherDetailItem = (props) => {
    return (
        <View style={[props.style, styles.currentItem]}>
            <Image style={{height: 16, width: 16}} source={props.source}/>
            <Text style={{marginLeft: 3}}>{props.title}</Text>
        </View>
    )
}

CurrentWeatherDetailItem.propTypes = {
    source: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
}

class FutureWeatherDetailItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    }

    render() {
        return (
            <View style={this.props.style} onPress={this._onPress}>
                <Text style={{marginTop:5}}>{this.props.week}</Text>
                <Text style={{marginTop:5}}>{this.props.date}</Text>
                <Text style={{marginTop:5}}>{this.props.weather}</Text>
                <Text style={{marginTop:5}}>{this.props.temperature}</Text>
                <Text style={{marginTop:5}}>{this.props.wind}</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    scene: {
        // padding: 10,
        // paddingTop: 74,
        marginTop: 64,
        flex: 1
    },

    currentWeatherView: {
        // backgroundColor: '#0000FF',
        // flexDirection:'row',
        // alignItems:'stretch',
        // justifyContent:'flex-start',
    },

    currentItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft:10,
        // backgroundColor: '#0000FF',
    },

    futureWeatherView: {
        // paddingTop: -60,
        // marginBottom: 140,
        // flex: 1,
        height: 180,
        // backgroundColor: '#FFFF00',
    },

    futureItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        // backgroundColor: '#00FF00',
    },

    temperatureText: {
        fontSize:90,
        marginLeft: 10,
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

    imageBase: {
        width: 33,
        height: 33,
    },
});
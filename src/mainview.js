/**
 * Created by yongqiang on 2017/6/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TabBarIOS,
    NavigatorIOS} from 'react-native';

import DDWeather from './weather/weather'
import DDFilmReview from './filmreview/filmreview'

var TestPerson = require('NativeModules').TestPerson;


export default class DDMainView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTabItem:'movie',
            notifCount: 0,
        }
    }

    render() {
        console.log(TestPerson.greeting)
        return (
                <TabBarIOS  tintColor="white" barTintColor="darkslateblue" translucent={true}>
                    <TabBarIOS.Item
                        title="天气"
                        icon={require('../res/images/tab_bar_weather_nor.png')}
                        selectedIcon={require('../res/images/tab_bar_weather_sel.png')}
                        // renderAsOriginal
                        onPress={() => {
                            this.setState({
                                selectedTabItem:'weather',
                            });
                        }}
                        selected={this.state.selectedTabItem == 'weather'}
                    >
                        <NavigatorIOS ref="nav" style={styles.navigationBar}
                                      initialRoute={{ title: '天气',
                                          component: DDWeather,
                                          // rightButtonTitle: 'MORE!',
                                          // onRightButtonPress: this.onRightButtonPress
                                      }} />
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="电影"
                        icon={require('../res/images/tab_bar_movie_nor.png')}
                        selectedIcon={require('../res/images/tab_bar_movie_sel.png')}
                        onPress={() => {
                            this.setState({
                                selectedTabItem:'movie',
                            });
                        }}
                        selected={this.state.selectedTabItem == 'movie'}
                    >
                        <NavigatorIOS ref="nav" style={styles.navigationBar}
                                      initialRoute={{ title: '电影TOP250',
                                          component: DDFilmReview,
                                          rightButtonTitle: 'MORE!',
                                          onRightButtonPress: this.onRightButtonPress
                                      }} />
                    </TabBarIOS.Item>
                </TabBarIOS>
        );
    }

    _renderContent(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                {MyObjcClass.greeting}
                {/*<DDWeather hidden={this.state.selectedTabIndex != 1}></DDWeather>*/}
            </View>
        );
    }

    onRightButtonPress = ()=> {
        console.log('onRightButtonPress');
        AlertIOS.alert(
            'Bar Button Action',
            'Recognized a tap on the bar button icon',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('Tapped OK'),
                },
            ]
        );
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    navigationBar: {
        flex: 1
        // marginTop: 20,
        // height:44,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

import NetWork from './src/common/network'
import DDWeather from './src/weather/weather'


export default class PreWeather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '天气',
            selectedTab: '天气',
            notifCount: 0,
            presses: 0,
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.navigationBar}>
                    <Text style={styles.welcome}>
                        {this.state.title}
                    </Text>
                </View>

                <TabBarIOS style={{flex:1,alignItems:"flex-end"}} tintColor="white" barTintColor="darkslateblue" translucent={true}>
                    <TabBarIOS.Item
                         title="自定义"
                         icon={require('./res/images/icon_1.png')}
                         selectedIcon={require('./res/images/icon_2.png')}
                         renderAsOriginal
                         selected={this.state.selectedTab === '天气'}
                         onPress={() => {
                             this.setState({
                                 selectedTab: '天气',
                                 title: '天气',
                             });
                        }}
                    >
                        {this._renderContent('#FFFFFF', '天气')}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="history"
                        selected={this.state.selectedTab === '历史'}
                        badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                        onPress={() => {
                            this.setState({
                                selectedTab: '历史',
                                title: '历史',
                                notifCount: this.state.notifCount + 1,
                            });
                        }}
                    >
                        {this._renderContent('#783E33', '历史记录', this.state.notifCount)}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTab === '下载'}
                        // badge={this.state.presses > 0 ? this.state.presses : undefined}
                        onPress={() => {
                            this.setState({
                                selectedTab: '下载',
                                title: '下载',
                                presses: this.state.presses + 1
                            });
                        }}>
                        {this._renderContent('#21551C', '下载页面', this.state.presses)}
                    </TabBarIOS.Item>

                </TabBarIOS>
            </View>

        );
    }

    _renderContent(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <DDWeather></DDWeather>
                {/*<Text style={styles.tabText}>{pageText}</Text>*/}
                {/*<Text style={styles.tabText}>第 {num} 次重复渲染{pageText}</Text>*/}
            </View>
        );
    }

    componentWillMount() {

    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        // alignItems: 'center',
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

AppRegistry.registerComponent('PreWeather', () => PreWeather);

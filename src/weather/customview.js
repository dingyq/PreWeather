/**
 * Created by yongqiang on 2017/9/11.
 */

import React, {Component} from 'react';

import {
    View,
    requireNativeComponent
} from 'react-native';

var NativeCustomView = requireNativeComponent('CustomView', null);

export default class MyCustomView extends Component {
    // static propTypes = {
    //     myCustomProperty: React.PropTypes.oneOf(['a', 'b']),
    // };
    render() {
        return (<NativeCustomView style={{flex:1}}></NativeCustomView>)
    }
}
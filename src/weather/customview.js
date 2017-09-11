/**
 * Created by yongqiang on 2017/9/11.
 */

import React, {
    Component,
    requireNativeComponent
} from 'react-native';

var NativeCustomView = requireNativeComponent('CustomView', CustomView);

export default class MyCustomView extends Component {
    static propTypes = {
        myCustomProperty: React.PropTypes.oneOf(['a', 'b']),
    };
    render() {
        return <NativeCustomView {...this.props} />;
    }
}
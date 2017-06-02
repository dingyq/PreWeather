/**
 * Created by yongqiang on 2017/5/22.
 */

// import Dimensions from 'Dimensions';

import React, {Component} from 'react';
import ServiceUrl from './serviceurl'
import Constants from  './constants'

class NetWork extends Component {
    // _baseUrl = ServiceUrl.book_search;

    getWeather(request, successCallback, failCallback) {
        this.extentRequest(request, {'key': Constants.WeatherAppKey})
        var responseText = '{"resultcode":"200","reason":"successed!","result":{"sk":{"temp":"29","wind_direction":"西南风","wind_strength":"6级","humidity":"89%","time":"17:22"},"today":{"temperature":"26℃~32℃","weather":"雷阵雨转中雨","weather_id":{"fa":"04","fb":"08"},"wind":"微风","week":"星期五","city":"深圳","date_y":"2017年06月02日","dressing_index":"热","dressing_advice":"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。","uv_index":"弱","comfort_index":"","wash_index":"不宜","travel_index":"较不宜","exercise_index":"较不宜","drying_index":""},"future":{"day_20170602":{"temperature":"26℃~32℃","weather":"雷阵雨转中雨","weather_id":{"fa":"04","fb":"08"},"wind":"微风","week":"星期五","date":"20170602"},"day_20170603":{"temperature":"25℃~29℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期六","date":"20170603"},"day_20170604":{"temperature":"24℃~29℃","weather":"大雨","weather_id":{"fa":"09","fb":"09"},"wind":"微风","week":"星期日","date":"20170604"},"day_20170605":{"temperature":"26℃~31℃","weather":"雷阵雨","weather_id":{"fa":"04","fb":"04"},"wind":"微风","week":"星期一","date":"20170605"},"day_20170606":{"temperature":"25℃~31℃","weather":"雷阵雨","weather_id":{"fa":"04","fb":"04"},"wind":"微风","week":"星期二","date":"20170606"},"day_20170607":{"temperature":"25℃~29℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期三","date":"20170607"},"day_20170608":{"temperature":"25℃~29℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期四","date":"20170608"}}},"error_code":0}';
        successCallback(JSON.parse(responseText));
        // this.get(ServiceUrl.weather_search, request, successCallback, failCallback)
    }

    getBook(request, successCallback, failCallback) {
        this.get(ServiceUrl.book_search, request, successCallback, failCallback)
    }

    get(baseUrl, request, successCallback, failCallback) {
        var url = this.convertToRequestUrl(baseUrl, request)
        // alert(url);
        console.log('geturl is '+url);
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                successCallback(JSON.parse(responseText));
            })
            .catch(function (err) {
                failCallback(err);
            })
    }

    convertToRequestUrl (baseUrl, request) {
        if (typeof request !== "object") {
            request = {};
        }
        var url = baseUrl;
        for (var key in request) {
            url += (key + '=' + encodeURIComponent(request[key]) + '&')
        }
        url = url.substring(0, url.length - 1);
        return url;
    }

    extentRequest(rawObj, copyObj) {
        if(!rawObj){
            rawObj={};
        }
        for (let key in copyObj) {
            rawObj[key] = copyObj[key];
        }
        return rawObj;
    }
}

const netWorkInstance = new NetWork();

export default netWorkInstance;



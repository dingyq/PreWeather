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
        var responseText = '{"resultcode":"200","reason":"查询成功","result":{"sk":{"temp":"24","wind_direction":"南风","wind_strength":"2级","humidity":"100%","time":"19:22"},"today":{"temperature":"25℃~29℃","weather":"大雨转中雨","weather_id":{"fa":"09","fb":"08"},"wind":"微风","week":"星期六","city":"深圳","date_y":"2017年06月17日","dressing_index":"热","dressing_advice":"天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。","uv_index":"弱","comfort_index":"","wash_index":"不宜","travel_index":"较不宜","exercise_index":"较不宜","drying_index":""},"future":{"day_20170617":{"temperature":"25℃~29℃","weather":"大雨转中雨","weather_id":{"fa":"09","fb":"08"},"wind":"微风","week":"星期六","date":"20170617"},"day_20170618":{"temperature":"25℃~29℃","weather":"大雨转暴雨","weather_id":{"fa":"09","fb":"10"},"wind":"微风","week":"星期日","date":"20170618"},"day_20170619":{"temperature":"26℃~30℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期一","date":"20170619"},"day_20170620":{"temperature":"27℃~30℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期二","date":"20170620"},"day_20170621":{"temperature":"27℃~30℃","weather":"暴雨转雷阵雨","weather_id":{"fa":"10","fb":"04"},"wind":"微风","week":"星期三","date":"20170621"},"day_20170622":{"temperature":"26℃~30℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期四","date":"20170622"},"day_20170623":{"temperature":"27℃~30℃","weather":"暴雨","weather_id":{"fa":"10","fb":"10"},"wind":"微风","week":"星期五","date":"20170623"}}},"error_code":0}';
        successCallback(JSON.parse(responseText));
        // this.get(ServiceUrl.weather_search, request, successCallback, failCallback)
    }

    getBook(request, successCallback, failCallback) {
        this.get(ServiceUrl.book_search, request, successCallback, failCallback)
    }

    getMovieDetail(request, successCallback, failCallback) {
        var url = ServiceUrl.movie_detail + request;
        this.get(url, request, successCallback, failCallback);
    }

    getMovieTop250(request, successCallback, failCallback) {
        // var responseText = '{"count": 10, "start": 0, "total": 250, "subjects": [{"rating": {"max": 10, "average": 9.6, "stars": "50", "min": 0}, "genres": ["\u72af\u7f6a", "\u5267\u60c5"], "title": "\u8096\u7533\u514b\u7684\u6551\u8d4e", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1054521\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/17525.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/17525.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/17525.jpg"}, "name": "\u8482\u59c6\u00b7\u7f57\u5bbe\u65af", "id": "1054521"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1054534\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/34642.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/34642.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/34642.jpg"}, "name": "\u6469\u6839\u00b7\u5f17\u91cc\u66fc", "id": "1054534"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1041179\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/5837.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/5837.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/5837.jpg"}, "name": "\u9c8d\u52c3\u00b7\u5188\u987f", "id": "1041179"}], "collect_count": 1074775, "original_title": "The Shawshank Redemption", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1047973\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/230.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/230.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/230.jpg"}, "name": "\u5f17\u5170\u514b\u00b7\u5fb7\u62c9\u90a6\u7279", "id": "1047973"}], "year": "1994", "images": {"small": "https://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p480747492.jpg", "large": "https://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p480747492.jpg", "medium": "https://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p480747492.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1292052\/", "id": "1292052"}, {"rating": {"max": 10, "average": 9.4, "stars": "50", "min": 0}, "genres": ["\u5267\u60c5", "\u52a8\u4f5c", "\u72af\u7f6a"], "title": "\u8fd9\u4e2a\u6740\u624b\u4e0d\u592a\u51b7", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1025182\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/8833.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/8833.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/8833.jpg"}, "name": "\u8ba9\u00b7\u96f7\u8bfa", "id": "1025182"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1054454\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/2274.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/2274.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/2274.jpg"}, "name": "\u5a1c\u5854\u8389\u00b7\u6ce2\u7279\u66fc", "id": "1054454"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1010507\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/104.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/104.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/104.jpg"}, "name": "\u52a0\u91cc\u00b7\u5965\u5fb7\u66fc", "id": "1010507"}], "collect_count": 1039003, "original_title": "L\u00e9on", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1031876\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/33301.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/33301.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/33301.jpg"}, "name": "\u5415\u514b\u00b7\u8d1d\u677e", "id": "1031876"}], "year": "1994", "images": {"small": "https://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p511118051.jpg", "large": "https://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p511118051.jpg", "medium": "https://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p511118051.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1295644\/", "id": "1295644"}, {"rating": {"max": 10, "average": 9.5, "stars": "50", "min": 0}, "genres": ["\u5267\u60c5", "\u7231\u60c5", "\u540c\u6027"], "title": "\u9738\u738b\u522b\u59ec", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1003494\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/67.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/67.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/67.jpg"}, "name": "\u5f20\u56fd\u8363", "id": "1003494"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1050265\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/1170.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/1170.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/1170.jpg"}, "name": "\u5f20\u4e30\u6bc5", "id": "1050265"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1035641\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/1399268395.47.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/1399268395.47.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/1399268395.47.jpg"}, "name": "\u5de9\u4fd0", "id": "1035641"}], "collect_count": 763247, "original_title": "\u9738\u738b\u522b\u59ec", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1023040\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/750.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/750.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/750.jpg"}, "name": "\u9648\u51ef\u6b4c", "id": "1023040"}], "year": "1993", "images": {"small": "https://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p1910813120.jpg", "large": "https://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p1910813120.jpg", "medium": "https://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p1910813120.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1291546\/", "id": "1291546"}, {"rating": {"max": 10, "average": 9.4, "stars": "50", "min": 0}, "genres": ["\u5267\u60c5", "\u7231\u60c5"], "title": "\u963f\u7518\u6b63\u4f20", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1054450\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/551.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/551.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/551.jpg"}, "name": "\u6c64\u59c6\u00b7\u6c49\u514b\u65af", "id": "1054450"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1002676\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/51737.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/51737.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/51737.jpg"}, "name": "\u7f57\u5bbe\u00b7\u6000\u7279", "id": "1002676"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1031848\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/1345.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/1345.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/1345.jpg"}, "name": "\u52a0\u91cc\u00b7\u897f\u5c3c\u65af", "id": "1031848"}], "collect_count": 923407, "original_title": "Forrest Gump", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1053564\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/505.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/505.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/505.jpg"}, "name": "\u7f57\u4f2f\u7279\u00b7\u6cfd\u7c73\u5409\u65af", "id": "1053564"}], "year": "1994", "images": {"small": "https://img1.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p510876377.jpg", "large": "https://img1.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p510876377.jpg", "medium": "https://img1.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p510876377.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1292720\/", "id": "1292720"}, {"rating": {"max": 10, "average": 9.5, "stars": "50", "min": 0}, "genres": ["\u5267\u60c5", "\u559c\u5267", "\u7231\u60c5"], "title": "\u7f8e\u4e3d\u4eba\u751f", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1041004\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/26764.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/26764.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/26764.jpg"}, "name": "\u7f57\u4f2f\u6258\u00b7\u8d1d\u5c3c\u5c3c", "id": "1041004"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1000375\/", "avatars": {"small": "https://img1.doubanio.com\/img\/celebrity\/small\/9548.jpg", "large": "https://img1.doubanio.com\/img\/celebrity\/large\/9548.jpg", "medium": "https://img1.doubanio.com\/img\/celebrity\/medium\/9548.jpg"}, "name": "\u5c3c\u53ef\u83b1\u5854\u00b7\u5e03\u62c9\u65af\u57fa", "id": "1000375"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1000368\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/45590.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/45590.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/45590.jpg"}, "name": "\u4e54\u6cbb\u00b7\u574e\u5854\u91cc\u5c3c", "id": "1000368"}], "collect_count": 511946, "original_title": "La vita \u00e8 bella", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1041004\/", "avatars": {"small": "https://img3.doubanio.com\/img\/celebrity\/small\/26764.jpg", "large": "https://img3.doubanio.com\/img\/celebrity\/large\/26764.jpg", "medium": "https://img3.doubanio.com\/img\/celebrity\/medium\/26764.jpg"}, "name": "\u7f57\u4f2f\u6258\u00b7\u8d1d\u5c3c\u5c3c", "id": "1041004"}], "year": "1997", "images": {"small": "https://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p510861873.jpg", "large": "https://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p510861873.jpg", "medium": "https://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p510861873.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1292063\/", "id": "1292063"}], "title": "\u8c46\u74e3\u7535\u5f71Top250"}';
        // var obj = JSON.parse(responseText);
        // obj.start = request.start;
        // var max = 100000000;
        // var min = 100;
        // for (var key in obj['subjects']) {
            // obj['subjects'][key]['id'] = parseInt(Math.random()*(max-min+1)+min,10);
        // }
        // successCallback(obj);

        this.get(ServiceUrl.movie_top250, request, successCallback, failCallback)
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
        var requestIsNotNil = false;
        var url = baseUrl;
        for (var key in request) {
            url += (key + '=' + encodeURIComponent(request[key]) + '&');
            requestIsNotNil = true;
        }
        if (requestIsNotNil ) {
            url = url.substring(0, url.length - 1);
        }
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



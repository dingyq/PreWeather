//
//  TestPerson.m
//  PreWeather
//
//  Created by yongqiang on 2017/7/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestPerson.h"
#import <React/RCTEventDispatcher.h>
#import <React/RCTConvert.h>

@implementation TestPerson

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return nil;
}

- (NSDictionary *)constantsToExport {
  // 返回一个常量字符串
  return @{@"greeting": @"Welcome to PreWeather Demo!"};
}

RCT_EXPORT_METHOD(squareMe:(NSString *)number callback:(RCTResponseSenderBlock)callback) {
  // 平方函数，返回一个整型的平方数
  int num = [number intValue];
  callback(@[[NSNumber numberWithInt:(num*num)], number, [NSNull null]]);
}

- (NSInteger)squareMe:(NSString *)number {
  int num = [number intValue];
  return num*num;
}

@end

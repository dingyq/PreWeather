//
//  CustomViewManager.m
//  PreWeather
//
//  Created by yongqiang on 2017/9/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CustomViewManager.h"



@implementation CustomView

- (void)drawRect:(CGRect)rect {
  [[UIColor redColor] set];
  UIRectFill(rect);
}

@end


@implementation CustomViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[CustomView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(myCustomProperty, NSString);

@end

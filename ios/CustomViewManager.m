//
//  CustomViewManager.m
//  PreWeather
//
//  Created by yongqiang on 2017/9/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CustomViewManager.h"



@implementation CustomView

- (instancetype)init {
  if (self = [super initWithFrame:CGRectZero]) {
    UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectZero];
    imageView.image = [UIImage imageNamed:@"test_image"];
    [self addSubview:imageView];
    
    imageView.translatesAutoresizingMaskIntoConstraints = NO;
    NSDictionary *viewDic = @{@"view": imageView};
    NSArray *arr = [NSLayoutConstraint constraintsWithVisualFormat:@"H:|-(64)-[view(247)]" options:0 metrics:nil views:viewDic];
    [self addConstraints:arr];
    
    arr = [NSLayoutConstraint constraintsWithVisualFormat:@"V:|-(150)-[view(317)]" options:0 metrics:nil views:viewDic];
    [self addConstraints:arr];
  }
  return self;
}

@end


@implementation CustomViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  return [[CustomView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(myCustomProperty, NSString);

@end

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MyTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation, insets } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            activeOpacity={0.8}
            style={{
              flex: 1,
              bottom: insets.bottom,
              height: insets.top,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopWidth: 1,
              borderColor: 'lightgray',
            }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

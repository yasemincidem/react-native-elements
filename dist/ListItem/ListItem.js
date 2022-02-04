import React from 'react';
import { Platform, StyleSheet, Pressable, View, } from 'react-native';
import { PadView } from './components/PadView';
import { defaultTheme } from '../helpers';
/** ListItems are used to display rows of information, such as a contact list, playlist, or menu.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
export const ListItemBase = (props) => {
    const { containerStyle, onPress, onLongPress, Component = onPress || onLongPress ? Pressable : View, disabled, disabledStyle, bottomDivider, topDivider, pad = 16, linearGradientProps, ViewComponent = View, theme = defaultTheme, children, ...rest } = props;
    if (props.linearGradientProps && !props.ViewComponent) {
        console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
    return (<Component {...rest} onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <PadView Component={ViewComponent} {...linearGradientProps} style={StyleSheet.flatten([
            {
                ...Platform.select({
                    ios: {
                        padding: 14,
                    },
                    default: {
                        padding: 16,
                    },
                }),
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: theme?.colors?.white,
                borderColor: theme?.colors?.divider,
            },
            topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
            bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
            containerStyle,
            disabled && disabledStyle,
        ])} pad={pad}>
        {children}
      </PadView>
    </Component>);
};
ListItemBase.displayName = 'ListItem';

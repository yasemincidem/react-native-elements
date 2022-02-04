/// <reference types="react" />
import { CardBaseProps } from '@react-native-elements/base/dist/Card/Card';
export declare type CardProps = CardBaseProps;
declare const ThemedCard: (import("react").FunctionComponent<CardBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<CardBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Divider: import("react").FunctionComponent<import("@react-native-elements/base/dist/Divider").DividerProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Divider").DividerProps>;
    Image: import("react").FunctionComponent<import("@react-native-elements/base/dist/Image").ImageProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Image").ImageProps>;
    Title: import("react").FunctionComponent<import("@react-native-elements/base/dist/Text").TextProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Text").TextProps>;
    FeaturedTitle: import("react").FunctionComponent<import("@react-native-elements/base/dist/Text").TextProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Text").TextProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }>;
    FeaturedSubtitle: import("react").FunctionComponent<import("@react-native-elements/base/dist/Text").TextProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Text").TextProps & {
        theme?: {
            colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
        };
    }>;
};
export default ThemedCard;

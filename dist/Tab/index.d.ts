/// <reference types="react" />
import { TabBaseProps } from '@react-native-elements/base/dist/Tab/Tab';
import { TabItemProps } from '@react-native-elements/base/dist/Tab/Tab.Item';
export declare type TabProps = TabBaseProps;
export type { TabBaseProps, TabItemProps };
export declare const ThemedTab: (import("react").FunctionComponent<import("react-native").ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    variant?: "primary" | "default";
} & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    value?: number;
    onChange?: (value: number) => void;
    disableIndicator?: boolean;
    indicatorStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    variant?: "primary" | "default";
} & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Item: import("react").FunctionComponent<TabItemProps> | import("react").ForwardRefExoticComponent<TabItemProps>;
};
export default ThemedTab;

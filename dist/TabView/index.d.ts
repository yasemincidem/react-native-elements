/// <reference types="react" />
import { TabViewBaseProps } from '@react-native-elements/base/dist/TabView/TabView';
import { TabViewItemProps } from '@react-native-elements/base/dist/TabView/TabView.Item';
export declare type TabViewProps = TabViewBaseProps;
export type { TabViewBaseProps, TabViewItemProps };
declare const _default: (import("react").FunctionComponent<TabViewBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}> | import("react").ForwardRefExoticComponent<TabViewBaseProps & {
    theme?: {
        colors: import("@react-native-elements/base/dist/helpers/colors").Colors;
    };
}>) & {
    Item: import("react").FunctionComponent<import("react-native").ViewProps> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps>;
};
export default _default;

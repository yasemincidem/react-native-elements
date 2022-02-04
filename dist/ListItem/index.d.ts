/// <reference types="react" />
import { ListItemBaseProps } from '@react-native-elements/base/dist/ListItem/ListItem';
import { ListItemContentProps } from '@react-native-elements/base/dist/ListItem/ListItem.Content';
import { ListItemTitleProps } from '@react-native-elements/base/dist/ListItem/ListItem.Title';
import { ListItemSubtitleProps } from '@react-native-elements/base/dist/ListItem/ListItem.Subtitle';
import { ListItemSwipeableProps } from '@react-native-elements/base/dist/ListItem/ListItem.Swipeable';
import { ListItemAccordionProps } from '@react-native-elements/base/dist/ListItem/ListItem.Accordion';
export type { ListItemAccordionProps, ListItemSwipeableProps, ListItemBaseProps as ListItemProps, };
declare const _default: (import("react").FunctionComponent<ListItemBaseProps> | import("react").ForwardRefExoticComponent<ListItemBaseProps>) & {
    Accordion: import("react").FunctionComponent<ListItemAccordionProps> | import("react").ForwardRefExoticComponent<ListItemAccordionProps>;
    Chevron: import("react").FunctionComponent<Partial<import("@react-native-elements/base/dist/Icon").IconProps>> | import("react").ForwardRefExoticComponent<Partial<import("@react-native-elements/base/dist/Icon").IconProps>>;
    Content: import("react").FunctionComponent<ListItemContentProps> | import("react").ForwardRefExoticComponent<ListItemContentProps>;
    Input: import("react").FunctionComponent<import("@react-native-elements/base/dist/Input").InputProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Input").InputProps>;
    Title: import("react").FunctionComponent<ListItemTitleProps> | import("react").ForwardRefExoticComponent<ListItemTitleProps>;
    Subtitle: import("react").FunctionComponent<ListItemSubtitleProps> | import("react").ForwardRefExoticComponent<ListItemSubtitleProps>;
    Swipeable: import("react").FunctionComponent<ListItemSwipeableProps> | import("react").ForwardRefExoticComponent<ListItemSwipeableProps>;
    CheckBox: import("react").FunctionComponent<import("@react-native-elements/base/dist/CheckBox").CheckBoxProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/CheckBox").CheckBoxProps>;
    ButtonGroup: import("react").FunctionComponent<import("@react-native-elements/base/dist/ButtonGroup").ButtonGroupProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/ButtonGroup").ButtonGroupProps>;
};
export default _default;

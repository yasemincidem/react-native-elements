/// <reference types="react" />
import { ListItemSwipeableProps } from './ListItem.Swipeable';
import { ListItemAccordionProps } from './ListItem.Accordion';
export declare type ListItemProps = typeof ListItem;
export declare const ListItem: import("../helpers").RneFunctionComponent<import("./ListItem").ListItemBaseProps> & {
    Accordion: import("../helpers").RneFunctionComponent<ListItemAccordionProps>;
    Chevron: import("../helpers").RneFunctionComponent<Partial<import("..").IconProps>>;
    Content: import("../helpers").RneFunctionComponent<import("./ListItem.Content").ListItemContentProps>;
    Input: import("react").ForwardRefExoticComponent<Pick<import("react-native").TextInputProps & import("react").RefAttributes<import("react-native").TextInput> & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftIcon?: import("../Icon").IconNode;
        leftIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightIcon?: import("../Icon").IconNode;
        rightIconContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        inputStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        InputComponent?: import("react").ComponentType<{}> | import("react").ForwardRefExoticComponent<any>;
        errorProps?: object;
        errorStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        errorMessage?: string;
        label?: import("react").ReactNode;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & {
        theme?: import("../helpers").Theme;
    }, "containerStyle" | "disabled" | "theme" | "label" | "key" | keyof import("react-native").TextInputProps | "disabledInputStyle" | "inputContainerStyle" | "leftIcon" | "leftIconContainerStyle" | "rightIcon" | "rightIconContainerStyle" | "inputStyle" | "InputComponent" | "errorProps" | "errorStyle" | "errorMessage" | "labelStyle" | "labelProps" | "renderErrorMessage"> & import("react").RefAttributes<import("react-native").TextInput>>;
    Title: import("../helpers").RneFunctionComponent<import("./ListItem.Title").ListItemTitleProps>;
    Subtitle: import("../helpers").RneFunctionComponent<import("./ListItem.Subtitle").ListItemSubtitleProps>;
    Swipeable: import("../helpers").RneFunctionComponent<ListItemSwipeableProps>;
    CheckBox: import("../helpers").RneFunctionComponent<import("..").CheckBoxProps>;
    ButtonGroup: import("../helpers").RneFunctionComponent<import("..").ButtonGroupProps>;
};
export type { ListItemAccordionProps, ListItemSwipeableProps };

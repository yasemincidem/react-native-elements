/// <reference types="react" />
import { DialogLoadingProps } from '@react-native-elements/base/dist/Dialog/Dialog.Loading';
import { DialogTitleProps } from '@react-native-elements/base/dist/Dialog/Dialog.Title';
import { DialogActionsProps } from '@react-native-elements/base/dist/Dialog/Dialog.Actions';
import { DialogBaseProps } from '@react-native-elements/base/dist/Dialog/Dialog';
export type { DialogBaseProps as DialogProps, DialogLoadingProps, DialogTitleProps, DialogActionsProps, };
declare const _default: (import("react").FunctionComponent<DialogBaseProps> | import("react").ForwardRefExoticComponent<DialogBaseProps>) & {
    Loading: import("react").FunctionComponent<DialogLoadingProps> | import("react").ForwardRefExoticComponent<DialogLoadingProps>;
    Title: import("react").FunctionComponent<DialogTitleProps> | import("react").ForwardRefExoticComponent<DialogTitleProps>;
    Actions: import("react").FunctionComponent<DialogActionsProps> | import("react").ForwardRefExoticComponent<DialogActionsProps>;
    Button: import("react").FunctionComponent<import("@react-native-elements/base/dist/Button").ButtonProps> | import("react").ForwardRefExoticComponent<import("@react-native-elements/base/dist/Button").ButtonProps>;
};
export default _default;

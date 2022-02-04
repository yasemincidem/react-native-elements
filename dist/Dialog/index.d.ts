import { DialogLoadingProps } from './Dialog.Loading';
import { DialogTitleProps } from './Dialog.Title';
import { DialogButtonProps } from './Dialog.Button';
import { DialogActionsProps } from './Dialog.Actions';
import { DialogBaseProps } from './Dialog';
export declare const Dialog: import("../helpers").RneFunctionComponent<DialogBaseProps> & {
    Loading: import("../helpers").RneFunctionComponent<DialogLoadingProps>;
    Title: import("../helpers").RneFunctionComponent<DialogTitleProps>;
    Actions: import("../helpers").RneFunctionComponent<DialogActionsProps>;
    Button: import("../helpers").RneFunctionComponent<import("..").ButtonProps>;
};
export type { DialogBaseProps as DialogProps, DialogLoadingProps, DialogButtonProps, DialogTitleProps, DialogActionsProps, };

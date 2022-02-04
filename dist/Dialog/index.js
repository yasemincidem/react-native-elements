import { withTheme } from '../config';
import { DialogLoading, } from '@react-native-elements/base/dist/Dialog/Dialog.Loading';
import { DialogTitle, } from '@react-native-elements/base/dist/Dialog/Dialog.Title';
import { DialogButton, } from '@react-native-elements/base/dist/Dialog/Dialog.Button';
import { DialogActions, } from '@react-native-elements/base/dist/Dialog/Dialog.Actions';
import { DialogBase, } from '@react-native-elements/base/dist/Dialog/Dialog';
const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');
export default Object.assign(withTheme(DialogBase, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});

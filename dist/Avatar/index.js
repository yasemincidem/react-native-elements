import { Avatar, } from '@react-native-elements/base/dist/Avatar/Avatar';
import { Accessory, } from '@react-native-elements/base/dist/Avatar/Avatar.Accessory';
import { withTheme } from '../config';
export default Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: withTheme(Accessory, 'Accessory'),
});

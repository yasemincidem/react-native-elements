import { withTheme } from '../config';
import { SpeedDial, } from '@react-native-elements/base/dist/SpeedDial/SpeedDial';
import { SpeedDialAction, } from '@react-native-elements/base/dist/SpeedDial/SpeedDial.Action';
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});
